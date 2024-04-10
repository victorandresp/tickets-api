import { User } from "@/interfaces/user.interface"
import { AuthRepository } from "@/interfaces/auth.interface"
import { UserService } from "@/interfaces/user.interface"

import { ThrowHttpError } from "@/helpers/http.helpers"
import { isValidEmail } from "@/helpers/user.helpers"

let authRepository: AuthRepository
let userService: UserService

interface AuthServiceDependencies {
  AuthRepository: AuthRepository
  UserService: UserService
}
class AuthService {
  constructor({ AuthRepository, UserService }: AuthServiceDependencies) {
    authRepository = AuthRepository
    userService = UserService
  }

  async signUp(user: User) {
    if (!user.firstName || !user.lastName || !user.email) return ThrowHttpError(400, "Bad request")
    if (!isValidEmail(user.email)) return ThrowHttpError(400, "Enter a valid email")
    const userRegister = await userService.getUserByEmail(user.email) // TODO: Validate if email exists
    console.log("userRegister", userRegister)
    return await authRepository.create(user)
  }
  async signIn(user: User) {
    console.log(user)
  }
}

export default AuthService
