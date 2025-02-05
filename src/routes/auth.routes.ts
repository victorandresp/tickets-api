import { Router } from "express"

import { AuthController as AuthControllerInterface } from "@/interfaces/auth.interface"
import JwtAuth from "@/middlewares/jwt-auth.middleware"

interface AuthRoutesDependencies {
  AuthController: AuthControllerInterface
}

export default function ({ AuthController }: AuthRoutesDependencies) {
  const router = Router()

  router.post("/signup", AuthController.signUp)
  router.post("/signin", AuthController.signIn)
  router.post("/verify-code", AuthController.verifyCode)
  router.post("/test", [JwtAuth], (req: any, res: any) => {
    return res.status(200).send("Its a valid session")
  })

  return router
}
