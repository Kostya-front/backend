import { Module } from '@nestjs/common';
import { BasketService } from './basket.service';
import { BasketController } from './basket.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import { BasketModel } from "./entities/basket.model";

@Module({
  imports: [SequelizeModule.forFeature([BasketModel])],
  providers: [BasketService],
  controllers: [BasketController],
  exports: [BasketModule]
})
export class BasketModule {}
