const http = require("http");
let url = require("url");
const port = process.argv[2];

const parseTime = (time) => {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
}

const unixTime = (time) => {
    return { unixtime: time.getTime() }
}

const parseQuery = (url) => {
    switch (url.pathname) {
        case '/api/parsetime':
            return parseTime(new Date(url.query.iso))
        case '/api/unixtime':
            return unixTime(new Date(url.query.iso))
        default: return 'please enter a valid endpoint url'
    }
}

const server = http.createServer((request, response) => {
    if (request.method === 'GET') {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        url = url.parse(request.url, true);
        response.end(JSON.stringify(parseQuery(url)));
    } else {
        response.writeHead(405);
        response.end();
    }
})
server.listen(+port,()=>{
    console.log('Server listening on http://localhost:%s', port);
})
