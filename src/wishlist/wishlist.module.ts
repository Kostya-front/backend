import { Module } from '@nestjs/common';
import { WishlistService } from './wishlist.service';
import { WishlistController } from './wishlist.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import { WishlistModel } from "./entities/wishlist.model";

@Module({
  imports: [SequelizeModule.forFeature([WishlistModel])],
  providers: [WishlistService],
  controllers: [WishlistController],
  exports: [WishlistModule]
})
export class WishlistModule {}
