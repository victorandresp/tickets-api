import { asClass, asValue } from "awilix"
import { Server } from "."
import config from "@/config"

const startupResolver = {
  app: asClass(Server).singleton(),
  // router: asFunction(Routes).singleton(),
  config: asValue(config),
}

export default startupResolver
