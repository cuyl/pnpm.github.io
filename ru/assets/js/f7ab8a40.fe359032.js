"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8422],{9613:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>m});var n=t(9496);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,v=u["".concat(l,".").concat(m)]||u[m]||s[m]||a;return t?n.createElement(v,i(i({ref:r},d),{},{components:t})):n.createElement(v,i({ref:r},d))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9303:(e,r,t)=>{t.r(r),t.d(r,{frontMatter:()=>p,contentTitle:()=>l,metadata:()=>c,toc:()=>d,default:()=>u});var n=t(98),o=t(6862),a=(t(9496),t(9613)),i=["components"],p={id:"remove",title:"pnpm remove"},l=void 0,c={unversionedId:"cli/remove",id:"version-5.x/cli/remove",isDocsHomePage:!1,title:"pnpm remove",description:"Removes packages from node_modules and from the project's package.json.",source:"@site/versioned_docs/version-5.x/cli/remove.md",sourceDirName:"cli",slug:"/cli/remove",permalink:"/pnpm.github.io/ru/5.x/cli/remove",editUrl:"https://crowdin.com/project/pnpm/ru",tags:[],version:"5.x",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1633139546,formattedLastUpdatedAt:"02.10.2021",frontMatter:{id:"remove",title:"pnpm remove"},sidebar:"version-5.x/docs",previous:{title:"pnpm update",permalink:"/pnpm.github.io/ru/5.x/cli/update"},next:{title:"pnpm link",permalink:"/pnpm.github.io/ru/5.x/cli/link"}},d=[{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--global",id:"--global",children:[]},{value:"--save-dev, -D",id:"--save-dev--d",children:[]},{value:"--save-optional, -O",id:"--save-optional--o",children:[]},{value:"--save-prod, -P",id:"--save-prod--p",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],s={toc:d};function u(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Removes packages from ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," and from the project's ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,a.kt)("p",null,"Aliases: rm, uninstall, un"),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,a.kt)("p",null,"When used inside a ",(0,a.kt)("a",{parentName:"p",href:"/pnpm.github.io/ru/5.x/workspaces"},"workspace"),", removes a dependency (or\ndependencies) from every workspace package."),(0,a.kt)("p",null,"When used not inside a workspace, removes a dependency (or dependencies) from\nevery package found in subdirectories."),(0,a.kt)("h3",{id:"--global"},"--global"),(0,a.kt)("p",null,"Remove a global package."),(0,a.kt)("h3",{id:"--save-dev--d"},"--save-dev, -D"),(0,a.kt)("p",null,"Only remove the dependency from ",(0,a.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,a.kt)("h3",{id:"--save-optional--o"},"--save-optional, -O"),(0,a.kt)("p",null,"Only remove the dependency from ",(0,a.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,a.kt)("h3",{id:"--save-prod--p"},"--save-prod, -P"),(0,a.kt)("p",null,"Only remove the dependency from ",(0,a.kt)("inlineCode",{parentName:"p"},"dependencies"),"."),(0,a.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/pnpm.github.io/ru/5.x/filtering"},"Read more about filtering.")))}u.isMDXComponent=!0}}]);