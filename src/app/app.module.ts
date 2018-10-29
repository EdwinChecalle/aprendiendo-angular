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
import { InisesComponent } from './autenticacion/inises/inises.component';
import { GuardService } from './servicios/guard.service';
import { FacturasModule } from 'src/app/facturas/facturas.module';
import { FacturasComponent } from 'src/app/facturas/facturas/facturas.component';
import { EditproveeComponent } from './proveedores/editprovee/editprovee.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from 'src/app/config/firebase.config';
import { UploadComponent } from 'src/app/upload/upload.component';
import { LoadfileService } from 'src/app/servicios/loadfile.service';


const routes: Routes = [{ path: '', component: InicioComponent },
{
  path: 'proveedores', component: ProveedoresComponent, canActivate:
    [GuardService]
},
{
  path: 'editpres/:id', component: EditpresComponent, canActivate:
    [GuardService]
},
{
  path: 'addprovee', component: AddproveeComponent, canActivate:
    [GuardService]
},
{ path: 'editprovee/:id', component: EditproveeComponent, canActivate: [GuardService] },
{ path: 'addpres', component: AddpresComponent, canActivate: [GuardService] },
{ path: 'presupuestos', component: PresupuestosComponent, canActivate: [GuardService] },
{ path: 'facturas', component: FacturasComponent, canActivate: [GuardService] },
{ path: 'registro', component: RegistroComponent },
{ path: 'iniciosesion', component: InisesComponent },
{ path: 'uploads', component: UploadComponent },
{ path: '', component: InicioComponent },
{ path: '**', component: InicioComponent },
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
    RegistroComponent,
    InisesComponent,
    EditproveeComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    FacturasModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [ProveedoresService, PresupuestosService, AutenticacionService, LoadfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
