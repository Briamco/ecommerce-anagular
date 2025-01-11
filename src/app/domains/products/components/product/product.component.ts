import { Component } from '@angular/core';

@Component({
  selector: 'product-card',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  img = `https://picsum.photos/640/640?r=${Math.random()}`
}
