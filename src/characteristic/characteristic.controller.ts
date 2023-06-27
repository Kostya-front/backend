import { Body, Controller, Delete, Get, Param, Post, Query } from "@nestjs/common";
import { CharacteristicService } from "./characteristic.service";
import { CreateCharacteristicDto } from "./dto/create-characteristic.dto";

@Controller('characteristic')
export class CharacteristicController {
  constructor(private readonly characteristicService: CharacteristicService) {}

  @Get()
  getAll() {
    return this.characteristicService.getAll()
  }

  @Get(':productId')
  getAllByProductInfoId(@Param('productId') productId: string) {
    return this.characteristicService.getAllByProductInfoId(productId)
  }

  @Post()
  create(@Body() dto: CreateCharacteristicDto) {
    return this.characteristicService.create(dto)
  }

  @Get('/filter/:id')
  getFilter(@Param('id') id: string, @Query() obj: {keys: string[]}) {
    return this.characteristicService.getFilter(id, obj)
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    return this.characteristicService.deleteOne(id)
  }
}
