import { Body, Controller, Get, Post } from "@nestjs/common";
import { PostInfoService } from "./post-info.service";
import { CreatePostInfoDto } from "./dto/create-post-info.dto";

@Controller('post-info')
export class PostInfoController {
  constructor(private readonly postInfoService: PostInfoService) {}

  @Get()
  getAll() {
    return this.postInfoService.getAll()
  }

  @Post()
  create(@Body() dto: CreatePostInfoDto) {
    return this.postInfoService.create(dto)
  }
}
