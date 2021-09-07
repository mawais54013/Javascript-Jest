require('dd-trace').init({
    // Only activates test instrumentation on CI
    enabled: process.env.DD_ENV === 'ci',
    // Name of the service or library under test
    service: 'my-javascript-app',
    // To guarantee test span delivery
    flushInterval: 300000
  })
  
  // jest-environment-jsdom is an option too
  module.exports = require('jest-environment-node')

  