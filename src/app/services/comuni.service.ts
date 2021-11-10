import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IComuni } from '../interfaces/icomuni';

@Injectable({
  providedIn: 'root'
})
export class ComuniService {

  urlComuniAll = environment.urlAPI + '/api/comuni?page=0&size=20&sort=id,ASC';
  urlComuni = environment.urlAPI + '/api/comuni'

  constructor(private http: HttpClient) { }

  getAllComuni() {
    return this.http.get<IComuni>(this.urlComuniAll);
  }

  getComuni() {
    return this.http.get(this.urlComuni);
  }
}
