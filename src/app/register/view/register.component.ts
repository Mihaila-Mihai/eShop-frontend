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
import {MatIconModule} from "@angular/material/icon";

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
        CommonModule,
        MatIconModule
    ],
  standalone: true
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]]
  });

  public hide = true;
  public hideConfirm = true;
  get username() {
    return this.registerForm.get("username");
  };

  get password() {
    return this.registerForm.get("password");
  }
  get email() {
    return this.registerForm.get("email");
  }

  get confirmPassword() {
    return this.registerForm.get("confirmPassword");
  }

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const customer: Customer = {
      email: this.email?.value,
      username: this.username?.value,
      password: this.password?.value
    }

    if (this.password?.value === this.confirmPassword?.value) {
      this.store.dispatch(RegisterActions.register({customer: customer}));
    }
  }
}
