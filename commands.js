'use strict';

const fs = require('fs');

function pwd (args) {
  process.stdout.write(process.cwd());
  process.stdout.write('\nprompt > ')
}

function date (args) {
  var date = Date();
  process.stdout.write(date)
  process.stdout.write('\nprompt > ')
}

function ls (args) {
  fs.readdir('.', function(err, filenames) {
    if (err) throw err;
    process.stdout.write(filenames.join('\n'));
    process.stdout.write('\nprompt > ')
  }); 
}

function echo (args) { // hello $DEFAULT_USER
  const output = args.split(" ")
  .map(function(arg) {
    return (arg[0] === '$') ? process.env[arg.slice(1)] : arg; // ['hello', 'glebec']
  })
  .join(' '); // 'hello glebec'

  process.stdout.write(output);
  process.stdout.write('\nprompt > ');
}



module.exports = {
  pwd: pwd,
  date: date,
  ls: ls,
  echo: echo
}
