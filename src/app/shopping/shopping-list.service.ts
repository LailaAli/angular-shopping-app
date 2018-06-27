import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
    new Ingredient('Bananas', 5)
  ];

  // get ingredients
  getIngredients() {
    return this.ingredients;
  }

  // Add ingredients to the list
  onReceive(ingredients: Ingredient) {
    this.ingredients.push(ingredients);
  }
}
