import dotenv from "dotenv"
if (process.env.NODE_ENV !== "production") {
  dotenv.config()
}

const config = {
  APP_NAME: process.env.APP_NAME,
  PORT: process.env.PORT,
  API_VERSION: process.env.API_VERSION,
  PG_DB: process.env.PG_DB,
  PG_USERNAME: process.env.PG_USERNAME,
  PG_PASSWORD: process.env.PG_PASSWORD,
  PG_HOST: process.env.PG_HOST,
}

export default config
