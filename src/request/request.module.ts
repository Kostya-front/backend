import { Module } from '@nestjs/common';
import { RequestService } from './request.service';
import { RequestController } from './request.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import { RequestModel } from "./model/request.model";

@Module({
  imports: [SequelizeModule.forFeature([RequestModel])],
  providers: [RequestService],
  controllers: [RequestController]
})
export class RequestModule {}
