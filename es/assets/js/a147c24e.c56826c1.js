"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8116],{9613:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var a=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return t?a.createElement(h,i(i({ref:n},d),{},{components:t})):a.createElement(h,i({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2515:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>p,toc:()=>d,default:()=>u});var a=t(98),r=t(6862),o=(t(9496),t(9613)),i=["components"],l={id:"aliases",title:"Aliases"},s=void 0,p={unversionedId:"aliases",id:"aliases",isDocsHomePage:!1,title:"Aliases",description:"Aliases let you install packages with custom names.",source:"@site/docs/aliases.md",sourceDirName:".",slug:"/aliases",permalink:"/pnpm.github.io/es/next/aliases",editUrl:"https://crowdin.com/project/pnpm/es",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1633160590,formattedLastUpdatedAt:"2/10/2021",frontMatter:{id:"aliases",title:"Aliases"},sidebar:"docs",previous:{title:"Workspace",permalink:"/pnpm.github.io/es/next/workspaces"},next:{title:"Command line tab-completion",permalink:"/pnpm.github.io/es/next/completion"}},d=[],c={toc:d};function u(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Aliases let you install packages with custom names."),(0,o.kt)("p",null,"Let's assume you use ",(0,o.kt)("inlineCode",{parentName:"p"},"lodash")," all over your project. There is a bug in ",(0,o.kt)("inlineCode",{parentName:"p"},"lodash"),"\nthat breaks your project. You have a fix but ",(0,o.kt)("inlineCode",{parentName:"p"},"lodash")," won't merge it. Normally\nyou would either install ",(0,o.kt)("inlineCode",{parentName:"p"},"lodash")," from your fork directly (as a git-hosted\ndependency) or publish it with a different name. If you use the second solution\nyou have to replace all the requires in your project with the new dependency\nname (",(0,o.kt)("inlineCode",{parentName:"p"},"require('lodash')")," => ",(0,o.kt)("inlineCode",{parentName:"p"},"require('awesome-lodash')"),"). With aliases, you\nhave a third option."),(0,o.kt)("p",null,"Publish a new package called ",(0,o.kt)("inlineCode",{parentName:"p"},"awesome-lodash")," and install it using ",(0,o.kt)("inlineCode",{parentName:"p"},"lodash")," as\nits alias:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm add lodash@npm:awesome-lodash\n")),(0,o.kt)("p",null,"No changes in code are needed. All the requires of ",(0,o.kt)("inlineCode",{parentName:"p"},"lodash")," will now resolve to\n",(0,o.kt)("inlineCode",{parentName:"p"},"awesome-lodash"),"."),(0,o.kt)("p",null,"Sometimes you'll want to use two different versions of a package in your\nproject. Easy:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add lodash1@npm:lodash@1\npnpm add lodash2@npm:lodash@2\n")),(0,o.kt)("p",null,"Now you can require the first version of lodash via ",(0,o.kt)("inlineCode",{parentName:"p"},"require('lodash1')")," and the\nsecond via ",(0,o.kt)("inlineCode",{parentName:"p"},"require('lodash2')"),"."),(0,o.kt)("p",null,"This gets even more powerful when combined with hooks. Maybe you want to replace\n",(0,o.kt)("inlineCode",{parentName:"p"},"lodash")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"awesome-lodash")," in all the packages in ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules"),". You can\neasily achieve that with the following ",(0,o.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function readPackage(pkg) {\n  if (pkg.dependencies && pkg.dependencies.lodash) {\n    pkg.dependencies.lodash = 'npm:awesome-lodash@^1.0.0'\n  }\n  return pkg\n}\n\nmodule.exports = {\n  hooks: {\n    readPackage\n  }\n}\n")))}u.isMDXComponent=!0}}]);