import { User } from "@/interfaces/user.interface"
import { AuthRepository } from "@/interfaces/auth.interface"
import { UserService } from "@/interfaces/user.interface"

import { ThrowHttpError } from "@/helpers/http.helpers"
import { isValidEmail, isValidPassword } from "@/helpers/user.helpers"
import { signToken } from "@/helpers/auth.helpers"

import bcrypt from "bcrypt"

let authRepository: AuthRepository
let userService: UserService

interface AuthServiceDependencies {
  AuthRepository: AuthRepository
  UserService: UserService
}
class AuthService {
  constructor({ AuthRepository, UserService }: AuthServiceDependencies) {
    authRepository = AuthRepository
    userService = UserService
  }

  async signUp(user: User) {
    if (!user.firstName || !user.lastName || !user.email || !user.password) return ThrowHttpError(400, "Bad request")
    if (!isValidEmail(user.email)) return ThrowHttpError(400, "Enter a valid email")
    if (!isValidPassword(user.password)) return ThrowHttpError(400, "Enter a valid password")
    const userRegister = await userService.getUserByEmail(user.email)
    if (userRegister) return ThrowHttpError(409, "Email is already registered")
    const { code, hashedCode } = this.generateVerificationCode()
    user.verificationCode = hashedCode
    this.sendVerificationEmail(user.email, code)
    return await authRepository.create(user)
  }
  async signIn(user: User) {
    if (!isValidEmail(user.email)) return ThrowHttpError(400, "Enter a valid email")
    if (!user.password) return ThrowHttpError(400, "Enter a password")
    let userExists = await userService.getUserByEmail(user.email)
    if (!userExists) return ThrowHttpError(404, "User dont exists")
    if (!userExists.comparePassword(user.password)) return ThrowHttpError(404, "Email or password invalid")
    userExists = userExists.get()
    delete userExists.password
    const token = signToken({
      id: userExists.id,
      email: userExists.email,
      uid: userExists.uid,
    })
    return { ...userExists, token }
  }
  generateVerificationCode(){
    let code: number|string = Math.floor(Math.random() * 10000); 
    if(code < 1000){ code = code+1000 }
    code = code.toString()
    const salt = bcrypt.genSaltSync(8)
    const hashedCode = bcrypt.hashSync(code, salt)
    return { code, hashedCode }
  }
  async sendVerificationEmail(email: string, code: string){
    return console.log(`Simulated email sended to ${email} and code ${code}.`);
  }
  compareVerificationCode(code: any, verificationCodeHash: string){
    return bcrypt.compareSync(code, verificationCodeHash);
  }
}

export default AuthService
