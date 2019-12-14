## API

The package is available by importing its default function and named class:

```js
import httpErrors, { HTTPError } from '@goa/http-errors'
```

%TYPEDEF types/index.xml%

%~%

<typedef level="2" method="httpErrors">types/api.xml</typedef>

%EXAMPLE: example, ../src => @goa/http-errors%
%FORK-js example%

Another example that extends the given error. _Koa_ will automatically set status **404** for errors with `ENOENT` code.

%EXAMPLE: example/2, ../src => @goa/http-errors%
%FORK-js example/2%

The app will write to _stderr_ on internal error:

%FORKERR example/2%

%~%

## new createError.ErrorType([msg]))

A new error could be created from a name or code, like so:

%EXAMPLE: example/constructor, ../src => @goa/http-errors%
%/FORK-js example/constructor%

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