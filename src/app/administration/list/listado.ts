import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product, Products } from '../../services/products';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './listado.html',
})
export class Listado {
  nuevoProducto: Product = {
    id: 0,
    ano: new Date().getFullYear(),
    modelo: '',
    estado: '',
    cantidad: 0,
    nombre: '',
    descripcion: '',
    precio: 0,
    imagen: '',
  };

  preview: string | ArrayBuffer | null = null;

  modelosDisponibles: string[] = ['Sport', 'Trabajo', 'Todo Terreno', 'Urbano', 'Deportivo'];
  estadosDisponibles: string[] = ['Activo', 'Inactivo'];

  constructor(
    private productsService: Products,
    private router: Router
  ) {}

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => (this.preview = reader.result);
    reader.readAsDataURL(file);
  }

  agregarProducto(): void {
    const productos = this.productsService.getProducts();
    const nuevoId =
      productos.length > 0
        ? Math.max(...productos.map((p) => p.id)) + 1
        : 1;

    const productoAAgregar: Product = {
      ...this.nuevoProducto,
      id: nuevoId,
      imagen: (this.preview as string) || '/img/default.jpg',
    };

    productos.push(productoAAgregar);

    Swal.fire({
      title: '✅ Producto agregado',
      text: 'El producto se ha agregado correctamente.',
      icon: 'success',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#3085d6'
    }).then(() => {
      this.resetForm();
    });
  }

  resetForm(): void {
    this.nuevoProducto = {
      id: 0,
      ano: new Date().getFullYear(),
      modelo: '',
      estado: '',
      cantidad: 0,
      nombre: '',
      descripcion: '',
      precio: 0,
      imagen: '',
    };
    this.preview = null;
  }

  volverAlPanel() {
    this.router.navigate(['/admin']);
  }
}
