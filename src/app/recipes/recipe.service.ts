import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Khachapuri', 'Traditional georgian dish',
      'https://prods3.imgix.net/images/articles/2017_10/nonfeatured-what-is-khachapuri.jpg?auto=format%2Ccompress&ixjsv=2.2.3&w=670',
      [new Ingredient('Dough', 1),
                  new Ingredient('Cheese', 2),
                  new Ingredient('Egg', 1)]),
    new Recipe('Hot Dog', 'The most popular dish in the world',
      'https://img.huffingtonpost.com/asset/5cd5c2d82100003500c26b3b.jpeg?ops=scalefit_630_noupscale',
      [new Ingredient('Roll', 1),
                  new Ingredient('Sausage', 1),
                  new Ingredient('Mustard', 1),
                  new Ingredient('Sauce', 1)])
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
