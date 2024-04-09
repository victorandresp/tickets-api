import { User as UserInterface } from "@/interfaces/user.interface"

let _user: UserInterface

interface UserRepositoryDependencies {
  User: UserInterface
}

class UserRepository {
  constructor({ User }: UserRepositoryDependencies) {
    // super(User)
    _user = User
  }

  async getUserByEmail(email: string) {
    console.log(email)
    console.log(_user)
  }
}

export default UserRepository
