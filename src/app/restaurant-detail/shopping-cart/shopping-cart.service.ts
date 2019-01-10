import { ShoppCart } from "./shopping-cart.model";
import { MenuItem } from "../menu-item/menu-item.model";

export class ShoppingCartService {

  item: ShoppCart[] = []

  clear(){
    this.item = []
  }

  addItemCart(item: MenuItem){
    let foundItem = this.item.find(mItem => mItem.menuItem.id === item.id)
    if(foundItem){
      foundItem.quantity = foundItem.quantity + 1
    }else {
      this.item.push(new ShoppCart(item))
    }

  }

  removeItem(item: ShoppCart){
    this.item.splice(this.item.indexOf(item), 1)
  }

  total(): number{
    return this.item.map(items => items.value()).reduce((prev,value) => prev + value, 0)
  }


}
