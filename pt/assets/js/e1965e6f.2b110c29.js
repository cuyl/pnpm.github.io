"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[685],{9613:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var a=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return t?a.createElement(h,i(i({ref:n},d),{},{components:t})):a.createElement(h,i({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2394:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>p,toc:()=>d,default:()=>u});var a=t(98),o=t(6862),r=(t(9496),t(9613)),i=["components"],l={id:"aliases",title:"Aliases"},s=void 0,p={unversionedId:"aliases",id:"version-5.x/aliases",isDocsHomePage:!1,title:"Aliases",description:"Aliases let you install packages with custom names.",source:"@site/versioned_docs/version-5.x/aliases.md",sourceDirName:".",slug:"/aliases",permalink:"/pnpm.github.io/pt/5.x/aliases",editUrl:"https://crowdin.com/project/pnpm/pt",tags:[],version:"5.x",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1633229388,formattedLastUpdatedAt:"03/10/2021",frontMatter:{id:"aliases",title:"Aliases"},sidebar:"version-5.x/docs",previous:{title:"Workspace",permalink:"/pnpm.github.io/pt/5.x/workspaces"},next:{title:"Command line tab-completion",permalink:"/pnpm.github.io/pt/5.x/completion"}},d=[],c={toc:d};function u(e){var n=e.components,t=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Aliases let you install packages with custom names."),(0,r.kt)("p",null,"Let's assume you use ",(0,r.kt)("inlineCode",{parentName:"p"},"lodash")," all over your project. There is a bug in ",(0,r.kt)("inlineCode",{parentName:"p"},"lodash"),"\nthat breaks your project. You have a fix but ",(0,r.kt)("inlineCode",{parentName:"p"},"lodash")," won't merge it. Normally\nyou would either install ",(0,r.kt)("inlineCode",{parentName:"p"},"lodash")," from your fork directly (as a git-hosted\ndependency) or publish it with a different name. If you use the second solution\nyou have to replace all the requires in your project with the new dependency\nname (",(0,r.kt)("inlineCode",{parentName:"p"},"require('lodash')")," => ",(0,r.kt)("inlineCode",{parentName:"p"},"require('awesome-lodash')"),"). With aliases, you\nhave a third option."),(0,r.kt)("p",null,"Publish a new package called ",(0,r.kt)("inlineCode",{parentName:"p"},"awesome-lodash")," and install it using ",(0,r.kt)("inlineCode",{parentName:"p"},"lodash")," as\nits alias:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pnpm add lodash@npm:awesome-lodash\n")),(0,r.kt)("p",null,"No changes in code are needed. All the requires of ",(0,r.kt)("inlineCode",{parentName:"p"},"lodash")," will now resolve to\n",(0,r.kt)("inlineCode",{parentName:"p"},"awesome-lodash"),"."),(0,r.kt)("p",null,"Sometimes you'll want to use two different versions of a package in your\nproject. Easy:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add lodash1@npm:lodash@1\npnpm add lodash2@npm:lodash@2\n")),(0,r.kt)("p",null,"Now you can require the first version of lodash via ",(0,r.kt)("inlineCode",{parentName:"p"},"require('lodash1')")," and the\nsecond via ",(0,r.kt)("inlineCode",{parentName:"p"},"require('lodash2')"),"."),(0,r.kt)("p",null,"This gets even more powerful when combined with hooks. Maybe you want to replace\n",(0,r.kt)("inlineCode",{parentName:"p"},"lodash")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"awesome-lodash")," in all the packages in ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),". You can\neasily achieve that with the following ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpmfile.js"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function readPackage(pkg) {\n  if (pkg.dependencies && pkg.dependencies.lodash) {\n    pkg.dependencies.lodash = 'npm:awesome-lodash@^1.0.0'\n  }\n  return pkg\n}\n\nmodule.exports = {\n  hooks: {\n    readPackage\n  }\n}\n")))}u.isMDXComponent=!0}}]);