import express from "express"
import cors from "cors"
import helmet from "helmet"
import compression from "compression"

import NotFoundMiddleware from "@/middlewares/not-found.middleware"

import AuthRoutes from "@/routes/auth.routes"

export default function () {
  const router = express.Router()
  const apiRoutes = express.Router()

  apiRoutes.use(express.json()).use(cors()).use(helmet()).use(compression())

  apiRoutes.use("auth", AuthRoutes)
  router.use("/api/v1", apiRoutes)

  router.use(NotFoundMiddleware)

  return router
}
