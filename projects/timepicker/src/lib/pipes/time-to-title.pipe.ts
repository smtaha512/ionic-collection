import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeToTitle',
})
export class TimeToTitlePipe implements PipeTransform {
  transform(value: { HH: string | number; MM: string | number }): string {
    return `${value.HH} : ${value.MM}`;
  }
}
