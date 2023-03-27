import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "shopping",
})
export class ShoppingPipe implements PipeTransform {
  // transform(value: any[], filterSearch: string, propName: string): any[] {
  //   const result: any = [];
  //   if (value || filterSearch === "" || propName === "") {
  //     return value;
  //   }
  //   value.forEach((a: any) => {
  //     if (
  //       a[propName].trim().toLowerCase().includes(filterSearch.toLowerCase())
  //     ) {
  //       result.push(a);
  //     }
  //   });
  //   return result;
  // }
  

  transform(value: any, searchTerm: any):any {
    return value.filter(function(search){
      return search.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

}
