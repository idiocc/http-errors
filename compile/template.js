const { _httpErrors, _HttpError: HttpError } = require('./http-errors')

/**
 * Create a new error object with the given message msg. The error object inherits from createError.HttpError.
 * @type {(status: number, message: string, props) => HttpError}
 */
const httpErrors = _httpErrors

module.exports = httpErrors
module.exports.HttpError = HttpError

/* typal types/index.xml namespace */
