'use strict';var f={[100]:"Continue",[101]:"Switching Protocols",[102]:"Processing",[103]:"Early Hints",[200]:"OK",[201]:"Created",[202]:"Accepted",[203]:"Non-Authoritative Information",[204]:"No Content",[205]:"Reset Content",[206]:"Partial Content",[207]:"Multi-Status",[208]:"Already Reported",[226]:"IM Used",[300]:"Multiple Choices",[301]:"Moved Permanently",[302]:"Found",[303]:"See Other",[304]:"Not Modified",[305]:"Use Proxy",[306]:"(Unused)",[307]:"Temporary Redirect",[308]:"Permanent Redirect",[400]:"Bad Request",
[401]:"Unauthorized",[402]:"Payment Required",[403]:"Forbidden",[404]:"Not Found",[405]:"Method Not Allowed",[406]:"Not Acceptable",[407]:"Proxy Authentication Required",[408]:"Request Timeout",[409]:"Conflict",[410]:"Gone",[411]:"Length Required",[412]:"Precondition Failed",[413]:"Payload Too Large",[414]:"URI Too Long",[415]:"Unsupported Media Type",[416]:"Range Not Satisfiable",[417]:"Expectation Failed",[418]:"I'm a teapot",[421]:"Misdirected Request",[422]:"Unprocessable Entity",[423]:"Locked",
[424]:"Failed Dependency",[425]:"Unordered Collection",[426]:"Upgrade Required",[428]:"Precondition Required",[429]:"Too Many Requests",[431]:"Request Header Fields Too Large",[451]:"Unavailable For Legal Reasons",[500]:"Internal Server Error",[501]:"Not Implemented",[502]:"Bad Gateway",[503]:"Service Unavailable",[504]:"Gateway Timeout",[505]:"HTTP Version Not Supported",[506]:"Variant Also Negotiates",[507]:"Insufficient Storage",[508]:"Loop Detected",[509]:"Bandwidth Limit Exceeded",[510]:"Not Extended",
[511]:"Network Authentication Required"};/*
 statuses
 Copyright(c) 2014 Jonathan Ong
 Copyright(c) 2016 Douglas Christopher Wilson
 MIT Licensed
*/
const l=k();function k(){var a=m;const b=[];Object.keys(f).forEach(d=>{const c=f[d];d=Number(d);a[d]=c;a[c]=d;a[c.toLowerCase()]=d;b.push(d)});return b}function m(a){if("number"==typeof a){if(!m[a])throw Error("invalid status code: "+a);return a}if("string"!=typeof a)throw new TypeError("code must be a number or string");var b=parseInt(a,10);if(!isNaN(b)){if(!m[b])throw Error("invalid status code: "+b);return b}b=m[a.toLowerCase()];if(!b)throw Error('invalid status message: "'+a+'"');return b};/*
 http-errors
 Copyright(c) 2014 Jonathan Ong
 Copyright(c) 2016 Douglas Christopher Wilson
 MIT Licensed
 toidentifier
 Copyright(c) 2016 Douglas Christopher Wilson
 MIT Licensed
*/
function n(...a){let b,d,c=500,g={};for(let e=0;e<a.length;e++){let h=a[e];if(h instanceof Error)b=h,c=b.status||b.statusCode||c;else switch(typeof h){case "string":d=h;break;case "number":c=h;0!==e&&process.emitWarning("non-first-argument status code; replace with createError("+h+", ...)","DeprecationWarning");break;case "object":g=h}}"number"==typeof c&&(400>c||600<=c)&&process.emitWarning("non-error status code; use only 4xx or 5xx status codes","DeprecationWarning");if("number"!=typeof c||!m[c]&&
(400>c||600<=c))c=500;a=n[c]||n[Number(String(c).charAt(0)+"00")];b||(b=a?new a(d):Error(d||m[c]),Error.captureStackTrace(b,n));a&&b instanceof a&&b.status===c||(b.expose=500>c,b.status=b.statusCode=c);for(let e in g)"status"!=e&&"statusCode"!=e&&(b[e]=g[e]);return b}class p extends Error{constructor(a){super();this.message=a;this.statusCode=this.status=null;this.expose=!1;this.headers=null}set code(a){this.statusCode=this.status=a;this.message||(this.message=m[a])}}
l.forEach(a=>{let b;const d=q(m[a]),c=d.match(/Error$/)?d:d+"Error";switch(Number(String(a).charAt(0)+"00")){case 400:b=class extends p{constructor(g){super(g);this.code=a;this.name=c;this.expose=!0}};break;case 500:b=class extends p{constructor(g){super(g);this.code=a;this.name=c;this.expose=!1}}}b&&(n[a]=b,n[d]=b)},{});function q(a){return a.split(" ").map(function(b){return b.charAt(0).toUpperCase()+b.slice(1)}).join("").replace(/[^ _0-9a-z]/gi,"")};module.exports={_HttpError:p,_httpErrors:n};

//# sourceMappingURL=http-errors.js.map