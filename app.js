const debug = require('debug')('http')
    , http = require('http')
    , {baseRange} = require('./baseRange')
 
http.createServer(function (req, res) {
    debug(req.method + ' ' + req.url);
    res.write(`
    baseRange(0,9): ${JSON.stringify(baseRange(0,9))}
    baseRange(0,9,2,true): ${JSON.stringify(baseRange(0,9,2,true)) }
    `);
    res.end();
}).listen(3000, function () {
    debug('listening 3000');
});
