import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ModalUploadService } from '../components/modal-upload/modal-upload.service';


import {  
          SettingsService, 
          SidebarService,
          SharedService,
          UsuarioService,
          LoginGuardGuard,
          SubirArchivosService
 } from "./service.index";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SettingsService, 
    SidebarService,
    SharedService,
    UsuarioService,
    LoginGuardGuard,
    SubirArchivosService,
    ModalUploadService

  ]
})
export class ServiceModule { }
