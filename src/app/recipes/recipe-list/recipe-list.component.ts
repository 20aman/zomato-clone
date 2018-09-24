import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model'
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // @Output() recipeWasSelected = new EventEmitter<Recipe>(); 
     recipes: Recipe[];
  // recipes: Recipe[]=[
  //   new Recipe( 'A Test Recipe 1' , 'This is Simple Recipe 1' , 'https://www.logolynx.com/images/logolynx/0b/0b02b4828eae469d6822a251deee5184.jpeg'),
  //   new Recipe( 'A Test Recipe 2' , 'This is Simple Recipe 2' , 'https://www.logolynx.com/images/logolynx/0b/0b02b4828eae469d6822a251deee5184.jpeg'),
  //   new Recipe( 'A Test Recipe 3' , 'This is Simple Recipe 2' , 'https://www.logolynx.com/images/logolynx/0b/0b02b4828eae469d6822a251deee5184.jpeg'),
  //   new Recipe( 'A Test Recipe 4' , 'This is Simple Recipe 2' , 'https://www.logolynx.com/images/logolynx/0b/0b02b4828eae469d6822a251deee5184.jpeg')
    
  //  ];
  
  constructor(private recipeService: RecipeService,
  private router: Router,
  private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipes= this.recipeService.getRecipe();
  }
  onNewRecipe(){
this.router.navigate(['new'],{relativeTo:this.route});
  }

  // onSelectedRecipe(recipee: Recipe){
  //   this.recipeWasSelected.emit(recipee);

  }
  //https://myrecipehampers.files.wordpress.com/2013/04/mrh-square-logo.png
  //https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg


// import { Component, OnInit, EventEmitter, Output } from '@angular/core';

// import { Recipe } from '../recipe.model';

// @Component({
//   selector: 'app-recipe-list',
//   templateUrl: './recipe-list.component.html',
//   styleUrls: ['./recipe-list.component.css']
// })
// export class RecipeListComponent implements OnInit {
//   @Output() recipeWasSelected = new EventEmitter<Recipe>();
//   recipes: Recipe[] = [
//     new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
//     new Recipe('Another Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
//   ];

//   constructor() { }

//   ngOnInit() {
//   }

//   onRecipeSelected(recipe: Recipe) {
//    this.recipeWasSelected.emit(recipe);
//   }

// }

