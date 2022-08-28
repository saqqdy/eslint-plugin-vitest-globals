import { execSync } from 'child_process'
import { version } from '../package.json'

const REGISTRY_URL = 'https://registry.npmjs.org'
let command = `npm --registry=${REGISTRY_URL} publish --access public`

if (version.includes('rc')) command += ' --tag release'
if (version.includes('beta')) command += ' --tag beta'
if (version.includes('alpha')) command += ' --tag alpha'

execSync(command, {
    stdio: 'inherit'
})
console.info('Published eslint-plugin-vitest-globals')
