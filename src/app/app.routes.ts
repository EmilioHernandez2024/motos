import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Productos } from './pages/products/products';
import { Contact } from './pages/contact/contact';
import { ProductDetails } from './product-details/product-details';


// Administracion
import { Dashboard } from './administration/dashboard/dashboard';
import { Listado } from './administration/list/listado';
import { ListProduct } from './administration/list-product/list-product';
import { Welcome } from './administration/welcome/welcome';
import { EditProduct } from './administration/edit-product/edit-product';

export const routes: Routes = [
  //  Sitio publico
  { path: '', component: Home },
  { path: 'nosotros', component: About },
  { path: 'productos', component: Productos },
  { path: 'productos/:id', component: ProductDetails },
  { path: 'contacto', component: Contact },

  //  Panel de administracion con rutas hijas
  {
  path: 'admin',
  component: Dashboard,
  children: [
    { path: '', component: Welcome }, //  Este será el predeterminado
    { path: 'list', component: Listado },
    { path: 'list-product', component: ListProduct },
    { path: 'edit-product/:id', component: EditProduct },
    { path: '**', redirectTo: '' } //  cualquier otra ruta dentro de admin vuelve a Welcome
  ]
},


  // 🔹 Cualquier ruta desconocida vuelve al inicio
  { path: '**', redirectTo: '' }
];
