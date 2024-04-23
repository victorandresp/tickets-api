import { Response, Request, NextFunction } from "express"
import { ThrowHttpError } from "@/helpers/http.helpers"
import jwt from "jsonwebtoken"

export default function (req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers["authorization"]
  const token = authHeader && authHeader.split(" ")[1]
  if (!token) return ThrowHttpError(401, "Unauthorized")
  jwt.verify(token, process.env.JWT_SECRET as string, (err: any) => {
    if (err) return res.sendStatus(403)
    next()
  })
}
