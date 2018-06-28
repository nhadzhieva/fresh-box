import { Component, OnInit } from '@angular/core';
import { Order } from '../order.model';
import ORDERS from '../order-mock';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
 orders = ORDERS;
 order = ORDERS[1];
 counterOfOrders = this.orders.length;
  constructor( private router: Router) { }

  ngOnInit() {
  }
  addOrder() {
    if (this.counterOfOrders > this.orders.length) {
      for (let i = 0; i < this.counterOfOrders; i++) {
        this.orders.push(this.order);
      }
    } else {
      this.orders.pop();
    }
    }
  totalPrice(): number {
    return  this.order.price * this.counterOfOrders;
  }
  deleteOrder(id) {
     if (confirm('You are going to refuse this order!')) {
       this.counterOfOrders -= 1;
       this.orders.pop();
    }
  }
 isLogged() {
    if (true) {
      this.router.navigate(['login']);
    }
  }
}
