import { RegistroComponent } from './components/registro/registro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { AsistentesComponent } from './components/asistentes/asistentes.component';
import { LoginComponent } from './components/login/login.component';
import { ParticipantesComponent } from './components/participantes/participantes.component';
import { EmprendeComponent } from './components/emprende/emprende.component';

const routes: Routes = [
  //{path: '', component:AppComponent},
  {path: 'home', component:EmprendeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'administrador', component:AdministradorComponent},
  {
    path: '',
    redirectTo: '/participantes',
    pathMatch: 'full'
  },
  
  {path: 'participantes/add', component:ParticipantesComponent},
  {path: 'participantes/edit/:id_TP/:id_CP/:id_RP/:Id_Carrera/:Id_Grupo/:id_In', component:ParticipantesComponent},
  {path: 'asistente', component:AsistentesComponent},
  {path: 'registro', component:RegistroComponent}
 // {path: 'emprende', component:EmprendeComponent}

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
