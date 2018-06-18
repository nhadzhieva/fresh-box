import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import RECIPES from './recipes-mock-data';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor() {}
  getRecipes(): Observable<Recipe[]> {
    return of(RECIPES);
 }
 getRecipe(id): Observable<Recipe> {
  const index = +id;
  return of(RECIPES.find(recipe => recipe.id === index));
 }
}
