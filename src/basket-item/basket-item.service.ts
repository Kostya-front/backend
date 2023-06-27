import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { BasketItemModel } from "./entities/basket-item.model";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";
import { CreateBasketItemDto } from "./dto/create-basket-item.dto";
import { ProductModel } from "../product/entities/product.model";

@Injectable()
export class BasketItemService {
  constructor(
    @InjectModel(BasketItemModel) private readonly basketItemModel: typeof BasketItemModel,
    private readonly jwtService: JwtService
  ) {}

  async getAll() {
    try {
      return await this.basketItemModel.findAll({include: {all: true}})
    } catch (e) {
      throw new HttpException('Произошла ошибка', HttpStatus.BAD_REQUEST)
    }
  }

  async getAllByBasketId(request: Request) {
    try {
      return await this.basketItemModel.findAll({where: {basketId: this.returnBasketId(request)}, include: {all: true}})
    } catch (e) {
      throw new HttpException('Произошла ошибка', HttpStatus.BAD_REQUEST)
    }
  }

  async create(request: Request, dto: CreateBasketItemDto) {
    try {
      const basketItem = await this.basketItemModel.findOne({
        include: {model: ProductModel},
        where: {productId: dto.productId, basketId: this.returnBasketId(request)}}
      )

      if(basketItem) {
        ++basketItem.count
        await basketItem.save()
        return basketItem
      }

      return await this.basketItemModel.create(
        {...dto, basketId: this.returnBasketId(request)},
      )
    } catch (e) {
      throw new HttpException('Произошла ошибка', HttpStatus.BAD_REQUEST)
    }
  }

  async updateBasketItem(basketItemId:string, dto: CreateBasketItemDto) {
    try {
      const basketItem = await this.basketItemModel.findOne({where: {id: basketItemId}})

      if(basketItem.count + dto.count <= 0 ){
        return await this.basketItemModel.destroy({where: {id: basketItemId}})
      }
      await this.basketItemModel.update({...dto, count: basketItem.count += dto.count}, {where: {id: basketItemId}})
      return basketItem
    } catch (e) {
      throw new HttpException('Произошла ошибка', HttpStatus.BAD_REQUEST)
    }
  }

  async changeCountProduct(request: Request, productId: string, dto: CreateBasketItemDto) {
    try {
      const basketItem = await this.basketItemModel.findOrCreate({
        where: {basketId: this.returnBasketId(request), productId },
        defaults: {count: dto.count}
      })

      await this.basketItemModel.update({count: dto.count},{
        where: {basketId: this.returnBasketId(request), productId: basketItem[0].productId}
      })
      basketItem[0].count = dto.count

      return basketItem[0]
    } catch (e) {
      throw new HttpException('Произошла ошибка', HttpStatus.BAD_REQUEST)
    }
  }

  async deleteOne(basketItemId: string) {
    try {
      return await this.basketItemModel.destroy({where: {id: basketItemId}})
    } catch (e) {
      throw new HttpException('Произошла ошибка', HttpStatus.BAD_REQUEST)
    }
  }

  private returnBasketId(request: Request) {
    const token = request.headers['authorization'].split(' ')[1]
    if(token) {
      return this.jwtService.decode(token)['basket']['id'] || 0
    }
    return 0
  }
}
