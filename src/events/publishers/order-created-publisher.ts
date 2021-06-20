import { Subjects, Publisher, OrderCreatedEvent } from '@vttickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
