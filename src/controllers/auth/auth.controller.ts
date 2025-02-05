import { Response, Request } from "express"
import { AuthService } from "@/interfaces/auth.interface"

let _authService: AuthService

interface AuthControllerDependencies {
  AuthService: AuthService
}
class AuthController {
  constructor({ AuthService }: AuthControllerDependencies) {
    _authService = AuthService
  }
  async signUp(req: Request, res: Response) {
    try {
      const { body } = req
      const createdUser = await _authService.signUp(body)
      return res.status(201).send(createdUser)
    } catch (error: any) {
      return res.status(error.status).send(error)
    }
  }

  async signIn(req: Request, res: Response) {
    try {
      const { body } = req
      const creds = await _authService.signIn(body)
      return res.send(creds)
    } catch (error: any) {
      return res.status(error.status).send(error)
    }
  }

  async verifyCode(req: Request, res: Response) {
    try {
      const { body } = req
      const creds = await _authService.verifyCode(body)
      return res.send(creds)
    } catch (error: any) {
      return res.status(error.status).send(error)
    }
  }
}

export default AuthController
