import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { VariableModel } from "./entities/variable.model";
import { CreateVariableDto } from "./dto/create-variable.dto";
import { VariableItemModel } from "../variable-item/entities/variable-item.model";

@Injectable()
export class VariableService {
  constructor(@InjectModel(VariableModel) private readonly variableModel:  typeof VariableModel) {}

  async getAll() {
    try {
      return await this.variableModel.findAll({include: {all: true}})
    } catch (e) {
      throw new HttpException('Произошла ошибка', HttpStatus.BAD_REQUEST)
    }
  }

  async getAllByInfoId(productInfoId: string) {
    try {
      return await this.variableModel.findAll({include: {model: VariableItemModel}, where: {productInfoId}})
    } catch (e) {
      throw new HttpException('Произошла ошибка', HttpStatus.BAD_REQUEST)
    }
  }

  async create(dto: CreateVariableDto) {
    try {
      return await this.variableModel.create({...dto})
    } catch (e) {
      throw new HttpException('Произошла ошибка', HttpStatus.BAD_REQUEST)
    }
  }
}
