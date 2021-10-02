"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[578],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,p=e.originalType,a=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,f=m["".concat(a,".").concat(d)]||m[d]||s[d]||p;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var p=n.length,l=new Array(p);l[0]=m;var o={};for(var a in t)hasOwnProperty.call(t,a)&&(o[a]=t[a]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<p;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9751:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>a,metadata:()=>c,toc:()=>u,default:()=>m});var r=n(98),i=n(6862),p=(n(9496),n(9613)),l=["components"],o={id:"unlink",title:"pnpm unlink"},a=void 0,c={unversionedId:"cli/unlink",id:"cli/unlink",isDocsHomePage:!1,title:"pnpm unlink",description:"Unlinks a system-wide package (inverse of pnpm link).",source:"@site/docs/cli/unlink.md",sourceDirName:"cli",slug:"/cli/unlink",permalink:"/pnpm.github.io/pt/next/cli/unlink",editUrl:"https://crowdin.com/project/pnpm/pt",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1633138159,formattedLastUpdatedAt:"02/10/2021",frontMatter:{id:"unlink",title:"pnpm unlink"},sidebar:"docs",previous:{title:"pnpm link",permalink:"/pnpm.github.io/pt/next/cli/link"},next:{title:"pnpm import",permalink:"/pnpm.github.io/pt/next/cli/import"}},u=[{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],s={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,p.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Unlinks a system-wide package (inverse of ",(0,p.kt)("a",{parentName:"p",href:"/pnpm.github.io/pt/next/cli/link"},(0,p.kt)("inlineCode",{parentName:"a"},"pnpm link")),")."),(0,p.kt)("p",null,"If called without arguments, all linked dependencies will be unlinked."),(0,p.kt)("p",null,"This is similar to ",(0,p.kt)("inlineCode",{parentName:"p"},"yarn unlink"),", except pnpm re-installs the dependency after\nremoving the external link."),(0,p.kt)("h2",{id:"options"},"Options"),(0,p.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,p.kt)("p",null,"Unlink in every package found in subdirectories or in every workspace package,\nwhen executed inside a ",(0,p.kt)("a",{parentName:"p",href:"/pnpm.github.io/pt/next/workspaces"},"workspace"),"."),(0,p.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/pnpm.github.io/pt/next/filtering"},"Read more about filtering.")))}m.isMDXComponent=!0}}]);