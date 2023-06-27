import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { PostModel } from "./entities/post.model";
import { PostInfoService } from "../post-info/post-info.service";
import { CreatePostDto } from "./dto/create-post.dto";
import { CreatePostInfoDto } from "../post-info/dto/create-post-info.dto";

@Injectable()
export class PostService {
  constructor(
    @InjectModel(PostModel) private readonly postModel: typeof PostModel,
    private readonly postInfoService: PostInfoService
  ) {}

  async getAll() {
    try {
      return await this.postModel.findAll()
    } catch (e) {
      throw new HttpException('Произошла ошибка', HttpStatus.BAD_REQUEST)
    }
  }

  async create(dto: CreatePostInfoDto) {
    try {
      const post = await this.postModel.create({...dto})
      return await this.postInfoService.create({postId: post.id})
    } catch (e) {
      throw new HttpException('Произошла ошибка', HttpStatus.BAD_REQUEST)
    }
  }

  async update(id: string, dto: CreatePostDto) {
    try {
      return await this.postModel.update({...dto}, {where: {id}})
    } catch (e) {
      throw new HttpException('Произошла ошибка', HttpStatus.BAD_REQUEST)
    }
  }
}
