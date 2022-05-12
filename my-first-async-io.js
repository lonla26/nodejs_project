const fs = require("fs");
const file=process.argv[2]
fs.readFile(file, (err, data) => {
    if (err) {
        return console.log(err);
    }
    const str = data.toString();
    const arrayOfLines = str.split("\n");
    const numberOfLines = arrayOfLines.length - 1;
    console.log(numberOfLines);
});