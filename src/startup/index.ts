import express, { Express } from "express"
import { Config } from "@/config/config.interface"

interface ServerDependecies {
  config: Config
}

let _express: Express
let _config: Config

export class Server {
  constructor({ config }: ServerDependecies) {
    _config = config
    _express = express()
  }

  start() {
    return new Promise<void>((resolve) => {
      _express?.listen(_config?.PORT, () => {
        console.log(`${_config.APP_NAME} ${_config.API_VERSION} running on port ${_config.PORT}`)
      })
      resolve()
    })
  }
}
