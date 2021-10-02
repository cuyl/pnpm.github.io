"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5087],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=i,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8898:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>s,toc:()=>c,default:()=>u});var r=n(98),i=n(6862),o=(n(9496),n(9613)),a=["components"],l={id:"limitations",title:"Limitations"},p=void 0,s={unversionedId:"limitations",id:"limitations",isDocsHomePage:!1,title:"Limitations",description:"1. npm-shrinkwrap.json and package-lock.json are ignored. Unlike pnpm, npm",source:"@site/docs/limitations.md",sourceDirName:".",slug:"/limitations",permalink:"/pnpm.github.io/it/next/limitations",editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1633142957,formattedLastUpdatedAt:"2/10/2021",frontMatter:{id:"limitations",title:"Limitations"},sidebar:"docs",previous:{title:"Benchmark",permalink:"/pnpm.github.io/it/next/benchmark"},next:{title:"Symlinked `node_modules` structure",permalink:"/pnpm.github.io/it/next/symlinked-node-modules-structure"}},c=[],m={toc:c};function u(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"npm-shrinkwrap.json")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"package-lock.json")," are ignored. Unlike pnpm, npm\ncan install the same ",(0,o.kt)("inlineCode",{parentName:"li"},"name@version")," multiple times and with different sets of\ndependencies. npm's lockfile is designed to reflect the flat ",(0,o.kt)("inlineCode",{parentName:"li"},"node_modules"),"\nlayout, however, as pnpm cannot create a similar layout, it cannot respect\nnpm's lockfile format. See ",(0,o.kt)("a",{parentName:"li",href:"/pnpm.github.io/it/next/cli/import"},"pnpm import")," if you wish to convert a lockfile to\npnpm's format, though."),(0,o.kt)("li",{parentName:"ol"},"pnpm can't publish npm packages with ",(0,o.kt)("inlineCode",{parentName:"li"},"bundledDependencies"),". Currently, there\nare no plans to add support for ",(0,o.kt)("inlineCode",{parentName:"li"},"bundledDependencies")," either, as they do not\nwork very consistently in publishing, even on npm. Instead, we recommend you use\nan actual package bundler, like webpack, rollup, or ESBuild."),(0,o.kt)("li",{parentName:"ol"},"Binstubs (files in ",(0,o.kt)("inlineCode",{parentName:"li"},"node_modules/.bin"),") are always shell files, not\nsymlinks to JS files. The shell files are created to help pluggable CLI apps\nin finding their plugins in the unusual ",(0,o.kt)("inlineCode",{parentName:"li"},"node_modules")," structure. This is very\nrarely an issue and if you expect the file to be a JS file, reference the\noriginal file directly instead, as described in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/pnpm/pnpm/issues/736"},"#736"),"."),(0,o.kt)("li",{parentName:"ol"},"Node's ",(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/api/cli.html#cli_preserve_symlinks"},"--preserve-symlinks")," flag does not work when executed in a project\nthat uses pnpm.")),(0,o.kt)("p",null,"Got an idea for workarounds for these issues?\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/new"},"Share them.")))}u.isMDXComponent=!0}}]);