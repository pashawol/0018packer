'use strict';

global.$ = {
	gulp: require('gulp'), 

	bourbon: require('node-bourbon'),
	cleanCSS: require('gulp-clean-css'),
	gulpif: require('gulp-if'), 
	envDev: false,
	sassGlob: require('gulp-sass-glob'),
	bulkSass: require('gulp-sass-bulk-import'),
	gp: require('gulp-load-plugins' )(),
	browserSync: require('browser-sync').create(),

	path: {
		tasks: require('./gulp/config/tasks.js'),
	}
}
$.path.tasks.forEach(function (taskPath){
		require(taskPath)();
	});
		
		 
$.gulp.task('default', $.gulp.series(
	$.gulp.parallel('svg','pug','scripts:lib','scripts','file'),
	$.gulp.parallel('sass','watch','serv')
	));
