import { Component, OnInit } from '@angular/core';
import { Item } from './item.model';
import { ITEMS } from './mocks';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
myItem: Item[];

  constructor() {

  }



  ngOnInit() {
    this.myItem = ITEMS;
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
