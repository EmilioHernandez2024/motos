import { Component } from '@angular/core';
import { Product } from '../../services/products';
import { Products } from '../../services/products';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-products',
  imports: [RouterModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Productos {
  productos : Product[] = [];
  constructor(private product:Products){
    this.productos = this.product.getProducts();
  }
}
