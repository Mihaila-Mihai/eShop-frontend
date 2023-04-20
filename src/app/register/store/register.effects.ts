import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {RegisterService} from "../service/register.service";
import * as RegisterActions from "./register.actions";
import {catchError, map, of, switchMap, tap} from "rxjs";
import {Router} from "@angular/router";

@Injectable()
export class RegisterEffects {
  constructor(private actions$: Actions, private registerService: RegisterService, private router: Router) {
  }

  public register$ = createEffect(() => this.actions$.pipe(
    ofType(RegisterActions.register),
    switchMap((action) => {
      return this.registerService.register(action.customer).pipe(map(() => {
        return RegisterActions.registerSuccess()
      }), catchError(() => of(RegisterActions.registerError())))
    })
  ));

  public registerSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(RegisterActions.registerSuccess),
    tap(() => {
        this.router.navigate(['login']);
    })
  ), {dispatch: false})
}
