import { User as UserInterface } from "@/interfaces/user.interface"

let _user: UserInterface

interface AuthRepositoryDependencies {
  User: UserInterface
}

class AuthRepository {
  constructor({ User }: AuthRepositoryDependencies) {
    // super(User)
    _user = User
  }

  async create(user: UserInterface) {
    console.log(_user)
    console.log(user)
    // _user.create(user)
  }
}

export default AuthRepository
