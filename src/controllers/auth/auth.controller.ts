import { Response, Request } from "express"

let _authService: null | any
class AuthController {
  constructor({ AuthService }: any) {
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

module.exports = AuthController
