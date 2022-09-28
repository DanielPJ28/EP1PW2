import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JuegosService {

  constructor(private http: HttpClient) { }

  juegosSelect(){
    const ruta = "http://universities.hipolabs.com/search?country=United+Kingdom";
    return this.http.get(ruta);
  }
}
