var gulp = require('gulp'), 
	gutil =require('gulp-util')
	coffee = require('gulp-coffee'),
	concat = require('gulp-concat');
var coffeSources = ["components/coffe/*.coffe"];
var jsSoruces =[ 
"components/scripts/rclick.js",
"components/scripts/pixgrid.js",
"components/scripts/tagline.js",
"components/scripts/template.js"
];

	 
	gulp.task('coffee',function(){
		gulp.src(coffeSources)
		.pipe(coffee({bare:true}))
		.on('error', gutil.log)
		.pipe(gulp.dest("components/scripts"));
	});

	gulp.task('js',function(){
		gulp.src (jsSoruces)
			.pipe(concat('script.js'))
			.pipe(gulp.dest('builds/development/js'));
	});