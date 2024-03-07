
export enum VehicleType{
  truck = "Truck",
  van = "Van",
}

export enum VehicleStatus{
  available = "Available",
  inUse = "In Use",
  underMaintenance = "Under Maintenance",
}

export interface IVehicle {
  id: string;
  brand: string;
  model: string;
  year: number;
  registrationNumber: string;
  type: VehicleType;
  status: VehicleStatus,
  driverId: string;
}

export interface IVehicleResponse {
  items: IVehicle[];
  info: {
    page: number;
    limit: number;
    totalResults: number;
  };
}
