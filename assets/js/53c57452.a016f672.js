"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5154],{9613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),s=c(n),d=i,f=s["".concat(l,".").concat(d)]||s[d]||u[d]||o;return n?r.createElement(f,p(p({ref:t},m),{},{components:n})):r.createElement(f,p({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,p=new Array(o);p[0]=s;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,p[1]=a;for(var c=2;c<o;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},7680:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>a,contentTitle:()=>l,metadata:()=>c,toc:()=>m,default:()=>s});var r=n(98),i=n(6862),o=(n(9496),n(9613)),p=["components"],a={id:"import",title:"pnpm import"},l=void 0,c={unversionedId:"cli/import",id:"version-6.x/cli/import",isDocsHomePage:!1,title:"pnpm import",description:"Added in: v2.15.0",source:"@site/versioned_docs/version-6.x/cli/import.md",sourceDirName:"cli",slug:"/cli/import",permalink:"/pnpm.github.io/cli/import",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/versioned_docs/version-6.x/cli/import.md",tags:[],version:"6.x",frontMatter:{id:"import",title:"pnpm import"},sidebar:"version-6.x/docs",previous:{title:"pnpm unlink",permalink:"/pnpm.github.io/cli/unlink"},next:{title:"pnpm rebuild",permalink:"/pnpm.github.io/cli/rebuild"}},m=[],u={toc:m};function s(e){var t=e.components,n=(0,i.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Added in: v2.15.0"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pnpm import")," generates a ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," from another package manager's lockfile. Supported source files:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"package-lock.json")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"npm-shrinkwrap.json")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"yarn.lock")," (since v6.14.0)")))}s.isMDXComponent=!0}}]);