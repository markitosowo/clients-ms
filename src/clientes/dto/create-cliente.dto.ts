
import { IsString, IsNotEmpty, IsEmail, Length, IsOptional } from 'class-validator';

export class CreateClienteDto {

@IsString()
@IsNotEmpty()
@Length(3, 80)
nombre: string;

@IsEmail()
@IsNotEmpty()
email: string;

@IsOptional()
@IsString()
//Length ecatamente de 10 digitos
@Length(10, 10)
phone: string;

//opcional, máximo 150 caracteres.
@IsOptional()
@IsString()
@Length(0, 150)
address: string;

//Paginación: `page` (por defecto 1) y `limit` (por defecto 10) son enteros positivos opcionales. Llegan como texto desde la URL, así que deben transformarse a número.
//- `update_customer`: todos los campos opcionales, pero `id` es obligatorio (entero positivo).

}
