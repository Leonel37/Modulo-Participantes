import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { TipoProyecto } from 'models/TipoProyecto';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TipoProyectoService {
  API_URI = 'http://localhost:3000/api';

  constructor(private http : HttpClient) { }

  saveTipo(tipoProyecto : TipoProyecto) {
    return this.http.post(`${this.API_URI}/tipop`,tipoProyecto);
  }

  getTipo(id_TP: string){ 
    return this.http.get(`${this.API_URI}/tipop/${id_TP}`);
  }

  updateTipo(id_TP: string|number, updateTipo:TipoProyecto):Observable<TipoProyecto>{
    return this.http.put(`${this.API_URI}/tipop/${id_TP}`,updateTipo);
  }



}
