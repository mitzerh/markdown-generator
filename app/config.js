

module.exports = (function(){

    var config = {};

    var dir = __dirname,
        base = dir + "/..";

    config.dir = {
        base: base,
        app: dir,
        lib: dir + "/lib",
        src: base + "/src"
    };

    return config;

}());
