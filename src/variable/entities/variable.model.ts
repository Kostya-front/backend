import { BelongsTo, Column, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { DataTypes } from "sequelize";
import { ProductInfoModel } from "../../product-info/entities/product-info.model";
import { VariableItemModel } from "../../variable-item/entities/variable-item.model";

@Table({tableName: 'variable'})
export class VariableModel extends Model {
  @Column({type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true})
  id: number

  @Column({type: DataTypes.STRING})
  title: string

  @ForeignKey(() => ProductInfoModel)
  @Column({type: DataTypes.INTEGER})
  productInfoId: ProductInfoModel

  @BelongsTo(() => ProductInfoModel)
  productInfo: ProductInfoModel

  @HasMany(() => VariableItemModel)
  variableItems: VariableItemModel[]
}