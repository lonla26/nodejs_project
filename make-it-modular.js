const filteredFiles=require('./mymodule.js');
var dir = process.argv[2];
var extName = process.argv[3];

filteredFiles(dir,extName,(err,data)=>{
    if(err){
        console.log(err);
    }
    data.forEach(element => {
        console.log(element)
    });
});