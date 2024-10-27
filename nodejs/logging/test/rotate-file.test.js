import winston from "winston"
import DailyRotateFile from "winston-daily-rotate-file"
test("logging with daily rotate file", () => {
  const logger = winston.createLogger({
    level: "info",
    
    transports: [
      new winston.transports.Console({}),
      new DailyRotateFile({
        handleExceptions: true,
        handleRejections: true,
        filename: "app-%DATE%.log",
        zippedArchive: true,
        maxSize: "1m",
        maxFiles: "14d"
      })
    ]
  })
  logger.info("Hello Logging")
  logger.error("Hello Logging Error")
})
hello()