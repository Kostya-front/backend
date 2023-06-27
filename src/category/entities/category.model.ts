import { Column, HasMany, HasOne, Model, Table } from "sequelize-typescript";
import { DataTypes } from "sequelize";
import { ProductModel } from "../../product/entities/product.model";
import { FilterModel } from "../../filter/entities/filter.model";

@Table({tableName: 'category'})
export class CategoryModel extends Model {
  @Column({type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true})
  id: null

  @Column({type: DataTypes.STRING, unique: true})
  title: string

  @HasMany(() => ProductModel)
  products: ProductModel[]

  @HasOne(() => FilterModel)
  filter: FilterModel
}