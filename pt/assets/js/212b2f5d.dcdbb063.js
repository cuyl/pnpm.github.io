"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2110],{9613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=r.createContext({}),c=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(a.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=i,f=m["".concat(a,".").concat(d)]||m[d]||s[d]||o;return t?r.createElement(f,p(p({ref:n},u),{},{components:t})):r.createElement(f,p({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,p=new Array(o);p[0]=m;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l.mdxType="string"==typeof e?e:i,p[1]=l;for(var c=2;c<o;c++)p[c]=t[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4918:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>a,metadata:()=>c,toc:()=>u,default:()=>m});var r=t(98),i=t(6862),o=(t(9496),t(9613)),p=["components"],l={id:"unlink",title:"pnpm unlink"},a=void 0,c={unversionedId:"cli/unlink",id:"version-6.x/cli/unlink",isDocsHomePage:!1,title:"pnpm unlink",description:"Unlinks a system-wide package (inverse of pnpm link).",source:"@site/versioned_docs/version-6.x/cli/unlink.md",sourceDirName:"cli",slug:"/cli/unlink",permalink:"/pnpm.github.io/pt/cli/unlink",editUrl:"https://crowdin.com/project/pnpm/pt",tags:[],version:"6.x",frontMatter:{id:"unlink",title:"pnpm unlink"},sidebar:"version-6.x/docs",previous:{title:"pnpm link",permalink:"/pnpm.github.io/pt/cli/link"},next:{title:"pnpm import",permalink:"/pnpm.github.io/pt/cli/import"}},u=[{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],s={toc:u};function m(e){var n=e.components,t=(0,i.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Unlinks a system-wide package (inverse of ",(0,o.kt)("a",{parentName:"p",href:"/pnpm.github.io/pt/cli/link"},(0,o.kt)("inlineCode",{parentName:"a"},"pnpm link")),")."),(0,o.kt)("p",null,"If called without arguments, all linked dependencies will be unlinked."),(0,o.kt)("p",null,"This is similar to ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn unlink"),", except pnpm re-installs the dependency after\nremoving the external link."),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,o.kt)("p",null,"Unlink in every package found in subdirectories or in every workspace package,\nwhen executed inside a ",(0,o.kt)("a",{parentName:"p",href:"/pnpm.github.io/pt/workspaces"},"workspace"),"."),(0,o.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pnpm.github.io/pt/filtering"},"Read more about filtering.")))}m.isMDXComponent=!0}}]);