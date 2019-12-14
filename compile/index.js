const { _httpErrors } = require('./http-errors')

/**
 * Create a new error object with the given message msg. The error object inherits from createError.HttpError.
 * @param {number} status The status code as number.
 * @param {string} message The message. By default, will look up in the status code table.
 * @param {string} props Additional custom properties to attach to object.
 * @return {!Error}
 */
function httpErrors(config) {
  return _httpErrors(config)
}

module.exports = httpErrors

/* typal types/index.xml namespace */
/**
 * @typedef {_httpErrors.HttpError} HttpError `＠interface` The error constructor that extends Error.
 * @typedef {Object} _httpErrors.HttpError `＠interface` The error constructor that extends Error.
 * @prop {number} status The status message.
 * @prop {*} headers Can be an object of header names to values to be sent to the client, defaulting to `undefined`. When defined, the key names should all be lower-cased.
 * @prop {string} statusCode The status code.
 * @prop {boolean} expose Whether to expose the error to the client.
 * For client errors the default is `true`, for server errors (status >= 500) is `false`.
 */
