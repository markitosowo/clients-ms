import { IsOptional, IsString, Length, MaxLength } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @Length(3, 50)
  public name!: string;

  @IsOptional()
  @IsString()
  @MaxLength(200)
  public description?: string;
}