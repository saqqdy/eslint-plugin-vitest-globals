module.exports = {
	extends: '@eslint-sets/ts',
	overrides: [
		{
			files: ['test/**/*.js'],
			rules: {
				'no-only-tests/no-only-tests': 'off'
			}
		}
	],
	rules: {}
}
