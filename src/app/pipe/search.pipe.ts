import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure: false
})


export class SearchPipe implements PipeTransform {

  /**
   * return the items that match the search
   * @param items  items that needs to be filted
   * @param searchText  the text that should filter
   */
  transform(items: any[], searchText: string): any {
    if(!items) {
      return [];
    }
    if(!searchText){
      return items;
    }

    searchText = searchText.toLowerCase(); // set to text to lowercase

    return items.filter(word =>{
      return word.name.toLowerCase().includes(searchText) || word.category.toLowerCase().includes(searchText);
    });
   }

}
