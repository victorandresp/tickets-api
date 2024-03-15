import { asValue } from "awilix"

import User from "@/models/user.model"

const modelsResolver = {
  User: asValue(User),
}

export default modelsResolver
