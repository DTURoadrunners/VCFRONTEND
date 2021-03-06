import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchMember',
  pure: false
})
export class SearchMemberPipe implements PipeTransform {

  /**
   * return the items that match the search (members)
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

    searchText = searchText.toLowerCase();

    return items.filter(word =>{
      return  word.id.toLowerCase().includes(searchText) || 
              word.name.toLowerCase().includes(searchText) || 
              word.email.toLowerCase().includes(searchText) || 
              word.studyline.toLowerCase().includes(searchText) ||
              word.phone.toLowerCase().includes(searchText);
    });
   }

}
