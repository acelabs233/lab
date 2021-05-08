var gulp = require('gulp');
var jshint = require('gulp-jshint');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-scss');
const imagemin = require('gulp-imagemin');


// gulp.task('task1', function(done){
//     gulp.src('js/main.js')
//         .pipe(jshint())
//         .pipe(jshint.reporter('default'));
//     done();
// });

//default task
// gulp.task('default',function(done){
//     gulp.src('js/main.js')
//             .pipe(jshint())
//             .pipe(jshint.reporter('default'));
//     done();
// });


// function name(done){
//     gulp.src('js/main.js')
//     .pipe(jshint())
//     .pipe(jshint.reporter('default'));
//     done();
// }
// exports.name = name;

// var styleSRC = './src/scss/style.scss'
// var styleDEST = './dest/css'

// gulp.task('styles', function(done){
//     gulp.src(styleSRC)
//     .pipe(sourcemaps.init())
//     .on('error', console.error.bind(console))
//     .pipe(autoprefixer({
//         browsers:['last 2 versions']
//     }))
//     .pipe(rename({suffix: '.min'}))
//     .pipe(sourcemaps.write('./'))
//     .pipe(gulp.dest(styleDEST));
//     done();
// })

// var imgSrc = './img/*';
// var imgDest = './dest/img/';
// gulp.task('image', function(done){
//     gulp.src(imgSrc)
//         .pipe(imagemin())
//         .pipe(gulp.dest(imgDest));
    
//     done();
// });

var styleWatch ='./src/**/*.scss';
var jsWatch = './src/**/*.js';

exports.watch = (done)=>{
    gulp.watch(styleWatch, gulp.series('styles'))
    gulp.watch(jsWatch, gulp.series('js'))
}