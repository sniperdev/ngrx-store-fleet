import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { OrdersService } from './orders.service';
import { catchError, map, of, switchMap } from 'rxjs';
import * as OrdersActions from './orders.actions';
import { IOrders } from './interfaces/orders.interface';

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
          map((res: IOrders[]) => OrdersActions.loadOrdersListSuccess({ payload: res })),
          catchError((err) => of(OrdersActions.loadOrdersListError({ error: err })))
        )
      )
    ));
}
