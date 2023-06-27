import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { FilterItemService } from "./filter-item.service";
import { CreateFilterItemDto } from "./dto/create-filter-item.dto";

@Controller('filter-item')
export class FilterItemController {
  constructor(private readonly filterItemService: FilterItemService) {}

  @Get()
  getAll() {
    return this.filterItemService.getAll()
  }

  @Get(':filterId')
  getFilterItemByFilterId(@Param('filterId') filterId: string) {
    return this.filterItemService.getFilterItemByFilterId(filterId)
  }

  @Post()
  create(@Body() dto: CreateFilterItemDto) {
    return this.filterItemService.create(dto)
  }
}
