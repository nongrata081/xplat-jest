module.exports = {
  name: 'web-name',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/web-name/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
