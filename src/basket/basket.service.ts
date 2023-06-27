import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { BasketModel } from "./entities/basket.model";
import { throwErrors } from "../user/helpers/throwErrors";
import { CreateBasketDto } from "./dto/create-basket.dto";

@Injectable()
export class BasketService {
  constructor(@InjectModel(BasketModel) private readonly basketModel: typeof BasketModel) {}

  async getAll() {
    try {
      return await this.basketModel.findAll({include: {all: true}})
    } catch (e) {
      throw new HttpException('Произошла ошибка', HttpStatus.BAD_REQUEST)
    }
  }

  async create(dto: CreateBasketDto) {
    try {
      return await this.basketModel.create({...dto})
    } catch (e) {
      throw new HttpException('Произошла ошибка', HttpStatus.BAD_REQUEST)
    }
  }
}
