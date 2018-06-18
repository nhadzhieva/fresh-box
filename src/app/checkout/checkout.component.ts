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
 selectedOrder: Order;
  constructor( private router: Router) { }

  ngOnInit() {
  }
  onSelect(order: Order): void {
    this.selectedOrder = order;
  }
  totalPrice(): number {
   let  sum = 0;
     for (let i = 0; i < this.orders.length; i ++) {
         sum += this.orders[i].price;
     }
     return sum;
  }
  deleteOrder(id: number) {
     if (confirm('You are going to refuse this order!')) {
      const index = this.orders.findIndex(bl => bl.id === id);
      this.orders.splice(index, 1);
    }
  }
  isLogged() {
    if (true ){
      this.router.navigate(['login']);
    }
  }
}
