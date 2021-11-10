import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IApi } from '../interfaces/iapi';
import { IFatture } from '../interfaces/ifatture';

@Injectable({
  providedIn: 'root'
})
export class FattureService {

  urlFattureAll = environment.urlAPI + '/api/fatture?page=0&size=20&sort=id,desc';
  urlFatture = environment.urlAPI + '/api/fatture/';
  urlStato = environment.urlAPI + '/api/fatture/stato/'

  constructor(private http: HttpClient) { }

  getAllFatture() {
    return this.http.get<IApi>(this.urlFattureAll);
  }

  getFatture(id: number) {
    return this.http.get<IFatture>(this.urlFatture + id);
  }

  getStato(id: number) {
    return this.http.get<IApi>(this.urlStato + id);
  }

  removeFattura(fattura: IFatture) {
    return this.http.delete(this.urlFatture + fattura.id);
  }

}
