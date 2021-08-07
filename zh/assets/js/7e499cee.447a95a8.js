"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3500],{9848:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7689);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||l;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3786:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>a,contentTitle:()=>c,metadata:()=>p,toc:()=>u,default:()=>d});var r=n(2951),o=n(9877),l=(n(7689),n(9848)),i=["components"],a={id:"env",title:"pnpm env <cmd>"},c=void 0,p={unversionedId:"cli/env",id:"cli/env",isDocsHomePage:!1,title:"pnpm env <cmd>",description:"Added in: v6.12.0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/cli/env.md",sourceDirName:"cli",slug:"/cli/env",permalink:"/zh/next/cli/env",editUrl:"https://crowdin.com/project/pnpm/zh-CN",version:"current",frontMatter:{id:"env",title:"pnpm env <cmd>"},sidebar:"docs",previous:{title:"pnpm start",permalink:"/zh/next/cli/start"},next:{title:"pnpm publish",permalink:"/zh/next/cli/publish"}},u=[{value:"\u547d\u4ee4\u884c",id:"\u547d\u4ee4\u884c",children:[{value:"use",id:"use",children:[]}]},{value:"Options",id:"options",children:[{value:"--global, -g",id:"--global--g",children:[]}]}],s={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Added in: v6.12.0"),(0,l.kt)("p",null,"Manages the Node.js environment."),(0,l.kt)("h2",{id:"\u547d\u4ee4\u884c"},"\u547d\u4ee4\u884c"),(0,l.kt)("h3",{id:"use"},"use"),(0,l.kt)("p",null,"Install and use the specified version of Node.js"),(0,l.kt)("p",null,"Install the LTS version of Node.js:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm env use --global lts\n")),(0,l.kt)("p",null,"Install Node.js v16:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm env use --global 16\n")),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("h3",{id:"--global--g"},"--global, -g"),(0,l.kt)("p",null,"The changes are made systemwide."))}d.isMDXComponent=!0}}]);