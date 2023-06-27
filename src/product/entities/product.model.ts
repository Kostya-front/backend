import { BeforeCreate, BelongsTo, Column, ForeignKey, HasMany, HasOne, Model, Table } from "sequelize-typescript";
import { DataTypes } from "sequelize";
import { CategoryModel } from "../../category/entities/category.model";
import { ProductInfoModel } from "../../product-info/entities/product-info.model";
import { CharacteristicModel } from "../../characteristic/entities/characteristic.model";
import { BasketItemModel } from "../../basket-item/entities/basket-item.model";
import { WishlistItemModel } from "../../wishlist-item/entities/wishlist-item.model";


@Table({tableName: 'product'})
export class ProductModel extends Model {
  @Column({type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true})
  id: null

  @Column({type: DataTypes.STRING})
  title: string

  @Column({type: DataTypes.DOUBLE})
  price_original: number

  @Column({type: DataTypes.INTEGER, defaultValue: 0})
  discount: number

  @Column({type: DataTypes.DOUBLE})
  price_with_discount: number

  @Column({type: DataTypes.ARRAY(DataTypes.STRING)})
  images: string[]

  @ForeignKey(() => CategoryModel)
  @Column({type: DataTypes.INTEGER})
  categoryId: number

  @BelongsTo(() => CategoryModel)
  category: CategoryModel

  @HasOne(() => ProductInfoModel)
  productInfo: ProductModel

  @HasOne(() => BasketItemModel)
  basketItem: BasketItemModel

  @HasMany(() => CharacteristicModel)
  characteristics: CharacteristicModel[]

  @HasOne(() => WishlistItemModel)

  @BeforeCreate
  static createTotalPrice(product: ProductModel) {
    product.discount ?
      product.price_with_discount = product.price_original - ((product.price_original * product.discount) /100)
      : product.price_with_discount = product.price_original
  }
}