import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { VehiclesService } from './vehicles.service';
import {catchError, map, of, switchMap} from 'rxjs';
import * as VehiclesActions from './vehicles.actions';
import {IVehicle} from "./interfaces/vehicles.interface";

@Injectable()
export class VehiclesEffects {
  constructor(
    private actions$: Actions,
    private vehiclesService: VehiclesService,
  ) {}

  loadVehiclesList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VehiclesActions.loadVehiclesList),
      switchMap(() =>
        this.vehiclesService.loadVehiclesList().pipe(
          map((res: IVehicle[]) => VehiclesActions.loadVehiclesListSuccess({ payload: res })),
          catchError((err) => of(VehiclesActions.loadVehiclesListError({ error: err })))
        )
      )
    )
  );

  loadSingleVehicle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VehiclesActions.loadSingleVehicle),
      switchMap((action)=>
        this.vehiclesService.loadSingleVehicle(action.id).pipe(
          map((res: IVehicle) => VehiclesActions.loadSingleVehicleSuccess({ payload: res })),
          catchError((err) => of(VehiclesActions.loadSingleVehicleError({ error: err })))
        )
      )
    )
  )

  deleteVehicle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VehiclesActions.deleteVehicle),
      switchMap((action)=>
        this.vehiclesService.deleteVehicle(action.id).pipe(
          map(() => VehiclesActions.deleteVehicleSuccess()),
          catchError((err) => of(VehiclesActions.deleteVehicleError({ error: err })))
        )
      )
    )
  )

  deleteVehicleSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VehiclesActions.deleteVehicleSuccess),
      map(() => VehiclesActions.loadVehiclesList())
    )
  );
}
