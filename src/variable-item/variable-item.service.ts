import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { VariableItemModel } from "./entities/variable-item.model";
import { CreateVariableItemDto } from "./dto/create-variable-item.dto";
import { VariableModel } from "../variable/entities/variable.model";

@Injectable()
export class VariableItemService {
  constructor(@InjectModel(VariableItemModel) private readonly variableItemModel: typeof VariableItemModel) {}

  async getAll() {
    try {
      return await this.variableItemModel.findAll({include: {all: true}})
    } catch (e) {
      throw new HttpException('Произошла ошибка', HttpStatus.BAD_REQUEST)
    }
  }

  async getAllByVariableId(variableItemId: string) {
    try {
      return await this.variableItemModel.findOne({
        where: {id: variableItemId}
      })
    } catch (e) {
      throw new HttpException('Произошла ошибка', HttpStatus.BAD_REQUEST)
    }
  }

  async create(dto: CreateVariableItemDto) {
    try {
      return await this.variableItemModel.create({...dto})
    } catch (e) {
      throw new HttpException('Произошла ошибка', HttpStatus.BAD_REQUEST)
    }
  }
}
