import { User as UserInterface } from "@/interfaces/user.interface"

let _user: any

interface AuthRepositoryDependencies {
  User: UserInterface
}

class AuthRepository {
  constructor({ User }: AuthRepositoryDependencies) {
    // super(User)
    _user = User
  }

  async create(user: UserInterface) {
    const createdUser = await _user.create(user) // todo: capture error
    return createdUser
  }
}

export default AuthRepository
