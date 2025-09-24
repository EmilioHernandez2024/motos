import { Injectable } from '@angular/core';

export interface Product{
  id: number;
  ano: number;
  modelo:string;
  nombre:string;
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
      nombre: 'Honda Transa LP',
      descripcion : 'Ideal para ciudad',
      precio: 6500,
      imagen: '/img/honda-transalp.jpg'
    },
    {
      id: 2,
      ano: 2024,
      modelo:'Trabajo',
      nombre: 'Kawasaky 600',
      descripcion: 'Potente y elegante',
      precio: 9200,
      imagen: '/img/kawasaky 600.jpg'
    },
    {
      id: 3,
      ano: 2017,
      modelo:'Todo Terreno',
      nombre: 'Kawasaky KX 250',
      descripcion: 'Moderna y económica',
      precio: 3900,
      imagen: '/img/kawasaky-kx250.jpg'
    },
   {
      id: 4,
      ano: 2025,
      modelo:'Sport',
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
}
