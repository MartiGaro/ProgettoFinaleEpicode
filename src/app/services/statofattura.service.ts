import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatofatturaService {

  urlStatoFattAll = environment.urlAPI + '/api/statifattura?page=0&size=20&sort=id,ASC';
  urlStatoFatt = environment.urlAPI + '/api/statifattura'

  constructor(private http: HttpClient) { }

  getAllStatoFatt() {
    return this.http.get(this.urlStatoFattAll);
  }
  
  getStatoFatt() {
    return this.http.get(this.urlStatoFatt);
  }

}
