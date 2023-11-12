import { PartialType } from '@nestjs/mapped-types';
import { CreateRecipeDto } from './create-recipe.dto';

export class UpdateRecipeDto extends PartialType(CreateRecipeDto) {}

//Partial reiskia kad nebutina nurodyti visu duomenu.
// reiktu omitinti id, kad nebutu galima koreguoti.
