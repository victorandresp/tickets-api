import { Router } from "express"

import { AuthController } from "@/interfaces/auth.interface"

interface AuthRoutesDependencies {
  AuthController: AuthController
}

export default function ({ AuthController }: AuthRoutesDependencies) {
  const router = Router()

  router.post("/signup", AuthController.signUp)
  router.post("/signin", AuthController.signIn)

  return router
}
