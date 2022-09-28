import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }
  
  usuariosSelect()/*consultar al servicio web*/{
    const ruta = "https://api.openbrewerydb.org/breweries"
    return this.http.get(ruta);
  }
}
