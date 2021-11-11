import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientiComponent } from './clienti/clienti.component';
import { DettaglioFattComponent } from './dettaglio-fatt/dettaglio-fatt.component';
import { DettaglioComponent } from './dettaglio/dettaglio.component';
import { FattureClienteComponent } from './fatture-cliente/fatture-cliente.component';
import { FattureComponent } from './fatture/fatture.component';
import { LoginComponent } from './login/login.component';
import { NewClienteComponent } from './new-cliente/new-cliente.component';
import { NewComuneComponent } from './new-comune/new-comune.component';
import { NewFatturaComponent } from './new-fattura/new-fattura.component';
import { NewProvinciaComponent } from './new-provincia/new-provincia.component';

const routes: Routes = [
  { path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login', 
    component: LoginComponent
  },
  {
    path: 'clienti', 
    component: ClientiComponent
  },
  {
    path: 'fatture', 
    component: FattureComponent
  },
  { 
    path: 'clienti/:id/dettaglio',
    component: DettaglioComponent
  },
  { 
    path: 'clienti/nuovo',
    component: NewClienteComponent
  },
  { 
    path: 'clienti/:id/modifica',
    component: NewClienteComponent
  },
  { 
    path: 'clienti/:id/fatture',
    component: FattureClienteComponent
  },
  { 
    path: 'comuni/nuovo',
    component: NewComuneComponent
  },
  { 
    path: 'province/nuova',
    component: NewProvinciaComponent
  },
  { 
    path: 'fatture/:id/dettaglio',
    component: DettaglioFattComponent
  },
  { 
    path: 'fatture/nuova',
    component: NewFatturaComponent
  },
  { 
    path: 'fatture/:id/modifica',
    component: NewFatturaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
