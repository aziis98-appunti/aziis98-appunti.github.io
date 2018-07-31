
const marked = require('marked');

module.exports = function (text) {

	const buffer1 = [];
	const buffer2 = [];

	const tempMd = text.replace(/\$\$[\s\S]+?\$\$/g, function (latex) {
		buffer1.push(latex);
		return '@buffer-' + (buffer1.length - 1) + '@';
	}).replace(/\$.+?\$/g, function (latex) {
		buffer2.push(latex);
		return '@nodisp-buffer-' + (buffer2.length - 1) + '@';
	});

	const tmpHtml = marked(tempMd);

	return tmpHtml.replace(/@buffer-(\d+)@/g, function (match, index) {
		return buffer1[parseInt(index)];
	}).replace(/@nodisp-buffer-(\d+)@/g, function (match, index) {
		return buffer2[parseInt(index)];
	});

}