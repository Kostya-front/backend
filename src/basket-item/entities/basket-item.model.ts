import {
  AfterUpdate,
  BeforeCreate,
  BeforeUpdate,
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table
} from "sequelize-typescript";
import { DataTypes } from "sequelize";
import { BasketModel } from "../../basket/entities/basket.model";
import { ProductModel } from "../../product/entities/product.model";


@Table({tableName: 'basket-item'})
export class BasketItemModel extends Model {
  @Column({type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true})
  id: number

  @Column({type: DataTypes.INTEGER, defaultValue: 1})
  count: number

  @Column({type: DataTypes.DOUBLE, defaultValue: 0})
  sum: number

  @ForeignKey(() => BasketModel)
  @Column({type: DataTypes.INTEGER})
  basketId: number

  @BelongsTo(() => BasketModel)
  basket: BasketModel

  @ForeignKey(() => ProductModel)
  @Column({type: DataTypes.INTEGER})
  productId: number

  @BelongsTo(() => ProductModel)
  product: ProductModel

  @BeforeCreate
  static async createTotalSum(basketItem: BasketItemModel) {
    const price_with_discount = await basketItem.$get('product').then((resp) => resp.price_with_discount)
    basketItem.sum = price_with_discount
  }

  @AfterUpdate
  static async updateTotalSum(basketItem: BasketItemModel) {
    const price_with_discount = await basketItem.$get('product').then((resp) => resp.price_with_discount)
    basketItem.sum = basketItem.count * price_with_discount
  }
}