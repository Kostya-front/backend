import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { ProductModel } from "./entities/product.model";
import { CreateProductModel } from "./dto/create-product.model";
import { UpdateProductDto } from "./dto/update-product.dto";
import { CharacteristicModel } from "../characteristic/entities/characteristic.model";
import { Op, Sequelize } from "sequelize";
import { ProductInfoService } from "../product-info/product-info.service";

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(ProductModel) private readonly productModel: typeof ProductModel,
    private readonly productInfoService: ProductInfoService
  ) {}

  async getAll() {
    try {
      return await this.productModel.findAll({include: {all: true}})
    } catch (e) {
      throw new HttpException('Произошла ошибка', HttpStatus.BAD_REQUEST)
    }
  }

  async getProductsByCategoryId(categoryId: string) {
    try {
      return await this.productModel.findAll({where: {categoryId}})
    } catch (e) {
      throw new HttpException('Произошла ошибка', HttpStatus.BAD_REQUEST)
    }
  }

  async getOneById(productId: string) {
    try {
      return await this.productModel.findByPk(productId)
    } catch (e) {
      throw new HttpException('Произошла ошибка', HttpStatus.BAD_REQUEST)
    }
  }

  async create(dto: CreateProductModel) {
    try {
      const product = await this.productModel.create({...dto})
      await this.productInfoService.create({productId: product.id})
      return product
    } catch (e) {
      throw new HttpException('Произошла ошибка', HttpStatus.BAD_REQUEST)
    }
  }

  async update(productId: string, dto: UpdateProductDto) {
    try {
      return await this.productModel.update({...dto}, {where: {id: productId}})
    } catch (e) {
      throw new HttpException('Произошла ошибка', HttpStatus.BAD_REQUEST)
    }
  }

  async getFilteredProducts(categoryId: string, filter) {
    try {
      let keys = Object.keys(filter)
      let values = Object.values(filter).flat()

      if(keys.length > 0 && values.length > 0) {
        return this.productModel.findAll({
          where: {
            categoryId
          },
          include: {
            model: CharacteristicModel,
            required: true,
            attributes: [],
            where: {
              [Op.and]:[
                {key: keys},
                {value: values}
              ]
            },
          },
          group: ['ProductModel.id'],
          having: Sequelize.literal(
            `COUNT(DISTINCT "characteristics"."key") = ${keys.length}`
          ),
        })
      }
      else {
        return await this.productModel.findAll({where: {categoryId}})
      }
    } catch (e) {
      throw new HttpException('Произошла ошибка', HttpStatus.BAD_REQUEST)
    }
  }

  async deleteProduct(productId: string) {
    try {
      return await this.productModel.destroy({where: {id: productId}})
    } catch (e) {
      throw new HttpException('Произошла ошибка', HttpStatus.BAD_REQUEST)
    }
  }
}
