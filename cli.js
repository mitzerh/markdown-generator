#!/usr/bin/env node

var log = console.log;

var cmd = process.argv[2],
    cmdArr = ["start"];

if (cmd === "--help") {
    log("Commands:", cmdArr.join(", "));
} else if (cmdArr.indexOf(cmd) === 1) {
    log("Enter a command..");
    log("Commands:", cmdArr.join(", "));
    process.exit(1);
}

var CMD_APP = null;

switch (cmd) {
    case "start":
        CMD_APP = require("./app/server.js");
        break;
}

if (CMD_APP) {
    CMD_APP();
}
