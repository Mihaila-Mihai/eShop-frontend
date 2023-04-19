import {createReducer} from "@ngrx/store";
export enum xhrStatus {
  initial= 'initial',
  success = 'success',
  error = 'error',
  loading = 'loading'
}
export interface UserState {
  status: xhrStatus,
  username?: string;
  customerId?: number;
  firstName?: string;
  lastName?: string;
}

export const initialState: UserState = {
  status: xhrStatus.initial,
};

