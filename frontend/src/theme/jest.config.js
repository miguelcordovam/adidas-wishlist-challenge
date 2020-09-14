module.exports = {
  collectCoverageFrom: [
    'src/**/*.ts'
  ],
  globals: {
    'ts-jest': {
      diagnostics: true
    }
  },
  moduleFileExtensions: ['ts', 'js'],
  roots: ['<rootDir>/src'],
  testRegex: '/__tests__/.*test\\.ts$',
  transform: {
    '^.+\\.ts$': 'ts-jest'
  }
};
