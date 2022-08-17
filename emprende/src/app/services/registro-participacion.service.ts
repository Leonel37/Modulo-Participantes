import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { RegistroParticipacion } from 'models/RegistroParticipacion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RegistroParticipacionService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http : HttpClient ) { }

  saveRegistro(registroParticipacion: RegistroParticipacion) {
    return this.http.post(`${this.API_URI}/registro`,registroParticipacion);
  }

  getRegistro(id_RP: string){ 
    return this.http.get(`${this.API_URI}/registro/${id_RP}`);
  }

  updateRegistro(id_RP: string|number, updateRegistro:RegistroParticipacion):Observable<RegistroParticipacion>{
    return this.http.put(`${this.API_URI}/registro/${id_RP}`,updateRegistro);
  }

}