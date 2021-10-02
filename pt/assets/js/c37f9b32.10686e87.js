"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4205],{9613:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(9496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(r),d=i,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1648:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>p,contentTitle:()=>s,metadata:()=>c,toc:()=>l,default:()=>m});var n=r(98),i=r(6862),a=(r(9496),r(9613)),o=["components"],p={id:"start",title:"pnpm start"},s=void 0,c={unversionedId:"cli/start",id:"version-5.x/cli/start",isDocsHomePage:!1,title:"pnpm start",description:"Aliases: run start",source:"@site/versioned_docs/version-5.x/cli/start.md",sourceDirName:"cli",slug:"/cli/start",permalink:"/pnpm.github.io/pt/5.x/cli/start",editUrl:"https://crowdin.com/project/pnpm/pt",tags:[],version:"5.x",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1633139546,formattedLastUpdatedAt:"02/10/2021",frontMatter:{id:"start",title:"pnpm start"},sidebar:"version-5.x/docs",previous:{title:"pnpm test",permalink:"/pnpm.github.io/pt/5.x/cli/test"},next:{title:"pnpm publish",permalink:"/pnpm.github.io/pt/5.x/cli/publish"}},l=[],u={toc:l};function m(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Aliases: ",(0,a.kt)("inlineCode",{parentName:"p"},"run start")),(0,a.kt)("p",null,"Runs an arbitrary command specified in the package's ",(0,a.kt)("inlineCode",{parentName:"p"},"start")," property of its\n",(0,a.kt)("inlineCode",{parentName:"p"},"scripts")," object. If no ",(0,a.kt)("inlineCode",{parentName:"p"},"start")," property is specified on the ",(0,a.kt)("inlineCode",{parentName:"p"},"scripts")," object,\nit will attempt to run ",(0,a.kt)("inlineCode",{parentName:"p"},"node server.js")," as a default, failing if neither are\npresent."),(0,a.kt)("p",null,"The intended usage of the property is to specify a command that starts your\nprogram."))}m.isMDXComponent=!0}}]);