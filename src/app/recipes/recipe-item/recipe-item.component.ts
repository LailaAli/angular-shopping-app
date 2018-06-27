import { Component, OnInit, Input, } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  // Grab Recipe array/data from RecipeService
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onSelected() {
    // Use the EventEmitter in RecipeService to EMIT the recipe data of this recipe we selected.
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
