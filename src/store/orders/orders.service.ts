import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {IOrders} from "./interfaces/orders.interface";

@Injectable({
  providedIn: 'root'
})

export class OrdersService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient){}

  public loadOrdersList(): Observable<IOrders[]>{
    const url = `${this.apiUrl}/orders`;

    return this.http.get(url).pipe(
      map((res: any)=>res.items as IOrders[])
    );
  }

}
