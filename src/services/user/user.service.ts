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
    console.log(email)
    console.log(_userRepostory)
  }
}

export default UserService
