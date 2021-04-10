(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{289:function(I,e,i){"use strict";i.r(e),i.d(e,"frontMatter",(function(){return n})),i.d(e,"metadata",(function(){return b})),i.d(e,"toc",(function(){return g})),i.d(e,"default",(function(){return d}));var t=i(3),l=i(8),a=(i(0),i(318)),n={},b={type:"mdx",permalink:"/benchmarks",source:"@site/src/pages/benchmarks.md"},g=[{value:"Lots of Files",id:"lots-of-files",children:[]}],j={toc:g};function d(I){var e=I.components,n=Object(l.a)(I,["components"]);return Object(a.b)("wrapper",Object(t.a)({},j,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"benchmarks-of-javascript-package-managers"},"Benchmarks of JavaScript Package Managers"),Object(a.b)("p",null,"This benchmark compares the performance of npm, pnpm, and Yarn (both regular and PnP variant)."),Object(a.b)("p",null,"Here's a quick explanation of how these tests could apply to the real world:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"clean install"),": How long it takes to run a totally fresh install: no lockfile present, no packages in the cache, no ",Object(a.b)("inlineCode",{parentName:"li"},"node_modules")," folder."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"with cache"),", ",Object(a.b)("inlineCode",{parentName:"li"},"with lockfile"),", ",Object(a.b)("inlineCode",{parentName:"li"},"with node_modules"),": After the first install is done, the install command is run again."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"with cache"),", ",Object(a.b)("inlineCode",{parentName:"li"},"with lockfile"),": When a repo is fetched by a developer and installation is first run."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"with cache"),": Same as the one above, but the package manager doesn't have a lockfile to work from."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"with lockfile"),": When an installation runs on a CI server."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"with cache"),", ",Object(a.b)("inlineCode",{parentName:"li"},"with node_modules"),": The lockfile is deleted and the install command is run again."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"with node_modules"),", ",Object(a.b)("inlineCode",{parentName:"li"},"with lockfile"),": The package cache is deleted and the install command is run again."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"with node_modules"),": The package cache and the lockfile is deleted and the install command is run again."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"update"),": Updating your dependencies by changing the version in the ",Object(a.b)("inlineCode",{parentName:"li"},"package.json")," and running the install command again.")),Object(a.b)("h2",{id:"lots-of-files"},"Lots of Files"),Object(a.b)("p",null,"The app's ",Object(a.b)("inlineCode",{parentName:"p"},"package.json")," ",Object(a.b)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm.github.io/blob/main/benchmarks/fixtures/alotta-files/package.json"},"here")),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"action"),Object(a.b)("th",{parentName:"tr",align:null},"cache"),Object(a.b)("th",{parentName:"tr",align:null},"lockfile"),Object(a.b)("th",{parentName:"tr",align:null},"node_modules"),Object(a.b)("th",{parentName:"tr",align:null},"npm"),Object(a.b)("th",{parentName:"tr",align:null},"pnpm"),Object(a.b)("th",{parentName:"tr",align:null},"Yarn"),Object(a.b)("th",{parentName:"tr",align:null},"Yarn PnP"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"install"),Object(a.b)("td",{parentName:"tr",align:null}),Object(a.b)("td",{parentName:"tr",align:null}),Object(a.b)("td",{parentName:"tr",align:null}),Object(a.b)("td",{parentName:"tr",align:null},"53.7s"),Object(a.b)("td",{parentName:"tr",align:null},"15.1s"),Object(a.b)("td",{parentName:"tr",align:null},"39.1s"),Object(a.b)("td",{parentName:"tr",align:null},"29.1s")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"install"),Object(a.b)("td",{parentName:"tr",align:null},"\u2714"),Object(a.b)("td",{parentName:"tr",align:null},"\u2714"),Object(a.b)("td",{parentName:"tr",align:null},"\u2714"),Object(a.b)("td",{parentName:"tr",align:null},"2.2s"),Object(a.b)("td",{parentName:"tr",align:null},"1.4s"),Object(a.b)("td",{parentName:"tr",align:null},"707ms"),Object(a.b)("td",{parentName:"tr",align:null},"n/a")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"install"),Object(a.b)("td",{parentName:"tr",align:null},"\u2714"),Object(a.b)("td",{parentName:"tr",align:null},"\u2714"),Object(a.b)("td",{parentName:"tr",align:null}),Object(a.b)("td",{parentName:"tr",align:null},"14.1s"),Object(a.b)("td",{parentName:"tr",align:null},"4s"),Object(a.b)("td",{parentName:"tr",align:null},"11s"),Object(a.b)("td",{parentName:"tr",align:null},"1.8s")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"install"),Object(a.b)("td",{parentName:"tr",align:null},"\u2714"),Object(a.b)("td",{parentName:"tr",align:null}),Object(a.b)("td",{parentName:"tr",align:null}),Object(a.b)("td",{parentName:"tr",align:null},"30.9s"),Object(a.b)("td",{parentName:"tr",align:null},"7s"),Object(a.b)("td",{parentName:"tr",align:null},"26.5s"),Object(a.b)("td",{parentName:"tr",align:null},"17.2s")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"install"),Object(a.b)("td",{parentName:"tr",align:null}),Object(a.b)("td",{parentName:"tr",align:null},"\u2714"),Object(a.b)("td",{parentName:"tr",align:null}),Object(a.b)("td",{parentName:"tr",align:null},"33.1s"),Object(a.b)("td",{parentName:"tr",align:null},"12.8s"),Object(a.b)("td",{parentName:"tr",align:null},"23.3s"),Object(a.b)("td",{parentName:"tr",align:null},"14.2s")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"install"),Object(a.b)("td",{parentName:"tr",align:null},"\u2714"),Object(a.b)("td",{parentName:"tr",align:null}),Object(a.b)("td",{parentName:"tr",align:null},"\u2714"),Object(a.b)("td",{parentName:"tr",align:null},"2.9s"),Object(a.b)("td",{parentName:"tr",align:null},"1.8s"),Object(a.b)("td",{parentName:"tr",align:null},"22.1s"),Object(a.b)("td",{parentName:"tr",align:null},"n/a")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"install"),Object(a.b)("td",{parentName:"tr",align:null}),Object(a.b)("td",{parentName:"tr",align:null},"\u2714"),Object(a.b)("td",{parentName:"tr",align:null},"\u2714"),Object(a.b)("td",{parentName:"tr",align:null},"2.1s"),Object(a.b)("td",{parentName:"tr",align:null},"1.4s"),Object(a.b)("td",{parentName:"tr",align:null},"713ms"),Object(a.b)("td",{parentName:"tr",align:null},"n/a")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"install"),Object(a.b)("td",{parentName:"tr",align:null}),Object(a.b)("td",{parentName:"tr",align:null}),Object(a.b)("td",{parentName:"tr",align:null},"\u2714"),Object(a.b)("td",{parentName:"tr",align:null},"3s"),Object(a.b)("td",{parentName:"tr",align:null},"5.7s"),Object(a.b)("td",{parentName:"tr",align:null},"41.1s"),Object(a.b)("td",{parentName:"tr",align:null},"n/a")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"update"),Object(a.b)("td",{parentName:"tr",align:null},"n/a"),Object(a.b)("td",{parentName:"tr",align:null},"n/a"),Object(a.b)("td",{parentName:"tr",align:null},"n/a"),Object(a.b)("td",{parentName:"tr",align:null},"2s"),Object(a.b)("td",{parentName:"tr",align:null},"10.7s"),Object(a.b)("td",{parentName:"tr",align:null},"35.4s"),Object(a.b)("td",{parentName:"tr",align:null},"28.3s")))),Object(a.b)("p",null,Object(a.b)("img",{alt:"Graph of the alotta-files results",src:i(410).default})))}d.isMDXComponent=!0},318:function(I,e,i){"use strict";i.d(e,"a",(function(){return r})),i.d(e,"b",(function(){return N}));var t=i(0),l=i.n(t);function a(I,e,i){return e in I?Object.defineProperty(I,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):I[e]=i,I}function n(I,e){var i=Object.keys(I);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(I);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(I,e).enumerable}))),i.push.apply(i,t)}return i}function b(I){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?n(Object(i),!0).forEach((function(e){a(I,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(I,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(e){Object.defineProperty(I,e,Object.getOwnPropertyDescriptor(i,e))}))}return I}function g(I,e){if(null==I)return{};var i,t,l=function(I,e){if(null==I)return{};var i,t,l={},a=Object.keys(I);for(t=0;t<a.length;t++)i=a[t],e.indexOf(i)>=0||(l[i]=I[i]);return l}(I,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(I);for(t=0;t<a.length;t++)i=a[t],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(I,i)&&(l[i]=I[i])}return l}var j=l.a.createContext({}),d=function(I){var e=l.a.useContext(j),i=e;return I&&(i="function"==typeof I?I(e):b(b({},e),I)),i},r=function(I){var e=d(I.components);return l.a.createElement(j.Provider,{value:e},I.children)},c={inlineCode:"code",wrapper:function(I){var e=I.children;return l.a.createElement(l.a.Fragment,{},e)}},m=l.a.forwardRef((function(I,e){var i=I.components,t=I.mdxType,a=I.originalType,n=I.parentName,j=g(I,["components","mdxType","originalType","parentName"]),r=d(i),m=t,N=r["".concat(n,".").concat(m)]||r[m]||c[m]||a;return i?l.a.createElement(N,b(b({ref:e},j),{},{components:i})):l.a.createElement(N,b({ref:e},j))}));function N(I,e){var i=arguments,t=e&&e.mdxType;if("string"==typeof I||t){var a=i.length,n=new Array(a);n[0]=m;var b={};for(var g in e)hasOwnProperty.call(e,g)&&(b[g]=e[g]);b.originalType=I,b.mdxType="string"==typeof I?I:t,n[1]=b;for(var j=2;j<a;j++)n[j]=i[j];return l.a.createElement.apply(null,n)}return l.a.createElement.apply(null,i)}m.displayName="MDXCreateElement"},410:function(I,e,i){"use strict";i.r(e),e.default="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMwMCAzMTkiPgogIDxzdHlsZT4KICAgIC5mb250IHsgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7IH0KICAgIC5zMyB7IGZvbnQtc2l6ZTogM3B4OyB9CiAgICAuczQgeyBmb250LXNpemU6IDRweDsgfQogICAgLnM1IHsgZm9udC1zaXplOiA1cHg7IH0KICAgIC5saW5lIHsgc3Ryb2tlOiAjY2FjYWNhOyB9CiAgICAud2lkdGggeyBzdHJva2Utd2lkdGg6IDAuNTsgfQogICAgLnRleHQgeyBmaWxsOiAjODg4OyB9CiAgPC9zdHlsZT4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMxOSIgZmlsbD0iI2ZmZiI+PC9yZWN0PgogIDxjaXJjbGUgY3g9IjQ0IiBjeT0iNiIgcj0iNCIgZmlsbD0iI2NkMzczMSI+PC9jaXJjbGU+CiAgPHRleHQgeD0iNDQiIHk9IjE0IiBjbGFzcz0iZm9udCBzNCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+bnBtPC90ZXh0PgogIDx0ZXh0IHg9IjQ0IiB5PSIxOCIgY2xhc3M9ImZvbnQgczMiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnY3LjkuMDwvdGV4dD4KICA8Y2lyY2xlIGN4PSI2MCIgY3k9IjYiIHI9IjQiIGZpbGw9IiNmYmFlMDAiPjwvY2lyY2xlPgogIDx0ZXh0IHg9IjYwIiB5PSIxNCIgY2xhc3M9ImZvbnQgczQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnBucG08L3RleHQ+CiAgPHRleHQgeD0iNjAiIHk9IjE4IiBjbGFzcz0iZm9udCBzMyIgdGV4dC1hbmNob3I9Im1pZGRsZSI+djYuMC4xPC90ZXh0PgogIDxjaXJjbGUgY3g9Ijc2IiBjeT0iNiIgcj0iNCIgZmlsbD0iIzI0OGViZCI+PC9jaXJjbGU+CiAgPHRleHQgeD0iNzYiIHk9IjE0IiBjbGFzcz0iZm9udCBzNCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+WWFybjwvdGV4dD4KICA8dGV4dCB4PSI3NiIgeT0iMTgiIGNsYXNzPSJmb250IHMzIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj52MS4yMi4xMDwvdGV4dD4KICA8Y2lyY2xlIGN4PSI5MiIgY3k9IjYiIHI9IjQiIGZpbGw9IiMyNDhlYmQiPjwvY2lyY2xlPgogIDx0ZXh0IHg9IjkyIiB5PSIxNCIgY2xhc3M9ImZvbnQgczQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPllhcm4gUG5QPC90ZXh0PgogIDx0ZXh0IHg9IjkyIiB5PSIxOCIgY2xhc3M9ImZvbnQgczMiIHRleHQtYW5jaG9yPSJtaWRkbGUiPnYxLjIyLjEwPC90ZXh0PgogIDx0ZXh0IHg9IjQwIiB5PSIyOCIgY2xhc3M9ImZvbnQgczUgdGV4dCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MDwvdGV4dD4KICA8dGV4dCB4PSI0MCIgeT0iMzEwIiBjbGFzcz0iZm9udCBzNSB0ZXh0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4wPC90ZXh0PgogIDxsaW5lIHgxPSI5MCIgeTE9IjMxIiB4Mj0iOTAiIHkyPSIzMDUiIGNsYXNzPSJsaW5lIHdpZHRoIj48L2xpbmU+CiAgPHRleHQgeD0iOTAiIHk9IjI4IiBjbGFzcz0iZm9udCBzNSB0ZXh0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xMDwvdGV4dD4KICA8dGV4dCB4PSI5MCIgeT0iMzEwIiBjbGFzcz0iZm9udCBzNSB0ZXh0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xMDwvdGV4dD4KICA8bGluZSB4MT0iMTQwIiB5MT0iMzEiIHgyPSIxNDAiIHkyPSIzMDUiIGNsYXNzPSJsaW5lIHdpZHRoIj48L2xpbmU+CiAgPHRleHQgeD0iMTQwIiB5PSIyOCIgY2xhc3M9ImZvbnQgczUgdGV4dCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MjA8L3RleHQ+CiAgPHRleHQgeD0iMTQwIiB5PSIzMTAiIGNsYXNzPSJmb250IHM1IHRleHQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjIwPC90ZXh0PgogIDxsaW5lIHgxPSIxOTAiIHkxPSIzMSIgeDI9IjE5MCIgeTI9IjMwNSIgY2xhc3M9ImxpbmUgd2lkdGgiPjwvbGluZT4KICA8dGV4dCB4PSIxOTAiIHk9IjI4IiBjbGFzcz0iZm9udCBzNSB0ZXh0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4zMDwvdGV4dD4KICA8dGV4dCB4PSIxOTAiIHk9IjMxMCIgY2xhc3M9ImZvbnQgczUgdGV4dCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MzA8L3RleHQ+CiAgPGxpbmUgeDE9IjI0MCIgeTE9IjMxIiB4Mj0iMjQwIiB5Mj0iMzA1IiBjbGFzcz0ibGluZSB3aWR0aCI+PC9saW5lPgogIDx0ZXh0IHg9IjI0MCIgeT0iMjgiIGNsYXNzPSJmb250IHM1IHRleHQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjQwPC90ZXh0PgogIDx0ZXh0IHg9IjI0MCIgeT0iMzEwIiBjbGFzcz0iZm9udCBzNSB0ZXh0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj40MDwvdGV4dD4KICA8bGluZSB4MT0iMjkwIiB5MT0iMzEiIHgyPSIyOTAiIHkyPSIzMDUiIGNsYXNzPSJsaW5lIHdpZHRoIj48L2xpbmU+CiAgPHRleHQgeD0iMjkwIiB5PSIyOCIgY2xhc3M9ImZvbnQgczUgdGV4dCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+NTA8L3RleHQ+CiAgPHRleHQgeD0iMjkwIiB5PSIzMTAiIGNsYXNzPSJmb250IHM1IHRleHQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjUwPC90ZXh0PgogIDx0ZXh0IHg9IjI5MCIgeT0iMjAiIGNsYXNzPSJmb250IHM0IHRleHQiIGZvbnQtc3R5bGU9Iml0YWxpYyIgdGV4dC1hbmNob3I9ImVuZCI+SW5zdGFsbGF0aW9uIHRpbWUgaW4gc2Vjb25kcyAobG93ZXIgaXMgYmV0dGVyKTwvdGV4dD4KICA8cmVjdCB4PSI0MCIgeT0iMzUiIHdpZHRoPSIyMzUiIGhlaWdodD0iNiIgZmlsbD0iI2NkMzczMSIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjQxLjUiIHdpZHRoPSI3NiIgaGVpZ2h0PSI2IiBmaWxsPSIjZmJhZTAwIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iNDgiIHdpZHRoPSIxOTYiIGhlaWdodD0iNiIgZmlsbD0iIzI0OGViZCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjU0LjUiIHdpZHRoPSIxNDYiIGhlaWdodD0iNiIgZmlsbD0iIzI0OGViZCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjY1IiB3aWR0aD0iMTAiIGhlaWdodD0iNiIgZmlsbD0iI2NkMzczMSIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjcxLjUiIHdpZHRoPSI3IiBoZWlnaHQ9IjYiIGZpbGw9IiNmYmFlMDAiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSI3OCIgd2lkdGg9IjQiIGhlaWdodD0iNiIgZmlsbD0iIzI0OGViZCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9Ijg0LjUiIHdpZHRoPSIwIiBoZWlnaHQ9IjYiIGZpbGw9IiMyNDhlYmQiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSI5NSIgd2lkdGg9IjYzIiBoZWlnaHQ9IjYiIGZpbGw9IiNjZDM3MzEiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIxMDEuNSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjYiIGZpbGw9IiNmYmFlMDAiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIxMDgiIHdpZHRoPSI1NSIgaGVpZ2h0PSI2IiBmaWxsPSIjMjQ4ZWJkIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMTE0LjUiIHdpZHRoPSI5IiBoZWlnaHQ9IjYiIGZpbGw9IiMyNDhlYmQiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIxMjUiIHdpZHRoPSIxNDAiIGhlaWdodD0iNiIgZmlsbD0iI2NkMzczMSIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjEzMS41IiB3aWR0aD0iMzUiIGhlaWdodD0iNiIgZmlsbD0iI2ZiYWUwMCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjEzOCIgd2lkdGg9IjEzMyIgaGVpZ2h0PSI2IiBmaWxsPSIjMjQ4ZWJkIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMTQ0LjUiIHdpZHRoPSI4NiIgaGVpZ2h0PSI2IiBmaWxsPSIjMjQ4ZWJkIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMTU1IiB3aWR0aD0iMTU1IiBoZWlnaHQ9IjYiIGZpbGw9IiNjZDM3MzEiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIxNjEuNSIgd2lkdGg9IjY0IiBoZWlnaHQ9IjYiIGZpbGw9IiNmYmFlMDAiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIxNjgiIHdpZHRoPSIxMTciIGhlaWdodD0iNiIgZmlsbD0iIzI0OGViZCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjE3NC41IiB3aWR0aD0iNzEiIGhlaWdodD0iNiIgZmlsbD0iIzI0OGViZCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjE4NSIgd2lkdGg9IjE0IiBoZWlnaHQ9IjYiIGZpbGw9IiNjZDM3MzEiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIxOTEuNSIgd2lkdGg9IjkiIGhlaWdodD0iNiIgZmlsbD0iI2ZiYWUwMCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjE5OCIgd2lkdGg9IjExMSIgaGVpZ2h0PSI2IiBmaWxsPSIjMjQ4ZWJkIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMjA0LjUiIHdpZHRoPSIwIiBoZWlnaHQ9IjYiIGZpbGw9IiMyNDhlYmQiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIyMTUiIHdpZHRoPSIxMCIgaGVpZ2h0PSI2IiBmaWxsPSIjY2QzNzMxIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMjIxLjUiIHdpZHRoPSI3IiBoZWlnaHQ9IjYiIGZpbGw9IiNmYmFlMDAiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIyMjgiIHdpZHRoPSI0IiBoZWlnaHQ9IjYiIGZpbGw9IiMyNDhlYmQiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIyMzQuNSIgd2lkdGg9IjAiIGhlaWdodD0iNiIgZmlsbD0iIzI0OGViZCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjI0NSIgd2lkdGg9IjE0IiBoZWlnaHQ9IjYiIGZpbGw9IiNjZDM3MzEiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIyNTEuNSIgd2lkdGg9IjI5IiBoZWlnaHQ9IjYiIGZpbGw9IiNmYmFlMDAiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIyNTgiIHdpZHRoPSIyMDYiIGhlaWdodD0iNiIgZmlsbD0iIzI0OGViZCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjI2NC41IiB3aWR0aD0iMCIgaGVpZ2h0PSI2IiBmaWxsPSIjMjQ4ZWJkIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMjc1IiB3aWR0aD0iMTAiIGhlaWdodD0iNiIgZmlsbD0iI2NkMzczMSIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjI4MS41IiB3aWR0aD0iNTQiIGhlaWdodD0iNiIgZmlsbD0iI2ZiYWUwMCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjI4OCIgd2lkdGg9IjE3NyIgaGVpZ2h0PSI2IiBmaWxsPSIjMjQ4ZWJkIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMjk0LjUiIHdpZHRoPSIxNDIiIGhlaWdodD0iNiIgZmlsbD0iIzI0OGViZCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPGxpbmUgeDE9IjQwIiB5MT0iMzEiIHgyPSI0MCIgeTI9IjMwNSIgY2xhc3M9ImxpbmUiPjwvbGluZT4KICA8dGV4dCB4PSIzOCIgeT0iNDQuNSIgY2xhc3M9ImZvbnQgczQiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJlbmQiPmNsZWFuIGluc3RhbGw8L3RleHQ+CiAgPHRleHQgeD0iMzgiIHk9IjcwLjUiIGNsYXNzPSJmb250IHM0IiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0iZW5kIj53aXRoIGNhY2hlPC90ZXh0PgogIDx0ZXh0IHg9IjM4IiB5PSI3NC41IiBjbGFzcz0iZm9udCBzNCIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9ImVuZCI+d2l0aCBsb2NrZmlsZTwvdGV4dD4KICA8dGV4dCB4PSIzOCIgeT0iNzguNSIgY2xhc3M9ImZvbnQgczQiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJlbmQiPndpdGggbm9kZV9tb2R1bGVzPC90ZXh0PgogIDx0ZXh0IHg9IjM4IiB5PSIxMDIuNSIgY2xhc3M9ImZvbnQgczQiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJlbmQiPndpdGggY2FjaGU8L3RleHQ+CiAgPHRleHQgeD0iMzgiIHk9IjEwNi41IiBjbGFzcz0iZm9udCBzNCIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9ImVuZCI+d2l0aCBsb2NrZmlsZTwvdGV4dD4KICA8dGV4dCB4PSIzOCIgeT0iMTM0LjUiIGNsYXNzPSJmb250IHM0IiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0iZW5kIj53aXRoIGNhY2hlPC90ZXh0PgogIDx0ZXh0IHg9IjM4IiB5PSIxNjQuNSIgY2xhc3M9ImZvbnQgczQiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJlbmQiPndpdGggbG9ja2ZpbGU8L3RleHQ+CiAgPHRleHQgeD0iMzgiIHk9IjE5Mi41IiBjbGFzcz0iZm9udCBzNCIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9ImVuZCI+d2l0aCBjYWNoZTwvdGV4dD4KICA8dGV4dCB4PSIzOCIgeT0iMTk2LjUiIGNsYXNzPSJmb250IHM0IiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0iZW5kIj53aXRoIG5vZGVfbW9kdWxlczwvdGV4dD4KICA8dGV4dCB4PSIzOCIgeT0iMjIyLjUiIGNsYXNzPSJmb250IHM0IiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0iZW5kIj53aXRoIG5vZGVfbW9kdWxlczwvdGV4dD4KICA8dGV4dCB4PSIzOCIgeT0iMjI2LjUiIGNsYXNzPSJmb250IHM0IiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0iZW5kIj53aXRoIGxvY2tmaWxlPC90ZXh0PgogIDx0ZXh0IHg9IjM4IiB5PSIyNTQuNSIgY2xhc3M9ImZvbnQgczQiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJlbmQiPndpdGggbm9kZV9tb2R1bGVzPC90ZXh0PgogIDx0ZXh0IHg9IjM4IiB5PSIyODQuNSIgY2xhc3M9ImZvbnQgczQiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJlbmQiPnVwZGF0ZTwvdGV4dD4KICA8dGV4dCB4PSIyOTAiIHk9IjMxNyIgY2xhc3M9ImZvbnQgczQgdGV4dCIgdGV4dC1hbmNob3I9ImVuZCI+VGVzdHMgd2VyZSBydW4gdXNpbmcgTm9kZS5qcyB2MTIuMjIuMDwvdGV4dD4KPC9zdmc+Cg=="}}]);