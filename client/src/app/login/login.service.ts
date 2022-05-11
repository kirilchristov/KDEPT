import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
    })
  };

  constructor(
    private http: HttpClient,
  ) { }

  public logUser(value) {
    const url = 'http://localhost:3000/users';
    return this.http
      .post(url, value, this.httpOptions)
      .pipe(
        catchError((error: any) => throwError(error.error || 'Server error')),
      );

  }
}
