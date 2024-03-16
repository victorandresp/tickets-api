import modelsResolver from "@/models/models.resolver"
import routesResolver from "@/routes/routes.resolver"
import container from "./container"

container.register(modelsResolver)
container.register(routesResolver)
