import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientiComponent } from './clienti/clienti.component';
import { DettaglioComponent } from './dettaglio/dettaglio.component';
import { FattureComponent } from './fatture/fatture.component';
import { LoginComponent } from './login/login.component';

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
    component: DettaglioComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
