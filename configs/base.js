'use strict'

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

module.exports = {
	env: {
		node: true,
		browser: true,
		commonjs: true,
		es6: true
	},
	plugins: ['vitest-globals'],
	rules: {},
	globals
}
