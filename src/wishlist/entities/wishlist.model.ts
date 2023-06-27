import { BelongsTo, Column, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { DataTypes } from "sequelize";
import { WishlistItemModel } from "../../wishlist-item/entities/wishlist-item.model";
import { UserModel } from "../../user/entities/user.model";


@Table({tableName: 'wishlist'})
export class WishlistModel extends Model {
  @Column({type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true})
  id: number

  @ForeignKey(() => UserModel)
  @Column({type: DataTypes.INTEGER})
  userId: number

  @BelongsTo(() => UserModel)
  user: UserModel

  @HasMany(() => WishlistItemModel)
  wishlistItems: WishlistItemModel[]
}