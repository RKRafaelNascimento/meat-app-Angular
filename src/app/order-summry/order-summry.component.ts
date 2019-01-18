import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-order-summry',
  templateUrl: './order-summry.component.html',
  styleUrls: ['./order-summry.component.css']
})
export class OrderSummryComponent implements OnInit {

  rated: boolean

  constructor() { }

  ngOnInit() {
  }

  rate() {
    this.rated = true
  }

}
