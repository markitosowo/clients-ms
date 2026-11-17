
import { Type } from "class-transformer";
import { IsPositive, IsOptional } from "class-validator";

export class PaginationDto {
  
//Paginación: `
// page` (por defecto 1) y `limit` (por defecto 10) son enteros positivos opcionales. Llegan como texto desde la URL, así que deben transformarse a número.

@IsPositive()
@IsOptional()
@Type(() =>Number)
page: number = 1;
@IsPositive()
@IsOptional()
@Type(() =>Number)
limit: number = 10;


}