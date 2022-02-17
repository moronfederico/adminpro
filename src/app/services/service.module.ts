import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


import {  
          SettingsService, 
          SidebarService,
          SharedService,
          UsuarioService,
          LoginGuardGuard
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
    LoginGuardGuard
  ]
})
export class ServiceModule { }
