import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {IDriver} from "../../../../../store/drivers/interfaces/drivers";
import {ValidationService} from "../../../../shared/services/validation.service";
import {DriversFacade} from "../../../../../store/drivers/drivers.facade";
import {Observable, startWith} from "rxjs";


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
  @Input() driver!: IDriver | null;
  @Output() changeShowEdit = new EventEmitter<boolean>();
  protected formGroup!: DriverFormGroup;
  protected loading$ = this.driversFacade.driverUpdateLoading$.pipe(startWith(false));
  protected success$ = this.driversFacade.driverUpdateSuccess$;

  constructor(
    private fb: FormBuilder,
    protected validationService: ValidationService,
    private driversFacade: DriversFacade,
  ) {}

  protected submitForm(): void{
    if(this.driver){
      this.driversFacade.updateDriver(this.driver.id, this.formGroup.value as IDriver);
    }
    this.success$.subscribe(success => {
      if(success){
        this.changeShowEdit.emit(false)
      }
    })
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
