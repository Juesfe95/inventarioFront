import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Producto } from '../Modelo/Mercancia';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:8080/api/mercancia/listar-todos';

  getPersonas(){
    return this.http.get<Producto[]>(this.url)
  }
}
