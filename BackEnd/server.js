const { writeFile, writeFileSync } = require("fs");

const newContent = "some new text again woo";

try {
  writeFileSync("backend/hi.txt", newContent);
  console.log("contentWritten");
} catch (err) {
  console.error(err);
}
