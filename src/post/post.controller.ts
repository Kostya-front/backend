import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { PostService } from "./post.service";
import { CreatePostInfoDto } from "../post-info/dto/create-post-info.dto";
import { CreatePostDto } from "./dto/create-post.dto";

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  getAll() {
    return this.postService.getAll()
  }

  @Post()
  create(@Body() dto: CreatePostInfoDto) {
    return this.postService.create(dto)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: CreatePostDto) {
    return this.postService.update(id, dto)
  }
}
