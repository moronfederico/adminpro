import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { UsuarioService } from '../usuario/usuario.service';
import { Medico } from '../../models/medico.model';

import * as swal from 'sweetalert';
@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  totalMedicos : number = 0;

  constructor(
    public http: HttpClient,
    public _usuarioService: UsuarioService
  ) { }
  
  cargarMedicos(){

    let url = URL_SERVICIOS + '/medico';

    return this.http.get(url)
    .map((resp:any) =>{
      this.totalMedicos = resp.total;
      return resp.medicos;
    })

  }

  cargarMedico( id:any) {

    let url = URL_SERVICIOS + '/medico/' + id;
    return this.http.get( url )
      .map( (resp:any) => resp.medico);

  }

  

  buscarMedico(termino:string){

    let url = URL_SERVICIOS + '/busqueda/coleccion/medicos/' + termino;
    return this.http.get( url )
          .map((resp:any) => resp.medicos);
  }

  
  borrarMedico(id:any){
    let url = URL_SERVICIOS + '/medico/' + id;
    url += '?token=' + this._usuarioService.token;

    return this.http.delete( url )
    .map( resp =>{
      
      swal( 'Medico Borrado', 'Médico borrado correctamente', 'success');

      return resp
    })
  }

  guardarMedico( medico:any) {

    let url = URL_SERVICIOS + '/medico';

    if ( medico._id) {
       //actualizando
      url += '/' + medico._id;
      url += '?token=' + this._usuarioService.token;
      

      return this.http.put( url, medico)
              .map( (resp:any) =>{
           swal('Medico actualizado', medico.nombre, 'success');
           return resp.medico;
                
              });

    }else {
      //creando
      
          url += '?token=' + this._usuarioService.token;
      
          return this.http.post(url, medico)
          .map((resp:any) => {
      
           swal('Medico creado', medico.nombre, 'success')
            return resp.medico
          })
        }
    }


}
