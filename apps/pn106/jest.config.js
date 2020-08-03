module.exports = {
  name: 'pn106',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/pn106',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
