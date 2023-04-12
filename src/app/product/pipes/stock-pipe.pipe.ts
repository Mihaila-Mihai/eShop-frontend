import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stockPipe',
  pure: true,
  standalone: true
})
export class StockPipePipe implements PipeTransform {

  transform(stock: number): unknown {
    return stock ? "În stoc" : "Stoc epuizat"
  }

}
