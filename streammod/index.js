const fs = require('fs');
const http = require('http');
const { callbackify } = require('util');

const server = http.createServer((req,res)=>{
    // fs.readFile('index.txt',(err,data)=>{
    //     if (err) return console.log(err);
    //     console.log(data.toString());
    // })

    // const rstream = fs.createReadStream('input.txt');

    // rstream.on('data',(chunk)=>{
    //     res.write(chunk);
    // });
    // rstream.on('end',()=>{
    //     res.end();
    // });
    // rstream.on('error',(err)=>{
    //     res.end('Page Not Found');
    // });

    const rstream  = fs.createReadStream('input.txt');
    rstream.pipe(res);
})
server.listen(8000);