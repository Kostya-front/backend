import { BelongsTo, Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { DataTypes } from "sequelize";
import { ProductModel } from "../../product/entities/product.model";


@Table({tableName: 'characteristic'})
export class CharacteristicModel extends Model {
  @Column({type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true})
  id: number

  @Column({type: DataTypes.STRING})
  key: string

  @Column({type: DataTypes.STRING})
  value: string

  @ForeignKey(() => ProductModel)
  @Column({type: DataTypes.INTEGER})
  productId: number

  @BelongsTo(() => ProductModel)
  product: ProductModel
}