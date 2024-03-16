import { Response, Request } from "express"

export interface AuthController {
  // eslint-disable-next-line no-unused-vars
  signIn(req: Request, res: Response): void
  // eslint-disable-next-line no-unused-vars
  signUp(req: Request, res: Response): void
}
