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
      this.increaseQty(foundItem)
    }else {
      this.item.push(new ShoppCart(item))
    }

  }

  increaseQty(item: ShoppCart){
    item.quantity = item.quantity + 1
  }

  decreaseQty(item: ShoppCart){
    item.quantity = item.quantity - 1
    if(item.quantity === 0){
      this.removeItem(item)
    }
  }

  removeItem(item: ShoppCart){
    this.item.splice(this.item.indexOf(item), 1)
  }

  total(): number{
    return this.item.map(items => items.value()).reduce((prev,value) => prev + value, 0)
  }


}
