import { Component, OnInit } from '@angular/core';
import { Item } from './item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  constructor() {

  }
    myItem: Item[] = [{
      'id': 1,
      'name': 'Item name',
      'description': 'These item is the best one',
      'stock': 8,
      'price': 50
    },
    {
      'id': 2,
      'name': 'Second item',
      'description': 'These item is smallest',
      'stock': 7,
      'price': 25
    },
    {
      'id': 3,
      'name': 'Third Item',
      'description': 'These item is awesome',
      'price': 19,
      'stock': 7
    }];


  ngOnInit() {
}

totalItems() {
      let total = 0;
       this.myItem.forEach(item => {
         total += item.stock;
       });
       return total;
       /*total items(){
         let sum = 0;
         for (let myItem of this.myItems){
           sum += myItem.stock;
         }retun sum;
       }
       total items(){
         return this.myItems.reduce(function(prev,current){return prev+ current.stock;},0);
       }
       */
   }
}
