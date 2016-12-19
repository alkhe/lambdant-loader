const { parse, generate, serialize } = require('lambdant')

module.exports = function(source) {
	this.cacheable()
	return serialize(generate(parse(source)))
}
