import { Column, HasMany, HasOne, Model, Table } from "sequelize-typescript";
import { DataTypes } from "sequelize";
import { BasketModel } from "../../basket/entities/basket.model";
import { WishlistModel } from "../../wishlist/entities/wishlist.model";
import { UserInfoModel } from "../../user-info/entities/user-info.model";

@Table({tableName: 'user'})
export class UserModel extends Model {
  @Column({type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true})
  id: number

  @Column({type: DataTypes.STRING, unique: true})
  username: string

  @Column({type: DataTypes.STRING, unique: true})
  email: string

  @Column({type: DataTypes.STRING})
  password: string

  @HasOne(() => BasketModel)
  basket: BasketModel

  @HasOne(() => WishlistModel)
  wishlist: WishlistModel

  @HasOne(() => UserInfoModel)
  userInfo: UserInfoModel
}