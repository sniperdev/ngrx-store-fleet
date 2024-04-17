import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {IVehicle, VehicleStatus, VehicleType} from 'src/store/vehicles/interfaces/vehicles.interface';
import {VehiclesFacade} from "../../../store/vehicles/vehicles.facade";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ValidationService} from "../../shared/services/validation.service";


export type VehiclesFormGroup = FormGroup<{
  brand: FormControl<VehicleTypeForm["brand"]>,
  model: FormControl<VehicleTypeForm["model"]>,
  year: FormControl<VehicleTypeForm["year"]>,
  registrationNumber: FormControl<VehicleTypeForm["registrationNumber"]>,
  type: FormControl<VehicleTypeForm["type"]>,
  status: FormControl<VehicleTypeForm["status"]>,
  driverId: FormControl<VehicleTypeForm["driverId"]>,
}>

export type VehiclesFormControlType = VehiclesFormGroup['controls'];

export type VehicleTypeForm = Omit<IVehicle, 'id'>;

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit, OnDestroy{
  protected vehicles$: Observable<IVehicle[]> = this.vehiclesFacade.vehiclesData$;
  protected loading$: Observable<boolean> = this.vehiclesFacade.vehiclesLoading$;

  protected visible: boolean = false;
  protected formGroup!: VehiclesFormGroup;

  constructor(private vehiclesFacade: VehiclesFacade, private fb: FormBuilder, protected validationService: ValidationService){}

  protected showDialog(): void{
    this.visible = true;
  }

  protected submitForm(): void{
    console.log(this.formGroup.value);
  }

  protected onHideDialog(): void{
    this.formGroup.reset();
  }

  ngOnInit() {
    this.vehiclesFacade.loadVehiclesList();
    // this.formGroup = this.fb.group({
    //   brand: ['', Validators.required],
    //   model: ['', Validators.required],
    //   year: ['', Validators.required],
    //   registrationNumber: ['', Validators.required],
    //   type: ['', Validators.required],
    //   status: ['', Validators.required],
    //   driverId: ['', Validators.required],
    // }) as VehiclesFormGroup;
    // this.formGroup = this.fb.group({
    //   brand: ['', Validators.required],
    //   model: ['', Validators.required],
    //   year: ['', Validators.required],
    //   registrationNumber: ['', Validators.required],
    //   type: ['', Validators.required],
    //   status: ['', Validators.required],
    //   driverId: ['', Validators.required],
    // }) as VehiclesFormGroup;
    this.formGroup = this.fb.group<VehiclesFormControlType>({
      brand: this.fb.nonNullable.control('', Validators.required),
      model: this.fb.nonNullable.control('', Validators.required),
      year: this.fb.nonNullable.control(new Date().getFullYear(), Validators.required),
      registrationNumber: this.fb.nonNullable.control('', Validators.required),
      type: this.fb.nonNullable.control(VehicleType.truck, Validators.required),
      status: this.fb.nonNullable.control(VehicleStatus.available, Validators.required),
      driverId: this.fb.nonNullable.control('', [Validators.required, Validators.maxLength(3)]),
    })
  }

  ngOnDestroy() {
    this.vehiclesFacade.clearVehiclesList();
  }
}
