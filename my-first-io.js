const fs=require("fs");
const reading =fs.readFileSync(process.argv[2]);
const str=reading.toString();
const arrayOfLines=str.split("\n");
const numberOfLines =arrayOfLines.length - 1;
console.log(numberOfLines);