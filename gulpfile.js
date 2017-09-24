"use strict";

var gulp = require("gulp");

gulp.task("copy-html", function () {
    return gulp.src("./src/views/**/*")
        .pipe(gulp.dest("./app/views"));
});

gulp.task("default", ["copy-html"]);
