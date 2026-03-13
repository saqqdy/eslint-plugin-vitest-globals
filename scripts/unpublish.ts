import { execSync } from 'child_process'

let [, , versionText] = process.argv

if (!versionText) {
	console.error('Error: version argument is required')
	console.error('Usage: tscjs scripts/unpublish <version>')
	process.exit(1)
}

versionText = versionText.replace(/"/g, '')
const versions = versionText.split(',')

const REGISTRY_URL = 'https://registry.npmjs.org'
const command = `npm --registry=${REGISTRY_URL} unpublish`

for (const version of versions) {
	try {
		execSync(`${command} eslint-plugin-vitest-globals@${version}`, {
			stdio: 'inherit'
		})
		console.info(`Unpublished eslint-plugin-vitest-globals@${version}`)
	} catch (error) {
		console.error(`Failed to unpublish eslint-plugin-vitest-globals@${version}:`, error)
	}
}
