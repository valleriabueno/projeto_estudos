import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: string[], query: string): string[] {
    return value.filter((txt) => txt.toLowerCase().startsWith(query.toLowerCase()));
  }

}
