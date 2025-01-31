import { Component, Input } from '@angular/core';
import { Product } from '../../../shared/models/Product';

@Component({
  selector: 'product-card',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  @Input() product: Product | undefined;

}
