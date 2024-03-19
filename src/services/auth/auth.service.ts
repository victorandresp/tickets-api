import { User } from "@/interfaces/user.interface"

class AuthService {
  constructor() {}

  async signUp(user: User) {
    console.log(user)
  }
  async signIn(user: User) {
    console.log(user)
  }
}

export default AuthService
