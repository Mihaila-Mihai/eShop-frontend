import {createAction, props} from "@ngrx/store";
import {CustomerInfo} from "../../login/service/login.service";


export const getUser = createAction('[App] Get User');
export const getUserSuccess = createAction('[App] Get User Success', props<{ userInfo: CustomerInfo }>())
export const getUserError = createAction('[App] Get User Error');
