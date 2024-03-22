import { asFunction } from "awilix"

import AuthRoutes from "@/routes/auth.routes"

const routesResolver = {
  AuthRoutes: asFunction(AuthRoutes),
}

export default routesResolver
