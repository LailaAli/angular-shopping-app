import { Component, OnInit, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
    new Ingredient('Bananas', 5),
  ];

  receivedItem = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  onReceive(ingredients: Ingredient) {
    this.ingredients.push(ingredients);
  }

}
