export class OrderDetails {
  constructor(
    public payment: String,
    public deliveryType: String,
    public note: String,
    public totalPrice: number,
    public orderTime: String,
    public isDelivered: boolean
  ) {}
}
