const { _httpErrors } = require('./http-errors')

/**
 * @methodType {_httpErrors.httpErrors}
 */
function httpErrors(config) {
  return _httpErrors(config)
}

module.exports = httpErrors

/* typal types/index.xml namespace */
