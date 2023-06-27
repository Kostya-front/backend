import { Module } from '@nestjs/common';
import { PostInfoController } from './post-info.controller';
import { PostInfoService } from './post-info.service';
import { SequelizeModule } from "@nestjs/sequelize";
import { PostInfoModel } from "./entities/post-info.model";

@Module({
  imports: [SequelizeModule.forFeature([PostInfoModel])],
  controllers: [PostInfoController],
  providers: [PostInfoService],
  exports: [PostInfoModule]
})
export class PostInfoModule {}
