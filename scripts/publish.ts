import { execSync } from 'child_process'
import { version } from '../package.json'

const [, , ...args] = process.argv
const IS_TEST = args.includes('--test')

const REGISTRY_URL = 'https://registry.npmjs.org'
let command = `npm --registry=${REGISTRY_URL} publish --access public`

if (version.includes('rc')) command += ' --tag release'
else if (version.includes('beta')) command += ' --tag beta'
else if (version.includes('alpha')) command += ' --tag alpha'
else if (IS_TEST) {
	console.warn(`${version} is not a test version, process exited`)
	process.exit(0)
}

execSync(command, {
	stdio: 'inherit'
})
console.info('Published eslint-plugin-vitest-globals')
