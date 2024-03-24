import { createContainer } from "awilix"

import startupResolver from "./startup.resolver"
import routesResolver from "@/routes/routes.resolver"
import controllerResolver from "@/controllers/controllers.resolver"
import servicesResolver from "@/services/services.resolver"
import repositoriesResolver from "@/repositories/repositories.resolver"

const container = createContainer()

container.register(controllerResolver)
container.register(servicesResolver)
container.register(repositoriesResolver)
container.register(routesResolver)
container.register(startupResolver)

export default container
