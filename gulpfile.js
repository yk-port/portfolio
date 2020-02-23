// gulpプラグインの読み込み
const { src, dest, watch } = require('gulp');
// Sassをコンパイルするプラグインの読み込み
const sass = require('gulp-sass');
// SCSSをまとめて読み込むプラグインの読み込み
const sassGlob = require('gulp-sass-glob');

/**
 * Sassをコンパイルするタスク
 */
const compileSass = () =>
  // style.scssファイルを取得
  src('css/style.scss')
    // Sassの@importにおけるglobを有効にする
    .pipe(sassGlob())
    // Sassのコンパイルを実行
    .pipe(
      // コンパイル後のCSSを展開
      sass({ outputStyle: 'expanded' })
    )
    // root直下にstyle.cssという名前で保存
    .pipe(dest('./'));

/**
 * Sassファイルを監視し、変更があったらSassを変換する
 */
const watchSassFiles = () => watch("./css/**/*.scss", compileSass);

// gulpというコマンドを実行した時、watchSassFilesが実行されるようにする
exports.default = watchSassFiles;