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
    const { body } = req
    const createdUser = await _authService.signUp(body)
    return res.status(201).send(createdUser)
  }
  
  async signIn(req: Request, res: Response) {
    const { body } = req
    const creds = await _authService.signIn(body)
    return res.send(creds)
  }
}

export default AuthController
