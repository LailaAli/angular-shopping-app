// Manage recipes
import { Injectable, EventEmitter } from '@angular/core';
import { ShoppingListService } from '../shopping/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {

  constructor (private shoppingListService: ShoppingListService) {}

  // Holds 'Recipe' data to emit
  recipeSelected = new EventEmitter<Recipe>();

  // Use recipe.model below, import above
  // TS knows, the only thing that will ever get stored in this property are objects defined in the Model
  // Private: You can't access directly from outside
  private recipes: Recipe[] = [
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

  // To get access to recipe, add get Method

  getRecipe() {
    // Slice return exact COPY of array. That way original is untouched.
    return this.recipes.slice();
  }
}
