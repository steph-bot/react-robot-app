// // For a detailed explanation regarding each configuration property, visit:
// // https://jestjs.io/docs/en/configuration.html

module.exports = {
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tests/fileMock.js',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'text', 'text-summary', 'json-summary'],
  setupFilesAfterEnv: ['<rootDir>/tests/setupTests.js'],
//   snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleDirectories: ['node_modules', 'src'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
};
