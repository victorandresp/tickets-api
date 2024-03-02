import dotenv from "dotenv"
if (process.env.NODE_ENV !== "production") {
  dotenv.config()
}

const config = {
  APP_NAME: process.env.APP_NAME,
  PORT: process.env.PORT,
  API_VERSION: process.env.API_VERSION,
}

export default config
