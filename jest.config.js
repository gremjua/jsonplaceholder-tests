/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleDirectories: ['node_modules', 'src'],
    reporters: [
        'default',
        ['jest-junit', { outputDirectory: 'reports' }],
        ['jest-html-reporters', { publicPath: 'reports' }],
    ],
    setupFiles: ['dotenv/config'],
};
