import { Item } from './item.model';

export const ITEMS: Item[] = [{
    'id': 1,
    'name': 'Item1',
    'description': 'These item is the best one',
    'stock': 8,
    'price': 50,
    // tslint:disable-next-line:max-line-length
    'image': 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/LeeSin_4.jpg',
    'isSelected': true,
    'quantity': 0
  },
  {
    'id': 2,
    'name': 'Item2',
    'description': 'These item is smallest',
    'stock': 7,
    'price': 25,
    // tslint:disable-next-line:max-line-length
    'image': 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/LeeSin_4.jpg',
    'isSelected': true,
    'quantity': 0
  },
  {
    'id': 3,
    'name': 'Item3',
    'description': 'These item is awesome',
    'price': 19,
    'stock': 7,
    // tslint:disable-next-line:max-line-length
    'image': 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/LeeSin_4.jpg',
    'isSelected': false,
    'quantity': 0
  }];
