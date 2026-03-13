import type { ESLint, Linter } from 'eslint'

declare const plugin: {
	rules: ESLint.Plugin['rules']
	configs: {
		base: Linter.Config
		recommended: Linter.Config
	}
	environments: {
		env: {
			globals: Record<string, boolean>
		}
	}
}

export = plugin
