import { ITEMS } from './mocks';
import { Item } from './item.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ItemListService {
    getItemList(): Item[] {
        return ITEMS;
    }
}
