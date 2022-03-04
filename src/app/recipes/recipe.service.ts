import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService{

    recipeSelected=new EventEmitter<Recipe>();
   private recipes:Recipe[]=[
        new Recipe('Test Recipe','recipe description','https://static01.nyt.com/images/2021/06/01/dining/11lightveg-roundup-8/11lightveg-roundup-8-articleLarge-v2.jpg')
      ];

      getRecipes(){
          return this.recipes;
      }
}