"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[972],{9613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>u});var o=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=o.createContext({}),c=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return o.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(t),u=a,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||r;return t?o.createElement(f,i(i({ref:n},s),{},{components:t})):o.createElement(f,i({ref:n},s))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3294:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>c,toc:()=>s,default:()=>m});var o=t(98),a=t(6862),r=(t(9496),t(9613)),i=["components"],l={id:"fetch",title:"pnpm fetch"},p=void 0,c={unversionedId:"cli/fetch",id:"version-6.x/cli/fetch",isDocsHomePage:!1,title:"pnpm fetch",description:"Fetch packages from a lockfile into virtual store, package manifest is ignored.",source:"@site/versioned_docs/version-6.x/cli/fetch.md",sourceDirName:"cli",slug:"/cli/fetch",permalink:"/pnpm.github.io/cli/fetch",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/versioned_docs/version-6.x/cli/fetch.md",tags:[],version:"6.x",frontMatter:{id:"fetch",title:"pnpm fetch"},sidebar:"version-6.x/docs",previous:{title:"pnpm prune",permalink:"/pnpm.github.io/cli/prune"},next:{title:"pnpm install-test",permalink:"/pnpm.github.io/cli/install-test"}},s=[{value:"Usage scenario",id:"usage-scenario",children:[]},{value:"Options",id:"options",children:[{value:"--dev",id:"--dev",children:[]},{value:"--prod",id:"--prod",children:[]}]}],d={toc:s};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Fetch packages from a lockfile into virtual store, package manifest is ignored."),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This is an experimental command. Breaking changes may be introduced in non-major versions of the CLI."))),(0,r.kt)("h2",{id:"usage-scenario"},"Usage scenario"),(0,r.kt)("p",null,"This command is specifically designed to boost building a docker image."),(0,r.kt)("p",null,"You may have read the ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/docs/guides/nodejs-docker-webapp/"},"official guide")," to writing a Dockerfile for a Node.js\napp, if you didn't read it yet, you may want to read it first."),(0,r.kt)("p",null,"From that guide, we learn to write an optimized Dockerfile for projects using\npnpm, which shall look like"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:14\n\nRUN curl -f https://get.pnpm.io/v6.14.js | node - add --global pnpm\n\n# Files required by pnpm install\nCOPY .npmrc package.json pnpm-lock.yaml .pnpmfile.cjs ./\n\nRUN pnpm install --frozen-lockfile --prod\n\n# Bundle app source\nCOPY . .\n\nEXPOSE 8080\nCMD [ "node", "server.js" ]\n')),(0,r.kt)("p",null,"As long as there is no change to ",(0,r.kt)("inlineCode",{parentName:"p"},".npmrc"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs"),", docker build cache is still valid up to the layer of\n",(0,r.kt)("inlineCode",{parentName:"p"},"RUN pnpm install --frozen-lockfile --prod"),", which cost most of the time\nwhen building a docker image."),(0,r.kt)("p",null,"However, modification to ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," may happen much more frequently than\nwe expected, because it does not only contain dependencies, but may also\ncontain the version number, scripts, and arbitrary configuration for any other\ntool."),(0,r.kt)("p",null,"It's also hard to maintain a Dockerfile that build a monorepo project, it may\nlook like"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:14\n\nRUN curl -f https://get.pnpm.io/v6.14.js | node - add --global pnpm\n\n# Files required by pnpm install\nCOPY .npmrc package.json pnpm-lock.yaml .pnpmfile.cjs ./\n\n# for each sub-package, we have to add one extra step to copy its manifest\n# to the right place, as docker have no way to filter out only package.json with\n# single instruction\nCOPY packages/foo/backage.json packages/foo/\nCOPY packages/bar/backage.json packages/bar/\n\nRUN pnpm install --frozen-lockfile --prod\n\n# Bundle app source\nCOPY . .\n\nEXPOSE 8080\nCMD [ "node", "server.js" ]\n\n')),(0,r.kt)("p",null,"As you can see, the Dockerfile has to be updated when you add or remove\nsub-packages."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pnpm fetch")," will solve the above problem perfectly by providing the ability\nto fetch package to virtual store with information only from a lockfile."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:14\n\nRUN curl -f https://get.pnpm.io/v6.14.js | node - add --global pnpm\n\n# pnpm fetch does require only lockfile\nCOPY pnpm-lock.yaml ./\n\nRUN pnpm fetch --prod\n\n\nADD . ./\nRUN pnpm install -r --offline --prod\n\n\nEXPOSE 8080\nCMD [ "node", "server.js" ]\n')),(0,r.kt)("p",null,"It works for both simple project and monorepo project, ",(0,r.kt)("inlineCode",{parentName:"p"},"--offline")," enforces\npnpm not to communicate with package registry as all needed packages shall be\nalready presented in the virtual store."),(0,r.kt)("p",null,"As long as the lockfile is not changed, the build cache is valid up to the\nlayer ",(0,r.kt)("inlineCode",{parentName:"p"},"RUN pnpm install -r --offline --prod"),", which will save you much\ntime."),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("h3",{id:"--dev"},"--dev"),(0,r.kt)("p",null,"Only development packages will be fetched"),(0,r.kt)("h3",{id:"--prod"},"--prod"),(0,r.kt)("p",null,"Development packages will not be fetched"))}m.isMDXComponent=!0}}]);