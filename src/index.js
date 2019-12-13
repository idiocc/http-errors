import { c } from 'erte'

/**
 * Creates HTTP Errors For Goa Apps.
 * @param {!_httpErrors.Config} [config] Options for the program.
 * @param {boolean} [config.shouldRun=true] A boolean option. Default `true`.
 * @param {string} [config.text] A text to return.
 */
export default async function httpErrors(config = {}) {
  const {
    shouldRun = true,
    text = '',
  } = config
  if (!shouldRun) return
  console.log('@goa/http-errors called with %s', c(text, 'yellow'))
  return text
}

/**
 * @typedef {import('..').Config} _httpErrors.Config
 */
