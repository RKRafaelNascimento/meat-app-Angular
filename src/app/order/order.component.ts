import { Component, OnInit } from '@angular/core';
import { RadioOptions } from 'app/shared/radio-options/radio-options.model';
import { OrderService } from './order.service';
import { ShoppCart } from 'app/restaurant-detail/shopping-cart/shopping-cart.model';
import { Order, OrderItems } from './order.model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  valueFrete: number = 8
  orderForm: FormGroup

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  numberPattern = /^[0-9]*$/

  paymentsOptions: RadioOptions[] = [
    {label: 'Dinheiro', value: 'DIM'},
    {label: 'Cartão Debito', value: "DEB"},
    {label: 'Boleto', value: "BOL"}
  ]

  constructor(private orderService: OrderService, private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      email: this.formBuilder.control('', [Validators.required,Validators.pattern(this.emailPattern)]),
      emailConfirmation: this.formBuilder.control('', [Validators.required,Validators.pattern(this.emailPattern)]),
      address: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      number: this.formBuilder.control('',[Validators.required,Validators.pattern(this.numberPattern)]),
      optional: this.formBuilder.control(''),
      paymentsOption: this.formBuilder.control('',[Validators.required])
    }, {Validator: OrderComponent.equalsTo} )
  }

  static equalsTo(group: AbstractControl): {[key:string]: boolean} {
    const email = group.get('email')
    const emailConfirmation = group.get('emailConfirmation')
    if(!email || !emailConfirmation){
      return undefined
    }
    if(email.value !== emailConfirmation.value){
      return {emailsNotMatch:true}
    }
    return undefined
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
