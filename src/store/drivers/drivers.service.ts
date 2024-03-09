import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IDriversResponse} from "./interfaces/drivers";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DriversService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public loadDriversList(): Observable<IDriversResponse>{
    const url = `${this.apiUrl}/drivers`;

    return this.http.get(url).pipe(
      map((res: any)=>res as IDriversResponse)
    );
  }
}
