import { Response, Request } from "express"

export default function (req: Request, res: Response) {
  return res.status(404).send({ status: 404, message: "Resource not found!" })
}
