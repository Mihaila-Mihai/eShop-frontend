import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {LoginService} from "../service/login.service";
import * as LoginActions from "./login.actions";
import {catchError, map, mergeMap, of, switchMap, tap} from "rxjs";
import {Router} from "@angular/router";
import * as AppStateActions from "../../store/store-files/app-store.actions";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable()
export class LoginEffects {
  constructor(private actions$: Actions, private loginService: LoginService, private router: Router, private snackBar: MatSnackBar) {
  }

  public signIn$ = createEffect(() => this.actions$.pipe(
    ofType(LoginActions.signIn),
    switchMap((action) => {
      return this.loginService.login(action.loginInfo).pipe(mergeMap(() => {
        return [LoginActions.signInSuccess(), AppStateActions.getUser()];
      }), catchError(() => of(LoginActions.signInError())))
    })
  ))

  public signInSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(LoginActions.signInSuccess),
    tap((action) => {
      this.router.navigate(['products']);
    })
  ), {dispatch: false});


  public signInError$ = createEffect(() => this.actions$.pipe(
    ofType(LoginActions.signInError),
    tap(() => {
      this.snackBar.open("A avut loc o eroare", "x", {
        horizontalPosition: "center",
        verticalPosition: "top"
      })
    })
  ), {dispatch: false})

  public logOut$ = createEffect(() => this.actions$.pipe(
    ofType(LoginActions.logOut),
    switchMap(() => {
      return this.loginService.logOut().pipe(map(() => {
        return LoginActions.logOutSuccess();
      }), catchError(() => of(LoginActions.logOutSuccess())))
    })
  ))

  public logOutSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(LoginActions.logOutSuccess),
    tap(() => {
      window.location.reload();
    })
  ), {dispatch: false})
}
