import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto.js';
import { UpdateCategoryDto } from './dto/update-category.dto.js';
import { PaginationDto } from '../common/dto/pagination.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { RpcException } from '@nestjs/microservices';
import { Prisma } from '../generated/prisma/client.js';

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateCategoryDto) {
    try {
      return await this.prisma.category.create({ data: dto });
    } catch (e) {
      this.handleError(e, dto.name);
    }
  }

  async findAll({ page = 1, limit = 10 }: PaginationDto) {
    const total = await this.prisma.category.count();
    const data = await this.prisma.category.findMany({
      skip: (page - 1) * limit,
      take: limit,
    });
    return { data, meta: { total, page, lastPage: Math.ceil(total / limit) } };
  }
  async findOne(id: number) {
    const category = await this.prisma.category.findUnique({ where: { id } });
    if (!category)
      throw new RpcException({
        status: 400,
        message: `Categoría #${id} no existe`,
      });
    return category;
  }
  async update(id: number, { id: _id, ...data }: UpdateCategoryDto) {
    await this.findOne(id); // lanza 400 si no existe
    try {
      return await this.prisma.category.update({ where: { id }, data });
    } catch (e) {
      this.handleError(e, data.name);
    }
  }
  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.category.delete({ where: { id } });
  }
  private handleError(e: unknown, name?: string): never {
    if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2002')
      throw new RpcException({
        status: 409,
        message: `Ya existe una categoría "${name}"`,
      });
    throw e;
  }
}
