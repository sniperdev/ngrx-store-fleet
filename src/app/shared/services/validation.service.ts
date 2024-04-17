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
      email: "Please enter a valid email address.",
      minLength: `Please enter at least 8 characters.`,
      maxLength: `Please enter no more than 32 characters.`,
      pattern: `The input does not match the expected pattern.`,
      number: `Please enter a valid number.`,
      date: `Please enter a valid date.`,
    };
    return messages[key as keyof object];
  }
}
