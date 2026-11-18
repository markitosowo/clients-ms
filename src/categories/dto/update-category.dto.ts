import { PartialType } from '@nestjs/mapped-types';
import { IsInt, IsPositive } from 'class-validator';
import { CreateCategoryDto } from './create-category.dto.js';


export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {


@IsInt()
@IsPositive()
id: number;


}