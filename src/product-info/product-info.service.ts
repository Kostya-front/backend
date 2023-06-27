import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { ProductInfoModel } from "./entities/product-info.model";
import { CreateProductInfoDto } from "./dto/create-product-info.dto";

@Injectable()
export class ProductInfoService {
  constructor(@InjectModel(ProductInfoModel) private readonly productInfoModel: typeof ProductInfoModel) {}

  async getAll() {
    try {
      return await this.productInfoModel.findAll({include: {all: true}})
    } catch (e) {
      throw new HttpException('Произошла ошибка', HttpStatus.BAD_REQUEST)
    }
  }

  async getOneById(productId: string) {
    try {
      return await this.productInfoModel.findOne({include: {all: true}, where: {productId}})
    } catch (e) {
      throw new HttpException('Произошла ошибка', HttpStatus.BAD_REQUEST)
    }
  }

  async create(dto: CreateProductInfoDto) {
    try {
      return await this.productInfoModel.create({...dto})
    } catch (e) {
      throw new HttpException('Произошла ошибка', HttpStatus.BAD_REQUEST)
    }
  }

  async update(productId: string, dto: CreateProductInfoDto) {
    try {
      return await this.productInfoModel.update({...dto}, {where: {id: productId}})
    } catch (e) {
      throw new HttpException('Произошла ошибка', HttpStatus.BAD_REQUEST)
    }
  }
}
