import { asClass } from "awilix"

import AuthService from "@/services/auth/auth.service"

const servicesResolver = {
  AuthService: asClass(AuthService).singleton(),
}

export default servicesResolver
