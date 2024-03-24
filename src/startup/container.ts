import { createContainer } from "awilix"

import startupResolver from "./startup.resolver"
import routesResolver from "@/routes/routes.resolver"

const container = createContainer()

container.register(routesResolver)
container.register(startupResolver)

export default container
