"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6685],{9613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,v=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(v,l(l({ref:n},s),{},{components:t})):r.createElement(v,l({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=d;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6054:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>a,contentTitle:()=>p,metadata:()=>c,toc:()=>s,default:()=>d});var r=t(98),o=t(6862),i=(t(9496),t(9613)),l=["components"],a={id:"env",title:"pnpm env <cmd>"},p=void 0,c={unversionedId:"cli/env",id:"version-6.x/cli/env",isDocsHomePage:!1,title:"pnpm env <cmd>",description:"Added in: v6.12.0",source:"@site/versioned_docs/version-6.x/cli/env.md",sourceDirName:"cli",slug:"/cli/env",permalink:"/pnpm.github.io/zh/cli/env",editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"6.x",frontMatter:{id:"env",title:"pnpm env <cmd>"},sidebar:"version-6.x/docs",previous:{title:"pnpm start",permalink:"/pnpm.github.io/zh/cli/start"},next:{title:"pnpm publish",permalink:"/pnpm.github.io/zh/cli/publish"}},s=[{value:"Commands",id:"commands",children:[{value:"use",id:"use",children:[]}]},{value:"Options",id:"options",children:[{value:"--global, -g",id:"--global--g",children:[]}]}],u={toc:s};function d(e){var n=e.components,t=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Added in: v6.12.0"),(0,i.kt)("p",null,"Manages the Node.js environment."),(0,i.kt)("h2",{id:"commands"},"Commands"),(0,i.kt)("h3",{id:"use"},"use"),(0,i.kt)("p",null,"Install and use the specified version of Node.js"),(0,i.kt)("p",null,"Install the LTS version of Node.js:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pnpm env use --global lts\n")),(0,i.kt)("p",null,"Install Node.js v16:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pnpm env use --global 16\n")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"--global--g"},"--global, -g"),(0,i.kt)("p",null,"The changes are made systemwide."))}d.isMDXComponent=!0}}]);