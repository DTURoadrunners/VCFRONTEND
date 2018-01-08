import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure: false
})


export class SearchPipe implements PipeTransform {

  transform(items: any[], searchText: string): any {
    if(!items) {
      return [];
    }
    if(!searchText){
      return items;
    }

    searchText = searchText.toLowerCase();

    return items.filter(word =>{
      return word.name.toLowerCase().includes(searchText) || word.category.toLowerCase().includes(searchText);
    });
   }

}
