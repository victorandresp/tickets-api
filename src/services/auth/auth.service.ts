import { User } from "@/interfaces/user.interface"

import { AuthRepository } from "@/interfaces/auth.interface"

import { ThrowHttpError } from "@/helpers/http.helpers"

let authRepository: AuthRepository

interface AuthServiceDependencies {
  AuthRepository: AuthRepository
}
class AuthService {
  constructor({ AuthRepository }: AuthServiceDependencies) {
    authRepository = AuthRepository
  }

  async signUp(user: User) {
    if (!user.firstName || !user.lastName || !user.email) return ThrowHttpError(400, "Bad request")
    await authRepository.create(user)
  }
  async signIn(user: User) {
    console.log(user)
  }
}

export default AuthService
