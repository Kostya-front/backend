import { Module } from '@nestjs/common';
import { VariableItemService } from './variable-item.service';
import { VariableItemController } from './variable-item.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import { VariableItemModel } from "./entities/variable-item.model";

@Module({
  imports: [SequelizeModule.forFeature([VariableItemModel])],
  providers: [VariableItemService],
  controllers: [VariableItemController]
})
export class VariableItemModule {}
