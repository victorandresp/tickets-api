import dotenv from "dotenv"
if (process.env.NODE_ENV !== "production") {
  dotenv.config()
}

const config = {
  APP_NAME: process.env.APP_NAME,
  PORT: process.env.APP_NAME,
  API_VERSION: process.env.APP_NAME,
}

export default config
