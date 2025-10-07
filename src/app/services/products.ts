import { Injectable } from '@angular/core';

export interface Product{
  id: number;
  ano: number;
  modelo:string;
  nombre:string;
  estado: string;
  cantidad: number;
  descripcion: string;
  precio: number;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})

export class Products {
  
  private products:Product[] = [
    {
      id: 1,
      ano: 2020,
      modelo:'Sport',
      estado: 'Activo',
      cantidad: 5,
      nombre: 'Honda Transa LP',
      descripcion : 'Ideal para ciudad',
      precio: 6500,
      imagen: '/img/honda-transalp.jpg'
    },
    {
      id: 2,
      ano: 2024,
      modelo:'Trabajo',
      estado: 'Activo',
      cantidad: 5,
      nombre: 'Kawasaky 600',
      descripcion: 'Potente y elegante',
      precio: 9200,
      imagen: '/img/kawasaky 600.jpg'
    },
    {
      id: 3,
      ano: 2017,
      modelo:'Todo Terreno',
      estado: 'Activo',
      cantidad: 5,
      nombre: 'Kawasaky KX 250',
      descripcion: 'Moderna y económica',
      precio: 3900,
      imagen: '/img/kawasaky-kx250.jpg'
    },
   {
      id: 4,
      ano: 2025,
      modelo:'Sport',
      estado: 'Activo',
      cantidad: 5,
      nombre: 'Suzuki 1200',
      descripcion: 'Moderna y económica',
      precio: 13900,
      imagen: '/img/suzuki-1200.jpg'
   }
  ]
  constructor(){}
  getProducts():Product[]{
    return this.products;
  }
  addProduct(newProduct: Product): void {
  newProduct.id = this.getNextId();
  this.products.push(newProduct);
}
deleteProduct(id: number): void {
    this.products = this.products.filter(p => p.id !== id);
  }
private getNextId(): number {
  return this.products.length > 0
    ? Math.max(...this.products.map(p => p.id)) + 1
    : 1;
}

}
