import { NgModule } from "@angular/core";
import { RouterModule,Routes} from "@angular/router";
import { ManageRecipeComponent } from "./recipes/manage-recipe/manage-recipe.component";
import { RecipesDetailComponent } from "./recipes/recipes-detail/recipes-detail.component";
// import { Route, RouterModule, Routes } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const appRoutes:Routes=[    
    {path:'',redirectTo:'/recipes',pathMatch:'full'},
    {path:'recipes',component:RecipesComponent,children:[
        {path:'',component:ManageRecipeComponent},
        {path:':id',component:RecipesDetailComponent}
    ]},
    {path:'shopping-list',component:ShoppingListComponent}    
]
@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}