const os = require('os');
const OSinfo = require('./modules/OSinfo');

process.stdin.setEncoding('utf-8');

process.stdout.write('Switch: \n - /versions - if You want to check node versions,\n - /lang - if You want know what language You use,\n - /getOSinfo - if you want to know something about Your system, \n - /exit - exit program.\n')

process.stdin.on('readable', function() {
    // tutaj treść tego co ma się wykonać w momencie odczytania wejścia.
    var input = process.stdin.read();

    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
        	case '/exit': 
            	process.stdout.write('Quitting app!\n');
            	process.exit();
            	break;
            case '/versions':
            	console.log('Node version: ', process.versions.node);
            	break;
            case '/lang':
            	console.log('Language: ', process.env.LANG);
            	break;
            case '/getOSinfo':
            	OSinfo.print();
            	break;
        	default:
            	process.stderr.write('Wrong instruction!\n');
    	}
    }
});
