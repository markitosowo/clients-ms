import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ClientesService } from './clientes.service.js';
import { CreateClienteDto } from './dto/create-cliente.dto.js';
import { UpdateClienteDto } from './dto/update-cliente.dto.js';

@Controller()
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @MessagePattern({cmd :'create_customer'})
  create(@Payload() createClienteDto: CreateClienteDto) {
    return this.clientesService.create(createClienteDto);
  }

  @MessagePattern({cmd :'find_all_customers'})
  findAll() {
    return this.clientesService.findAll();
  }

  @MessagePattern({cmd :'find_one_customer'})
  findOne(@Payload() id: number) {
    return this.clientesService.findOne(id);
  }

  @MessagePattern({cmd :'update_customer'})
  update(@Payload() updateClienteDto: UpdateClienteDto) {
    return this.clientesService.update(updateClienteDto.id, updateClienteDto);
  }

  @MessagePattern({cmd :'remove_customer'})
  remove(@Payload() id: number) {
    return this.clientesService.remove(id);
  }
}
