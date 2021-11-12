/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleDirectories: ['node_modules', 'src'],
    reporters: [ "default", "jest-junit", "jest-html-reporters" ],
    setupFiles: ['dotenv/config'],
};
