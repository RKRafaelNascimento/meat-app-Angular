import { Component, OnInit } from '@angular/core';
import { RadioOptions } from 'app/shared/radio-options/radio-options.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  paymentsOptions: RadioOptions[] = [
    {label: 'Dinheiro', value: 'DIM'},
    {label: 'Cartão Debito', value: "DEB"},
    {label: 'Boleto', value: "BOL"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
