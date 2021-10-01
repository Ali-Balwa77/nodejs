const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
   
    //console.log(req.url);
    if (req.url == '/') {
        res.end('<h1>Hello Home Page</h1>'); 
    }else if (req.url == '/about') {
        res.end('<h1>Hello AboutUs Page</h1>');
    }
    else if (req.url == '/contact') {
        res.end('<h1>Hello ContactUs Page</h1>');
    }
    else if (req.url == '/userapi') {    
        fs.readFile(`${__dirname}/USERAPI/userapi.json`,'utf-8',(err,data)=>{
            const orgdata = JSON.parse(data);
            console.log(orgdata[1].name);
            res.end(orgdata[1].name);
        })
    }else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end('<h1>404, Page is Not Found</h1>');
    }
})
server.listen(8000);
