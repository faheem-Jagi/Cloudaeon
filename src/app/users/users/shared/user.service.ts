import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Iuser } from './iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  getUsers(): Observable<any>{
    try {   
      return this._http.get<any>(environment.webURL+'/users').pipe(
        catchError((err: any) => {
          return throwError(err);
        })
      );
    } catch (err) {
      console.log(err.message);
    }
  }

  updateUser(id: number, editUser: Iuser): Observable<any>{
    try {   
      return this._http.put<any>(environment.webURL+'/users/' + id, editUser).pipe(
        catchError((err: any) => {
          return throwError(err);
        })
      );
    } catch (err) {
      console.log(err.message);
    }
  }

  deleteUser(id: number): Observable<any>{
    try {   
      return this._http.delete<any>(environment.webURL+'/users/' + id).pipe(
        catchError((err: any) => {
          return throwError(err);
        })
      );
    } catch (err) {
      console.log(err.message);
    }
  }

}
