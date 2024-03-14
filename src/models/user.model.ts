import { DataTypes, Model } from "sequelize"
const { compareSync } = require("bcryptjs")
import { sequelize } from "@/index"
class User extends Model {
  declare firstName: string
  declare lastName: string
  declare password: string

  getFullName(): string {
    return this.firstName + " " + this.lastName
  }
  comparePassword(password: string): boolean {
    return compareSync(password, this.password)
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    uid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    verifiedAccount: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    timestamps: true,
    sequelize,
    modelName: "User",
  },
)

export default User
