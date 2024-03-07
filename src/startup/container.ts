import { createContainer } from "awilix"
import startupResolver from "./startup.resolver"

const container = createContainer()

container.register(startupResolver)

export default container
