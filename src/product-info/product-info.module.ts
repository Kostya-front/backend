import { Module } from '@nestjs/common';
import { ProductInfoService } from './product-info.service';
import { ProductInfoController } from './product-info.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import { ProductInfoModel } from "./entities/product-info.model";

@Module({
  imports: [SequelizeModule.forFeature([ProductInfoModel])],
  providers: [ProductInfoService],
  controllers: [ProductInfoController],
  exports: [ProductInfoModule]
})
export class ProductInfoModule {}
