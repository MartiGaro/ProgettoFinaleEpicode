import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IApi } from '../interfaces/iapi';
import { IClienti } from '../interfaces/iclienti';

@Injectable({
  providedIn: 'root'
})
export class ClientiService {

  urlClientiAll = environment.urlAPI + '/api/clienti?page=0&size=20&sort=id,ASC';
  urlClienti = environment.urlAPI + '/api/clienti/'

  constructor(private http: HttpClient) { }

  getAllClienti() {
    return this.http.get<IApi>(this.urlClientiAll);
  }

  getCliente(id: number) {
    return this.http.get<IClienti>(this.urlClienti + id);
  }

  removeCliente(id: number) {
    return this.http.delete(this.urlClienti + id);
  }
}
