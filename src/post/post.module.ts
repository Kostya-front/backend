import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { SequelizeModule } from "@nestjs/sequelize";
import { PostModel } from "./entities/post.model";
import { PostInfoModule } from "../post-info/post-info.module";
import { PostInfoService } from "../post-info/post-info.service";
import { PostInfoModel } from "../post-info/entities/post-info.model";

@Module({
  imports: [SequelizeModule.forFeature([PostModel, PostInfoModel]), PostInfoModule],
  controllers: [PostController],
  providers: [PostService, PostInfoService]
})
export class PostModule {}
