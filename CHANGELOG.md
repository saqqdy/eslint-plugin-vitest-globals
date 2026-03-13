# Change logs

## 2026.03.13 v1.6.0

### Features

- Add ESLint 9+ Flat Config support (`flat/recommended`, `flat/base` configs)
- Add TypeScript type definitions (`index.d.ts`)
- Add new Vitest globals: `bench`, `benchmark`, `xtest`, `xit`, `xdescribe`

### Improvements

- Add unit tests with vitest (14 test cases)
- Add GitHub Actions CI/CD workflow
- Add `.npmignore` for cleaner package publishing
- Improve `package.json`: add `exports` field, `types`, `engines`
- Improve publish scripts with better error handling
- Update README with detailed usage examples for all config types
- Fix ESM export compatibility for ESLint v9

### Security

- Fix all security vulnerabilities in dev dependencies via pnpm overrides

## 2024.03.15 v1.5.0

1. new global properties `onTestFinished` `onTestFailed`
2. upgrade all packages

## 2023.07.10 v1.4.0

1. new global properties `chai` `expectTypeOf` `assertType`
2. remove unused packages

## 2023.01.10 v1.3.1

1. upgrade packages
2. Discard files that do not need to be published
3. some docs work

## 2022.08.28 v1.2.0

1. upgrade all packages

## 2022.03.23 v1.1.0

1. Support for environment definition
2. Provides `base` `recommend` two configurations
3. [README.md](./README.md)
