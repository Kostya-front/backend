import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import { CategoryModel } from "./entities/category.model";

@Module({
  imports: [SequelizeModule.forFeature([CategoryModel])],
  providers: [CategoryService],
  controllers: [CategoryController]
})
export class CategoryModule {}
