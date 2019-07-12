const os = require('os');
var colors = require('colors');
const timeFormat = require('./timeFormat');

colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});

function getOSinfo() {
	var type = os.type();
	var release = os.release();
	var cpu = os.cpus()[0].model;
	var uptime = os.uptime();
	var userInfo = os.userInfo();
	if(type === 'Darwin') {
   		type = 'OSX';
	} else if(type === 'Windows_NT') {
    	type = 'Windows';
	}
	console.log('System:'.silly, type);
	console.log('Release:'.info, release);
	console.log('Processor:'.input, cpu);
	timeFormat.timeS();
	console.log('User name:'.debug, userInfo.username);
	console.log('Home dir:'.error, userInfo.homedir);	
}

exports.print = getOSinfo;