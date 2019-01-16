import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { Injectable } from "@angular/core";
import { ShoppCart } from "app/restaurant-detail/shopping-cart/shopping-cart.model";
import { Http, RequestOptions, Headers } from "@angular/http";
import { Order, OrderItems } from "./order.model";
import { Observable } from "rxjs/Observable";
import { MEAT_API } from "app/app.api";

import 'rxjs/add/operator/map'

@Injectable()
export class OrderService {
  constructor(private cartShop: ShoppingCartService, private http: Http){}

  valueTotal(): number{
    return this.cartShop.total()
  }

  itemsCart():ShoppCart[]{
    return this.cartShop.item
  }

  increaseQty(item: ShoppCart){
    this.cartShop.increaseQty(item)
  }

  decreaseQty(item: ShoppCart){
    this.cartShop.decreaseQty(item)
  }

  remove(item: ShoppCart){
    this.cartShop.removeItem(item)
  }

  clear(){
    this.cartShop.clear()
  }

  orderCheck(order: Order): Observable<string>{
    const header = new Headers()
    header.append('Content-type', 'application/json')
    return this.http.post(`${MEAT_API}/orders` , JSON.stringify(order), new RequestOptions({headers: header}))
        .map(response => response.json())
  }
}
