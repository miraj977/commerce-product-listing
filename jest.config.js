module.exports = {
    setupFiles: [ "<rootDir>/.jest/setEnvVars.js" ],
    'moduleNameMapper': {
        '@lib/(.*)': '<rootDir>/lib/$1'
    }
};