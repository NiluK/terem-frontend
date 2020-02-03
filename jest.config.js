module.exports = {
  preset: 'ts-jest',
  verbose: true,
  testEnvironment: 'jsdom',
  setupFiles: ['./jest.setup.ts'],
  globals: {
    'ts-jest': {
      babelConfig: '.babelrc',
    },
  },
};
