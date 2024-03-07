import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private sidebarVisible: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public getSidebarVisible(): Observable<boolean> {
    return this.sidebarVisible.asObservable();
  }

  public setSidebarVisible(visible: boolean): void {
    this.sidebarVisible.next(visible);
  }
}
