"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8422],{9613:(e,n,r)=>{r.d(n,{Zo:()=>d,kt:()=>u});var t=r(9496);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},d=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=c(r),u=o,v=m["".concat(l,".").concat(u)]||m[u]||s[u]||i;return r?t.createElement(v,a(a({ref:n},d),{},{components:r})):t.createElement(v,a({ref:n},d))}));function u(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=r[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9303:(e,n,r)=>{r.r(n),r.d(n,{frontMatter:()=>p,contentTitle:()=>l,metadata:()=>c,toc:()=>d,default:()=>m});var t=r(98),o=r(6862),i=(r(9496),r(9613)),a=["components"],p={id:"remove",title:"pnpm remove"},l=void 0,c={unversionedId:"cli/remove",id:"version-5.x/cli/remove",isDocsHomePage:!1,title:"pnpm remove",description:"Removes packages from node_modules and from the project's package.json.",source:"@site/versioned_docs/version-5.x/cli/remove.md",sourceDirName:"cli",slug:"/cli/remove",permalink:"/pnpm.github.io/5.x/cli/remove",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/versioned_docs/version-5.x/cli/remove.md",tags:[],version:"5.x",lastUpdatedBy:"Yuchao",lastUpdatedAt:1633141056,formattedLastUpdatedAt:"10/2/2021",frontMatter:{id:"remove",title:"pnpm remove"},sidebar:"version-5.x/docs",previous:{title:"pnpm update",permalink:"/pnpm.github.io/5.x/cli/update"},next:{title:"pnpm link",permalink:"/pnpm.github.io/5.x/cli/link"}},d=[{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--global",id:"--global",children:[]},{value:"--save-dev, -D",id:"--save-dev--d",children:[]},{value:"--save-optional, -O",id:"--save-optional--o",children:[]},{value:"--save-prod, -P",id:"--save-prod--p",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],s={toc:d};function m(e){var n=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Removes packages from ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," and from the project's ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,i.kt)("p",null,"Aliases: rm, uninstall, un"),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,i.kt)("p",null,"When used inside a ",(0,i.kt)("a",{parentName:"p",href:"/pnpm.github.io/5.x/workspaces"},"workspace"),", removes a dependency (or\ndependencies) from every workspace package."),(0,i.kt)("p",null,"When used not inside a workspace, removes a dependency (or dependencies) from\nevery package found in subdirectories."),(0,i.kt)("h3",{id:"--global"},"--global"),(0,i.kt)("p",null,"Remove a global package."),(0,i.kt)("h3",{id:"--save-dev--d"},"--save-dev, -D"),(0,i.kt)("p",null,"Only remove the dependency from ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,i.kt)("h3",{id:"--save-optional--o"},"--save-optional, -O"),(0,i.kt)("p",null,"Only remove the dependency from ",(0,i.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,i.kt)("h3",{id:"--save-prod--p"},"--save-prod, -P"),(0,i.kt)("p",null,"Only remove the dependency from ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies"),"."),(0,i.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pnpm.github.io/5.x/filtering"},"Read more about filtering.")))}m.isMDXComponent=!0}}]);