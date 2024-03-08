import container from "@/startup/container"
import { Sequelize } from "sequelize"

const server = container.resolve("app")
const config = container.resolve("config")

export const sequelize = new Sequelize(config.PG_DB, config.PG_USERNAME, config.PG_PASSWORD, {
  host: config.PG_HOST,
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
})

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.")
    server.start()
  })
  .catch((error) => console.error(error))
