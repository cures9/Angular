import { Component, OnInit } from '@angular/core';
import { Item } from '../item-list/item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
myItem: Item[];

  constructor() { }

  ngOnInit() {
  }

}
