
const startCase = require('lodash/startCase');

const changed = require('gulp-changed');
const { src, dest, series, parallel, watch } = require('gulp');
const through2 = require('through2');

const customMarkdown = require('./customMR');

const hbs = require('handlebars');

const fs = require('fs');

// Setting up the options

const pageTemplate = hbs.compile(fs.readFileSync(__dirname + '/_page.hbs', 'utf8'));

function renderPage(file, _, cb) {
	if (file.isBuffer()) {
		const markdownSource = file.contents.toString();
			
		file.basename = file.stem + '.html';
		file.contents = Buffer.from(pageTemplate({
			title: startCase(file.stem),
			body: customMarkdown(markdownSource),
		}));

		cb(null, file);
	}
}

function renderPages() {
	return src(['src/**/*.md'])
		.pipe(changed(DEST_PUBLIC))
		.pipe(through2.obj(renderPage))
		.pipe(dest('public/'));
}

const DEST_PUBLIC = 'public/assets/';
const DEST_ASSETS = 'public/assets/';

function moveStatics() {
	return src([ 
			'node_modules/highlight.js/styles/tomorrow.css',
			'node_modules/katex/dist/**/*' ])
		.pipe(changed(DEST_ASSETS))
		.pipe(dest('public/assets/'));
}

function moveAssets() {
	return src([ 'src/_assets/**/*' ])
		.pipe(changed(DEST_ASSETS))
		.pipe(dest('public/assets/'));
}

function watchSrc() {
	return watch('src/**/*', common);
}

const common = parallel(renderPages, moveAssets)

exports.default = parallel(moveStatics, common);

exports.watch = series(exports.default, watchSrc);



