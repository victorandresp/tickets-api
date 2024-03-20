import { asClass, asValue, asFunction } from "awilix"
import { Server } from "."
import config from "@/config"
import Routes from "@/routes/index"

const startupResolver = {
  app: asClass(Server).singleton(),
  router: asFunction(Routes).singleton(),
  config: asValue(config),
}

export default startupResolver
