/* global require, __dirname */
var gulp = require('gulp'),
    debug = require('gulp-debug'),
    concat = require('gulp-concat'),
    project = require('./package.json'),
    dest = 'dist';

gulp.task('clean', clean);
gulp.task('server', ['watch'], function (callback) {
    exec("npm run server", callback);
});
gulp.task('watch', watch);
gulp.task('tsd:install', tsdInstall);
gulp.task('default', ['clean'], build);
gulp.task('typescript', ['tsd:install'], function (callback) {
    typescript(callback);
});

gulp.task('typescript', typescript);


function exec(cmd, fn, options) {
    var proc = require('child_process').exec,
        child = proc(cmd, options, fn);

    child.stdout.on('data', function (data) {
        console.log(data);
    });

    child.stderr.on('data', function (data) {
        console.log(data);
    });
}

function clean() {
    var del = require('del');
    return del(dest);
}

function tsdInstall(callback) {
    var bundle = require('./tsd.json').bundle,
        del = require('del');

    del(bundle, function () {
        exec('npm run tsd', callback);
    });
}

function typescript(callback, watch) {
    if (watch) {
        exec("npm run tsc:moment:w", function (error) {
            if (error) callback(error);
            exec("npm run tsc:money:w", callback);
        });

        return;
    }

    exec("npm run tsc:moment", function (error) {
        if (error) callback(error);
        exec("npm run tsc:money", callback);
    });
}

function server() {
    var express = require('express'),
        livereload = require('connect-livereload'),
        tinylr = require('tiny-lr'),
        path = require('path'),
        lrport = 35729;

    var listener = tinylr();
    listener.listen(lrport);

    function notifyLiveReload(event) {
        var config = {
            body: {
                files: [path.relative(__dirname, event.path)]
            }
        }
        listener.changed(config);
    }

    var app = express();
    app.use(livereload({ port: lrport }));

    app.use('/bower_components', express.static(__dirname + '/bower_components'));
    app.use('/dist', express.static(__dirname + '/dist'));
    app.use('/', express.static(__dirname + '/demo'));
    app.use('*', express.static(__dirname + '/demo'));

    watch();
    gulp.watch(['demo/**/*.css', 'dist/**/*.css'], notifyLiveReload);
    gulp.watch(['demo/**/*.js', 'dist/**/*.js'], notifyLiveReload);
    gulp.watch(['demo/**/*.html', 'dist/**/*.html'], notifyLiveReload);

    app.listen(4000);
}

function watch() {
    typescript(null, true);
}

function build() {
    typescript();
}