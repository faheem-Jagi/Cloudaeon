import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Ilogin } from './ilogin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient) { }

  login(ilogin: Ilogin): Observable<any>{
    try {      
      let login = 'email='+ilogin.email+'&password='+ilogin.password;
      return this._http.get<any>(environment.webURL+'/users?'+ login).pipe(
        map(res => {
          if(res.length != 0) {
            return res;
          }else{
            throwError('User does not exist');
            return false
          }
        }),
        catchError((err: any) => {
          return throwError(err);
        })
      );
    } catch (err) {
      console.log(err.message);
    }
  }

}
