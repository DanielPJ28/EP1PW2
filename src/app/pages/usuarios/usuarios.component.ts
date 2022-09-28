import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/entities/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

 /*Se puede escribir algo para plasmarlo en el Html dentro de 2 llaves {{listaProveedores}}*/
 listaUsuarios: Usuario[] |undefined;

 constructor(private usuarioService: UsuariosService ) /*acceder a ProveedoresService*/{ }

 /*Recurar los datos de la web proveedores.php*/
 ngOnInit(): void {
   this.usuarioService.usuariosSelect().subscribe(
     (res) => { //El => hace referencia a un tipo funcion
       this.listaUsuarios = JSON.parse(JSON.stringify(res));//Para que el sistema sepa que proveedores es de tipo JSON
     }
   )
 }

}
