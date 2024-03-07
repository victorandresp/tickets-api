import { createContainer, asClass, asValue } from "awilix"
import config from "@/config"

import { Server } from "."

const container = createContainer()

container.register({
  app: asClass(Server).singleton(),
  // router: asFunction(Routes).singleton(),
  config: asValue(config),
})

export default container
