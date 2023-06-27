import { BelongsTo, Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { DataTypes } from "sequelize";
import { WishlistModel } from "../../wishlist/entities/wishlist.model";
import { ProductModel } from "../../product/entities/product.model";

@Table({tableName: 'wishlist-item'})
export class WishlistItemModel extends Model {
  @Column({type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true})
  id: number

  @ForeignKey(() => WishlistModel)
  @Column({type: DataTypes.INTEGER})
  wishlistId: number

  @BelongsTo(() => WishlistModel)
  wishlist: WishlistModel

  @ForeignKey(() => ProductModel)
  @Column({type: DataTypes.INTEGER})
  productId: number

  @BelongsTo(() => ProductModel)
  product: ProductModel
}