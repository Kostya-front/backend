import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { WishlistItemModel } from "./entities/wishlist-item.model";

@Injectable()
export class WishlistItemService {
  constructor(@InjectModel(WishlistItemModel) private readonly wishlistItemModel: typeof WishlistItemModel) {}

  async getAll() {
    try {
      return await this.wishlistItemModel.findAll()
    } catch (e) {
      throw new HttpException('Произошла ошибка', HttpStatus.BAD_REQUEST)
    }
  }

  async create(dto) {
    try {
      const [wishlistItem, created] = await this.wishlistItemModel.findOrCreate({
        ...dto, defaults: { wishlistId: dto.wishlistId, productId: dto.productId }
      })
      if(!created) {
        return await this.wishlistItemModel.destroy({where: {id: wishlistItem.id}})
      }
      return wishlistItem
    } catch (e) {
      throw new HttpException(JSON.stringify(e), HttpStatus.BAD_REQUEST)
    }
  }
}
