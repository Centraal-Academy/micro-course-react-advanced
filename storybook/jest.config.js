const React = require('react')
const Enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')
Enzyme.configure({ adapter: new Adapter() })

module.exports = {
  rootDir: 'src/stories',
  testMatch: ['**/*-test.js'],
  globals: {
    React,
    Enzyme
  },
  snapshotSerializers: ['enzyme-to-json/serializer']
}
