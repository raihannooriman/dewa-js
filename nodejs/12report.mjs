import process from "process";

process.report.reportOnFatalError = true;
process.report.reportOnSignal = true;
process.report.reportOnUncaughtException = true;
process.report.filename = "report.json";

const sampleError = () => {
  throw new Error("Lapor error");
};
sampleError();
// untuk autogenerate report.json, jalankan nodejs/12report.mjs
