import { Pipe, PipeTransform } from '@angular/core';
import {ProductGetResponse} from "../service/product.service";

@Pipe({
  name: 'rating',
  pure: true,
  standalone: true
})
export class RatingPipe implements PipeTransform {

  transform(product: ProductGetResponse): number[] {
    let arr = [];
    for (let i = 0; i < +this.getWholeValue(product.details?.rating!!); i++) {
      arr.push(i);
    }
    return arr;
  }

  private getWholeValue(rating: number) {
    if (rating) {
      return (rating)?.toString().split('.')[0];
    }
    return '0';
  }

}
