import { Response, Request } from "express"
import { User } from "@/interfaces/user.interface"

export interface AuthController {
  // eslint-disable-next-line no-unused-vars
  signIn(req: Request, res: Response): void
  // eslint-disable-next-line no-unused-vars
  signUp(req: Request, res: Response): void

  verifyCode(req: Request, res: Response): void
}
export interface AuthService {
  // eslint-disable-next-line no-unused-vars
  signIn(user: User): void
  // eslint-disable-next-line no-unused-vars
  signUp(user: User): void

  verifyCode(user: User): void
}
export interface AuthRepository {
  // eslint-disable-next-line no-unused-vars
  create(user: User): User
}
