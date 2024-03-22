import { User } from "@/interfaces/user.interface"

let authRepository: any
class AuthService {
  constructor({ AuthRepository }: any) {
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
