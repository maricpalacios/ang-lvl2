import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CustomCurrencyPipe } from './pipes/custom-currency/custom-currency.pipe';
import { CustomTimePipe } from './pipes/custom-time/custom-time.pipe';



@NgModule({
  declarations: [CustomCurrencyPipe, CustomTimePipe],
  exports: [CustomCurrencyPipe, CustomTimePipe],
  imports: [
    CommonModule
  ],
  providers: [CurrencyPipe]
})
export class SharedModule { }
