import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ShoppCart } from 'app/restaurant-detail/shopping-cart/shopping-cart.model';

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit {

@Input() items: ShoppCart[] = []
@Output() increaseQty = new EventEmitter<ShoppCart>()
@Output() decreaseQty = new EventEmitter<ShoppCart>()
@Output() remove = new EventEmitter<ShoppCart>()

  constructor() { }

  ngOnInit() {
  }

  emitIncrementQty(item: ShoppCart){
    this.increaseQty.emit(item)
  }

  emitDecreaseQty(item: ShoppCart){
    this.decreaseQty.emit(item)
  }

  emitRemove(item: ShoppCart){
    this.remove.emit(item)
  }

}
