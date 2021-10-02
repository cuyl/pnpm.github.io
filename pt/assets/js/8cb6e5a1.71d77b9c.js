"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1394],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,f=m["".concat(a,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(f,p(p({ref:t},u),{},{components:n})):r.createElement(f,p({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,p=new Array(o);p[0]=m;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:i,p[1]=l;for(var c=2;c<o;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5857:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>a,metadata:()=>c,toc:()=>u,default:()=>m});var r=n(98),i=n(6862),o=(n(9496),n(9613)),p=["components"],l={id:"unlink",title:"pnpm unlink"},a=void 0,c={unversionedId:"cli/unlink",id:"version-5.x/cli/unlink",isDocsHomePage:!1,title:"pnpm unlink",description:"Unlinks a system-wide package (inverse of pnpm link).",source:"@site/versioned_docs/version-5.x/cli/unlink.md",sourceDirName:"cli",slug:"/cli/unlink",permalink:"/pnpm.github.io/pt/5.x/cli/unlink",editUrl:"https://crowdin.com/project/pnpm/pt",tags:[],version:"5.x",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1633139546,formattedLastUpdatedAt:"02/10/2021",frontMatter:{id:"unlink",title:"pnpm unlink"},sidebar:"version-5.x/docs",previous:{title:"pnpm link",permalink:"/pnpm.github.io/pt/5.x/cli/link"},next:{title:"pnpm import",permalink:"/pnpm.github.io/pt/5.x/cli/import"}},u=[{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],s={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Unlinks a system-wide package (inverse of ",(0,o.kt)("a",{parentName:"p",href:"/pnpm.github.io/pt/5.x/cli/link"},(0,o.kt)("inlineCode",{parentName:"a"},"pnpm link")),")."),(0,o.kt)("p",null,"If called without arguments, all linked dependencies will be unlinked."),(0,o.kt)("p",null,"This is similar to ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn unlink"),", except pnpm re-installs the dependency after\nremoving the external link."),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,o.kt)("p",null,"Unlink in every package found in subdirectories or in every workspace package,\nwhen executed inside a ",(0,o.kt)("a",{parentName:"p",href:"/pnpm.github.io/pt/5.x/workspaces"},"workspace"),"."),(0,o.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pnpm.github.io/pt/5.x/filtering"},"Read more about filtering.")))}m.isMDXComponent=!0}}]);