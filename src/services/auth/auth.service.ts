import { User } from "@/interfaces/user.interface"

import { AuthRepository } from "@/interfaces/auth.interface"

let authRepository: AuthRepository

interface AuthServiceDependencies {
  AuthRepository: AuthRepository
}
class AuthService {
  constructor({ AuthRepository }: AuthServiceDependencies) {
    authRepository = AuthRepository
  }

  async signUp(user: User) {
    await authRepository.create(user)
  }
  async signIn(user: User) {
    console.log(user)
  }
}

export default AuthService
