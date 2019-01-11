import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { RadioOptions } from './radio-options.model';
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms'

@Component({
  selector: 'mt-radio-options',
  templateUrl: './radio-options.component.html',
  styleUrls: ['./radio-options.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RadioOptionsComponent),
    multi: true
  }]
})
export class RadioOptionsComponent implements OnInit, ControlValueAccessor {

 @Input() options: RadioOptions[]
          value: any
          onChange: any
  constructor() { }

  ngOnInit() {
  }

  setValue(value: any){
    this.value = value
    this.onChange(this.value)
  }

  writeValue(obj: any): void {
   this.value = obj
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void{}

}
