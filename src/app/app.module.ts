import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ClientiComponent } from './clienti/clienti.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FattureComponent } from './fatture/fatture.component';
import { MyhttpInterceptor } from './myhttp.interceptor';
import { DettaglioComponent } from './dettaglio/dettaglio.component';
import { NewClienteComponent } from './new-cliente/new-cliente.component';
import { NewComuneComponent } from './new-comune/new-comune.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClientiComponent,
    LoginComponent,
    FattureComponent,
    DettaglioComponent,
    NewClienteComponent,
    NewComuneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule, 
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: MyhttpInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
