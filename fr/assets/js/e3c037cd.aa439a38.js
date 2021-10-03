"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6728],{9613:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var r=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=r.createContext({}),c=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(a.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,a=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),k=c(t),u=i,s=k["".concat(a,".").concat(u)]||k[u]||m[u]||l;return t?r.createElement(s,o(o({ref:n},d),{},{components:t})):r.createElement(s,o({ref:n},d))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=k;var p={};for(var a in n)hasOwnProperty.call(n,a)&&(p[a]=n[a]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},9322:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>p,contentTitle:()=>a,metadata:()=>c,toc:()=>d,default:()=>k});var r=t(98),i=t(6862),l=(t(9496),t(9613)),o=["components"],p={id:"link",title:"pnpm link"},a=void 0,c={unversionedId:"cli/link",id:"cli/link",isDocsHomePage:!1,title:"pnpm link",description:"Aliases: ln",source:"@site/docs/cli/link.md",sourceDirName:"cli",slug:"/cli/link",permalink:"/pnpm.github.io/fr/next/cli/link",editUrl:"https://crowdin.com/project/pnpm/fr",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1633229388,formattedLastUpdatedAt:"03/10/2021",frontMatter:{id:"link",title:"pnpm link"},sidebar:"docs",previous:{title:"pnpm remove",permalink:"/pnpm.github.io/fr/next/cli/remove"},next:{title:"pnpm unlink",permalink:"/pnpm.github.io/fr/next/cli/unlink"}},d=[{value:"Options",id:"options",children:[{value:"--dir &lt;dir&gt;, -C",id:"--dir-dir--c",children:[]},{value:"<code>pnpm link &lt;dir&gt;</code>",id:"pnpm-link-dir",children:[]},{value:"<code>pnpm link --global</code>",id:"pnpm-link---global",children:[]},{value:"<code>pnpm link --global &lt;pkg&gt;</code>",id:"pnpm-link---global-pkg",children:[]}]}],m={toc:d};function k(e){var n=e.components,t=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Aliases: ",(0,l.kt)("inlineCode",{parentName:"p"},"ln")),(0,l.kt)("p",null,"Makes the current local package accessible system-wide, or in another location."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"pnpm link <dir>\npnpm link --global\npnpm link --global <pkg>\n")),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("h3",{id:"--dir-dir--c"},"--dir ","<","dir",">",", -C"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Default"),": Current working directory"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Type"),": Path string")),(0,l.kt)("p",null,"Changes the link location to ",(0,l.kt)("inlineCode",{parentName:"p"},"<dir>"),"."),(0,l.kt)("h3",{id:"pnpm-link-dir"},(0,l.kt)("inlineCode",{parentName:"h3"},"pnpm link <dir>")),(0,l.kt)("p",null,"Links package from ",(0,l.kt)("inlineCode",{parentName:"p"},"<dir>")," folder to node_modules of package from where you executing this command or specified via ",(0,l.kt)("inlineCode",{parentName:"p"},"--dir")," option."),(0,l.kt)("h3",{id:"pnpm-link---global"},(0,l.kt)("inlineCode",{parentName:"h3"},"pnpm link --global")),(0,l.kt)("p",null,"Links package from location where this command was executed or specified via ",(0,l.kt)("inlineCode",{parentName:"p"},"--dir")," option to global ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules"),", so it can be referred from another package with ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm link --global <pkg>"),"."),(0,l.kt)("h3",{id:"pnpm-link---global-pkg"},(0,l.kt)("inlineCode",{parentName:"h3"},"pnpm link --global <pkg>")),(0,l.kt)("p",null,"Links the specified package (",(0,l.kt)("inlineCode",{parentName:"p"},"<pkg>"),") from global ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules")," to the ",(0,l.kt)("inlineCode",{parentName:"p"},"node_nodules")," of package from where this command was executed or specified via ",(0,l.kt)("inlineCode",{parentName:"p"},"--dir")," option."))}k.isMDXComponent=!0}}]);