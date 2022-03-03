import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  
@Output() recipeWasSelected=new EventEmitter<Recipe>();
recipes:Recipe[]=[
  new Recipe('Test Recipe','recipe description','https://static01.nyt.com/images/2021/06/01/dining/11lightveg-roundup-8/11lightveg-roundup-8-articleLarge-v2.jpg')
];
  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe:Recipe){
this.recipeWasSelected.emit(recipe);
  }
}
function Ouput() {
  throw new Error('Function not implemented.');
}

