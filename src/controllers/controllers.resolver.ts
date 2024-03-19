import { asClass } from "awilix"

import AuthController from "@/controllers/auth/auth.controller"

const controllerResolver = {
  AuthController: asClass(AuthController.bind(AuthController)).singleton(),
}

export default controllerResolver
