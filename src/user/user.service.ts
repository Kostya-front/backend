import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { UserModel } from "./entities/user.model";
import { Error } from "sequelize";
import { throwErrors } from "./helpers/throwErrors";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserInfoService } from "../user-info/user-info.service";
import { BasketService } from "../basket/basket.service";
import { WishlistService } from "../wishlist/wishlist.service";

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserModel) private readonly userModel: typeof UserModel,
    private readonly userInfoService: UserInfoService,
    private readonly basketService: BasketService,
    private readonly wishlistService: WishlistService
  ) {}

  async getAll() {
    try {
      return await this.userModel.findAll({include: {all: true}})
    } catch (e) {
      throw new HttpException('Произошла ошибка', HttpStatus.BAD_REQUEST)
    }
  }

  async getByEmail(email: string) {
    try {
      return await this.userModel.findOne({include: {all: true}, where: {email}})
    }
    catch (e: Error | unknown) {
      throw new HttpException('Произошла ошибка', HttpStatus.BAD_REQUEST)
    }
  }

  async create(dto: CreateUserDto) {
    try {
      const user = await this.userModel.create({...dto})
      const userInfo = await this.userInfoService.create({userId: user.id})
      const basket = await this.basketService.create({userId: user.id})
      const wishlist = await this.wishlistService.create({userId: user.id})

      user.basket = basket
      user.wishlist = wishlist
      user.userInfo = userInfo

      await user.save()
      return user

    } catch (e) {
      throw new HttpException('Произошла ошибка', HttpStatus.BAD_REQUEST)
    }
  }
}
