import {Injectable} from "@angular/core";
import {DriversService} from "./drivers.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, of, switchMap} from "rxjs";
import {IDriversResponse} from "./interfaces/drivers";
import * as DriversActions from "./drivers.actions";

@Injectable()
export class DriversEffects{
  constructor(
    private actions$: Actions,
    private driversService: DriversService,
  ){}

  loadVehiclesList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DriversActions.loadDriversList),
      switchMap(() =>
        this.driversService.loadDriversList().pipe(
          map((res: IDriversResponse) => DriversActions.loadDriversListSuccess({ payload: res })),
          catchError((err) => of(DriversActions.loadDriversListError({ error: err })))
        )
      )
    ));
}
