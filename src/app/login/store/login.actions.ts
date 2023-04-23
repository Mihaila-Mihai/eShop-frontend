import {createAction, props} from "@ngrx/store";
import {LoginInfo} from "../service/login.service";

export const signIn = createAction('[Login] Sign In', props<{ loginInfo: LoginInfo }>());
export const signInSuccess = createAction('[Login] Sign In Success');
export const signInError = createAction('[Login] Sign In Error');

export const logOut = createAction('[App] Log Out');
export const logOutSuccess = createAction('[App] Log Out Success');
