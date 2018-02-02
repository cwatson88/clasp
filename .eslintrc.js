module.exports = {
    extends: ['eslint:recommended', 'google'],
    env: {
      node: true,
      es6: true,
    },
    rules: {
      'no-var': "error",
      'new-cap' : "warn",
      'max-len' : ["warn", { "code": 120 }],
      'no-console': "off"
    }
  }