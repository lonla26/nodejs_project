const fs=require("fs");
const path = require("path");
const dirNamePath =process.argv[2];
const fileExt=process.argv[3];
fs.readdir(dirNamePath,(err,list)=>{
    if(err){
        console.log(err);
    }
    const filtered=list.filter(el=>path.extname(el)===`.${fileExt}`).join("\n");
    console.log(filtered);
})