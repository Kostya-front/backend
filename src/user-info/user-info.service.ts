import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { UserInfoModel } from "./entities/user-info.model";
import { throwErrors } from "../user/helpers/throwErrors";
import { CreateUserInfoDto } from "./dto/create-user-info.dto";

@Injectable()
export class UserInfoService {
  constructor(@InjectModel(UserInfoModel) private readonly userInfoModel: typeof UserInfoModel) {}

  async getAll() {
    try {
      return await this.userInfoModel.findAll({include: {all: true}})
    } catch (e) {
      throw new HttpException('Произошла ошибка', HttpStatus.BAD_REQUEST)
    }
  }

  async create(dto: CreateUserInfoDto) {
    try {
      return await this.userInfoModel.create({...dto})
    } catch (e) {
      throw new HttpException('Произошла ошибка', HttpStatus.BAD_REQUEST)
    }
  }
}
