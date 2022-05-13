// jest.config.js
const { join } = require('path')
const { pathsToModuleNameMapper } = require('ts-jest')
const { compilerOptions } = require('./tsconfig.json')

module.exports = {
  preset: 'ts-jest', // Enable typescript support
  testEnvironment: 'node', // We are in node
  verbose: true, // Versbose output
  collectCoverage: true, // Show also coverage
  coverageProvider: "v8", // Generate file using the v8 engine
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json', // Config gile
    },
  },
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths , { prefix: join('<rootDir>', compilerOptions.baseUrl) }) // Map aliases to their path
}