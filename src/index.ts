import container from "@/startup/container"

const server = container.resolve("app")

server.start()
