const fs = require('fs');


//fs.mkdirSync('akbar');
//fs.writeFileSync('pra1.js','document.write(23);');
//fs.appendFileSync('pra1.js','console.log(45);');
//fs.renameSync('pra1.js','pra2.js');
const data = fs.readFileSync('pra2.js','utf-8');
console.log(data);
//fs.unlinkSync('pra2.js');
//fs.rmdirSync('akbar');

