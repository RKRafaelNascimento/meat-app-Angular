import { Component, OnInit } from '@angular/core';
import { RadioOptions } from 'app/shared/radio-options/radio-options.model';
import { OrderService } from './order.service';
import { ShoppCart } from 'app/restaurant-detail/shopping-cart/shopping-cart.model';
import { Order, OrderItems } from './order.model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  valueFrete: number = 8
  orderForm: FormGroup

  paymentsOptions: RadioOptions[] = [
    {label: 'Dinheiro', value: 'DIM'},
    {label: 'Cartão Debito', value: "DEB"},
    {label: 'Boleto', value: "BOL"}
  ]

  constructor(private orderService: OrderService, private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name: this.formBuilder.control(''),
      email: this.formBuilder.control(''),
      emailConfirmation: this.formBuilder.control(''),
      address: this.formBuilder.control(''),
      number: this.formBuilder.control(''),
      optional: this.formBuilder.control(''),
      paymentsOption: this.formBuilder.control('')
    })
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
           .map((item: ShoppCart ) =>
            new OrderItems(item.quantity, item.menuItem.id) )

    this.orderService.orderCheck(order)
          .subscribe((orderId:string) =>
           console.log(`Compra efetuada com Sucesso ${orderId}`))
           this.router.navigate(['/order-summry'])

    console.log(order)
    this.clear()
  }

}
