const { _httpErrors } = require('./http-errors')

/**
 * Creates HTTP Errors For Goa Apps.
 * @param {!_httpErrors.Config} config Options for the program.
 * @param {boolean} [config.shouldRun=true] A boolean option. Default `true`.
 * @param {string} [config.text] A text to return.
 * @return {Promise<string>}
 */
function httpErrors(config) {
  return _httpErrors(config)
}

module.exports = httpErrors

/* typal types/index.xml namespace */
/**
 * @typedef {_httpErrors.Config} Config `＠record` Options for the program.
 * @typedef {Object} _httpErrors.Config `＠record` Options for the program.
 * @prop {boolean} [shouldRun=true] A boolean option. Default `true`.
 * @prop {string} [text] A text to return.
 */
