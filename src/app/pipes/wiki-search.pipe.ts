import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wikiSearch'
})
export class WikiSearchPipe implements PipeTransform {

  transform(value: any, searchTerm: any):any {
    return value.filter(function(search){
      return search.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });// .name used because product search by product name if you want to search by price then use .price
  }
}
