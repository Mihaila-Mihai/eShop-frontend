import {createAction, props} from "@ngrx/store";
import {Customer} from "../service/register.service";

export const register = createAction('[Register] Register', props<{ customer: Customer }>());
export const registerSuccess = createAction('[Register] Register Success');
export const registerError = createAction('[Register] Register Error');
