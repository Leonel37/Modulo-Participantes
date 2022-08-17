import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Carrera } from 'models/Carrera';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarreraService {
  API_URI = 'http://localhost:3000/api';

  constructor(private http : HttpClient) { }

  saveCarrera(carrera : Carrera) {
    return this.http.post(`${this.API_URI}/carrera`,carrera);
  }

  getCarrera(Id_Carrera : string){ 
    return this.http.get(`${this.API_URI}/carrera/${Id_Carrera}`);
  }

  updateCarrera(Id_Carrera: string|number, updateCarrera:Carrera):Observable<Carrera>{
    return this.http.put(`${this.API_URI}/carrera/${Id_Carrera}`,updateCarrera);
  }

}
