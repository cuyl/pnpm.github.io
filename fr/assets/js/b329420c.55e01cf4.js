"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9495],{9613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4723:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>c,contentTitle:()=>p,metadata:()=>l,assets:()=>s,toc:()=>u,default:()=>f});var n=r(98),o=r(6862),a=(r(9496),r(9613)),i=["components"],c={title:"Node-Modules configuration options with pnpm",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://pbs.twimg.com/profile_images/1143606083262586880/EW2GCFKK_400x400.jpg"},p=void 0,l={permalink:"/pnpm.github.io/fr/blog/2020/10/17/node-modules-configuration-options-with-pnpm",editUrl:"https://crowdin.com/project/pnpm/fr",source:"@site/blog/2020-10-17-node-modules-configuration-options-with-pnpm.md",title:"Node-Modules configuration options with pnpm",description:"There are many ways to create a node_modules directory.",date:"2020-10-17T00:00:00.000Z",formattedDate:"17 octobre 2020",tags:[],readingTime:1.86,truncated:!0,authors:[{name:"Zoltan Kochan",url:"http://twitter.com/zoltankochan",imageURL:"https://pbs.twimg.com/profile_images/1143606083262586880/EW2GCFKK_400x400.jpg"}],nextItem:{title:"Flat node_modules is not the only way",permalink:"/pnpm.github.io/fr/blog/2020/05/27/flat-node-modules-is-not-the-only-way"}},s={authorsImageUrls:[void 0]},u=[],m={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are many ways to create a node_modules directory.\nYour goal must be to create the most strict one but if that is not possible,\nthere are options to make a loose node_modules as well."))}f.isMDXComponent=!0}}]);