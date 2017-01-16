'use strict';

const fs = require('fs');

function pwd () {
  process.stdout.write(process.cwd());
};

function date () {
  var date = Date();
  process.stdout.write(date)
};

function ls () {
  fs.readdir('.', function(err, filenames) {
    if (err) throw err;
    process.stdout.write(filenames.join('\n'));
    process.stdout.write('\nprompt > ')
  }); 
};

module.exports = {
  pwd: pwd,
  date: date,
  ls: ls
}
