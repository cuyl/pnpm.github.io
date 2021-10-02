"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8634],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7752:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>p,metadata:()=>c,toc:()=>s,default:()=>d});var r=n(98),o=n(6862),a=(n(9496),n(9613)),l=["components"],i={id:"env",title:"pnpm env <cmd>"},p=void 0,c={unversionedId:"cli/env",id:"cli/env",isDocsHomePage:!1,title:"pnpm env <cmd>",description:"Added in: v6.12.0",source:"@site/docs/cli/env.md",sourceDirName:"cli",slug:"/cli/env",permalink:"/pnpm.github.io/ja/next/cli/env",editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"current",lastUpdatedBy:"Yuchao",lastUpdatedAt:1633157218,formattedLastUpdatedAt:"2021/10/2",frontMatter:{id:"env",title:"pnpm env <cmd>"},sidebar:"docs",previous:{title:"pnpm start",permalink:"/pnpm.github.io/ja/next/cli/start"},next:{title:"pnpm publish",permalink:"/pnpm.github.io/ja/next/cli/publish"}},s=[{value:"Commands",id:"commands",children:[{value:"use",id:"use",children:[]}]},{value:"Options",id:"options",children:[{value:"--global, -g",id:"--global--g",children:[]}]}],u={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Added in: v6.12.0"),(0,a.kt)("p",null,"Manages the Node.js environment."),(0,a.kt)("h2",{id:"commands"},"Commands"),(0,a.kt)("h3",{id:"use"},"use"),(0,a.kt)("p",null,"Install and use the specified version of Node.js"),(0,a.kt)("p",null,"Install the LTS version of Node.js:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm env use --global lts\n")),(0,a.kt)("p",null,"Install Node.js v16:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm env use --global 16\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("h3",{id:"--global--g"},"--global, -g"),(0,a.kt)("p",null,"The changes are made systemwide."))}d.isMDXComponent=!0}}]);