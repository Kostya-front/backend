import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { PostInfoModel } from "./entities/post-info.model";
import { CreatePostInfoDto } from "./dto/create-post-info.dto";

@Injectable()
export class PostInfoService {
  constructor(@InjectModel(PostInfoModel) private readonly postInfoModel: typeof PostInfoModel) {}

  async getAll() {
    try {
      return await this.postInfoModel.findAll()
    } catch (e) {
      throw new HttpException('Произошла ошибка', HttpStatus.BAD_REQUEST)
    }
  }

  async create(dto: CreatePostInfoDto) {
    try {
      return await this.postInfoModel.create({...dto})
    } catch (e) {
      throw new HttpException('Произошла ошибка', HttpStatus.BAD_REQUEST)
    }
  }
}
