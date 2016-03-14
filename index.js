var npmRun = require('npm-run');

npmRun.exec('mocha', function (err, stdout, stderr) {
  console.log(stdout);
});
