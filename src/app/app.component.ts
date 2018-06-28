import { Component } from '@angular/core';
import ORDERS from './order-mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  orders = ORDERS;
  title = 'app';
  totalOrders(): number {
    return this.orders.length;
  }
}
