import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { Injectable } from "@angular/core";
import { ShoppCart } from "app/restaurant-detail/shopping-cart/shopping-cart.model";

@Injectable()
export class OrderService {
  constructor(private cartShop: ShoppingCartService){}

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
}
