import {Injectable} from "@angular/core";
import {DriversService} from "./drivers.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, of, switchMap} from "rxjs";
import * as DriversActions from "./drivers.actions";
import {IDriver} from "./interfaces/drivers";

@Injectable()
export class DriversEffects{
  constructor(
    private actions$: Actions,
    private driversService: DriversService,
  ){}

  loadDriversList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DriversActions.loadDriversList),
      switchMap(() =>
        this.driversService.loadDriversList().pipe(
          map((res: IDriver[]) => DriversActions.loadDriversListSuccess({ payload: res })),
          catchError((err) => of(DriversActions.loadDriversListError({ error: err })))
        )
      )
    )
  );

  loadSingleDriver$ = createEffect(()=>
    this.actions$.pipe(
      ofType(DriversActions.loadSingleDriver),
      switchMap((action)=>
        this.driversService.loadSingleDriver(action.id).pipe(
          map((res: IDriver) => DriversActions.loadSingleDriverSuccess({ payload: res })),
          catchError((err) => of(DriversActions.loadSingleDriverError({ error: err })))
        )
      )
    )
  )

  deleteDriver$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DriversActions.deleteDriver),
      switchMap((action) =>
        this.driversService.deleteDriver(action.id).pipe(
          map(()=> DriversActions.deleteDriverSuccess()),
          catchError((err) => of(DriversActions.deleteDriverError({ error: err })))
        )
      )
    )
  )

  deleteDriverSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DriversActions.deleteDriverSuccess),
      map(() => DriversActions.loadDriversList())
    )
  )

  updateDriver$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DriversActions.updateDriver),
      switchMap((action) =>
        this.driversService.updateDriver(action.id, action.driver).pipe(
          map(() => DriversActions.updateDriverSuccess()),
          catchError((err) => of(DriversActions.updateDriverError({ error: err })))
        )
      )
    )
  )
}
