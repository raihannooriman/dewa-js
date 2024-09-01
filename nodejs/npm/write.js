import fs from "fs";

export const writeToFile = (path, content) => {
  fs.writeFileSync(path, content);
};
