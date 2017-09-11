import { Pipe, PipeTransform } from '@angular/core';
// tslint:disable-next-line:quotemark
import { Item } from "./item-list/item.model";


@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(item: Item[], args: string, filter: string): any {
    if (!filter) {return item; }
    if (filter.length >= 1) {
    return item.filter(it => it[args].toLowerCase().indexOf(filter.toLowerCase()) !== -1);
    }
  }

}
