import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';
import { filter } from 'rxjs/internal/operators/filter';
import { switchMap } from 'rxjs/internal/operators/switchMap';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Input() recipe = new Recipe(undefined, undefined, undefined, undefined, undefined, undefined, undefined );
  editedRecipe: Recipe;
  recipes: Recipe[];
  id: number;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router ) { }

  getRecipes(): void {
    this.recipeService.getRecipes()
    .subscribe(
      recipes => this.recipes = recipes
    );
  }
    ngOnInit() {
      this.getRecipes();
    this.route.paramMap.pipe(
      map(parmMap => parmMap.get('id') as string),
      filter(id => !!id),
      switchMap(id => this.recipeService.getRecipe(id))
    ).subscribe(
      recipe => {
        this.recipe = recipe || this.recipe,
        this.reset();
      },
    );
    this.reset();

  }
  reset() {
    this.editedRecipe = { ...this.recipe };
    }

}
