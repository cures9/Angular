import { Component, OnInit } from '@angular/core';
import { Item } from './item.model';
import { ITEMS } from './mocks';
import { ItemListService } from './item-list.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
myItem: Item[];

  constructor(private itemListService: ItemListService) {

  }

addQuantity(item: Item) {
  if ( item.stock > 0) {
    item.quantity++;
    item.stock--;
  }
}

removeQuantity(item: Item) {
  if ( item.quantity > 0) {
    item.quantity--;
    item.stock++;
  }
}

  ngOnInit() {
    if (this.myItem) {
    this.itemListService.getItemList()
                        .subscribe(myItems => this.myItem = myItems);
    }
}

showKey(event) {
  alert(event.keyCode);
}

getCoord(event) {
  console.log(event.clientX + ',' + event.clientY);
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
