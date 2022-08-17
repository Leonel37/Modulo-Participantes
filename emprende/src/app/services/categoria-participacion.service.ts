import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CategoriaParticipacion } from 'models/CategoriaParticipacion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaParticipacionService {
  API_URI = 'http://localhost:3000/api';

  constructor(private http : HttpClient) { }

  saveCategoria(categoriaparticipacion : CategoriaParticipacion) {
    return this.http.post(`${this.API_URI}/catego`,categoriaparticipacion);
  }

  getCategoria(id_CP : string){ 
    return this.http.get(`${this.API_URI}/catego/${id_CP}`);
  }

  updateCategoria(id_CP: string|number, updateCategoria:CategoriaParticipacion):Observable<CategoriaParticipacion>{
    return this.http.put(`${this.API_URI}/catego/${id_CP}`,updateCategoria);
  }
}

