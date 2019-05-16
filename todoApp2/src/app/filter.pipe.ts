import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Object[], username: string): any {
    if(!username){
      return value;
    }
    return value.filter(value => value['username'].toUpperCase().includes(username.toUpperCase()));
  }

}
