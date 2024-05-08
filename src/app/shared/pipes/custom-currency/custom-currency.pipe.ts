import { getCurrencySymbol, CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrency'
})
export class CustomCurrencyPipe implements PipeTransform {

  constructor(private _currencyPipe: CurrencyPipe) { }

  transform(value: string, currency: string = 'EUR'): string {
    let symbol = getCurrencySymbol(currency, 'wide');
    return symbol + value + ' million';
  }

}
