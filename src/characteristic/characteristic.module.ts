import { Module } from '@nestjs/common';
import { CharacteristicController } from './characteristic.controller';
import { CharacteristicService } from './characteristic.service';
import { SequelizeModule } from "@nestjs/sequelize";
import { CharacteristicModel } from "./entities/characteristic.model";

@Module({
  imports: [SequelizeModule.forFeature([CharacteristicModel])],
  controllers: [CharacteristicController],
  providers: [CharacteristicService]
})
export class CharacteristicModule {}
