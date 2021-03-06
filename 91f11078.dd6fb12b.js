(window.webpackJsonp=window.webpackJsonp||[]).push([[1705],{1774:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return c}));var n=r(3),o=r(7),a=(r(0),r(3064)),i={id:"server",title:"pnpm server",original_id:"server"},l={unversionedId:"cli/server",id:"version-4.3/cli/server",isDocsHomePage:!1,title:"pnpm server",description:"Manage a store server.",source:"@site/versioned_docs/version-4.3/cli/server.md",slug:"/cli/server",permalink:"/4.3/cli/server",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/docs/versioned_docs/version-4.3/cli/server.md",version:"4.3",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615048406,sidebar:"version-4.3/docs",previous:{title:"pnpm recursive",permalink:"/4.3/cli/recursive"},next:{title:"pnpm store",permalink:"/4.3/cli/store"}},p=[{value:"Commands",id:"commands",children:[{value:"pnpm server start",id:"pnpm-server-start",children:[]},{value:"pnpm server stop",id:"pnpm-server-stop",children:[]},{value:"pnpm server status",id:"pnpm-server-status",children:[]}]},{value:"Options",id:"options",children:[{value:"--background",id:"--background",children:[]},{value:"--protocol",id:"--protocol",children:[]},{value:"--port",id:"--port",children:[]},{value:"--ignore-stop-requests",id:"--ignore-stop-requests",children:[]},{value:"--ignore-upload-requests",id:"--ignore-upload-requests",children:[]}]}],s={toc:p};function c(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Manage a store server."),Object(a.b)("h2",{id:"commands"},"Commands"),Object(a.b)("h3",{id:"pnpm-server-start"},"pnpm server start"),Object(a.b)("p",null,"Added in: v1.30.0"),Object(a.b)("p",null,"Starts a server that does all interactions with the store.\nOther commands will delegate any store-related tasks to this server."),Object(a.b)("h3",{id:"pnpm-server-stop"},"pnpm server stop"),Object(a.b)("p",null,"Added in: v1.30.0"),Object(a.b)("p",null,"Stops the store server."),Object(a.b)("h3",{id:"pnpm-server-status"},"pnpm server status"),Object(a.b)("p",null,"Added in: v2.5.0"),Object(a.b)("p",null,"Prints information about the running server."),Object(a.b)("h2",{id:"options"},"Options"),Object(a.b)("h3",{id:"--background"},"--background"),Object(a.b)("p",null,"Added in: v1.30.0"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Default: ",Object(a.b)("strong",{parentName:"li"},"false")),Object(a.b)("li",{parentName:"ul"},"Type: ",Object(a.b)("strong",{parentName:"li"},"Boolean"))),Object(a.b)("p",null,"Runs the server in the background."),Object(a.b)("h3",{id:"--protocol"},"--protocol"),Object(a.b)("p",null,"Added in: v1.30.0"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Default: ",Object(a.b)("strong",{parentName:"li"},"auto")),Object(a.b)("li",{parentName:"ul"},"Type: ",Object(a.b)("strong",{parentName:"li"},"auto"),", ",Object(a.b)("strong",{parentName:"li"},"tcp"),", ",Object(a.b)("strong",{parentName:"li"},"ipc"))),Object(a.b)("p",null,"The communication protocol used by the server.\nWhen ",Object(a.b)("strong",{parentName:"p"},"auto")," is used, ",Object(a.b)("strong",{parentName:"p"},"ipc")," used on non-Windows servers and ",Object(a.b)("strong",{parentName:"p"},"tcp")," on Windows."),Object(a.b)("h3",{id:"--port"},"--port"),Object(a.b)("p",null,"Added in: v1.30.0"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Default: ",Object(a.b)("strong",{parentName:"li"},"5813")),Object(a.b)("li",{parentName:"ul"},"Type: ",Object(a.b)("strong",{parentName:"li"},"port number"))),Object(a.b)("p",null,"The port number to use, when TCP is used for communication.\nIf port is specified and ",Object(a.b)("strong",{parentName:"p"},"protocol")," is set to auto, ",Object(a.b)("strong",{parentName:"p"},"tcp")," protocol is used."),Object(a.b)("p",null,"Other configs that are used by ",Object(a.b)("inlineCode",{parentName:"p"},"pnpm server"),": ",Object(a.b)("strong",{parentName:"p"},"store"),", ",Object(a.b)("strong",{parentName:"p"},"lock"),"."),Object(a.b)("h3",{id:"--ignore-stop-requests"},"--ignore-stop-requests"),Object(a.b)("p",null,"Added in: v1.30.0"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Default: ",Object(a.b)("strong",{parentName:"li"},"false")),Object(a.b)("li",{parentName:"ul"},"Type: ",Object(a.b)("strong",{parentName:"li"},"Boolean"))),Object(a.b)("p",null,"Disallows stopping the server using ",Object(a.b)("inlineCode",{parentName:"p"},"pnpm server stop"),"."),Object(a.b)("h3",{id:"--ignore-upload-requests"},"--ignore-upload-requests"),Object(a.b)("p",null,"Added in: v1.31.0"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Default: ",Object(a.b)("strong",{parentName:"li"},"false")),Object(a.b)("li",{parentName:"ul"},"Type: ",Object(a.b)("strong",{parentName:"li"},"Boolean"))),Object(a.b)("p",null,"Disallows creating new side effect cache during install."))}c.isMDXComponent=!0},3064:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),c=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},b=function(e){var t=c(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=c(r),d=n,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||a;return r?o.a.createElement(m,l(l({ref:t},s),{},{components:r})):o.a.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);