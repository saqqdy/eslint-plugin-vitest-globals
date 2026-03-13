import { execSync } from 'child_process'

const SYNC_URL = 'https://registry-direct.npmmirror.com/eslint-plugin-vitest-globals/sync'

try {
	execSync(`curl -X PUT -d "sync_upstream=true" "${SYNC_URL}"`, { stdio: 'inherit' })
	console.info('Synced to npmmirror successfully')
} catch (error) {
	console.error('Failed to sync to npmmirror:', error)
	process.exit(1)
}
