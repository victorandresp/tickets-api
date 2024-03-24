import { Router } from "express"

// import { AuthController } from "@/interfaces/auth.interface"

// interface AuthRoutesDependencies {
//   AuthController: AuthController
// }

export default function () {
  const router = Router()
  // console.log(AuthController)

  router.post("/signup", function (req: any, res: any) {
    console.log("called")
    return res.status(201).send({ message: "test" })
  })
  // router.post("/signin", AuthController.signIn)

  return router
}
