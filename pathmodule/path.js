const path = require('path');

console.log(path.dirname('C:/nodejs/pathmodule/path.js'));
console.log(path.extname('C:/nodejs/pathmodule/path.js'));
console.log(path.basename('C:/nodejs/pathmodule/path.js'));
const mypath = path.parse('C:/nodejs/pathmodule/path.js');
console.log(mypath.root);