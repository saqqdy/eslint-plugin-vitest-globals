'use strict'

/**
 * @see https://github.com/vitest-dev/vitest/blob/main/packages/vitest/src/constants.ts
 */

const globals = {
	// suite
	suite: true,
	test: true,
	describe: true,
	it: true,
	// skip
	xtest: true,
	xit: true,
	xdescribe: true,
	// bench
	bench: true,
	benchmark: true,
	// chai
	chai: true,
	expect: true,
	assert: true,
	// typecheck
	expectTypeOf: true,
	assertType: true,
	// utils
	vitest: true,
	vi: true,
	// hooks
	beforeAll: true,
	afterAll: true,
	beforeEach: true,
	afterEach: true,
	onTestFinished: true,
	onTestFailed: true
}

const plugin = {
	rules: {},
	environments: {
		env: {
			globals
		}
	}
}

// Define configs after plugin object to allow self-reference
plugin.configs = {
	base: require('./configs/base'),
	recommended: require('./configs/recommended')
}

// ESLint 9+ Flat Config support
plugin.configs['flat/recommended'] = {
	plugins: {
		'vitest-globals': plugin
	},
	languageOptions: {
		globals
	}
}

plugin.configs['flat/base'] = {
	plugins: {
		'vitest-globals': plugin
	}
}

module.exports = plugin
