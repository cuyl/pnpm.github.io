(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{242:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(8),o=(n(0),n(318)),i={id:"store",title:"pnpm store"},c={unversionedId:"cli/store",id:"cli/store",isDocsHomePage:!1,title:"pnpm store",description:"Managing the package store.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/cli/store.md",slug:"/cli/store",permalink:"/ru/next/cli/store",editUrl:"https://crowdin.com/project/pnpm/ru",version:"current",sidebar:"docs",previous:{title:"pnpm server",permalink:"/ru/next/cli/server"},next:{title:"package.json",permalink:"/ru/next/package_json"}},p=[{value:"Commands",id:"commands",children:[{value:"status",id:"status",children:[]},{value:"add",id:"add",children:[]},{value:"prune",id:"prune",children:[]}]}],s={toc:p};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Managing the package store."),Object(o.b)("h2",{id:"commands"},"Commands"),Object(o.b)("h3",{id:"status"},"status"),Object(o.b)("p",null,"Checks for modified packages in the store."),Object(o.b)("p",null,"Returns exit code 0 if the content of the package is the same as it was at the time of unpacking."),Object(o.b)("h3",{id:"add"},"add"),Object(o.b)("p",null,"Added in: v2.12.0"),Object(o.b)("p",null,"Functionally equivalent to ",Object(o.b)("a",{parentName:"p",href:"/ru/next/cli/add"},Object(o.b)("inlineCode",{parentName:"a"},"pnpm add")),", except this adds new packages to the store directly without modifying any projects or files outside of the store."),Object(o.b)("h3",{id:"prune"},"prune"),Object(o.b)("p",null,"Removes orphan packages from the store."),Object(o.b)("p",null,"Pruning the store will save disk space, however may slow down future installations involving pruned packages. Ultimately, it is a safe operation, however not recommended if you have orphaned packages from a package you intend to reinstall."),Object(o.b)("p",null,"Please read ",Object(o.b)("a",{parentName:"p",href:"/ru/next/faq#what-does-pnpm-store-prune-do-is-it-harmful"},"the FAQ")," for more information on unreferenced packages and best practices."),Object(o.b)("p",null,"Please note that this is prohibited when a ",Object(o.b)("a",{parentName:"p",href:"/ru/next/cli/server"},"store server")," is running."))}u.isMDXComponent=!0},318:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(n),f=r,m=l["".concat(i,".").concat(f)]||l[f]||d[f]||o;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);