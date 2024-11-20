import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({
  tableName: "comments",
})
class Comment extends Model {
  @Column({
    type: DataType.STRING(100),
  })
  declare name: string;

  @Column({
    type: DataType.STRING(400),
  })
  declare profileImg: string;

  @Column({
    type: DataType.STRING(400),
    allowNull: true,
  })
  declare content?: string;

  @Column({
    type: DataType.STRING(400),
    allowNull: true,
  })
  declare bodyImg?: string;
}

export default Comment;
