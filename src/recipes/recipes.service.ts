import { Injectable } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';

@Injectable()
export class RecipesService {
  private recipes: CreateRecipeDto[] = [];

  create(recipe: CreateRecipeDto) {
    this.recipes.push(recipe);
    return { message: 'Recipe was added' };
  }

  findAll() {
    return { recipes: this.recipes };
  }

  findOne(id: string) {
    const recipe = this.recipes.find((recipe) => {
      return recipe.id === id;
    });
    return { recipe: recipe };
  }

  update(id: string, update: UpdateRecipeDto) {
    const index = this.recipes.findIndex((recipe) => {
      return (recipe.id = id);
    });

    this.recipes[index] = { ...this.recipes[index], ...update };

    return { message: 'recipe was updated', recipe: this.recipes[index] };
  }

  remove(id: string) {
    this.recipes = this.recipes.filter((recipe) => {
      return recipe.id !== id;
    });
    return { message: 'recipe was deleted' };
  }
}
