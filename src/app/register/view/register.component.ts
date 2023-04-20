import {Component, OnInit} from '@angular/core';
import {Customer, RegisterService} from "../service/register.service";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {MatInputModule} from "@angular/material/input";
import {CommonModule} from "@angular/common";
import {AppState} from "../../store/AppState";
import {Store} from "@ngrx/store";
import * as RegisterActions from "../../register/store/register.actions";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    RouterLink,
    MatInputModule,
    CommonModule
  ],
  standalone: true
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]],
    firstName: ['', [Validators.required]],
    lastName: ['']
  });
  get firstName() {
    return this.registerForm.get("firstName");
  };

  get password() {
    return this.registerForm.get("password");
  }
  get email() {
    return this.registerForm.get("email");
  }

  get lastName() {
    return this.registerForm.get("lastName");
  }

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const customer: Customer = {
      email: this.email?.value,
      firstName: this.firstName?.value,
      password: this.password?.value,
      lastName: this.lastName?.value
    }
    this.store.dispatch(RegisterActions.register({customer: customer}));
  }
}
