# @goa/http-errors

[![npm version](https://badge.fury.io/js/%40goa%2Fhttp-errors.svg)](https://www.npmjs.com/package/@goa/http-errors)

`@goa/http-errors` is Creates HTTP Errors For Goa Apps.

```sh
yarn add @goa/http-errors
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
  * [`HttpError`](#type-httperror)
- [`httpErrors(status: number, message: string, props: string): !Error`](#httperrorsstatus-numbermessage-stringprops-string-error)
- [new createError[code || name]([msg]))](#new-createerrorcode--namemsg)
- [Copyright & License](#copyright--license)

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/0.svg?sanitize=true">
</a></p>

## API

The package is available by importing its default function and named class:

```js
import httpErrors, { HTTPError } from '@goa/http-errors'
```

__<a name="type-httperror">`HttpError`</a>__: The error constructor that extends Error.

|      Name      |       Type       |                                                                      Description                                                                       |
| -------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| __status__     | <em>number</em>  | The status message.                                                                                                                                    |
| __statusCode__ | <em>string</em>  | The status code.                                                                                                                                       |
| __headers__    | <em>*</em>       | Can be an object of header names to values to be sent to the client, defaulting to `undefined`. When defined, the key names should all be lower-cased. |
| __message__    | <em>string</em>  | The traditional error message, which should be kept short and all single line.                                                                         |
| __expose__     | <em>boolean</em> | Whether to expose the error to the client.<br/>For client errors the default is `true`, for server errors (status &gt;= 500) is `false`.               |

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/1.svg?sanitize=true">
</a></p>

## <code><ins>httpErrors</ins>(</code><sub><br/>&nbsp;&nbsp;`status: number,`<br/>&nbsp;&nbsp;`message: string,`<br/>&nbsp;&nbsp;`props: string,`<br/></sub><code>): <i>!Error</i></code>
Create a new error object with the given message msg. The error object inherits from createError.HttpError.

 - <kbd><strong>status*</strong></kbd> <em>`number`</em>: The status code as number.
 - <kbd><strong>message*</strong></kbd> <em>`string`</em>: The message. By default, will look up in the status code table.
 - <kbd><strong>props*</strong></kbd> <em>`string`</em>: Additional custom properties to attach to object.

```js
import { aqt } from 'rqt'
import httpErrors from '@goa/http-errors'
import Goa from '@goa/koa'

const goa = new Goa()

goa.use(() => {
  throw httpErrors(401, 'Please login to view this page.')
})
goa.listen(async function() {
  const url = `http://localhost:${this.address().port}`
  const res = await aqt(url)
  console.log(res)
  this.close()
})
```
```js
{ body: 'Please login to view this page.',
  headers: 
   { 'content-type': 'text/plain; charset=utf-8',
     'content-length': '31',
     date: 'Sat, 14 Dec 2019 17:35:52 GMT',
     connection: 'close' },
  statusCode: 401,
  statusMessage: 'Unauthorized' }
```

Another example that extends the given error. _Koa_ will automatically set status **404** for errors with `ENOENT` code.

```js
import { aqt } from 'rqt'
import { readFile } from 'fs'
import createError from '@goa/http-errors'
import Goa from '@goa/koa'
import { join } from 'path'

const goa = new Goa()

goa.use(async (ctx) => {
  await new Promise((r, j) => {
    readFile(join('example', ctx.path), (err) => {
      let httpError
      if (err.code == 'ENOENT') {
        httpError = createError(404, err, { expose: false })
      } else {
        httpError = createError(500, err)
      }
      j(httpError)
    })
  })
})
goa.listen(async function() {
  // 404
  console.log('Request missing file')
  let url = `http://localhost:${this.address().port}/missing.txt`
  let res = await aqt(url)
  console.log(res)
  // 500
  console.log('\nRequest a dir')
  url = `http://localhost:${this.address().port}/dir`
  res = await aqt(url)
  console.log(res)
  this.close()
})
```
```js
Request missing file
{ body: 'Not Found',
  headers: 
   { 'content-type': 'text/plain; charset=utf-8',
     'content-length': '9',
     date: 'Sat, 14 Dec 2019 18:04:34 GMT',
     connection: 'close' },
  statusCode: 404,
  statusMessage: 'Not Found' }

Request a dir
{ body: 'Internal Server Error',
  headers: 
   { 'content-type': 'text/plain; charset=utf-8',
     'content-length': '21',
     date: 'Sat, 14 Dec 2019 18:04:34 GMT',
     connection: 'close' },
  statusCode: 500,
  statusMessage: 'Internal Server Error' }
```

The app will write to _stderr_ on internal error:

```
Error: EISDIR: illegal operation on a directory, read
```

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/2.svg?sanitize=true">
</a></p>

## new createError[code || name]([msg]))

A new error could be created from a name or code, like so:

```js
{ NotFoundError: Not Found
    at Object.<anonymous> (/Users/zavr/goa/http-errors/example/constructor.js:3:13)
    at Module._compile (module.js:653:30)
    at Module.p._compile (/Users/zavr/goa/http-errors/node_modules/documentary/node_modules/alamode/compile/depack.js:49:18)
    at Module._extensions..js (module.js:664:10)
    at Object.k.(anonymous function).y._extensions.(anonymous function) [as .js] (/Users/zavr/goa/http-errors/node_modules/documentary/node_modules/alamode/compile/depack.js:51:7)
    at Module.load (module.js:566:32)
    at tryModuleLoad (module.js:506:12)
    at Function.Module._load (module.js:498:3)
    at Module.require (module.js:597:17)
    at require (internal/module.js:11:18)
  message: 'Not Found',
  status: 404,
  statusCode: 404,
  name: 'NotFoundError',
  expose: true }
```

It's not possible to import specific errors as they are properties on the exported function, and not exports themselves.

**List of all constructors**

|Status Code|Constructor Name             |
|-----------|-----------------------------|
|400        |BadRequest                   |
|401        |Unauthorized                 |
|402        |PaymentRequired              |
|403        |Forbidden                    |
|404        |NotFound                     |
|405        |MethodNotAllowed             |
|406        |NotAcceptable                |
|407        |ProxyAuthenticationRequired  |
|408        |RequestTimeout               |
|409        |Conflict                     |
|410        |Gone                         |
|411        |LengthRequired               |
|412        |PreconditionFailed           |
|413        |PayloadTooLarge              |
|414        |URITooLong                   |
|415        |UnsupportedMediaType         |
|416        |RangeNotSatisfiable          |
|417        |ExpectationFailed            |
|418        |ImATeapot                    |
|421        |MisdirectedRequest           |
|422        |UnprocessableEntity          |
|423        |Locked                       |
|424        |FailedDependency             |
|425        |UnorderedCollection          |
|426        |UpgradeRequired              |
|428        |PreconditionRequired         |
|429        |TooManyRequests              |
|431        |RequestHeaderFieldsTooLarge  |
|451        |UnavailableForLegalReasons   |
|500        |InternalServerError          |
|501        |NotImplemented               |
|502        |BadGateway                   |
|503        |ServiceUnavailable           |
|504        |GatewayTimeout               |
|505        |HTTPVersionNotSupported      |
|506        |VariantAlsoNegotiates        |
|507        |InsufficientStorage          |
|508        |LoopDetected                 |
|509        |BandwidthLimitExceeded       |
|510        |NotExtended                  |
|511        |NetworkAuthenticationRequired|

## Copyright & License

GNU Affero General Public License v3.0

[Original work](https://github.com/jshttp/http-errors) by Jonathan Ong and Douglas Christopher Wilson under MIT license found in [COPYING](COPYING).

<table>
  <tr>
    <td><img src="https://avatars2.githubusercontent.com/u/40834161?s=100&amp;v=4" alt="idiocc"></td>
    <td>© <a href="https://www.idio.cc">Idio™</a> 2019</td>
  </tr>
</table>

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/-1.svg?sanitize=true">
</a></p>