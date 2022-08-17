import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Grupo } from 'models/Grupo';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GrupoService {
  API_URI = 'http://localhost:3000/api';

  constructor(private http : HttpClient) { }
  saveGrupo(grupo : Grupo) {
    return this.http.post(`${this.API_URI}/grupo`,grupo);
  }

  getGrupo(Id_Grupo : string){ 
    return this.http.get(`${this.API_URI}/grupo/${Id_Grupo}`);
  }

  updateGrupo(Id_Grupo: string|number, updateGrupo:Grupo):Observable<Grupo>{
    return this.http.put(`${this.API_URI}/grupo/${Id_Grupo}`,updateGrupo);
  }
}
