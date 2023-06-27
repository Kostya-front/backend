import { BeforeCreate, BelongsTo, Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { DataTypes } from "sequelize";
import { VariableModel } from "../../variable/entities/variable.model";


@Table({tableName: 'variable-item'})
export class VariableItemModel extends Model {
  @Column({type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true})
  id: number

  @Column({type: DataTypes.STRING})
  title: string

  @Column({type: DataTypes.STRING})
  productTitle: string

  @Column({type: DataTypes.DOUBLE})
  price_original: number

  @Column({type: DataTypes.INTEGER, defaultValue: 0})
  discount: number

  @Column({type: DataTypes.DOUBLE})
  price_with_discount: number

  @ForeignKey(() => VariableModel)
  @Column({type: DataTypes.INTEGER})
  variableId: number

  @BelongsTo(() => VariableModel)
  variable: VariableModel

  @BeforeCreate
  static createTotalPrice(variableItem: VariableItemModel) {
    variableItem.discount ?
      variableItem.price_with_discount = variableItem.price_original - ((variableItem.price_original * variableItem.discount) /100)
      : variableItem.price_with_discount = variableItem.price_original
  }
}