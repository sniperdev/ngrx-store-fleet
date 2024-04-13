import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IOrder} from "./interfaces/orders.interface";

@Injectable({
  providedIn: 'root'
})

export class OrdersService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient){}

  public loadOrdersList(): Observable<IOrder[]>{
    const url = `${this.apiUrl}/orders`;

    return this.http.get<IOrder[]>(url)
  }

  public loadSingleOrder(id: string): Observable<IOrder>{
    const url = `${this.apiUrl}/orders/${id}`;

    return this.http.get<IOrder>(url);
  }

  public deleteOrder(id: string): Observable<any>{
    const url = `${this.apiUrl}/orders/delete/${id}`;

    return this.http.delete(url);
  }
}
