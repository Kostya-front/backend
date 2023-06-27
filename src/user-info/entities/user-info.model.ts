import { BelongsTo, Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { DataTypes } from "sequelize";
import { UserModel } from "../../user/entities/user.model";


@Table({tableName: 'user-info'})
export class UserInfoModel extends Model {
  @Column({type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true})
  id: number

  @Column({type: DataTypes.STRING})
  firstName: string

  @Column({type: DataTypes.STRING})
  lastName: string

  @Column({type: DataTypes.STRING})
  phone: string

  @Column({type: DataTypes.STRING})
  address: string

  @ForeignKey(() => UserModel)
  @Column({type: DataTypes.INTEGER})
  userId: number

  @BelongsTo(() => UserModel)
  user: UserModel
}