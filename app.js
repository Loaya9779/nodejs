const fs = require("fs");

const stream = fs.createReadStream("./data/books.json", {
    encoding: "utf8"
});

stream.on("data", (chunk) => {
    console.log(`DATA: ${chunk}`);
});

stream.on("end", () => {
    console.log("Finished reading the file.");
});

stream.on("error", (error) => {
    console.error("Error:", error.message);
});