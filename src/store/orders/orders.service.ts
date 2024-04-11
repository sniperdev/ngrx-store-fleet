import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IOrders} from "./interfaces/orders.interface";

@Injectable({
  providedIn: 'root'
})

export class OrdersService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient){}

  public loadOrdersList(): Observable<IOrders[]>{
    const url = `${this.apiUrl}/orders`;

    return this.http.get<IOrders[]>(url)
  }

}
