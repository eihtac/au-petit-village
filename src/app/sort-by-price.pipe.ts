import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPrice',
  standalone: true
})
export class SortByPricePipe implements PipeTransform {

  transform(products: any[], direction: string): any[] {
    if (!products || !direction) return products;

    if (direction === 'asc') {
      return products.sort((a, b) => a.price - b.price);
    } else if (direction === 'desc') {
      return products.sort((a, b) => b.price - a.price);
    }

    return products;
  }
}
