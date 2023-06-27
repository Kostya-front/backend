import { BelongsTo, Column, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { DataTypes } from "sequelize";
import { ProductModel } from "../../product/entities/product.model";
import { VariableModel } from "../../variable/entities/variable.model";

@Table({tableName: 'product-info'})
export class ProductInfoModel extends Model {
  @Column({type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true})
  id: number

  @Column({type: DataTypes.STRING})
  description: string

  @ForeignKey(() => ProductModel)
  @Column({type: DataTypes.INTEGER})
  productId: number

  @BelongsTo(() => ProductModel)
  product: ProductModel

  @HasMany(() => VariableModel)
  variables: VariableModel
}