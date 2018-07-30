
const fs = require('fs')
const path = require('path')

const globby = require('globby')
const marked = require('marked')

marked.setOptions({
	highlight: function (code, lang) {
		return lang ? require('highlight.js').highlight(lang, code).value : code;
	},
	langPrefix: 'hljs language-'
})

const _ = require('lodash')

const config = {
	inputFiles: [
		'src/**/*.md'
	],
	outDirectory: 'out',
}

const htmlTemplate = function () {
	return `
<!DOCTYPE html>
<html>
<head>
	<title>${_.startCase(path.basename(this.file, '.md'))}</title>
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0>

	<link rel="stylesheet" href="/node_modules/highlight.js/styles/tomorrow.css">
	<link rel="stylesheet" href="/assets/fonts/cmun-serif.css">
	<link rel="stylesheet" href="/assets/fonts/cmun-sans.css">
	<link rel="stylesheet" href="/style.css">
</head>
<body lang="en">
	<!--  Rendered Markdown -->
${this.parseResult.trim()}
	<!--  End -->

	<link rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/katex@0.10.0-beta/dist/katex.min.css"
		integrity="sha384-9tPv11A+glH/on/wEu99NVwDPwkMQESOocs/ZGXPoIiLE8MU/qkqUcZ3zzL+6DuH"
		crossorigin="anonymous">
	<script
		src="https://cdn.jsdelivr.net/npm/katex@0.10.0-beta/dist/katex.min.js"
		integrity="sha384-U8Vrjwb8fuHMt6ewaCy8uqeUXv4oitYACKdB0VziCerzt011iQ/0TqlSlv8MReCm"
		crossorigin="anonymous"></script>
	<script
		src="https://cdn.jsdelivr.net/npm/katex@0.10.0-beta/dist/contrib/auto-render.min.js"
		integrity="sha384-aGfk5kvhIq5x1x5YdvCp4upKZYnA8ckafviDpmWEKp4afOZEqOli7gqSnh8I6enH"
		crossorigin="anonymous"></script>
	<script>
		renderMathInElement(document.body, {
			delimiters: [
				{left: "$$", right: "$$", display: true},
				{left: "$", right: "$", display: false},
			]
		});
	</script>

</body>
</html>
	`;
}

globby(config.inputFiles).then(files => {
	files.forEach(file => {
		console.log('Parsing: ' + file)

		const segments = file.split(/\\|\//)
		const outPath = path.join(
			config.outDirectory,
			...segments.slice(1, segments.length - 1),
			path.basename(segments[segments.length - 1], '.md') + '.html'
		)

		fs.readFile(file, 'utf8', (err, source) => {
			marked(source, (err, parseResult) => {
				if (err) console.log(err);

				fs.writeFileSync(outPath, htmlTemplate.call({
					file,
					parseResult,
				}))
			})
		})
	})

})