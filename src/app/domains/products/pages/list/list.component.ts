import { Component, inject } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { Product } from '../../../shared/models/Product';
import { ProductService } from '../../../shared/services/product.service';

@Component({
  selector: 'app-list',
  imports: [ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products: Product[] = [];

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

}
