import { Component, input } from '@angular/core';
import { Product } from '../../../models/products.model';

@Component({
  selector: 'app-product-card',
  imports: [],
  template: `
    <div class="bg-white shadow-md border rounded-x1 p-6 flex flex-col relative">
      <img [src]="product().image" class="w-[200px] h-[100px] object-contain">
    </div>
  `,
  styles: ``
})
export class ProductCardComponent {
  product = input.required<Product>();

}
