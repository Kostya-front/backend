import { Body, Controller, Get, Post } from "@nestjs/common";
import { FilterService } from "./filter.service";
import { CreateFilterDto } from "./dto/create-filter.dto";

@Controller('filter')
export class FilterController {
  constructor(private readonly filterService: FilterService) {}

  @Get()
  getAll() {
    return this.filterService.getAll()
  }

  @Post()
  create(@Body() dto: CreateFilterDto) {
    return this.filterService.create(dto)
  }
}
