import { Module } from '@nestjs/common';
import { VariableService } from './variable.service';
import { VariableController } from './variable.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import { VariableModel } from "./entities/variable.model";

@Module({
  imports: [SequelizeModule.forFeature([VariableModel])],
  providers: [VariableService],
  controllers: [VariableController]
})
export class VariableModule {}
