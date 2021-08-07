"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[468],{9848:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7689);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||l;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,i=new Array(l);i[0]=d;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<l;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4287:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>a,contentTitle:()=>c,metadata:()=>p,toc:()=>u,default:()=>d});var r=t(2951),o=t(9877),l=(t(7689),t(9848)),i=["components"],a={id:"env",title:"pnpm env <cmd>"},c=void 0,p={unversionedId:"cli/env",id:"cli/env",isDocsHomePage:!1,title:"pnpm env <cmd>",description:"Added in: v6.12.0",source:"@site/i18n/hu/docusaurus-plugin-content-docs/current/cli/env.md",sourceDirName:"cli",slug:"/cli/env",permalink:"/hu/next/cli/env",editUrl:"https://crowdin.com/project/pnpm/hu",version:"current",frontMatter:{id:"env",title:"pnpm env <cmd>"},sidebar:"docs",previous:{title:"pnpm start",permalink:"/hu/next/cli/start"},next:{title:"pnpm publish",permalink:"/hu/next/cli/publish"}},u=[{value:"Commands",id:"commands",children:[{value:"use",id:"use",children:[]}]},{value:"Options",id:"options",children:[{value:"--global, -g",id:"--global--g",children:[]}]}],s={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Added in: v6.12.0"),(0,l.kt)("p",null,"Manages the Node.js environment."),(0,l.kt)("h2",{id:"commands"},"Commands"),(0,l.kt)("h3",{id:"use"},"use"),(0,l.kt)("p",null,"Install and use the specified version of Node.js"),(0,l.kt)("p",null,"Install the LTS version of Node.js:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm env use --global lts\n")),(0,l.kt)("p",null,"Install Node.js v16:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm env use --global 16\n")),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("h3",{id:"--global--g"},"--global, -g"),(0,l.kt)("p",null,"The changes are made systemwide."))}d.isMDXComponent=!0}}]);