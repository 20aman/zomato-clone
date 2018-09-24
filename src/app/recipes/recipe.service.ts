import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{
   selectedRecipe = new EventEmitter<Recipe>();

   private recipes: Recipe[]=[
        new Recipe( 'Burger' ,
         'Slice of heaven' ,
         'https://cms.splendidtable.org/sites/default/files/styles/w2000/public/Burger-Lab_Lamb-Burger-LEDE.jpg?itok=V_i57ev6',
            [
                new Ingredient('Bread' , 2),
                new Ingredient('Cheese', 1)
            ]),
        new Recipe( 'Sub-Way' ,
         'Sub Special' ,
          'https://www.maxpixel.net/static/photo/1x/Sandwich-Submarine-Sandwich-Subway-Lunch-Sub-702802.jpg',
          [
              new Ingredient('MultiGrain Bread' , 1),
              new Ingredient('meat', 1)
          ]),
        new Recipe( 'Pizza' ,
         'Love the Maina' ,
          'https://cdn.pixabay.com/photo/2015/02/01/05/20/supreme-pizza-619133_960_720.png',
          [
              new Ingredient('chicken' , 2),
              new Ingredient('Hot-Tossed', 1)
          ]),
        new Recipe( 'Latte-Cafe' ,
         'English-Choice' ,
          'https://c.pxhere.com/photos/fc/b9/photo-73803.jpg!d',
          [
              new Ingredient('Beans' , 3),
              new Ingredient('Chocolate', 5)
          ])
        
       ];
    constructor(private shoppingListService: ShoppingListService){}

    getRecipe(){
       return this.recipes.slice();
    }
    getRecipee(index: number){
       return this.recipes[index];
    }
    addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
    }
 }
