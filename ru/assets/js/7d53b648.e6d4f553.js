"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7359],{9613:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2934:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>p,contentTitle:()=>s,metadata:()=>c,toc:()=>l,default:()=>d});var n=r(98),o=r(6862),a=(r(9496),r(9613)),i=["components"],p={id:"store",title:"pnpm store"},s=void 0,c={unversionedId:"cli/store",id:"version-5.x/cli/store",isDocsHomePage:!1,title:"pnpm store",description:"Managing the package store.",source:"@site/versioned_docs/version-5.x/cli/store.md",sourceDirName:"cli",slug:"/cli/store",permalink:"/pnpm.github.io/ru/5.x/cli/store",editUrl:"https://crowdin.com/project/pnpm/ru",tags:[],version:"5.x",lastUpdatedBy:"Yuchao",lastUpdatedAt:1633141056,formattedLastUpdatedAt:"02.10.2021",frontMatter:{id:"store",title:"pnpm store"},sidebar:"version-5.x/docs",previous:{title:"pnpm server",permalink:"/pnpm.github.io/ru/5.x/cli/server"},next:{title:"package.json",permalink:"/pnpm.github.io/ru/5.x/package_json"}},l=[{value:"Commands",id:"commands",children:[{value:"status",id:"status",children:[]},{value:"add",id:"add",children:[]},{value:"prune",id:"prune",children:[]}]}],u={toc:l};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Managing the package store."),(0,a.kt)("h2",{id:"commands"},"Commands"),(0,a.kt)("h3",{id:"status"},"status"),(0,a.kt)("p",null,"Checks for modified packages in the store."),(0,a.kt)("p",null,"Returns exit code 0 if the content of the package is the same as it was at the\ntime of unpacking."),(0,a.kt)("h3",{id:"add"},"add"),(0,a.kt)("p",null,"Added in: v2.12.0"),(0,a.kt)("p",null,"Functionally equivalent to ",(0,a.kt)("a",{parentName:"p",href:"/pnpm.github.io/ru/5.x/cli/add"},(0,a.kt)("inlineCode",{parentName:"a"},"pnpm add")),", except this adds new packages to the\nstore directly without modifying any projects or files outside of the store."),(0,a.kt)("h3",{id:"prune"},"prune"),(0,a.kt)("p",null,"Removes orphan packages from the store."),(0,a.kt)("p",null,"Pruning the store will save disk space, however may slow down future\ninstallations involving pruned packages. Ultimately, it is a safe operation,\nhowever not recommended if you have orphaned packages from a package you intend\nto reinstall."),(0,a.kt)("p",null,"Please read ",(0,a.kt)("a",{parentName:"p",href:"/pnpm.github.io/ru/5.x/faq#what-does-pnpm-store-prune-do-is-it-harmful"},"the FAQ")," for more information on unreferenced packages and best\npractices."),(0,a.kt)("p",null,"Please note that this is prohibited when a ",(0,a.kt)("a",{parentName:"p",href:"/pnpm.github.io/ru/5.x/cli/server"},"store server")," is running."))}d.isMDXComponent=!0}}]);