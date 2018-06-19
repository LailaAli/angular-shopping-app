import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // Pass <Recipe> as a type cuz that is the info we're looking for
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  // Use recipe.model below, import above
  // TS knows, the only thing that will ever get stored in this property are objects defined in the Model
  recipes: Recipe[] = [
    // create a 'new' obj by passing in the args from Model
    new Recipe(
      'COOKIES',
      'This is simply a test recipe',
      'https://www.spendwithpennies.com/wp-content/uploads/2017/02/soft-chewy-chocolate-chip-cookies-1-of-1-2.jpg'
    ),
    new Recipe(
      'ICE CREAM',
      'This is simply a test recipe',
      'https://www.spendwithpennies.com/wp-content/uploads/2017/02/soft-chewy-chocolate-chip-cookies-1-of-1-2.jpg'
    )
  ];

  constructor() {}

  ngOnInit() {}
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
