'use strict'

module.exports = {
	rules: {},
	configs: {
		base: require('./configs/base'),
		recommended: require('./configs/recommended')
	},
	environments: {
		env: {
			globals: {
				suite: true,
				test: true,
				describe: true,
				it: true,
				expect: true,
				assert: true,
				vitest: true,
				vi: true,
				beforeAll: true,
				afterAll: true,
				beforeEach: true,
				afterEach: true
			}
		}
	}
}
