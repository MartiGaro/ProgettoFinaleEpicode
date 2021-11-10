import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FattureService {

  urlFattureAll = environment.urlAPI + '/api/fatture?page=0&size=20&sort=id,ASC';
  urlFatture = environment.urlAPI + '/api/fatture'

  constructor(private http: HttpClient) { }

  getAllFatture() {
    return this.http.get(this.urlFattureAll);
  }

  getFatture() {
    return this.http.get(this.urlFatture);
  }
}
