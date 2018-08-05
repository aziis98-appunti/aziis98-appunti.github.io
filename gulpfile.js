
const startCase = require('lodash/startCase');

const changed = require('gulp-changed');
const connect = require('gulp-connect');

const { src, dest, series, parallel, watch } = require('gulp');

const DEST_PUBLIC = 'public/';
const DEST_ASSETS = 'public/assets/';

// Move this and the relative code to a new module

const through2 = require('through2');
const customMarkdown = require('./customMR');
const hbs = require('handlebars');
const fs = require('fs');

// Uses Handlebars to compile my template html page
const pageTemplate = hbs.compile(fs.readFileSync(__dirname + '/_page.hbs', 'utf8'));

// Custom gulp plugin for rendering my markdown files
function renderPage(file, _, cb) {
	
	if (file.isBuffer()) {
		// Gets the contents of the current Vinyl file
		const markdownSource = file.contents.toString();
		
		// Changes the extension of the file to ".html"
		file.basename = file.stem + '.html';

		// Renders the markdown with my custom markdown
		// renderer and changes the contents of the Vinyl file
		file.contents = Buffer.from(
			// Renders the handlebars template
			pageTemplate({
				// The title of the page will be the startCase
				// of the markdown file's name. For example
				// a file named "spazio-duale.md" will be titled
				// "Spazio Duale"
				title: startCase(file.stem),
				// Renders the markdown source file using my custom renderer
				// that extracts all the latex fragments to remove the interferences
				// and then reinserts them after the call to the marked package.
				body: customMarkdown(markdownSource),
			})
		);

		// Calls the gulp callback
		cb(null, file);
	}
}

// Internal task for rendering the markdown files
// with my custom renderer.
function renderPages() {
	return src(['src/**/*.md'])
		.pipe(changed(DEST_PUBLIC))
		.pipe(through2.obj(renderPage))
		.pipe(dest('public/'))
		.pipe(connect.reload());
}

// Internal task for moving my assets files to
// the output directory.
function moveAssets() {
	return src([ 'src/_assets/**/*' ])
		.pipe(changed(DEST_ASSETS))
		.pipe(dest('public/assets/'))
		.pipe(connect.reload());
}

// Internal task for moving and rendering all the
// source files to the output directory.
const generateFiles = parallel(renderPages, moveAssets)

// Moves static dependency files from the highlight.js and Katex
// packages in the output directory.
function moveStatics() {
	return src([ 
			'node_modules/highlight.js/styles/tomorrow.css',
			'node_modules/katex/dist/**/*' ])
		.pipe(changed(DEST_ASSETS))
		.pipe(dest('public/assets/'));
}

// Internal task for watching source files
function watchSrc() {
	return watch('src/**/*', generateFiles);
}

// Internal task for starting the livereload server
function startServer() {
	connect.server({
		root: 'public',
		port: 8080,
		host: '0.0.0.0',
		livereload: true,
	});
}

// ## Task - Default
// This is the main task used to build all the project.

exports.default = parallel(moveStatics, generateFiles);

// ## Task - Development Server
// Starts up the server, does a first preparation build and 
// the starts watching for file changes in the src directory

exports.dev = parallel(startServer, series(exports.default, watchSrc));



