// // STDIN might be keyboard input
// // STDOUT is displayed in the terminal as text

const commands = require('./commands.js');

// Output a prompt
process.stdout.write('\nprompt > ');

process.stdin.on('data', function (data) {
  const tokens = data.toString().trim().split(' '); // echo hello $DEFAULT_USER
  const cmd = tokens[0]; // echo
  const args = tokens.slice(1).join(' '); // hello $DEFAULT_USER

  if(commands[cmd]) {
    commands[cmd](args);
  } else {
    process.stdout.write('Command not found: ' + cmd);
  }

});