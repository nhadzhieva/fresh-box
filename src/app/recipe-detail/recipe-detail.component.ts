import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe = new Recipe();
  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router ) { }

  getRecipe(): void {
      const id = this.route.snapshot.paramMap.get('id');
      this.recipeService.getRecipe(id)
        .subscribe(recipe => this.recipe = recipe);
  }
  ngOnInit() {
    this.getRecipe();
  }

}
