const nextJest = require('next/jest');

const BASE_ROOT_DIR = './';

const createJestConfig = nextJest({ dir: BASE_ROOT_DIR });

const customJestConfig = {
  rootDir: BASE_ROOT_DIR,
  moduleDirectories: ['node_modules', '<rootDir>/'],
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!**/*.{interface,stub,enum,dto,type}.{js,jsx,ts,tsx}'],
  coveragePathIgnorePatterns: ['/node_modules/', '<rootDir>/src/pages/_document.ts'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  setupFilesAfterEnv: ['<rootDir>/config/tests/setup.ts'],
  globalSetup: '<rootDir>/global-setup.js',
  preset: 'ts-jest',
  testRegex: '(/__test__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  moduleNameMapper: {
    '^.+\\.module\\.(css|less)$': 'identity-obj-proxy',
    '^.+\\.(css|sass|scss)$': '<rootDir>/src/__mocks__/styleMock.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '@root/(.*)': '<rootDir>/$1',
    '@components/(.*)': '<rootDir>/src/components/$1',
  },
  testPathIgnorePatterns: [],
};

module.exports = createJestConfig(customJestConfig);
