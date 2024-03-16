import { asFunction } from "awilix"

import AuthRoutes from "@/routes/auth.routes"

const routesResolver = {
  User: asFunction(AuthRoutes),
}

export default routesResolver
