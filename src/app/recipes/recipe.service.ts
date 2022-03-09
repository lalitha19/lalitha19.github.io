import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{

    recipeSelected=new EventEmitter<Recipe>();
   private recipes:Recipe[]=[
        new Recipe('Test Recipe','recipe description','https://static01.nyt.com/images/2021/06/01/dining/11lightveg-roundup-8/11lightveg-roundup-8-articleLarge-v2.jpg',
        [new Ingredient('bun',2),new Ingredient('bread',5)]
        )
      ];

      constructor   (private slService:ShoppingListService){}

      getRecipes(){
          return this.recipes;
      }

      addIngredientsToShoppingList(ingredients:Ingredient[]){
          this.slService.addIngredients(ingredients);

      }
}