import { Column, Model, Table } from "sequelize-typescript";
import { DataTypes } from "sequelize";


@Table({tableName: 'request'})
export class RequestModel extends Model {
  @Column({type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true})
  id: number

  @Column({type: DataTypes.STRING})
  name: string

  @Column({type: DataTypes.STRING})
  phone: string
}