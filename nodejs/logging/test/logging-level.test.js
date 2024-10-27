import winston from "winston";

// test("create new logger with console transport", () => {
//   const logger = winston.createLogger({
//     level: "silly",
//     transports: [
//       new winston.transports.Console({})
//     ]
//   });
//   logger.log({ level: "error", message: "Untuk menampilkan pesan error" });
//   logger.log({ level: "warn", message: "Untuk menampilkan pesan warning" });
//   logger.log({ level: "info", message: "Untuk menampilkan pesan info" });
//   logger.log({ level: "http", message: "Untuk menampilkan pesan http" });
//   logger.log({ level: "verbose", message: "Untuk menampilkan pesan verbose" });
//   logger.log({ level: "debug", message: "Untuk menampilkan pesan debug" });
//   logger.log({ level: "silly", message: "Untuk menampilkan pesan silly" });
//   expect(logger).toBeDefined
// })

// versi singkat

test("logging with shortcut function", () => {
  const logger = winston.createLogger({
    level: "silly",
    transports: [
      new winston.transports.Console({})
    ]
  });
  logger.error("Untuk menampilkan pesan error");
  logger.warn("Untuk menampilkan pesan warning");
  logger.info("Untuk menampilkan pesan info");
  logger.http("Untuk menampilkan pesan http");
  logger.verbose("Untuk menampilkan pesan verbose");
  logger.debug("Untuk menampilkan pesan debug");
  logger.silly("Untuk menampilkan pesan silly");
})
