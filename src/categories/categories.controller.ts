import { Controller, ParseIntPipe } from "@nestjs/common";
import { MessagePattern, Payload } from "@nestjs/microservices";
import { PaginationDto } from "../common/dto/pagination.dto.js";
import { CategoriesService } from "./categories.service.js";
import { CreateCategoryDto } from "./dto/create-category.dto.js";
import { UpdateCategoryDto } from "./dto/update-category.dto.js";

@Controller()
export class CategoriesController {
constructor(private readonly service: CategoriesService) {}
@MessagePattern({ cmd: 'create_category' })
create(@Payload() dto: CreateCategoryDto) {
return this.service.create(dto);
}
@MessagePattern({ cmd: 'find_all_categories' })
findAll(@Payload() pagination: PaginationDto) {
return this.service.findAll(pagination);
}
@MessagePattern({ cmd: 'find_one_category' })
findOne(@Payload('id', ParseIntPipe) id: number) {
return this.service.findOne(id);
}
@MessagePattern({ cmd: 'update_category' })
update(@Payload() dto: UpdateCategoryDto) {
return this.service.update(dto.id, dto);
}
@MessagePattern({ cmd: 'remove_category' })
remove(@Payload('id', ParseIntPipe) id: number) {
return this.service.remove(id);
}
}