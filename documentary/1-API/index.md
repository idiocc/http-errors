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