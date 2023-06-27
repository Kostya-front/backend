import { Body, Controller, Get, Post } from "@nestjs/common";
import { WishlistItemService } from "./wishlist-item.service";

@Controller('wishlist-item')
export class WishlistItemController {
  constructor(private readonly wishlistItemService: WishlistItemService) {}

  @Get()
  getAll() {
    return this.wishlistItemService.getAll()
  }

  @Post()
  create(@Body() dto) {
    return this.wishlistItemService.create(dto)
  }
}
