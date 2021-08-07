"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1939],{9848:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7689);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=l,v=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return r?n.createElement(v,a(a({ref:t},u),{},{components:r})):n.createElement(v,a({ref:t},u))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4357:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>i,contentTitle:()=>c,metadata:()=>p,toc:()=>u,default:()=>d});var n=r(2951),l=r(9877),o=(r(7689),r(9848)),a=["components"],i={id:"env",title:"pnpm env <cmd>"},c=void 0,p={unversionedId:"cli/env",id:"version-6.x/cli/env",isDocsHomePage:!1,title:"pnpm env <cmd>",description:"Added in: v6.12.0",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-6.x/cli/env.md",sourceDirName:"cli",slug:"/cli/env",permalink:"/tr/cli/env",editUrl:"https://crowdin.com/project/pnpm/tr",version:"6.x",frontMatter:{id:"env",title:"pnpm env <cmd>"},sidebar:"version-6.x/docs",previous:{title:"pnpm start",permalink:"/tr/cli/start"},next:{title:"pnpm publish",permalink:"/tr/cli/publish"}},u=[{value:"Komutlar",id:"komutlar",children:[{value:"use",id:"use",children:[]}]},{value:"Parametreler",id:"parametreler",children:[{value:"--global, -g",id:"--global--g",children:[]}]}],s={toc:u};function d(e){var t=e.components,r=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Added in: v6.12.0"),(0,o.kt)("p",null,"Manages the Node.js environment."),(0,o.kt)("h2",{id:"komutlar"},"Komutlar"),(0,o.kt)("h3",{id:"use"},"use"),(0,o.kt)("p",null,"Install and use the specified version of Node.js"),(0,o.kt)("p",null,"Install the LTS version of Node.js:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env use --global lts\n")),(0,o.kt)("p",null,"Install Node.js v16:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env use --global 16\n")),(0,o.kt)("h2",{id:"parametreler"},"Parametreler"),(0,o.kt)("h3",{id:"--global--g"},"--global, -g"),(0,o.kt)("p",null,"The changes are made systemwide."))}d.isMDXComponent=!0}}]);