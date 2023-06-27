import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { RequestModel } from "./model/request.model";
import { CreateRequestDto } from "./dto/create-request.dto";

@Injectable()
export class RequestService {
  constructor(@InjectModel(RequestModel) private readonly requestModel: typeof RequestModel) {}

  async getAll() {
    try {
      return await this.requestModel.findAll()
    } catch (e) {
      throw new HttpException('Произошла ошибка', HttpStatus.BAD_REQUEST)
    }
  }

  async create(dto: CreateRequestDto) {
    try {
      return await this.requestModel.create({ ...dto })
    } catch (e) {
      throw new HttpException('Произошла ошибка', HttpStatus.BAD_REQUEST)
    }
  }
}
