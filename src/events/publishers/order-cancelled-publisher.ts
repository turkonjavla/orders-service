import { OrderCancelledEvent, Publisher, Subjects } from '@vttickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
