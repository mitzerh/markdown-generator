var shell = require('shelljs'),
    stripAnsi = require('strip-ansi'),
    mkdirp = require('mkdirp'),
    fs = require('fs'),
    _ = require('lodash');

module.exports = (function(){

    var Helper = {};

    Helper.getOpt = function(id) {
        var args = {};
        process.argv.forEach(function (val, index, array) {
            var sp = val.split('='),
                param = sp[0] || '',
                data = sp[1];

            if (param.length > 0 && /^--/i.test(param) && typeof data !== 'undefined') {
                data = (data === 'true') ? true : (data === 'false') ? false : data;
                args[param.replace(/^--/i, '')] = data;
            }

        });

        return (args[id]) ? args[id] : undefined;

    };

    Helper.getRawArgs = function() {
        var arr = process.argv;
        return arr.slice(2) || [];
    };

    /**
     * create directory
     */
    Helper.createDir = function(path) {
        if (!Helper.isPathExists(path)) {
            mkdirp.sync(path);
        }
    };

    Helper.isPathExists = function(path) {
        var stat = true;

        try {
            stat = fs.existsSync(path);
        } catch(err1) {
            try {
                stat = fs.statSync(path);
            } catch(err2) {
                stat = false;
            }
        }

        return stat;
    };

    // if path is a file
    Helper.isFileExists = function(path) {
        var ret = false;
        if (path && Helper.isPathExists(path)) {
            var stat = fs.statSync(path);
            if (stat.isFile()) {
                ret = true;
            }
        }
        return ret;
    };

    Helper.shellCmd = function(cmd, basePath, verbose) {

        var cmdArr = [];
        if (basePath) {
            cmdArr.push("cd " + basePath);
        }
        cmdArr.push(cmd);
        var res = shell.exec(cmdArr.join(" && "), { silent: (verbose) ? false : true });
        return stripAnsi(_.trim(res.output || res.stdout || ""));

    };

    /**
     * read utf8 file
     */
    Helper.readFile = function(path) {
        var ret = false;
        if (Helper.isPathExists(path)) {
            ret = fs.readFileSync(path, { encoding: 'utf8' });
        }
        return ret;
    };

    /**
     * write to utf8 file
     */
    Helper.writeFile = function(path, content) {
        fs.writeFileSync(path, content, { encoding: 'utf8' });
    };

    Helper.btoa = function(str) {
        var buffer;

        if (str instanceof Buffer) {
            buffer = str;
        } else {
            buffer = new Buffer(str.toString(), 'binary');
        }
        return buffer.toString('base64');
    };

    return Helper;

}());
