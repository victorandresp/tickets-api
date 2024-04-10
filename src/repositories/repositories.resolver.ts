import { asClass } from "awilix"

import AuthRepository from "@/repositories/auth/auth.repository"
import UserRepository from "@/repositories/user/user.repository"

const repositoriesResolver = {
  AuthRepository: asClass(AuthRepository).singleton(),
  UserRepository: asClass(UserRepository).singleton(),
}

export default repositoriesResolver
