var gulp = require("gulp");
var scss = require("gulp-sass");
var css = require("gulp-clean-css");
var uglify = require("gulp-uglify");
var url = require("url");
var fs = require("fs");
gulp.task("scss", function() {
    return gulp.src("./scss/*.scss")
        .pipe(scss())
        .pipe(css())
        .pipe(gulp.dest("mincss"))
})
gulp.task("js", function() {
    return gulp.src("./js/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("minjs"))
})
gulp.task("watch", function() {
    return gulp.watch("./scss/style.scss", series("scss"))
})
gulp.task("watch", function() {
    return gulp.watch("./js/page.js", series("js"))
})
gulp.task("dev", gulp.series("scss", "js", "watch"));