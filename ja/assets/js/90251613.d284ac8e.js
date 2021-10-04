"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4266],{9613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>y});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(t),y=o,d=m["".concat(i,".").concat(y)]||m[y]||s[y]||a;return t?r.createElement(d,p(p({ref:n},u),{},{components:t})):r.createElement(d,p({ref:n},u))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,p[1]=l;for(var c=2;c<a;c++)p[c]=t[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2642:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>i,metadata:()=>c,toc:()=>u,default:()=>m});var r=t(98),o=t(6862),a=(t(9496),t(9613)),p=["components"],l={id:"only-allow-pnpm",title:"Only allow pnpm"},i=void 0,c={unversionedId:"only-allow-pnpm",id:"only-allow-pnpm",isDocsHomePage:!1,title:"Only allow pnpm",description:"When you use pnpm on a project, you don't want others to accidentally run",source:"@site/docs/only-allow-pnpm.md",sourceDirName:".",slug:"/only-allow-pnpm",permalink:"/pnpm.github.io/ja/next/only-allow-pnpm",editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1633315858,formattedLastUpdatedAt:"2021/10/4",frontMatter:{id:"only-allow-pnpm",title:"Only allow pnpm"},sidebar:"docs",previous:{title:"Continuous Integration",permalink:"/pnpm.github.io/ja/next/continuous-integration"},next:{title:"Working with Git",permalink:"/pnpm.github.io/ja/next/git"}},u=[],s={toc:u};function m(e){var n=e.components,t=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When you use pnpm on a project, you don't want others to accidentally run\n",(0,a.kt)("inlineCode",{parentName:"p"},"npm install")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn"),". To prevent devs from using other package managers,\nyou can add the following ",(0,a.kt)("inlineCode",{parentName:"p"},"preinstall")," script to your ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "scripts": {\n        "preinstall": "npx only-allow pnpm"\n    }\n}\n')),(0,a.kt)("p",null,"Now, whenever someone runs ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn"),", they'll get an\nerror instead and installation will not proceed."),(0,a.kt)("p",null,"If you use npm v7, use ",(0,a.kt)("inlineCode",{parentName:"p"},"npx -y")," instead."))}m.isMDXComponent=!0}}]);