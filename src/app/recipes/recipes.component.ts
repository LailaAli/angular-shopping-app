import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor( private recipeService: RecipeService) { }

  ngOnInit() {
    // Listen to see if a recipe is selected.
    this.recipeService.recipeSelected.subscribe(
      // (data I'll recive: type recipe) => {component recipe = recipe I got from the event}
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      });
  }

}
