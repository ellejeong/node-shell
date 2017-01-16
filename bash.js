// // STDIN might be keyboard input, STDOUT is displayed in the terminal as text.

// var process;

// Output a prompt
process.stdout.write('prompt > ');

//The stdin 'data' event fires after a user types in a line
//you type into it - fun function
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline
  //turn into string; default is buffer

  if(cmd === 'pwd') {
    var cwd = process.cwd();
    process.stdout.write(cwd);
  } else if (cmd === 'date') {
    var date = Date();
    process.stdout.write(date);
  } else {
    process.stdout.write('You typed: ' + cmd);
  }

  process.stdout.write('\nprompt > ');

});





// process.stdin.on('data', function (data) {
//   var cmd = data.toString().trim();
//   var cwd = process.cwd();
//   var date = process.date();
  
//   if(data === 'pwd') {
//     cmd = cwd;
//   } else if (data === 'date') {
//     cmd = date;
//   } else {
//     cmd;
//   }

//   process.stdout.write('You typed: ' + cmd);
//   process.stdout.write('\nprompt > ');

// });




// process.stdin.on('pwd', function (pwd) {
//   //var cmd = pwd.toString().trim(); // remove the newline
//   //var cmd = process.cwd();

//   process.stdout.write(`Current directory: ${process.cwd()}`);
//   process.stdout.write('\nprompt > ');

// });
