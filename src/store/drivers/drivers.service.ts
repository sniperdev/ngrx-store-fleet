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
}
