import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientiComponent } from './clienti/clienti.component';
import { DettaglioFattComponent } from './dettaglio-fatt/dettaglio-fatt.component';
import { DettaglioComponent } from './dettaglio/dettaglio.component';
import { FattureComponent } from './fatture/fatture.component';
import { LoginComponent } from './login/login.component';
import { NewClienteComponent } from './new-cliente/new-cliente.component';
import { NewComuneComponent } from './new-comune/new-comune.component';

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
    path: 'comuni/nuovo',
    component: NewComuneComponent
  },
  { 
    path: 'fatture/:id/dettaglio',
    component: DettaglioFattComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
