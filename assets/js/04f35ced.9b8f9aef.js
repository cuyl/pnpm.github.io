"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1090],{9613:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var a=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},d=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=l(t),u=o,f=c["".concat(s,".").concat(u)]||c[u]||m[u]||r;return t?a.createElement(f,p(p({ref:n},d),{},{components:t})):a.createElement(f,p({ref:n},d))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,p=new Array(r);p[0]=c;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var l=2;l<r;l++)p[l]=t[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1146:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>i,contentTitle:()=>s,metadata:()=>l,toc:()=>d,default:()=>c});var a=t(98),o=t(6862),r=(t(9496),t(9613)),p=["components"],i={id:"pnpm-vs-npm",title:"pnpm vs npm"},s=void 0,l={unversionedId:"pnpm-vs-npm",id:"pnpm-vs-npm",isDocsHomePage:!1,title:"pnpm vs npm",description:"npm's flat tree",source:"@site/docs/pnpm-vs-npm.md",sourceDirName:".",slug:"/pnpm-vs-npm",permalink:"/pnpm.github.io/next/pnpm-vs-npm",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/docs/pnpm-vs-npm.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1633145775,formattedLastUpdatedAt:"10/2/2021",frontMatter:{id:"pnpm-vs-npm",title:"pnpm vs npm"}},d=[{value:"npm&#39;s flat tree",id:"npms-flat-tree",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Directory dependencies",id:"directory-dependencies",children:[]}],m={toc:d};function c(e){var n=e.components,t=(0,o.Z)(e,p);return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"npms-flat-tree"},"npm's flat tree"),(0,r.kt)("p",null,"npm maintains a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/npm/npm/issues/6912"},"flattened dependency tree")," as of version 3. This leads to less\ndisk space bloat, with a messy ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," directory as a side effect."),(0,r.kt)("p",null,"On the other hand, pnpm manages ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," by using hard linking and\nsymbolic linking to a global on-disk content-addressable store. This nets you\nthe benefits of far less disk space usage, while also keeping your\n",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," clean. There is documentation on the ",(0,r.kt)("a",{parentName:"p",href:"symlinked-node-modules-structure"},"store layout")," if you wish\nto learn more."),(0,r.kt)("p",null,"The good thing about pnpm's proper ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),' structure is that it\n"',(0,r.kt)("a",{parentName:"p",href:"https://www.kochan.io/nodejs/pnpms-strictness-helps-to-avoid-silly-bugs.html"},"helps to avoid silly bugs"),"\" by making it impossible to use modules that are not\nspecified in the project's ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"pnpm does not allow installation of packages without saving them to\n",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),". If no parameters are passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm add"),", packages are saved as\nregular dependencies. Like with npm, ",(0,r.kt)("inlineCode",{parentName:"p"},"--save-dev")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"--save-optional")," can be\nused to install packages as dev or optional dependencies."),(0,r.kt)("p",null,"As a consequence of this limitation, projects won't have any extraneous packages\nwhen they use pnpm unless they remove a dependency and leave it orphaned. That's\nwhy pnpm's implementation of the ",(0,r.kt)("a",{parentName:"p",href:"cli/prune"},"prune command")," does not allow you to specify\npackages to prune - it ALWAYS removes all extraneous and orphaned packages."),(0,r.kt)("h2",{id:"directory-dependencies"},"Directory dependencies"),(0,r.kt)("p",null,"Directory dependencies start with the ",(0,r.kt)("inlineCode",{parentName:"p"},"file:")," prefix and point to a directory in\nthe filesystem. Like npm, pnpm symlinks those dependencies. Unlike npm, pnpm\ndoes not perform installation for the file dependencies."),(0,r.kt)("p",null,"This means that if you have a package called ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," (",(0,r.kt)("inlineCode",{parentName:"p"},"<root>/foo"),") that has\n",(0,r.kt)("inlineCode",{parentName:"p"},"bar@file:../bar")," as a dependency, pnpm won't perform installation for\n",(0,r.kt)("inlineCode",{parentName:"p"},"<root>/bar")," when you run ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm install")," on ",(0,r.kt)("inlineCode",{parentName:"p"},"foo"),"."),(0,r.kt)("p",null,"If you need to run installations in several packages at the same time, for\ninstance in the case of a monorepo, you should look at the documentation for\n",(0,r.kt)("a",{parentName:"p",href:"cli/recursive"},(0,r.kt)("inlineCode",{parentName:"a"},"pnpm -r")),"."))}c.isMDXComponent=!0}}]);