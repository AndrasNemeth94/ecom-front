import { OrderedProduct } from './orderedProduct';
import { OrderUser } from './orderUser';

export class Order {
  constructor(
    public prodList: Array<OrderedProduct>,
    public user: OrderUser,
    public payment: String,
    public deliveryType: String,
    public note: String,
    public totalPrice: number,
    public orderTime: String,
    public isDelivered: boolean
  ) {}
}
