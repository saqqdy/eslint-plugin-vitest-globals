import { describe, expect, it } from 'vitest'
import plugin from '../index.js'

describe('eslint-plugin-vitest-globals', () => {
	describe('exports', () => {
		it('should export rules object', () => {
			expect(plugin.rules).toBeDefined()
			expect(typeof plugin.rules).toBe('object')
		})

		it('should export configs', () => {
			expect(plugin.configs).toBeDefined()
			expect(plugin.configs.base).toBeDefined()
			expect(plugin.configs.recommended).toBeDefined()
		})

		it('should export environments', () => {
			expect(plugin.environments).toBeDefined()
			expect(plugin.environments.env).toBeDefined()
			expect(plugin.environments.env.globals).toBeDefined()
		})
	})

	describe('globals', () => {
		const globals = plugin.environments.env.globals

		it('should include suite globals', () => {
			expect(globals.suite).toBe(true)
			expect(globals.test).toBe(true)
			expect(globals.describe).toBe(true)
			expect(globals.it).toBe(true)
		})

		it('should include skip globals', () => {
			expect(globals.xtest).toBe(true)
			expect(globals.xit).toBe(true)
			expect(globals.xdescribe).toBe(true)
		})

		it('should include bench globals', () => {
			expect(globals.bench).toBe(true)
			expect(globals.benchmark).toBe(true)
		})

		it('should include chai globals', () => {
			expect(globals.chai).toBe(true)
			expect(globals.expect).toBe(true)
			expect(globals.assert).toBe(true)
		})

		it('should include typecheck globals', () => {
			expect(globals.expectTypeOf).toBe(true)
			expect(globals.assertType).toBe(true)
		})

		it('should include utils globals', () => {
			expect(globals.vitest).toBe(true)
			expect(globals.vi).toBe(true)
		})

		it('should include hooks globals', () => {
			expect(globals.beforeAll).toBe(true)
			expect(globals.afterAll).toBe(true)
			expect(globals.beforeEach).toBe(true)
			expect(globals.afterEach).toBe(true)
			expect(globals.onTestFinished).toBe(true)
			expect(globals.onTestFailed).toBe(true)
		})
	})

	describe('configs', () => {
		it('base config should have correct structure', () => {
			const base = plugin.configs.base
			expect(base.plugins).toContain('vitest-globals')
			expect(base.globals).toBeDefined()
		})

		it('recommended config should extend base', () => {
			const recommended = plugin.configs.recommended
			expect(recommended.extends).toBeDefined()
			expect(recommended.globals).toBeDefined()
		})

		it('should support flat config', () => {
			expect(plugin.configs['flat/recommended']).toBeDefined()
			expect(plugin.configs['flat/base']).toBeDefined()
		})

		it('flat config should have correct structure', () => {
			const flatRecommended = plugin.configs['flat/recommended']
			expect(flatRecommended.plugins).toBeDefined()
			expect(flatRecommended.plugins['vitest-globals']).toBe(plugin)
			expect(flatRecommended.languageOptions).toBeDefined()
			expect(flatRecommended.languageOptions.globals).toBeDefined()
		})
	})
})
