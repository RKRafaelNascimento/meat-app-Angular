import { Component, OnInit } from '@angular/core';
import { RadioOptions } from 'app/shared/radio-options/radio-options.model';
import { OrderService } from './order.service';
import { ShoppCart } from 'app/restaurant-detail/shopping-cart/shopping-cart.model';
import { Order, OrderItems } from './order.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  valueFrete: number = 8

  paymentsOptions: RadioOptions[] = [
    {label: 'Dinheiro', value: 'DIM'},
    {label: 'Cartão Debito', value: "DEB"},
    {label: 'Boleto', value: "BOL"}
  ]

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  valueTotal(): number {
    return this.orderService.valueTotal()
  }

  itemsCart(): ShoppCart[]{
    return this.orderService.itemsCart()
  }

  increaseQty(item: ShoppCart){
    this.orderService.increaseQty(item)
  }

  decreaseQty(item: ShoppCart){
    this.orderService.decreaseQty(item)
  }

  remove(item: ShoppCart){
    this.orderService.remove(item)
  }

  clear(){
    this.orderService.clear()
  }

  orderCheck(order: Order){
    order.itemsOrder = this.itemsCart()
    .map((item: ShoppCart ) => new OrderItems(item.quantity, item.menuItem.id) )
    this.orderService.orderCheck(order).subscribe((orderId:string) => console.log(`Compra efetuada com Sucesso ${orderId}`))
    this.clear()
  }

}
