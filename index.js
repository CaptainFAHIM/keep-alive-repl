const ping = require("ping");

const host = ["captains-music--mehedihfahim12.repl.co",];
const cfg = {timeout: 5000};

setInterval(function() {
    host.forEach(function(host){
        ping.sys.probe(host, function(isAlive){
            let msg = isAlive ? 'host ' + host + ' is alive' : 'host ' + host + ' is dead';
            console.log(msg);
        }, cfg)
    });
}, 5000);
