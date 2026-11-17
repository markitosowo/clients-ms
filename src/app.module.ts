import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientesModule } from './clientes/clientes.module.js';

@Module({
imports: [ConfigModule.forRoot({ isGlobal: true }), ClientesModule, ],
})
export class AppModule {}