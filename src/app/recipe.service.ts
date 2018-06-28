import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Recipe } from './recipe.model';
import { Observable, of, throwError } from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import { Http } from '@angular/http';

const API_URL = `http://localhost:8080/api`;

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor(private http: HttpClient) {}
getRecipes(): Observable<Recipe[]> {
  const recipesUrl = `${API_URL}/recipes`;
  return this.http.get<Recipe[]>(recipesUrl).pipe(
    catchError(this.handleError)
  );
}

getRecipe(id): Observable<Recipe> {
  const recipesUrl = `${API_URL}/recipes/${id}`;
  return this.http.get<Recipe>(recipesUrl).pipe(
    catchError(this.handleError)
  );
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
