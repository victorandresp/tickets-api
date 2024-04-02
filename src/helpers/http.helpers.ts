interface ErrorHttp extends Error {
  status: number
  message: string
}
export function ThrowHttpError(code: number = 500, message: string = "Server internal error") {
  const error = new Error() as ErrorHttp
  error.status = code
  error.message = message
  throw error
}
