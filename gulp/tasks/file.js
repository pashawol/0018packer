module.exports = function (){

	
	$.gulp.task('removeFile', function () {
 
		return $.gulp.src('public/libs', {read: false}).pipe($.clean());
});
	$.gulp.task('file', function () {
 
		return $.gulp.src(['sourse/libs/**']).pipe($.gulp.dest('public/libs')).on('end',$.browserSync.reload);
});

}