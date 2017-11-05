var config = require("./config.js"),
    Helper = require(config.dir.app + "/helper.js"),
    express = require("express"),
    colors = require("colors"),
    log = console.log;

module.exports = function() {

    var SERVER_PORT = Helper.getOpt("--port") || 9500,
        pathname = "/markdown-editor",
        url = "http://localhost:" + SERVER_PORT + pathname + "/edit.html";

    log(("\n[SERVER] Starting at port: "+SERVER_PORT).green);
    var app = express();
    app.use(pathname, express.static(config.dir.src + "/www"));
    app.listen(SERVER_PORT);
    log("Opening:", url.cyan);
    Helper.shellCmd("open " + url);
    
};
