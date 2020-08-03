module.exports = {
  name: 'pn107',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/pn107',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
