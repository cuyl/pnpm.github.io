"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4749],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),d=i,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return t?r.createElement(f,a(a({ref:n},c),{},{components:t})):r.createElement(f,a({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9927:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>s,toc:()=>c,default:()=>u});var r=t(98),i=t(6862),o=(t(9496),t(9613)),a=["components"],l={id:"limitations",title:"Limitations"},p=void 0,s={unversionedId:"limitations",id:"version-6.x/limitations",isDocsHomePage:!1,title:"Limitations",description:"1. npm-shrinkwrap.json and package-lock.json are ignored. Unlike pnpm, npm",source:"@site/versioned_docs/version-6.x/limitations.md",sourceDirName:".",slug:"/limitations",permalink:"/pnpm.github.io/tr/limitations",editUrl:"https://crowdin.com/project/pnpm/tr",tags:[],version:"6.x",frontMatter:{id:"limitations",title:"Limitations"},sidebar:"version-6.x/docs",previous:{title:"Benchmark",permalink:"/pnpm.github.io/tr/benchmark"},next:{title:"Symlinked `node_modules` structure",permalink:"/pnpm.github.io/tr/symlinked-node-modules-structure"}},c=[],m={toc:c};function u(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"npm-shrinkwrap.json")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"package-lock.json")," are ignored. Unlike pnpm, npm\ncan install the same ",(0,o.kt)("inlineCode",{parentName:"li"},"name@version")," multiple times and with different sets of\ndependencies. npm's lockfile is designed to reflect the flat ",(0,o.kt)("inlineCode",{parentName:"li"},"node_modules"),"\nlayout, however, as pnpm cannot create a similar layout, it cannot respect\nnpm's lockfile format. See ",(0,o.kt)("a",{parentName:"li",href:"/pnpm.github.io/tr/cli/import"},"pnpm import")," if you wish to convert a lockfile to\npnpm's format, though."),(0,o.kt)("li",{parentName:"ol"},"pnpm can't publish npm packages with ",(0,o.kt)("inlineCode",{parentName:"li"},"bundledDependencies"),". Currently, there\nare no plans to add support for ",(0,o.kt)("inlineCode",{parentName:"li"},"bundledDependencies")," either, as they do not\nwork very consistently in publishing, even on npm. Instead, we recommend you use\nan actual package bundler, like webpack, rollup, or ESBuild."),(0,o.kt)("li",{parentName:"ol"},"Binstubs (files in ",(0,o.kt)("inlineCode",{parentName:"li"},"node_modules/.bin"),") are always shell files, not\nsymlinks to JS files. The shell files are created to help pluggable CLI apps\nin finding their plugins in the unusual ",(0,o.kt)("inlineCode",{parentName:"li"},"node_modules")," structure. This is very\nrarely an issue and if you expect the file to be a JS file, reference the\noriginal file directly instead, as described in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/pnpm/pnpm/issues/736"},"#736"),"."),(0,o.kt)("li",{parentName:"ol"},"Node's ",(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/api/cli.html#cli_preserve_symlinks"},"--preserve-symlinks")," flag does not work when executed in a project\nthat uses pnpm.")),(0,o.kt)("p",null,"Got an idea for workarounds for these issues?\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/new"},"Share them.")))}u.isMDXComponent=!0}}]);