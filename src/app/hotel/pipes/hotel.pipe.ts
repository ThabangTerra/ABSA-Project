import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hotel'
})
export class HotelPipe implements PipeTransform {

  transform(id: string, ...args: unknown[]): unknown {
    return null;
  }

}
