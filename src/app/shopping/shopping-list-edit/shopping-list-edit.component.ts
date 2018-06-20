import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @Input() ingredient: Ingredient;
  nameInputValue: any;
  amountInputValue: any;

  @Output() item = new EventEmitter<Ingredient>();

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    const newIngredient = new Ingredient(this.nameInputValue, this.amountInputValue);
    this.item.emit(newIngredient);

    console.log(this.nameInputValue);
    console.log(this.amountInputValue);
  }
}
