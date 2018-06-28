import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from './user.model';
import { Observable, of, throwError } from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import { Http } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';

const API_URL = `http://localhost:8080/api`;
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
getUser(id): Observable<User> {
    const usersUrl = `${API_URL}/users/${id}`;
    return this.http.get<User>(usersUrl)
    .pipe(catchError(this.handleError));
  }
create(user: User): Observable<User> {
  const usersUrl = `${API_URL}/users/`;
    return this.http.post<User>(usersUrl, user);
}
find(user: User): Observable<any> {
  const email = user.email;
  const usersUrl = `${API_URL}/users/${email}`;
  return this.http.get<User>(usersUrl)
  .pipe(catchError(this.handleError));
}
private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError(
    'Something bad happened; please try again later.');
}
}
