import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customTime'
})
export class CustomTimePipe implements PipeTransform {

  transform(value: string): string {
    let numberValue = Number(value);
    if(numberValue/60 < 1){
      return value + 'min';
    }else{
      return Math.trunc(numberValue/60).toString() +'h ' + (numberValue%60).toString() + 'min';
    }
  }

}
