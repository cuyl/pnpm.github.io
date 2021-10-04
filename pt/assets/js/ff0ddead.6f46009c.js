"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8634],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7752:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>a,contentTitle:()=>p,metadata:()=>c,toc:()=>s,default:()=>d});var r=n(98),o=n(6862),i=(n(9496),n(9613)),l=["components"],a={id:"env",title:"pnpm env <cmd>"},p=void 0,c={unversionedId:"cli/env",id:"cli/env",isDocsHomePage:!1,title:"pnpm env <cmd>",description:"Added in: v6.12.0",source:"@site/docs/cli/env.md",sourceDirName:"cli",slug:"/cli/env",permalink:"/pnpm.github.io/pt/next/cli/env",editUrl:"https://crowdin.com/project/pnpm/pt",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1633321346,formattedLastUpdatedAt:"04/10/2021",frontMatter:{id:"env",title:"pnpm env <cmd>"},sidebar:"docs",previous:{title:"pnpm start",permalink:"/pnpm.github.io/pt/next/cli/start"},next:{title:"pnpm publish",permalink:"/pnpm.github.io/pt/next/cli/publish"}},s=[{value:"Commands",id:"commands",children:[{value:"use",id:"use",children:[]}]},{value:"Options",id:"options",children:[{value:"--global, -g",id:"--global--g",children:[]}]}],u={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Added in: v6.12.0"),(0,i.kt)("p",null,"Manages the Node.js environment."),(0,i.kt)("h2",{id:"commands"},"Commands"),(0,i.kt)("h3",{id:"use"},"use"),(0,i.kt)("p",null,"Install and use the specified version of Node.js"),(0,i.kt)("p",null,"Install the LTS version of Node.js:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pnpm env use --global lts\n")),(0,i.kt)("p",null,"Install Node.js v16:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pnpm env use --global 16\n")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"--global--g"},"--global, -g"),(0,i.kt)("p",null,"The changes are made systemwide."))}d.isMDXComponent=!0}}]);