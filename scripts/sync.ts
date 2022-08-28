import { execSync } from 'child_process'

const cmd = process.platform === 'win32' ? 'start' : 'open'

execSync(`${cmd} https://npmmirror.com/sync/eslint-plugin-vitest-globals`)
