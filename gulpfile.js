var gulp=require("gulp"),
	webserver=require("gulp-webserver"),
	livereload=require("gulp-livereload"),
	uglify=require("gulp-uglify")
	imagemin=require("gulp-imagemin"),
	pngquant=require("imagemin-pngquant"),
	rename=require("gulp-rename");

// 注册任务：
gulp.task("webserver",function(){
	gulp.src('./dist/html').pipe(webserver({
		livereload:true,
		open:true
	}))
});
// html任务：
gulp.task("html",function(){
	return gulp.src("src/**/*.html")
	.pipe(gulp.dest("dist/html"));
	//指明源文件路径并输出到发布环境
});

// sass任务：
gulp.task("css",function(){
	return gulp.src("src/css/**/*.css")
	.pipe(gulp.dest("dist/css"));
})

// script压缩任务：
gulp.task("script",function(){
	return gulp.src("src/js/*.js")
		.pipe(uglify({preserveComment:"some"})) //压缩并保留注释
		.pipe(gulp.dest("dist/js"))
})

// 监听任务：
gulp.task("watch",function(){
	gulp.watch("*.html",["html"]);//监听根目录下所有的html
});

//默认执行任务：
gulp.task("default",["sass","webserver","html","script","watch"]);