import express, { Express, Router } from "express"
import { Config } from "@/config/config.interface"

interface ServerDependecies {
  config: Config
  router: Router
}

let _express: Express
let _config: Config

export class Server {
  constructor({ config, router }: ServerDependecies) {
    _config = config
    _express = express().use(router)
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
