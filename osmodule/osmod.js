const os = require('os');

console.log(os.arch());
console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type());

const freemamory = os.freemem();
console.log(`${freemamory /1024/1024/1024}`);

const totalmamory = os.totalmem();
console.log(`${totalmamory /1024/1024/1024}`);