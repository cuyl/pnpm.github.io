(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{214:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),p=n(8),a=(n(0),n(318)),o={id:"pnpm-store",title:"pnpm store",original_id:"pnpm-store"},s={unversionedId:"pnpm-store",id:"version-4.x/pnpm-store",isDocsHomePage:!1,title:"pnpm store",description:"Commands related to the pnpm package store.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-4.x/pnpm-store.md",slug:"/pnpm-store",permalink:"/tr/4.x/pnpm-store",editUrl:"https://crowdin.com/project/pnpm/tr",version:"4.x"},c=[{value:"pnpm store status",id:"pnpm-store-status",children:[]},{value:"pnpm store add",id:"pnpm-store-add",children:[]},{value:"pnpm store usages",id:"pnpm-store-usages",children:[]},{value:"pnpm store prune",id:"pnpm-store-prune",children:[]}],i={toc:c};function l(e){var t=e.components,n=Object(p.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Commands related to the ",Object(a.b)("a",{parentName:"p",href:"/tr/4.x/about-package-store"},"pnpm package store"),"."),Object(a.b)("h2",{id:"pnpm-store-status"},"pnpm store status"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"pnpm store status\n")),Object(a.b)("p",null,"Checks for modified packages in the store."),Object(a.b)("p",null,"Returns exit code 0 if the content of the package is the same as it was at the time of unpacking."),Object(a.b)("h2",{id:"pnpm-store-add"},"pnpm store add"),Object(a.b)("p",null,"Added in: v2.12.0"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"pnpm store add [<@scope>/]<pkg>...\n")),Object(a.b)("p",null,"Adds new packages to the pnpm store directly. Does not modify any projects or files outside the store."),Object(a.b)("p",null,"Usage examples:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"pnpm store add express@4 typescript@2\n")),Object(a.b)("h2",{id:"pnpm-store-usages"},"pnpm store usages"),Object(a.b)("p",null,"Added in: v2.21.0"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"pnpm store usages [<@scope>/]<pkg>...\n")),Object(a.b)("p",null,"Lists all pnpm projects on the current filesystem that depend on the specified packages in the store."),Object(a.b)("p",null,"Usage examples:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"pnpm store usages flatmap-stream\npnpm store usages is-odd@3.0.0 is-even@2.0.0\npnpm store usages @babel/core ansi-regex\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note that this command might be slow for very large stores. We are working on improving performance.")),Object(a.b)("h2",{id:"pnpm-store-prune"},"pnpm store prune"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"pnpm store prune\n")),Object(a.b)("p",null,"Removes unreferenced (extraneous, orphan) packages from the store."),Object(a.b)("p",null,"Pruning the store is not harmful, but might slow down future installations."),Object(a.b)("p",null,"Please read ",Object(a.b)("a",{parentName:"p",href:"/tr/4.x/faq#what-does-pnpm-store-prune-do-is-it-harmful"},"the FAQ")," for more information on unreferenced packages and ",Object(a.b)("inlineCode",{parentName:"p"},"pnpm store prune")," best practices."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"This command is prohibited when a ",Object(a.b)("a",{parentName:"p",href:"/tr/4.x/pnpm-server"},"store server")," is running.")))}l.isMDXComponent=!0},318:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),p=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var i=p.a.createContext({}),l=function(e){var t=p.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return p.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return p.a.createElement(p.a.Fragment,{},t)}},b=p.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,d=u["".concat(o,".").concat(b)]||u[b]||m[b]||a;return n?p.a.createElement(d,s(s({ref:t},i),{},{components:n})):p.a.createElement(d,s({ref:t},i))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var i=2;i<a;i++)o[i]=n[i];return p.a.createElement.apply(null,o)}return p.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);