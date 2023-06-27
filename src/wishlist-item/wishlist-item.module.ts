import { Module } from '@nestjs/common';
import { WishlistItemService } from './wishlist-item.service';
import { WishlistItemController } from './wishlist-item.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import { WishlistItemModel } from "./entities/wishlist-item.model";

@Module({
  imports: [SequelizeModule.forFeature([WishlistItemModel])],
  providers: [WishlistItemService],
  controllers: [WishlistItemController]
})
export class WishlistItemModule {}
