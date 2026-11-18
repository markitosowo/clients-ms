import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CategoriesController } from './categories.controller.js';
import { envs } from '../config/envs.js';
import { CATEGORY_SERVICE } from '../config/service.js';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: CATEGORY_SERVICE,
        transport: Transport.TCP,
        options: {
          host: envs.categoriesMicroserviceHost,
          port: envs.categoriesMicroservicePort,
        },
      },
    ]),
  ],
  controllers: [CategoriesController],
})
export class CategoriesModule {}