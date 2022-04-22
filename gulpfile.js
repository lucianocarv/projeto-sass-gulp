const { src, dest, watch, parallel } = require('gulp')
const rename = require('gulp-rename')
const uglifycss = require('gulp-uglifycss')
const watcher = watch(['src/styles/css/*.css'])
watcher.on(
  'change',
  (exports.default = parallel(function Css() {
    return src('src/styles/css/*.css')
      .pipe(uglifycss())
      .pipe(
        rename({
          extname: '.min.css',
        })
      )
      .pipe(dest('src/styles/css/min'))
  }))
)
