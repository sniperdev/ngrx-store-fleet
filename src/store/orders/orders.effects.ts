import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { OrdersService } from './orders.service';
import { catchError, map, of, switchMap } from 'rxjs';
import * as OrdersActions from './orders.actions';
import { IOrder } from './interfaces/orders.interface';

@Injectable()
export class OrdersEffects {
  constructor(
    private actions$: Actions,
    private ordersService: OrdersService,
  ) {}

  loadOrdersList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrdersActions.loadOrdersList),
      switchMap(() =>
        this.ordersService.loadOrdersList().pipe(
          map((res: IOrder[]) => OrdersActions.loadOrdersListSuccess({ payload: res })),
          catchError((err) => of(OrdersActions.loadOrdersListError({ error: err })))
        )
      )
    )
  );

  loadSingleOrder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrdersActions.loadSingleOrder),
      switchMap((action) =>
        this.ordersService.loadSingleOrder(action.id).pipe(
          map((res: IOrder) => OrdersActions.loadSingleOrderSuccess({ payload: res })),
          catchError((err) => of(OrdersActions.loadSingleOrderError({ error: err })))
        )
      )
    )
  )
}
