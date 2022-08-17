import { Component, OnInit, HostBinding } from '@angular/core';
import { RegistroParticipacionService } from './../../services/registro-participacion.service';
import { RegistroParticipacion } from 'models/RegistroParticipacion';
import { CategoriaParticipacion } from 'models/CategoriaParticipacion';
import { CategoriaParticipacionService } from 'src/app/services/categoria-participacion.service';
import { TipoProyecto } from 'models/TipoProyecto';
import { TipoProyectoService } from 'src/app/services/tipo-proyecto.service';
import { Carrera } from 'models/Carrera';
import { CarreraService } from 'src/app/services/carrera.service';
import { Grupo } from 'models/Grupo';
import { GrupoService } from 'src/app/services/grupo.service';
import { IntegrantesEquipo } from 'models/IntegrantesEquipo';
import { IntegrantesEquipoService } from 'src/app/services/integrantes-equipo.service';
import {ActivatedRoute, Router} from '@angular/router';




@Component({
  selector: 'app-participantes',
  templateUrl: './participantes.component.html',
  styleUrls: ['./participantes.component.css']
})


export class ParticipantesComponent implements OnInit {


  @HostBinding('class') classes = 'row';



  registro_Participacion: RegistroParticipacion ={
    id_RP:0, 
    Nombre_Representante:'',
    Correo_Representante:'',
    NoControl_Representante:'',
    id_TP:0, 
    Nombre_Proyecto:'',
    Descripcion_Proyecto:'',
    Nombre_Asesor:'',
    Resumen_Ejecutivo:'', 
    Referencia_Video:'', 
    Referencia_Evidencias:''

  }


  categoriaParticipacion : CategoriaParticipacion ={
    id_CP:0,
    NomCategoria_Participa:''
  }

  tipoProyecto : TipoProyecto = {
    id_TP:0,
    NomTipo_Proyecto:''
  } 

  carrera : Carrera = {
    Id_Carrera:0,
    Nombre_Carrera:''
  }

  grupo : Grupo ={
    Id_Grupo:0,
    Nombre_Grupo:'',
    Id_Carrera:0,
  }

  integrantesEquipo : IntegrantesEquipo={
    id_In:0,
    id_RP:0,
    Nombre_Integrante:'',
    Correo_Integrante:'',
    NoControl_Integrante:'',
    Id_Carrera:0,
    Id_Grupo:0, 
    Campus_Integrante: '',
    Programa_Educativo: ''
   
  }

  
  edit : boolean =false;

  constructor(private registroParticipacionService: RegistroParticipacionService, private categoriaParticipacionService:CategoriaParticipacionService, private tipoProyectoService : TipoProyectoService, private carreraService : CarreraService, private grupoService:GrupoService, private integrantesEquipoService: IntegrantesEquipoService,  private router:Router, private ActivatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.ActivatedRoute.snapshot.params;
    if(params ['id_RP']){
      this.registroParticipacionService.getRegistro(params['id_RP']).subscribe(
        resp => {
          console.log(resp);
          this.registro_Participacion= resp;
          this.edit=true;
        },
        err => console.error(err)
      );
    }


    if(params ['id_CP']){
      this.categoriaParticipacionService.getCategoria(params['id_CP']).subscribe(
        resp => {
          console.log(resp);
          this.categoriaParticipacion= resp;
          this.edit=true;
        },
        err => console.error(err)
      );
    }


    if(params ['Id_Carrera']){
      this.carreraService.getCarrera(params['Id_Carrera']).subscribe(
        resp => {
          console.log(resp);
          this.carrera= resp;
          this.edit=true;
        },
        err => console.error(err)
      );
    }

    if(params ['Id_Grupo']){
      this.grupoService.getGrupo(params['Id_Grupo']).subscribe(
        resp => {
          console.log(resp);
          this.grupo= resp;
          this.edit=true;
        },
        err => console.error(err)
      );
    }

    if(params ['id_TP']){
      this.tipoProyectoService.getTipo(params['id_TP']).subscribe(
        resp => {
          console.log(resp);
          this.tipoProyecto= resp;
          this.edit=true;
        },
        err => console.error(err)
      );
    }

    if(params ['id_In']){
      this.integrantesEquipoService.getIntegrantes(params['id_In']).subscribe(
        resp => {
          console.log(resp);
          this.integrantesEquipo= resp;
          this.edit=true;
        },
        err => console.error(err)
      );
    }

  }



  saveRegistro(){
    delete this.registro_Participacion.id_RP;
    
    this.registroParticipacionService.saveRegistro(this.registro_Participacion).subscribe(
      resp => {
        console.log(resp);
      },
      err=> console.error(err)
    );
  }

  saveCategoria(){
    delete this.categoriaParticipacion.id_CP;
    
    this.categoriaParticipacionService.saveCategoria(this.categoriaParticipacion).subscribe(
      resp => {
        console.log(resp);
      },
      err=> console.error(err)
    );
  }

  saveTipo(){
    delete this.tipoProyecto.id_TP;
    
    this.tipoProyectoService.saveTipo(this.tipoProyecto).subscribe(
      resp => {
        console.log(resp);
      },
      err=> console.error(err)
    );
  }

  saveCarrera(){
    delete this.carrera.Id_Carrera;
    
    this.carreraService.saveCarrera(this.carrera).subscribe(
      resp => {
        console.log(resp);
      },
      err=> console.error(err)
    );
  }

  saveGrupo(){
    delete this.grupo.Id_Grupo;
    
    this.grupoService.saveGrupo(this.grupo).subscribe(
      resp => {
        console.log(resp);
      },
      err=> console.error(err)
    );
  }
 
  saveIntegrantes(){
    delete this.integrantesEquipo.id_In;
   
    
    this.integrantesEquipoService.saveIntegrantes(this.integrantesEquipo).subscribe(
      resp => {
        console.log(resp);
      },
      err=> console.error(err)
    );
  }

  
saveAll(){
  this.saveTipo();
  this.saveCategoria();
  this.saveRegistro();
  this.saveCarrera();
  this.saveGrupo();
  this.saveIntegrantes();
  this.router.navigate(['/home']);
}



updateTipo(){
 
  let number : number = Number (this.tipoProyecto.id_TP);
  this.tipoProyectoService.updateTipo(number,this.tipoProyecto).subscribe(
    resp => {
      console.log(resp);
    },
    err => console.error(err)
  );
}

updateRegistro(){
 
  let number : number = Number (this.registro_Participacion.id_RP);
  this.registroParticipacionService.updateRegistro(number,this.registro_Participacion).subscribe(
    resp => {
      console.log(resp);
    },
    err => console.error(err)
  );
}

updateCategoria(){
 
  let number : number = Number (this.categoriaParticipacion.id_CP);
  this.categoriaParticipacionService.updateCategoria(number,this.categoriaParticipacion).subscribe(
    resp => {
      console.log(resp);
    },
    err => console.error(err)
  );
}

updateCarrera(){
 
  let number : number = Number (this.carrera.Id_Carrera);
  this.carreraService.updateCarrera(number,this.carrera).subscribe(
    resp => {
      console.log(resp);
    },
    err => console.error(err)
  );
}

updateGrupo(){
 
  let number : number = Number (this.grupo.Id_Grupo);
  this.grupoService.updateGrupo(number,this.grupo).subscribe(
    resp => {
      console.log(resp);
    },
    err => console.error(err)
  );
}

updateIntegrantes(){
 
  let number : number = Number (this.integrantesEquipo.id_In);
  this.integrantesEquipoService.updateIntegrantes(number,this.integrantesEquipo).subscribe(
    resp => {
      console.log(resp);
    },
    err => console.error(err)
  );
}


updateAll(){
  this.updateTipo();
  this.updateCategoria();
  this.updateRegistro();
  this.updateCarrera();
  this.updateGrupo();
  this.updateIntegrantes();
  this.router.navigate(['/home']);
}











 
}







