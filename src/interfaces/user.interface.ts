export interface User {
  id: number
  uid: string
  firstName: string
  lastName: string
  password?: string
  email: string
  verifiedAccount: boolean
  createdAt: string
  updatedAt: string
  // eslint-disable-next-line no-unused-vars
  comparePassword(password: string): boolean
}
export interface UserService {
  // eslint-disable-next-line no-unused-vars
  getUserByEmail(email: string): User
}
export interface UserRepository {
  // eslint-disable-next-line no-unused-vars
  getUserByEmail(email: string): User
}
