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
      image: 'https://images-cdn.ubuy.co.in/63400407ad052c2c656c7cd6-lelebear-stretch-anti-wrinkle-shirt-men.jpg',
      price: 110.95,
      stock: 1
    },
    {
      id: 2,
      title: 'lalala2',
      image: 'https://toptenmartltd.com/wp-content/uploads/2024/09/Formal-shirt.jpg',
      price: 110.95,
      stock: 1
    },
    {
      id: 3,
      title: 'lalala3',
      image: 'https://img.sonofatailor.com/images/customizer/product/extra-heavy-cotton/ss/Black.jpg',
      price: 110.95,
      stock: 0
    },
    {
      id: 4,
      title: 'lalala4',
      image: 'https://www.collinsdictionary.com/images/full/shirt_378037390_1000.jpg',
      price: 110.95,
      stock: 1
    },
  ]);
  
}
