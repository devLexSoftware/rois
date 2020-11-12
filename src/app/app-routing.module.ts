import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { InventarioComponent } from './pages/inventario/inventario.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { NuevoUsuarioComponent } from './pages/nuevo-usuario/nuevo-usuario.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { NuevoClienteComponent } from './pages/nuevo-cliente/nuevo-cliente.component';
import { ClientesComponent } from './pages/clientes/clientes.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'inventario', component: InventarioComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'nuevo_usuario', component: NuevoUsuarioComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'nuevo_cliente', component: NuevoClienteComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
