"use strict";var precacheConfig=[["/CoinWatch/index.html","54993b0868f30334317f6a4729a69e27"],["/CoinWatch/static/css/main.b80fb629.css","080b2ebe064240bd8fdd52794cc4828f"],["/CoinWatch/static/js/main.46d903f6.js","977c7455c02e5d904a69b30d1ea5b694"],["/CoinWatch/static/media/notification.0b4ac1dc.ttf","0b4ac1dc75df35e169b70d7719afe4cc"],["/CoinWatch/static/media/notification.5bee74ca.svg","5bee74caefdf9d0a834915f6c8eeb259"],["/CoinWatch/static/media/notification.651771e1.woff","651771e1df95c807c99608188d0a4287"],["/CoinWatch/static/media/notification.c0d3c94c.eot","c0d3c94cd6112550c51d7d1ed13b9da1"],["/CoinWatch/static/media/rounded-add-button.bc7eddbe.svg","bc7eddbef72d2b1328c0d836e6a517d4"],["/CoinWatch/static/media/rounded-add-green.184aab7c.svg","184aab7c034089e2172bc11fae7caf3e"],["/CoinWatch/static/media/thin-line.a558ac17.svg","a558ac17517453febad8122b5643351f"],["/CoinWatch/static/media/tick-inside-circle-red.cea2d5a0.svg","cea2d5a09dcf8a966353a8739a78ebf3"],["/CoinWatch/static/media/tick-inside-circle.15f44a7f.svg","15f44a7ff171f0ed40900a4545116138"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));var a="/CoinWatch/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL(a,self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});