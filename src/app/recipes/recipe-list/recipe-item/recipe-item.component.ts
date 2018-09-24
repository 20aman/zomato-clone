import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
// @Output() selectedRecipe = new EventEmitter<void>();
 @Input() recipe : Recipe;
@Input()  index: number;
  // constructor(private recipeService: RecipeService) { }

  ngOnInit() {

  }

  // onSelectRecipe(){
  // this.recipeService.selectedRecipe.emit(this.recipe);
  // }
}

// import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

// import { Recipe } from '../../recipe.model';

// @Component({
//   selector: 'app-recipe-item',
//   templateUrl: './recipe-item.component.html',
//   styleUrls: ['./recipe-item.component.css']
// })
// export class RecipeItemComponent implements OnInit {
//   @Input() recipe: Recipe;
//   @Output() recipeSelected = new EventEmitter<void>();

//   constructor() { }

//   ngOnInit() {
//   }

//   onSelected() {
//     this.recipeSelected.emit();
//   }

// }