import jwt from "jsonwebtoken"

interface PayloadJWT {
  uid: string
  id: number
  email: string
}

export function signToken(payload: PayloadJWT) {
  return jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: "1h" })
}
