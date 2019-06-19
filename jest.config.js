module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['<rootDir>/jest/setup.js'],
  moduleNameMapper: {
    'src/(.+)$': '<rootDir>/src/$1',
    'example/(.+)$': '<rootDir>/example/$1',
  },
};
