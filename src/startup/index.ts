import express, { Express } from "express"

let _express: Express | null = null
let _config: any | null = null

export class Server {
  constructor({ config }: any) {
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
