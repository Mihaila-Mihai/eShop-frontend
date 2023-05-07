import {Component, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {LoginInfo, LoginService} from "../service/login.service";
import {AppState} from "../../store/AppState";
import {Store} from "@ngrx/store";
import * as LoginActions from "../store/login.actions";
import {NavBarComponent} from "../../top-bar/view/nav-bar.component";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, RouterLink, NavBarComponent, NgOptimizedImage, MatIconModule]
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', Validators.required]

  });
  public hide = true;

  get password() {
    return this.loginForm.get("password");
  }
  get email() {
    return this.loginForm.get("email");
  }

  constructor(private fb: FormBuilder, private store: Store<AppState>) {

  }

  public ngOnInit() {
  }

  public onSubmit() {
    const loginInfo: LoginInfo = {
      email: this.email?.value,
      password: this.password?.value
    }
    this.store.dispatch(LoginActions.signIn({loginInfo: loginInfo}));
  }
}
