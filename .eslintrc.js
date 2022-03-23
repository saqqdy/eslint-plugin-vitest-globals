const config = require('./config/simple.json')
module.exports = Object.assign(config, {
    rules: {
        semi: [2, 'never']
    }
})
