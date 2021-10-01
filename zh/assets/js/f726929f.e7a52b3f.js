"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3651],{9613:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>s});var r=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=r.createContext({}),c=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(a.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),k=c(t),s=i,u=k["".concat(a,".").concat(s)]||k[s]||m[s]||o;return t?r.createElement(u,l(l({ref:n},d),{},{components:t})):r.createElement(u,l({ref:n},d))}));function s(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=k;var p={};for(var a in n)hasOwnProperty.call(n,a)&&(p[a]=n[a]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},6992:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>p,contentTitle:()=>a,metadata:()=>c,toc:()=>d,default:()=>k});var r=t(98),i=t(6862),o=(t(9496),t(9613)),l=["components"],p={id:"link",title:"pnpm link"},a=void 0,c={unversionedId:"cli/link",id:"version-6.x/cli/link",isDocsHomePage:!1,title:"pnpm link",description:"Aliases: ln",source:"@site/versioned_docs/version-6.x/cli/link.md",sourceDirName:"cli",slug:"/cli/link",permalink:"/pnpm.github.io/zh/cli/link",editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"6.x",frontMatter:{id:"link",title:"pnpm link"},sidebar:"version-6.x/docs",previous:{title:"pnpm remove",permalink:"/pnpm.github.io/zh/cli/remove"},next:{title:"pnpm unlink",permalink:"/pnpm.github.io/zh/cli/unlink"}},d=[{value:"Options",id:"options",children:[{value:"--dir &lt;dir&gt;, -C",id:"--dir-dir--c",children:[]},{value:"<code>pnpm link &lt;dir&gt;</code>",id:"pnpm-link-dir",children:[]},{value:"<code>pnpm link --global</code>",id:"pnpm-link---global",children:[]},{value:"<code>pnpm link --global &lt;pkg&gt;</code>",id:"pnpm-link---global-pkg",children:[]}]}],m={toc:d};function k(e){var n=e.components,t=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Aliases: ",(0,o.kt)("inlineCode",{parentName:"p"},"ln")),(0,o.kt)("p",null,"Makes the current local package accessible system-wide, or in another location."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"pnpm link <dir>\npnpm link --global\npnpm link --global <pkg>\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("h3",{id:"--dir-dir--c"},"--dir ","<","dir",">",", -C"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Default"),": Current working directory"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Type"),": Path string")),(0,o.kt)("p",null,"Changes the link location to ",(0,o.kt)("inlineCode",{parentName:"p"},"<dir>"),"."),(0,o.kt)("h3",{id:"pnpm-link-dir"},(0,o.kt)("inlineCode",{parentName:"h3"},"pnpm link <dir>")),(0,o.kt)("p",null,"Links package from ",(0,o.kt)("inlineCode",{parentName:"p"},"<dir>")," folder to node_modules of package from where you executing this command or specified via ",(0,o.kt)("inlineCode",{parentName:"p"},"--dir")," option."),(0,o.kt)("h3",{id:"pnpm-link---global"},(0,o.kt)("inlineCode",{parentName:"h3"},"pnpm link --global")),(0,o.kt)("p",null,"Links package from location where this command was executed or specified via ",(0,o.kt)("inlineCode",{parentName:"p"},"--dir")," option to global ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules"),", so it can be referred from another package with ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm link --global <pkg>"),"."),(0,o.kt)("h3",{id:"pnpm-link---global-pkg"},(0,o.kt)("inlineCode",{parentName:"h3"},"pnpm link --global <pkg>")),(0,o.kt)("p",null,"Links the specified package (",(0,o.kt)("inlineCode",{parentName:"p"},"<pkg>"),") from global ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"node_nodules")," of package from where this command was executed or specified via ",(0,o.kt)("inlineCode",{parentName:"p"},"--dir")," option."))}k.isMDXComponent=!0}}]);