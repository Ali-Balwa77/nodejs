const fs = require('fs');
const biodata ={
    Name : "Akbar",
    Age : 23,
    Adderes : "Meta",
}

const json = JSON.stringify(biodata);
console.log(json);
fs.writeFile('json1.json',json,(err,)=>{
    console.log('done');
})
fs.readFile('json1.json','utf-8',(err,data)=>{
    const orgdata = JSON.parse(data);
    console.log(data);
    console.log(orgdata);
})