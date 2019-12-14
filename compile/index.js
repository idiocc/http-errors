const { _httpErrors, _HttpError: HttpError } = require('./http-errors')

/**
 * Create a new error object with the given message msg. The error object inherits from createError.HttpError.
 * @type {(status: number, message: string, props) => HttpError}
 */
const httpErrors = _httpErrors

module.exports = httpErrors
module.exports.HttpError = HttpError

/* typal types/index.xml namespace */
/**
 * @typedef {_httpErrors.HttpError} HttpError `＠interface` The error constructor that extends Error.
 * @typedef {Object} _httpErrors.HttpError `＠interface` The error constructor that extends Error.
 * @prop {number} status The status message.
 * @prop {string} statusCode The status code.
 * @prop {*} headers Can be an object of header names to values to be sent to the client, defaulting to `undefined`. When defined, the key names should all be lower-cased.
 * @prop {string} message The traditional error message, which should be kept short and all single line.
 * @prop {boolean} expose Whether to expose the error to the client.
 * For client errors the default is `true`, for server errors (status >= 500) is `false`.
 */
