import { Module } from '@nestjs/common';
import { BasketItemService } from './basket-item.service';
import { BasketItemController } from './basket-item.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import { BasketItemModel } from "./entities/basket-item.model";
import { JwtModule, JwtService } from "@nestjs/jwt";

@Module({
  imports: [SequelizeModule.forFeature([BasketItemModel]), JwtModule],
  providers: [BasketItemService, JwtService],
  controllers: [BasketItemController]
})
export class BasketItemModule {}
