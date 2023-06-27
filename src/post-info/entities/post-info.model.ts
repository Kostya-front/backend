import { BelongsTo, Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { DataTypes } from "sequelize";
import { PostModel } from "../../post/entities/post.model";


@Table({tableName: 'post-info'})
export class PostInfoModel extends Model {
  @Column({type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true})
  id: number

  @Column({type: DataTypes.STRING})
  text: string

  @ForeignKey(() => PostModel)
  @Column({type: DataTypes.INTEGER})
  postId: number

  @BelongsTo(() => PostModel)
  post: PostModel
}