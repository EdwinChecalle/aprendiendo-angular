import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PresupuestosComponent } from './presupuestos/presupuestos/presupuestos.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { ProveedoresService } from './servicios/proveedores.service';
import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { AddproveeComponent } from './proveedores/addprovee/addprovee.component';
import { AddpresComponent } from './presupuestos/addpres/addpres.component';
import { PresupuestosService } from 'src/app/servicios/presupuestos.service';
import { EditpresComponent } from './presupuestos/editpres/editpres.component';
import { RegistroComponent } from './autenticacion/registro/registro.component';
import { AutenticacionService } from './servicios/autenticacion.service';


const routes: Routes=[{ path: '', component: InicioComponent },
  { path: 'proveedores', component: ProveedoresComponent },
  { path: 'editpres/:id', component: EditpresComponent },
  { path: 'addprovee', component: AddproveeComponent},
  { path: 'addpres', component: AddpresComponent},
  { path: 'presupuestos', component: PresupuestosComponent },
  { path: 'registro', component: RegistroComponent },
  { path: '', component: InicioComponent},
  { path: '**', component: InicioComponent},
  ]

@NgModule({
  declarations: [
    AppComponent,
    PresupuestosComponent,
    CopyrightComponent,
    ProveedoresComponent,
    InicioComponent,
    HeaderComponent,
    AddproveeComponent,
    AddpresComponent,
    EditpresComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [ProveedoresService, PresupuestosService, AutenticacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
