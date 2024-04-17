import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IDriver} from "./interfaces/drivers";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DriversService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public loadDriversList(): Observable<IDriver[]>{
    const url = `${this.apiUrl}/drivers`;

    return this.http.get<IDriver[]>(url)
  }

  public loadSingleDriver(id: string): Observable<IDriver>{
    const url = `${this.apiUrl}/drivers/${id}`

    return this.http.get<IDriver>(url);
  }

  public deleteDriver(id: string): Observable<any>{
    const url: string = `${this.apiUrl}/drivers/delete/${id}`;

    return this.http.delete(url);
  }

  public updateDriver(id: string, driver: IDriver): Observable<any>{
    const url: string = `${this.apiUrl}/drivers/update/${id}`;

    return this.http.put(url, driver);
  }
}

