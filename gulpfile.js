"use strict";

var gulp = require("gulp");

gulp.task("copy-html", function () {
    return gulp.src("./src/views/**/*")
        .pipe(gulp.dest("./app/views"));
});

gulp.task("copy-css", function () {
    return gulp.src("./src/styles/**/*")
        .pipe(gulp.dest("./app/styles"));
});

gulp.task("default", ["copy-html", "copy-css"]);
