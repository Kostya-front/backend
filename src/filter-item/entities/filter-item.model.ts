import { BelongsTo, Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { DataTypes } from "sequelize";
import { FilterModel } from "../../filter/entities/filter.model";

@Table({tableName: 'filter-item'})
export class FilterItemModel extends Model {
  @Column({type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true})
  id: number

  @Column({type: DataTypes.STRING})
  key: string

  @ForeignKey(() => FilterModel)
  @Column({type: DataTypes.INTEGER})
  filterId: number

  @BelongsTo(() => FilterModel)
  filter: FilterModel
}