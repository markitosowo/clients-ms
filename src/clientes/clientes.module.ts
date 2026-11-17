import { Module } from '@nestjs/common';
import { ClientesService } from './clientes.service.js';
import { ClientesController } from './clientes.controller.js';
import { PrismaModule } from '../prisma/prisma.module.js';

@Module({
  controllers: [ClientesController],
  providers: [ClientesService],
  imports: [PrismaModule],
})
export class ClientesModule {}
