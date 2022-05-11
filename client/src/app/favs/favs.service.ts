import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FavsService {
  public httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
    })
  };

  constructor(
    private http: HttpClient,
  ) { }

  public getImages() {
    const url = 'https://api.spacexdata.com/v4/launches'
    return this.http
      .get(url)
      .pipe(
        catchError((error: any) => throwError(error.error || 'Server error')),
      );
  }

  public addToFavourites(id) {

  }

  public getFavs(id) {
    console.log('The id i am sending', id)
    const url = 'http://localhost:3000/favs';
    return this.http
      .post(url, id, this.httpOptions)
      .pipe(
        catchError((error: any) => throwError(error.error || 'Server error')),
      );
  }
}
