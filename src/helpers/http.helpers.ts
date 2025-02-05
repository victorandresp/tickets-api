interface ErrorHttp extends Error {
  status: number
  message: string
  data?: object
}
export function ThrowHttpError(code: number = 500, message: string = "Server internal error", data?: object) {
  const error = new Error() as ErrorHttp
  error.status = code
  error.message = message
  if(data) error.data = data
  throw error
}
