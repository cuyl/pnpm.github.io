"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2452],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return r?n.createElement(k,a(a({ref:t},u),{},{components:r})):n.createElement(k,a({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<l;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8039:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>i,contentTitle:()=>s,metadata:()=>p,toc:()=>u,default:()=>m});var n=r(98),o=r(6862),l=(r(9496),r(9613)),a=["components"],i={id:"server",title:"pnpm server"},s=void 0,p={unversionedId:"cli/server",id:"version-5.x/cli/server",isDocsHomePage:!1,title:"pnpm server",description:"Added in: v1.30.0",source:"@site/versioned_docs/version-5.x/cli/server.md",sourceDirName:"cli",slug:"/cli/server",permalink:"/pnpm.github.io/5.x/cli/server",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/versioned_docs/version-5.x/cli/server.md",tags:[],version:"5.x",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1633138159,formattedLastUpdatedAt:"10/2/2021",frontMatter:{id:"server",title:"pnpm server"},sidebar:"version-5.x/docs",previous:{title:"pnpm recursive",permalink:"/pnpm.github.io/5.x/cli/recursive"},next:{title:"pnpm store",permalink:"/pnpm.github.io/5.x/cli/store"}},u=[{value:"Commands",id:"commands",children:[{value:"pnpm server start",id:"pnpm-server-start",children:[]},{value:"pnpm server stop",id:"pnpm-server-stop",children:[]},{value:"pnpm server status",id:"pnpm-server-status",children:[]}]},{value:"Options",id:"options",children:[{value:"--background",id:"--background",children:[]},{value:"--network-concurrency",id:"--network-concurrency",children:[]},{value:"--protocol",id:"--protocol",children:[]},{value:"--port",id:"--port",children:[]},{value:"--store-dir",id:"--store-dir",children:[]},{value:"--no-lock",id:"--no-lock",children:[]},{value:"--ignore-stop-requests",id:"--ignore-stop-requests",children:[]},{value:"--ignore-upload-requests",id:"--ignore-upload-requests",children:[]}]}],c={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Added in: v1.30.0"),(0,l.kt)("p",null,"Manage a store server."),(0,l.kt)("h2",{id:"commands"},"Commands"),(0,l.kt)("h3",{id:"pnpm-server-start"},"pnpm server start"),(0,l.kt)("p",null,"Starts a server that performs all interactions with the store.\nOther commands will delegate any store-related tasks to this server."),(0,l.kt)("h3",{id:"pnpm-server-stop"},"pnpm server stop"),(0,l.kt)("p",null,"Stops the store server."),(0,l.kt)("h3",{id:"pnpm-server-status"},"pnpm server status"),(0,l.kt)("p",null,"Prints information about the running server."),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("h3",{id:"--background"},"--background"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("strong",{parentName:"li"},"false")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("strong",{parentName:"li"},"Boolean"))),(0,l.kt)("p",null,"Runs the server in the background, similar to daemonizing on UNIX systems."),(0,l.kt)("h3",{id:"--network-concurrency"},"--network-concurrency"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("strong",{parentName:"li"},"null")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("strong",{parentName:"li"},"Number"))),(0,l.kt)("p",null,"The maximum number of network requests to process simultaneously."),(0,l.kt)("h3",{id:"--protocol"},"--protocol"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("strong",{parentName:"li"},"auto")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("strong",{parentName:"li"},"auto"),", ",(0,l.kt)("strong",{parentName:"li"},"tcp"),", ",(0,l.kt)("strong",{parentName:"li"},"ipc"))),(0,l.kt)("p",null,"The communication protocol used by the server.\nWhen this is set to ",(0,l.kt)("inlineCode",{parentName:"p"},"auto"),", IPC is used on all systems except for Windows,\nwhich uses TCP."),(0,l.kt)("h3",{id:"--port"},"--port"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("strong",{parentName:"li"},"5813")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("strong",{parentName:"li"},"port number"))),(0,l.kt)("p",null,"The port number to use when TCP is used for communication.\nIf a port is specified and the protocol is set to ",(0,l.kt)("inlineCode",{parentName:"p"},"auto"),", regardless of system\ntype, the protocol is automatically set to use TCP."),(0,l.kt)("h3",{id:"--store-dir"},"--store-dir"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("strong",{parentName:"li"},"<","home",">","/.pnpm-store")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("strong",{parentName:"li"},"Path"))),(0,l.kt)("p",null,"Added in: v1 as ",(0,l.kt)("inlineCode",{parentName:"p"},"store")),(0,l.kt)("p",null,"The directory to use for the content addressable store."),(0,l.kt)("h3",{id:"--no-lock"},"--","[no-]","lock"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("strong",{parentName:"li"},"false")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("strong",{parentName:"li"},"Boolean"))),(0,l.kt)("p",null,"Set whether to make the package store immutable to external processes while\nthe server is running or not."),(0,l.kt)("h3",{id:"--ignore-stop-requests"},"--ignore-stop-requests"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("strong",{parentName:"li"},"false")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("strong",{parentName:"li"},"Boolean"))),(0,l.kt)("p",null,"Prevents you from stopping the server using ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm server stop"),"."),(0,l.kt)("h3",{id:"--ignore-upload-requests"},"--ignore-upload-requests"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("strong",{parentName:"li"},"false")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("strong",{parentName:"li"},"Boolean"))),(0,l.kt)("p",null,"Prevents creating a new side effect cache during install."))}m.isMDXComponent=!0}}]);