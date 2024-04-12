export function isValidEmail(email: string) {
  const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  return emailRegEx.test(email)
}
export function isValidPassword(password: string) {
  const passRegEx = /^[A-Za-z0-9]{6,}$/
  return passRegEx.test(password)
}
