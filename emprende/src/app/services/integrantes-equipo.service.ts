import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IntegrantesEquipo } from 'models/IntegrantesEquipo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntegrantesEquipoService {
  API_URI = 'http://localhost:3000/api';

  constructor(private http : HttpClient) { }

  saveIntegrantes(integrantesEquipo : IntegrantesEquipo) {
    return this.http.post(`${this.API_URI}/integrantes`,integrantesEquipo);
  }

  getIntegrantes(id_In : string){ 
    return this.http.get(`${this.API_URI}/integrantes/${id_In}`);
  }

  updateIntegrantes(id_In: string|number, updateIntegrantes:IntegrantesEquipo):Observable<IntegrantesEquipo>{
    return this.http.put(`${this.API_URI}/integrantes/${id_In}`,updateIntegrantes);
  }
}
