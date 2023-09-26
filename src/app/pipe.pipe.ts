import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string {
    if (value ==1) {
      return "Co";
    } else {
      return "Khong";
    }
  }
}
