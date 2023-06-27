import { Module } from '@nestjs/common';
import { FilterService } from './filter.service';
import { FilterController } from './filter.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import { FilterModel } from "./entities/filter.model";

@Module({
  imports: [SequelizeModule.forFeature([FilterModel])],
  providers: [FilterService],
  controllers: [FilterController]
})
export class FilterModule {}
