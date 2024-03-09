export interface IDriver {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  birthDate: string;
  drivingLicenseNumber: string;
}

export interface IDriversResponse {
  items: IDriver[];
  info: {
    page: number;
    limit: number;
    totalResults: number;
  };
}
