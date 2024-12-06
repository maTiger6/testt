module.exports = {
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        allowSyntheticDefaultImports: true
      }
    ],
    '^.+\\.js$': 'babel-jest'
  }
};
