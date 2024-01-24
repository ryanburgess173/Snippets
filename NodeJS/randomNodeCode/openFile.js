var fs = require('fs');

fs.writeFile('mynewfile2.txt', 'w', function(err, file){
  if(err) throw err;
  console.log('saved!');
});