// // STDIN might be keyboard input
// // STDOUT is displayed in the terminal as text

var commands = require('./commands.js');

// Output a prompt
process.stdout.write('prompt > ');

process.stdin.on('data', function (data) {
  const cmd = data.toString().trim(); 

  if(commands[cmd]) {
    commands[cmd]();
  } else {
    process.stdout.write('Command not found: ' + cmd);
  }

  process.stdout.write('\nprompt > ');

});