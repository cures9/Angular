import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { SearchPipe } from './search.pipe';
import { ItemListService } from './item-list/item-list.service';
import { ItemComponent } from './item/item.component';
import { OrderComponentComponent } from './order-component/order-component.component';
import { CartComponent } from './cart/cart.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'item-list', component : ItemListComponent},
  { path: 'order-component',      component: OrderComponentComponent },
  { path: '',
    redirectTo: '/item-list',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    SearchPipe,
    ItemComponent,
    OrderComponentComponent,
    CartComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes)],
  providers: [ItemListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
