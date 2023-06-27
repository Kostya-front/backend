import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { ProductInfoService } from "./product-info.service";
import { CreateProductInfoDto } from "./dto/create-product-info.dto";

@Controller('product-info')
export class ProductInfoController {
  constructor(private readonly productInfoService: ProductInfoService) {}

  @Get()
  getAll() {
    return this.productInfoService.getAll()
  }

  @Get(':id')
  getOneById(@Param('id') id: string) {
    return this.productInfoService.getOneById(id)
  }

  @Post()
  create(@Body() dto: CreateProductInfoDto) {
    return this.productInfoService.create(dto)
  }

  @Patch(':productInfoId')
  update(@Param('productInfoId') productInfoId: string, @Body() dto: CreateProductInfoDto) {
    return this.productInfoService.update(productInfoId, dto)
  }
}
