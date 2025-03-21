import { Component, signal } from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductCardComponent } from "./product-card/product-card.component";

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  template: `
    <div class="p-8 grid grid-cols-2 gap-4">

    @for (product of products(); track product.id) {
      <div>
        <app-product-card [product]="product"/>
      </div>

    }

    </div>
  `,
  styles: ``
})
export class ProductsListComponent {
  products = signal<Product[]>([
    {
      id: 1,
      title: 'lalala',
      image: '',
      price: 110.95,
      stock: 1
    },
    {
      id: 2,
      title: 'lalala2',
      image: '',
      price: 110.95,
      stock: 1
    },
    {
      id: 3,
      title: 'lalala3',
      image: '',
      price: 110.95,
      stock: 1
    },
    {
      id: 4,
      title: 'lalala4',
      image: '',
      price: 110.95,
      stock: 1
    },
  ]);
  
}
