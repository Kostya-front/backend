import { BelongsTo, Column, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { DataTypes } from "sequelize";
import { CategoryModel } from "../../category/entities/category.model";
import { FilterItemModel } from "../../filter-item/entities/filter-item.model";


@Table({tableName: 'filter'})
export class FilterModel extends Model {
  @Column({type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true})
  id: number

  @ForeignKey(() => CategoryModel)
  @Column({type: DataTypes.INTEGER})
  categoryId: number

  @BelongsTo(() => CategoryModel)
  category: CategoryModel

  @HasMany(() => FilterItemModel)
  filterItems: FilterItemModel[]
}