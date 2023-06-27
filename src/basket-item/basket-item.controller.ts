import { Body, Controller, Delete, Get, Param, Patch, Post, Req } from "@nestjs/common";
import { BasketItemService } from "./basket-item.service";
import { Request } from "express";
import { CreateBasketItemDto } from "./dto/create-basket-item.dto";

@Controller('basket-item')
export class BasketItemController {
  constructor(private readonly basketItemService: BasketItemService) {}

  @Get()
  getAll() {
    return this.basketItemService.getAll()
  }

  @Get('/find-by-basket-id')
  getAllByBasketId(@Req() request: Request) {
    return this.basketItemService.getAllByBasketId(request)
  }

  @Post()
  create(@Req() request: Request, @Body() dto: CreateBasketItemDto) {
    return this.basketItemService.create(request, dto)
  }

  @Patch(':basketItemId')
  updateBasketItem(@Param('basketItemId') basketItemId: string, @Body() dto: CreateBasketItemDto) {
    return this.basketItemService.updateBasketItem(basketItemId, dto)
  }

  @Patch('/update/:productId')
  changeCountProduct(@Req() request: Request, @Param('productId') productId: string, @Body() dto: CreateBasketItemDto) {
    return this.basketItemService.changeCountProduct(request, productId, dto)
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    return this.basketItemService.deleteOne(id)
  }
}
