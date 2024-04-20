import jwt from "jsonwebtoken"

export function signToken(payload: any) {
  return jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: "1h" }) // To do: add programatic calcule expires date
}
