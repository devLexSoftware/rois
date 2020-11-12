import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { HeaderComponent } from './components/header/header/header.component';
import { SideBarComponent } from './components/side_bar/side-bar/side-bar.component';
import { InventarioComponent } from './pages/inventario/inventario.component';

import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { ProductosComponent } from './pages/productos/productos.component';
import { NuevoUsuarioComponent } from './pages/nuevo-usuario/nuevo-usuario.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { NuevoClienteComponent } from './pages/nuevo-cliente/nuevo-cliente.component';
import { ClientesComponent } from './pages/clientes/clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    SideBarComponent,
    InventarioComponent,
    ProductosComponent,
    NuevoUsuarioComponent,
    UsuariosComponent,
    NuevoClienteComponent,
    ClientesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatSnackBarModule,
    AngularFireStorageModule,
  ],
  providers: [{ provide: BUCKET, useValue: 'gs://roise-1f430.appspot.com/' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
