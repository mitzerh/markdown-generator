var config = require("./app/config.js"),
    Helper = require(config.dir.app + "/helper.js"),
    rawdeflate = require(config.dir.lib + "/rawdeflate.js"),
    log = console.log,
    colors = require("colors");

module.exports = (function(){

    var App = function() {

        var Proto = this;

        Proto.parseFile = function(markdownFilePath) {
            var ret = null;
            if (Helper.isPathExists(markdownFilePath)) {
                var str = Helper.readFile(markdownFilePath);
                ret = Proto.parseString(str);
            }
            return ret;
        };

        Proto.parseString = function(str) {
            str = (typeof str === "string") ? str : "";
            return Helper.btoa(rawdeflate(unescape(encodeURIComponent(str))));
        };

    };

    return (new App());

}());
