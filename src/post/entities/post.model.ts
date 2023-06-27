import { Column, HasOne, Model, Table } from "sequelize-typescript";
import { DataTypes } from "sequelize";
import { PostInfoModel } from "../../post-info/entities/post-info.model";


@Table({tableName: 'post'})
export class PostModel extends Model {
  @Column({type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true})
  id: number

  @Column({type: DataTypes.STRING})
  title: string

  @Column({type: DataTypes.STRING})
  short_description: string

  @Column({type: DataTypes.STRING})
  image: string

  @HasOne(() => PostInfoModel)
  postInfos: PostInfoModel[]
}