<div style="text-align: center;" align="center">

# eslint-plugin-vitest-globals

ESLint plugin for Vitest globals

[![NPM version][npm-image]][npm-url]
[![Codacy Badge][codacy-image]][codacy-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]
[![License][license-image]][license-url]

[![Sonar][sonar-image]][sonar-url]

<div style="text-align: center; margin-bottom: 20px;" align="center">

### **[Change Log](./CHANGELOG.md)**

</div>

</div>

## Installation

```bash
# pnpm
pnpm add -D eslint-plugin-vitest-globals

# npm
npm install -D eslint-plugin-vitest-globals

# yarn
yarn add -D eslint-plugin-vitest-globals
```

## Usage

### Classic Config (ESLint 8 and below)

#### Option 1: Apply to all files

```json
// .eslintrc.json
{
  "extends": ["plugin:vitest-globals/recommended"]
}
```

#### Option 2: Apply only to test files (Recommended)

```json
// .eslintrc.json
{
  "overrides": [
    {
      "files": [
        "**/__tests__/**/*.[jt]s?(x)",
        "**/*.test.[jt]s?(x)",
        "**/*.spec.[jt]s?(x)"
      ],
      "extends": ["plugin:vitest-globals/recommended"]
    }
  ]
}
```

#### Option 3: Using environment only

If you only need the globals without the base config:

```json
// .eslintrc.json
{
  "plugins": ["vitest-globals"],
  "env": {
    "vitest-globals/env": true
  }
}
```

#### Option 4: With overrides and environment

```json
// .eslintrc.json
{
  "overrides": [
    {
      "files": ["**/*.test.js", "**/*.spec.js"],
      "plugins": ["vitest-globals"],
      "env": {
        "vitest-globals/env": true
      }
    }
  ]
}
```

### Flat Config (ESLint 9+)

#### Option 1: Using the recommended config

```javascript
// eslint.config.js
import vitestGlobals from 'eslint-plugin-vitest-globals'

export default [
  {
    files: ['**/*.test.js', '**/*.spec.js'],
    ...vitestGlobals.configs['flat/recommended']
  }
]
```

#### Option 2: Using the base config

```javascript
// eslint.config.js
import vitestGlobals from 'eslint-plugin-vitest-globals'

export default [
  {
    files: ['**/*.test.js', '**/*.spec.js'],
    ...vitestGlobals.configs['flat/base']
  }
]
```

#### Option 3: With TypeScript files

```javascript
// eslint.config.js
import vitestGlobals from 'eslint-plugin-vitest-globals'

export default [
  {
    files: ['**/*.test.ts', '**/*.spec.ts'],
    ...vitestGlobals.configs['flat/recommended']
  }
]
```

#### Option 4: With JavaScript and TypeScript

```javascript
// eslint.config.js
import vitestGlobals from 'eslint-plugin-vitest-globals'

export default [
  {
    files: [
      '**/*.test.{js,ts}',
      '**/*.spec.{js,ts}',
      '**/__tests__/**/*.{js,ts}'
    ],
    ...vitestGlobals.configs['flat/recommended']
  }
]
```

#### Option 5: Custom configuration

```javascript
// eslint.config.js
import vitestGlobals from 'eslint-plugin-vitest-globals'

export default [
  {
    files: ['tests/**/*.js'],
    plugins: {
      'vitest-globals': vitestGlobals
    },
    languageOptions: {
      globals: {
        ...vitestGlobals.environments.env.globals
      }
    }
  }
]
```

## Supported Globals

The plugin provides the following Vitest globals:

### Test Functions

| Global | Description |
|--------|-------------|
| `suite` | Define a test suite |
| `test` | Define a test |
| `describe` | Define a test suite (alias) |
| `it` | Define a test (alias) |
| `xtest` | Skip a test |
| `xit` | Skip a test (alias) |
| `xdescribe` | Skip a suite |
| `bench` | Define a benchmark |
| `benchmark` | Define a benchmark (alias) |

### Assertions

| Global | Description |
|--------|-------------|
| `expect` | Assertion function |
| `assert` | Assert function |
| `chai` | Chai assertion library |

### Type Checking

| Global | Description |
|--------|-------------|
| `expectTypeOf` | Runtime type checking |
| `assertType` | Type assertion |

### Utilities

| Global | Description |
|--------|-------------|
| `vi` | Vitest mock utility |
| `vitest` | Vitest instance |

### Hooks

| Global | Description |
|--------|-------------|
| `beforeAll` | Run before all tests |
| `afterAll` | Run after all tests |
| `beforeEach` | Run before each test |
| `afterEach` | Run after each test |
| `onTestFinished` | Callback when test finishes |
| `onTestFailed` | Callback when test fails |

## Compatibility

| ESLint Version | Config Type | Supported |
|----------------|-------------|-----------|
| ESLint 8.x | Classic Config | ✅ |
| ESLint 8.x | Flat Config | ✅ |
| ESLint 9.x | Flat Config | ✅ |

| Prettier Version | Compatible |
|------------------|------------|
| Prettier 2.x | ✅ |
| Prettier 3.x | ✅ |

## TypeScript Support

This plugin includes TypeScript type definitions. No additional `@types` package is needed.

```typescript
// example.test.ts
import { describe, it, expect } from 'vitest'

describe('TypeScript test', () => {
  it('should work with types', () => {
    expect(1 + 1).toBe(2)
  })
})
```

## Example with Prettier

This plugin works seamlessly with Prettier:

```json
// .eslintrc.json
{
  "extends": [
    "plugin:vitest-globals/recommended",
    "prettier"
  ]
}
```

## Support & Issues

Please open an issue [here](https://github.com/saqqdy/eslint-plugin-vitest-globals/issues).

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/eslint-plugin-vitest-globals.svg?style=flat-square
[npm-url]: https://npmjs.org/package/eslint-plugin-vitest-globals
[codacy-image]: https://app.codacy.com/project/badge/Grade/f70d4880e4ad4f40aa970eb9ee9d0696
[codacy-url]: https://www.codacy.com/gh/saqqdy/eslint-plugin-vitest-globals/dashboard?utm_source=github.com&utm_medium=referral&utm_content=saqqdy/eslint-plugin-vitest-globals&utm_campaign=Badge_Grade
[snyk-image]: https://snyk.io/test/npm/eslint-plugin-vitest-globals/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/eslint-plugin-vitest-globals
[download-image]: https://img.shields.io/npm/dm/eslint-plugin-vitest-globals.svg?style=flat-square
[download-url]: https://npmjs.org/package/eslint-plugin-vitest-globals
[license-image]: https://img.shields.io/badge/License-MIT-blue.svg
[license-url]: LICENSE
[sonar-image]: https://sonarcloud.io/api/project_badges/quality_gate?project=saqqdy_eslint-plugin-vitest-globals
[sonar-url]: https://sonarcloud.io/dashboard?id=saqqdy_eslint-plugin-vitest-globals
