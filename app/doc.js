var config = require("./config.js"),
    Helper = require("./helper.js"),
    mdeditor = require(config.dir.base + "/index.js");

var str = Helper.readFile(config.dir.base + "/doc.md"),
    hash = mdeditor.parseString(str);

var readme = [
    "# ORION Static Build",
    "Because STASH markdown is not great, here's the link to the documentation instead: [DOCUMENTATION](http://node.tpa.foxnews.com/markdown/editor/#"+hash+")"
].join("\n\n");

Helper.writeFile(config.dir.base + "/readme.md", readme);
