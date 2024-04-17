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
    return await _userRepostory.getUserByEmail(email)
  }
}

export default UserService
