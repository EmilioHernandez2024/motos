import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products, Product } from '../../services/products';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2'; // 👈 Importa SweetAlert2

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-product.html',
})
export class EditProduct implements OnInit {
  producto!: Product;
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: Products
  ) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    const producto = this.productService.getProducts().find(p => p.id === this.id);
    if (producto) {
      this.producto = { ...producto };
    } else {
      this.router.navigate(['/admin', 'list-product']);
    }
  }

  guardarCambios() {
    const productos = this.productService.getProducts();
    const index = productos.findIndex(p => p.id === this.id);
    if (index !== -1) {
      productos[index] = this.producto;

      // ✅ Confirmación moderna con SweetAlert2
      Swal.fire({
        title: 'Cambios guardados',
        text: 'El producto se actualizó correctamente.',
        icon: 'success',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#3085d6'
      }).then(() => {
        this.router.navigate(['/admin', 'list-product']);
      });
    }
  }

  volverAlListado() {
    this.router.navigate(['/admin', 'list-product']);
  }
}
