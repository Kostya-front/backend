import { Module } from '@nestjs/common';
import { FilterItemService } from './filter-item.service';
import { FilterItemController } from './filter-item.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import { FilterItemModel } from "./entities/filter-item.model";

@Module({
  imports: [SequelizeModule.forFeature([FilterItemModel])],
  providers: [FilterItemService],
  controllers: [FilterItemController]
})
export class FilterItemModule {}
