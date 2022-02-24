import { Component, OnInit } from '@angular/core';
import { SubirArchivosService } from '../../services/subir-archivo/subir-archivos.service';
import { ModalUploadService } from './modal-upload.service';
import * as swal from 'sweetalert';
@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styles: []
})
export class ModalUploadComponent implements OnInit {

  oculto: string = '';
  imagenSubir: File;
  imagenTemp: any;

  constructor(
        public _subirArchivoService: SubirArchivosService,
        public _modalUploadService: ModalUploadService
  ) { }

  ngOnInit() {
  }

  

  cerrarModal(){
  this.imagenTemp = null;
  this.imagenSubir = null;
    
  this._modalUploadService.ocultarModal();

}


  seleccionImagen(archivo: File){
    if (!archivo){
      this.imagenSubir = null;
      return;
    }
    if(archivo.type.indexOf('image') < 0 ) {
    swal('Solo imagenes', 'El archivos seleccionado no es una imagen' , 'error');
    this.imagenSubir = null;
    return

    }

    this.imagenSubir = archivo;

    let reader = new FileReader
    let urlImagenTemp = reader.readAsDataURL(archivo);

    reader.onloadend = () => this.imagenTemp = reader.result;

  }

  subirImagen(){

    this._subirArchivoService.subirArchivo( this.imagenSubir, this._modalUploadService.tipo, this._modalUploadService.id )
      .then (resp => {

        this._modalUploadService.notificacion.emit(resp);
        this.cerrarModal();

      })
      .catch( err =>{
        console.log('Error en la carga...');
      });
  }

}
