import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyhttpInterceptor implements HttpInterceptor {

  bearerAuth = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTYzNjU0NjA5OSwiZXhwIjoxNjM3NDEwMDk5fQ.SQVGfQSVelgiulMYfA28GHGUK5EeH3BfV6SoMWzPCbzwifZb0I7O5MyPwb8SmpR32VmRlL0d-h-u8d-fb8Ta7A';
  tenantID = 'fe_0421';
  
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    let myRequest: HttpRequest<any> = request;
    myRequest = request.clone(
      {headers: request.headers
        .set("Authorization", 'Bearer ' + this.bearerAuth)
        .set("X-TENANT-ID", this.tenantID)
      })
    
    
    return next.handle(myRequest);
  }
}
