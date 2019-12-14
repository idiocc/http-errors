/**
 * @fileoverview
 * @externs
 */
/* typal types/index.xml externs */
/** @const */
var _httpErrors = {}
/**
 * The error constructor that extends Error.
 * @interface
 */
_httpErrors.HttpError
/**
 * The status message.
 * @type {number}
 */
_httpErrors.HttpError.prototype.status
/**
 * The status code.
 * @type {string}
 */
_httpErrors.HttpError.prototype.statusCode
/**
 * Can be an object of header names to values to be sent to the client, defaulting to `undefined`. When defined, the key names should all be lower-cased.
 * @type {*}
 */
_httpErrors.HttpError.prototype.headers
/**
 * The traditional error message, which should be kept short and all single line.
 * @type {string}
 */
_httpErrors.HttpError.prototype.message
/**
 * Whether to expose the error to the client.
 * For client errors the default is `true`, for server errors (status >= 500) is `false`.
 * @type {boolean}
 */
_httpErrors.HttpError.prototype.expose
