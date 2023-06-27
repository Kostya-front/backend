import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { WishlistModel } from "./entities/wishlist.model";
import { throwErrors } from "../user/helpers/throwErrors";
import { CreateWishlistDto } from "./dto/create-wishlist.dto";

@Injectable()
export class WishlistService {
  constructor(@InjectModel(WishlistModel) private readonly wishlistModel: typeof WishlistModel) {}

  async getAll() {
    try {
      return await this.wishlistModel.findAll({include: {all: true}})
    } catch (e) {
      throw new HttpException('Произошла ошибка', HttpStatus.BAD_REQUEST)
    }
  }

  async create(dto: CreateWishlistDto) {
    try {
      return await this.wishlistModel.create({...dto})
    } catch (e) {
      throw new HttpException('Произошла ошибка', HttpStatus.BAD_REQUEST)
    }
  }
}
