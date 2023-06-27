import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { FilterModel } from "./entities/filter.model";
import { CreateFilterDto } from "./dto/create-filter.dto";

@Injectable()
export class FilterService {
  constructor(@InjectModel(FilterModel) private readonly filterModel: typeof FilterModel) {}

  async getAll() {
    try {
      return await this.filterModel.findAll({include: {all: true}})
    } catch (e) {
      throw new HttpException('Произошла ошибка', HttpStatus.BAD_REQUEST)
    }
  }

  async create(dto: CreateFilterDto) {
    try {
      return await this.filterModel.create({...dto})
    } catch (e) {
      throw new HttpException('Произошла ошибка', HttpStatus.BAD_REQUEST)
    }
  }
}
