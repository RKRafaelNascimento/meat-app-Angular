import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-delivery-costs',
  templateUrl: './delivery-costs.component.html',
  styleUrls: ['./delivery-costs.component.css']
})
export class DeliveryCostsComponent implements OnInit {

 @Input() deliveryValue: number
 @Input() deliveryFrete: number

  constructor() { }

  ngOnInit() {
  }

  total(): number{
    return this.deliveryValue + this.deliveryFrete
  }

}
