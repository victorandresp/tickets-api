import { User } from "@/interfaces/user.interface"
import { AuthRepository } from "@/interfaces/auth.interface"
import { UserService } from "@/interfaces/user.interface"

import { ThrowHttpError } from "@/helpers/http.helpers"
import { isValidEmail, isValidPassword } from "@/helpers/user.helpers"

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
    if (!isValidPassword(user.password)) return ThrowHttpError(400, "Enter a valid password")
    const userRegister = await userService.getUserByEmail(user.email)
    if (userRegister) return ThrowHttpError(409, "Email is already registered")
    return await authRepository.create(user)
  }
  async signIn(user: User) {
    if (!isValidEmail(user.email)) return ThrowHttpError(400, "Enter a valid email")
    const userExists = await userService.getUserByEmail(user.email)
    if (!userExists) return ThrowHttpError(401, "User dont exists")
    return userExists
  }
}

export default AuthService
