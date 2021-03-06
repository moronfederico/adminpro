import { Injectable } from '@angular/core';
import { Hospital } from '../../models/hospital.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { UsuarioService } from '../usuario/usuario.service';

import * as swal from 'sweetalert';
@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  totalHospitales: number = 0 ;

  hospital: Hospital;
  token: string;

  constructor(
    public http: HttpClient,
    public _usuarioService: UsuarioService

    ) { }

  cargarHospitales() {
    let url = URL_SERVICIOS + '/hospital';
    return this.http.get(url)
        .map((resp: any) => {
          this.totalHospitales = resp.total;
          return resp.hospitales;
        });

  }

  obtenerHospital(id: string) {
    let url = URL_SERVICIOS + '/hospital/' + id;
    return this.http.get(url)
        .map((resp: any) => resp.hospital);
  }


  borrarHospital(id: string ) {

    let url = URL_SERVICIOS + '/hospital/' + id;
    url += '?token=' + this._usuarioService.token;


    return this.http.delete(url)
                  .map(resp => swal('Hospital borrado', 'EL hospital a sido eliminado correctamente', 'success'));


  }

  crearHospital(nombre: string) {
    let url = URL_SERVICIOS + '/hospital';
    url += '?token=' + this._usuarioService.token;
    return this.http.post(url, {nombre})
    .map((resp: any) => resp.hospital);
  }

  buscarHospital(termino: string) {
    const url = URL_SERVICIOS + '/busqueda/coleccion/hospitales/' + termino;
    return this.http.get(url)
          .map( (resp: any) => resp.hospitales );

  }

  actualizarHospital(hospital: Hospital) {

    let url = URL_SERVICIOS + '/hospital/' + hospital._id;
    url += '?token=' + this._usuarioService.token;


    return this.http.put(url, hospital)
          .map((resp: any) => {
            swal('Hospital actualizado', hospital.nombre, 'success');
           return resp.hospital;
          });



  }


}
