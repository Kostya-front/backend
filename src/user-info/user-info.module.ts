import { Module } from '@nestjs/common';
import { UserInfoService } from './user-info.service';
import { UserInfoController } from './user-info.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import { UserInfoModel } from "./entities/user-info.model";

@Module({
  imports: [SequelizeModule.forFeature([UserInfoModel])],
  providers: [UserInfoService],
  controllers: [UserInfoController],
  exports: [UserInfoModule]
})
export class UserInfoModule {}
