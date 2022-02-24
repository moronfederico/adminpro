import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//rutas
import { APP_ROUTES } from './app.routes';

//modulos
import { PagesModule } from './pages/pages.module';

//temporal
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//servicios
//import { SettingsService } from './services/settings/settings.service';
import { ServiceModule } from './services/service.module';



//Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { PagesComponent } from './pages/pages.component';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PagesComponent
    
       ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTES,
    FormsModule,
    ReactiveFormsModule,
    ServiceModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
