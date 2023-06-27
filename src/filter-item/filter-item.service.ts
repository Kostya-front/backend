import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { FilterItemModel } from "./entities/filter-item.model";
import { CreateFilterItemDto } from "./dto/create-filter-item.dto";
import { FilterModel } from "../filter/entities/filter.model";

@Injectable()
export class FilterItemService {
  constructor(@InjectModel(FilterItemModel) private readonly filterItemModel: typeof FilterItemModel) {}

  async getAll() {
    try {
      return await this.filterItemModel.findAll({include: {all: true}})
    } catch (e) {
      throw new HttpException('Произошла ошибка', HttpStatus.BAD_REQUEST)
    }
  }

  async create(dto: CreateFilterItemDto) {
    try {
      return await this.filterItemModel.create({ ...dto })
    } catch (e) {
      throw new HttpException('Произошла ошибка', HttpStatus.BAD_REQUEST)
    }
  }

  async getFilterItemByFilterId(filterId: string) {
    try {
      return await this.filterItemModel.findAll({ include: {
          model: FilterModel,
          where: {id: filterId}
        }})
    } catch (e) {
      throw new HttpException('Произошла ошибка', HttpStatus.BAD_REQUEST)
    }
  }
}
