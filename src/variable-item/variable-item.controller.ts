import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { VariableItemService } from "./variable-item.service";
import { CreateVariableItemDto } from "./dto/create-variable-item.dto";

@Controller('variable-item')
export class VariableItemController {
  constructor(private readonly variableItemService: VariableItemService) {}

  @Get()
  getAll() {
    return this.variableItemService.getAll()
  }

  @Get(':variableItemId')
  getAllByVariableId(@Param('variableItemId') variableItemId) {
    return this.variableItemService.getAllByVariableId(variableItemId)
  }

  @Post()
  create(@Body() dto: CreateVariableItemDto) {
    return this.variableItemService.create(dto)
  }
}
