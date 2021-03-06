const http=require("http");
const map = require('through2-map')
const port=process.argv[2];
const server=http.createServer((request,response)=>{
    if(request.method==="POST"){
        response.writeHead(200, {'Content-Type': 'text/plain'})
        request.pipe(map((chunk)=>{
            return chunk.toString().toUpperCase()
        })).pipe(response);
    }else{
        response.writeHead(405);
    }
})
server.listen(+port,()=>{
    console.log('Server listening on http://localhost:%s', port);
})

