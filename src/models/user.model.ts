import { DataTypes, Model } from "sequelize"
import bcrypt from "bcrypt"
import { sequelize } from "@/index"

interface UserAttributes {
  id: number
  password: string
}

interface UserInstance extends Model<UserAttributes>, UserAttributes {}
class User extends Model {
  declare firstName: string
  declare lastName: string
  declare password: string

  getFullName(): string {
    return this.firstName + " " + this.lastName
  }
  comparePassword(password: string): boolean {
    return bcrypt.compareSync(password, this.password)
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
    verificationCode:{
      type: DataTypes.STRING,
      allowNull: true
    },
    verifiedAccount: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    timestamps: true,
    sequelize,
    modelName: "User",
    tableName: "users",
  },
)

User.addHook("beforeCreate", (user: UserInstance) => {
  const salt = bcrypt.genSaltSync(10)
  const hashedPassword = bcrypt.hashSync(user.password, salt)
  user.password = hashedPassword
})

export default User
