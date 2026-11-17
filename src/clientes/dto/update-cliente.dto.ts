import { PartialType } from '@nestjs/mapped-types';
import { CreateClienteDto } from './create-cliente.dto.js';
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, Length } from 'class-validator';

export class UpdateClienteDto extends PartialType(CreateClienteDto) {
@IsNumber()
@IsPositive()
id:number;

@IsOptional()
@IsString()
nombre: string;

@IsOptional()
@IsEmail()
email: string;

@IsOptional()
@IsString()
phone: string;


@IsOptional()
@IsString()
address: string;

}
