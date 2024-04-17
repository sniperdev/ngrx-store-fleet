import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {IDriver} from "../../../../../store/drivers/interfaces/drivers";
import {ValidationService} from "../../../../shared/services/validation.service";
import {DriversFacade} from "../../../../../store/drivers/drivers.facade";


export type DriverFormGroup = FormGroup<{
  firstName: FormControl<DriverTypeForm["firstName"]>;
  lastName: FormControl<DriverTypeForm["lastName"]>;
  phoneNumber: FormControl<DriverTypeForm["phoneNumber"]>;
  email: FormControl<DriverTypeForm["email"]>;
  birthDate: FormControl<DriverTypeForm["birthDate"]>;
  drivingLicenseNumber: FormControl<DriverTypeForm["drivingLicenseNumber"]>;
}>
export type DriverTypeForm = Omit<IDriver, 'id'>;
export type DriverFormControlType = DriverFormGroup['controls'];

@Component({
  selector: 'app-drivers-form',
  templateUrl: './drivers-form.component.html',
  styleUrls: ['./drivers-form.component.scss']
})
export class DriversFormComponent implements OnInit{
  protected formGroup!: DriverFormGroup;
  @Input() driver!: IDriver | null;

  constructor(
    private fb: FormBuilder,
    protected validationService: ValidationService,
    private driversFacade: DriversFacade,
  ) {}

  protected submitForm(): void{
  }

  ngOnInit() {
    if(this.driver) {
      this.formGroup = this.fb.group<DriverFormControlType>({
        firstName: this.fb.nonNullable.control(this.driver.firstName, Validators.required),
        lastName: this.fb.nonNullable.control(this.driver.lastName, Validators.required),
        phoneNumber: this.fb.nonNullable.control(this.driver.phoneNumber, Validators.required),
        email: this.fb.nonNullable.control(this.driver.email, Validators.required),
        birthDate: this.fb.nonNullable.control(this.driver.birthDate, Validators.required),
        drivingLicenseNumber: this.fb.nonNullable.control(this.driver.drivingLicenseNumber, Validators.required),
      })
    }
  }
}
