import { asClass } from "awilix"

import AuthService from "@/services/auth/auth.service"
import UserService from "@/services/user/user.service"

const servicesResolver = {
  AuthService: asClass(AuthService).singleton(),
  UserService: asClass(UserService).singleton(),
}

export default servicesResolver
