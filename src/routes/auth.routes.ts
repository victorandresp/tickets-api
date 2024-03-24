import { Router } from "express"

import { AuthController as AuthControllerInterface } from "@/interfaces/auth.interface"

interface AuthRoutesDependencies {
  AuthController: AuthControllerInterface
}

export default function ({ AuthController }: AuthRoutesDependencies) {
  const router = Router()

  router.post("/signup", AuthController.signUp)
  router.post("/signin", AuthController.signIn)

  return router
}
