import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {

  urlProvinceAll = environment.urlAPI + '/api/province?page=0&size=20&sort=id,ASC';
  urlProvince = environment.urlAPI + '/api/province'


  constructor(private http: HttpClient) { }

  getAllProvince() {
    return this.http.get(this.urlProvinceAll);
  }

  getProvince() {
    return this.http.get(this.urlProvince);
  }
}
