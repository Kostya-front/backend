import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { VariableService } from "./variable.service";
import { CreateVariableDto } from "./dto/create-variable.dto";

@Controller('variable')
export class VariableController {
  constructor(private readonly variableService: VariableService) {}

  @Get()
  getAll() {
    return this.variableService.getAll()
  }

  @Post()
  create(@Body() dto: CreateVariableDto) {
    return this.variableService.create(dto)
  }

  @Get(':productInfoId')
  getAllByInfoId(@Param('productInfoId') productInfoId: string) {
    return this.variableService.getAllByInfoId(productInfoId)
  }
}
