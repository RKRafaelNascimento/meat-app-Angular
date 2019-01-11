import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ShoppCart } from 'app/restaurant-detail/shopping-cart/shopping-cart.model';

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit {

@Input() items: ShoppCart[] = []
@Output() incrementQty = new EventEmitter<ShoppCart>()
@Output() descreaseQty = new EventEmitter<ShoppCart>()
@Output() remove = new EventEmitter<ShoppCart>()

  constructor() { }

  ngOnInit() {
  }

  emitIncrement(item: ShoppCart){
    this.incrementQty.emit(item)
  }

  emitDescrease(item: ShoppCart){
    this.descreaseQty.emit(item)
  }

  emitRemove(item: ShoppCart){
    this.remove.emit(item)
  }

}
