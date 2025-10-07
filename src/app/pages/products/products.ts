import { Component, OnInit } from '@angular/core';
import { Product, Products } from '../../services/products';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Productos implements OnInit {
  productos: Product[] = [];
  todosLosProductos: Product[] = [];
  isModeloView: boolean = false;

  // Variables de filtros
  activeModeloFilter: string | null = null;
  activeAnoFilter: number | null = null;

  // Lista de años disponibles
  availableAnos: number[] = [];

  constructor(
    private productsService: Products,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // 🔹 1. Cargar solo los productos ACTIVOS
    this.todosLosProductos = this.productsService
      .getProducts()
      .filter(p => p.estado === 'Activo');

    // 🔹 2. Obtener los años únicos de los productos activos
    const anosSet = new Set<number>(this.todosLosProductos.map(p => p.ano));
    this.availableAnos = Array.from(anosSet).sort();

    // 🔹 3. Aplicar filtros dinámicos (modelo / año)
    this.route.queryParamMap.subscribe(params => {
      const modelo = params.get('modelo');
      const ano = params.get('ano');

      this.activeModeloFilter = modelo;
      this.activeAnoFilter = ano ? Number(ano) : null;
      this.isModeloView = !!(modelo || ano);

      let filteredProducts = this.todosLosProductos;

      if (modelo) {
        filteredProducts = filteredProducts.filter(p => p.modelo === modelo);
      }
      if (ano) {
        filteredProducts = filteredProducts.filter(p => p.ano === Number(ano));
      }

      this.productos = filteredProducts;
    });
  }
}
