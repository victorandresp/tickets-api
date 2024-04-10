import { UserRepository } from "@/interfaces/user.interface"

let _userRepostory: UserRepository

interface UserServiceDependencies {
  UserRepository: UserRepository
}

class UserService {
  constructor({ UserRepository }: UserServiceDependencies) {
    _userRepostory = UserRepository
  }
  async getUserByEmail(email: string) {
    return _userRepostory.getUserByEmail(email) //Todo: Validate if not exists
  }
}

export default UserService
