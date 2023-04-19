import {createReducer, on} from "@ngrx/store";
import {initialState, xhrStatus} from "./app-store.state";
import * as AppStoreActions from "./app-store.actions";

export const userReducer = createReducer(
  initialState,
  on(AppStoreActions.getUser, (state) => ({
    ...state,
    status: xhrStatus.loading
  })),
  on(AppStoreActions.getUserSuccess, (state, {userInfo}) => ({
    ...state,
    status: xhrStatus.success,
    username: userInfo.username,
    customerId: userInfo.customerId,
    firstName: userInfo.firstName,
    lastName: userInfo.lastName
  })),
  on(AppStoreActions.getUserError, (state) => ({
    ...state,
    status: xhrStatus.error
  }))
)
