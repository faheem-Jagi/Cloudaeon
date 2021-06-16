import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Iregister } from './iregister';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private _http: HttpClient) { }

  userRegister(registerUser: Iregister): Observable<any>{
    try {   
      return this._http.post<any>(environment.webURL+'/users', registerUser).pipe(
        catchError((err: any) => {
          return throwError(err);
        })
      );
    } catch (err) {
      console.log(err.message);
    }
  }

}
