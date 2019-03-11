import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removespaces'
})
export class RemovespacesPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value.replace(/ /g, '');
  }
}
