import { Injectable } from '@angular/core';
import {FormControl} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  public getErrorMessage(formControl: FormControl, name?: string){
    if(formControl && formControl.errors && formControl.touched){
      return Object.keys(formControl.errors).map((key) => this.getValidationMessage(key, name));
    }
    return null;
  }

  private getValidationMessage(key: string, name?: string){
    const messages = {
      required: "This field is required.",
    };
    return messages[key as keyof object];
  }
}
