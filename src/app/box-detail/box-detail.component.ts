import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';
import { filter } from 'rxjs/internal/operators/filter';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { Order } from '../order.model';
import ORDERS from '../order-mock';
@Component({
  selector: 'app-box-detail',
  templateUrl: './box-detail.component.html',
  styleUrls: ['./box-detail.component.css']
})
export class BoxDetailComponent implements OnInit {
orders = ORDERS;
order = new Order(undefined, undefined, undefined);
counterOfOrders = 1;

  constructor() {
    this.order.title = 'Fresh Box for week 11-18 August';
    this.order.price = 47.00;
    this.order.id = this.orders.length + 1;
  }
  ngOnInit() {}

  addOrder() {
    for (let i = 0; i < this.counterOfOrders; i++){
      this.orders.push(this.order);
    }
  }
}
