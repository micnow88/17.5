const os = require('os');
var colors = require('colors');

function timeFormat() {
	var uptime = os.uptime();
	var day = Math.floor(uptime / 86400);
	var hour = Math.floor((uptime-(day * 86400)) / 3600);
	var minut = Math.floor((uptime-(day * 86400 + hour * 3600)) / 60);
	var second = uptime - (day * 86400) - (hour * 3600) - (minut * 60);
	console.log(colors.rainbow('Uptime: '),day, ' days, ', hour, ' hours, ', minut, ' minuts, ', second, ' seconds.');
}

exports.timeS = timeFormat;