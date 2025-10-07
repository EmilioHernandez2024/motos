import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Products, Product } from '../../services/products';
import { RouterModule } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './list-product.html',
})
export class ListProduct implements OnInit {
  productos: Product[] = [];

  constructor(
    private productsService: Products,
    private router: Router) 
    {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productos = this.productsService.getProducts();
  }

  volverAlPanel(): void {
    this.router.navigate(['/admin']);
  }

  eliminarProducto(id: number): void {
  Swal.fire({
    title: '¿Eliminar producto?',
    text: 'Esta acción no se puede deshacer.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar',
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6'
  }).then((result) => {
    if (result.isConfirmed) {
      this.productsService.deleteProduct(id);
      this.cargarProductos();

      Swal.fire({
        title: 'Eliminado',
        text: 'El producto ha sido eliminado correctamente.',
        icon: 'success',
        confirmButtonColor: '#3085d6'
      });
    }
  });
}

}

