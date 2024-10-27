import winston from "winston"
test("logging with file transport", () => {
  const logger = winston.createLogger({
    level: "info",
    
    transports: [
      new winston.transports.Console({}),
      new winston.transports.File({
        filename: "application.log",
      }),
      new winston.transports.File({
        level: "error",
        filename: "application-error.log",
      })
    ]
  })
  logger.info("Hello Logging")
  logger.error("Hello Logging Error")
})