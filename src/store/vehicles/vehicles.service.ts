import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {IVehicleResponse} from "./interfaces/vehicles.interface";

@Injectable({
  providedIn: 'root'
})

export class VehiclesService{
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient){}

  public loadVehiclesList(): Observable<IVehicleResponse>{
    const url = `${this.apiUrl}/vehicles`;

    return this.http.get(url).pipe(
      map((res: any)=>res as IVehicleResponse)
    );
  }

}
