
const startCase = require('lodash/startCase');

const changed = require('gulp-changed');
const { src, dest, series, parallel, watch } = require('gulp');
const through2 = require('through2');

const customMarkdown = require('./customMR');

const marked = require('marked');
const hbs = require('handlebars');
const katex = require('katex');

const fs = require('fs');

// Setting up the options

const pageTemplate = hbs.compile(fs.readFileSync(__dirname + '/_page.hbs', 'utf8'));

// const renderer = new marked.Renderer();
// const defEm = renderer.em;
// renderer.em = function (text) {
// 	return text.match(/\$|\\/) ? text : defEm(text);
// }

// const markedOptions = {
// 	highlight: function (code, lang) {
// 		return lang ? require('highlight.js').highlight(lang, code).value : code;
// 	},
// 	langPrefix: 'hljs language-',
// 	renderer,
// };



function renderKatex(source) {
	
	const renderKatexString = displayMode => (_, latex) => {
		// console.log('Rendering Latex: ', latex.trim());		
		return katex.renderToString(latex, { displayMode, macros: {
			'\\KK': '\\mathbb{K}',
			'\\qed': '\\square'
		} });
	};

	return source
		.replace(/\$\$([\s\S]*?)\$\$/g, renderKatexString(true))
		.replace(/\$(.*?)\$/g, renderKatexString(false));
}

function renderPage(file, _, cb) {
	if (file.isBuffer()) {
		const markdownSource = file.contents.toString();
		// 	.replace(/\\\\/g, '\\\\\\\\')
		// 	.replace(/\\\{/g, '\\\\{')
		// 	.replace(/\\\}/g, '\\\\}')
		// 	.replace(/([^*])\*([^*])/g, '$1\\*$2')
		// 	.replace(/\&=/g, '\\&=')

		// marked(markdownSource, markedOptions, (err, renderedMarkdown) => {
			
		file.basename = file.stem + '.html';
		file.contents = Buffer.from(pageTemplate({
			title: startCase(file.stem),
			body: customMarkdown(markdownSource),
		}));

		cb(null, file);
		// });
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



