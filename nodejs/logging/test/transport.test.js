import winston from "winston";
import TransportStream from "winston-transport";

test("create new logger with new transport", () => {
  class myTransport extends TransportStream{
    constructor(options) {
      super(options);
    }
    log(info, next) {
      console.log(`${info.level.toUpperCase()}: ${info.message}`);
      next();
    }
  }
  const logger = winston.createLogger({
    level: "silly",
    transports: [
      new myTransport({
      })
    ]
  });
  logger.error("pesan error");
  logger.warn("pesan warning");
  logger.info("pesan info");
  logger.http("pesan http");
  logger.verbose("pesan verbose");
  logger.debug("pesan debug");
  logger.silly("pesan silly");
})