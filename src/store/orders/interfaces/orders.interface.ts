interface OrderStatus {
  waiting: "Waiting";
  inProgress: "In Progress";
  completed: "Completed";
}

export interface IOrders {
  id: string;
  pickupLocation: string;
  deliveryLocation: string;
  cargoDescription: string;
  pickupTime: string;
  vehicleId: string;
  driverId: string;
  status: OrderStatus;
}
