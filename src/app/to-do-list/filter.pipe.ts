import { Pipe, PipeTransform } from '@angular/core';
import { toDo } from '../toDo';


@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
    /**
   * Transform
   *
   * @param {any[]} items
   * @param {string} searchText
   * @returns {any[]}
   */

  transform(items: toDo[], searchText: string): toDo[]{
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.task.toLocaleLowerCase().includes(searchText);
    });
  }
}