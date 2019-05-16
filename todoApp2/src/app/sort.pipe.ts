import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(todos: Object[], sortType: string): any {
    
    
    return todos.sort((a,b) => {
      if(a[sortType] > b[sortType]){
        return 1;
      }
      if(a[sortType] < b[sortType]){
        return -1;
      }
      return 0;
    });
  }

}
