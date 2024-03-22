import modelsResolver from "@/models/models.resolver"
import routesResolver from "@/routes/routes.resolver"
import controllerResolver from "@/controllers/controllers.resolver"
import servicesResolver from "@/services/services.resolver"
import repositoriesResolver from "@/repositories/repositories.resolver"
import container from "./container"

container.register(modelsResolver)
container.register(routesResolver)
container.register(controllerResolver)
container.register(servicesResolver)
container.register(repositoriesResolver)
