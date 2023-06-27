import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import { ProductModel } from "./entities/product.model";
import { ProductInfoModule } from "../product-info/product-info.module";
import { ProductInfoService } from "../product-info/product-info.service";
import { ProductInfoModel } from "../product-info/entities/product-info.model";

@Module({
  imports: [SequelizeModule.forFeature([ProductModel, ProductInfoModel]), ProductInfoModule],
  providers: [ProductService, ProductInfoService],
  controllers: [ProductController]
})
export class ProductModule {}
