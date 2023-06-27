import { BelongsTo, Column, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { DataTypes } from "sequelize";
import { BasketItemModel } from "../../basket-item/entities/basket-item.model";
import { UserModel } from "../../user/entities/user.model";


@Table({tableName: 'basket'})
export class BasketModel extends Model {
  @Column({type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true})
  id: number

  @ForeignKey(() => UserModel)
  @Column({type: DataTypes.INTEGER})
  userId: number

  @BelongsTo(() => UserModel)
  user: UserModel

  @HasMany(() => BasketItemModel)
  basketItems: BasketItemModel[]

}