import { asClass } from "awilix"

import AuthRepository from "@/repositories/auth/auth.repository"

const repositoriesResolver = {
  AuthRepository: asClass(AuthRepository).singleton(),
}

export default repositoriesResolver
