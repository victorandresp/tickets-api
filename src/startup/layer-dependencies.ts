// Resolver for dependencies needed when the db is connected in runtime.
import modelsResolver from "@/models/models.resolver"

import container from "./container"

container.register(modelsResolver)
