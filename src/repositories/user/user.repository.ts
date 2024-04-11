import { User as UserInterface } from "@/interfaces/user.interface"

let _user: any

interface UserRepositoryDependencies {
  User: UserInterface
}

class UserRepository {
  constructor({ User }: UserRepositoryDependencies) {
    _user = User
  }

  async getUserByEmail(email: string) {
    const user = await _user.findOne({ where: { email } })
    return user
  }
}

export default UserRepository
