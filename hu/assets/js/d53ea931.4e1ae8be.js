"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5914],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,v=u["".concat(l,".").concat(m)]||u[m]||s[m]||i;return n?r.createElement(v,a(a({ref:t},d),{},{components:n})):r.createElement(v,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3770:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>l,metadata:()=>c,toc:()=>d,default:()=>u});var r=n(98),o=n(6862),i=(n(9496),n(9613)),a=["components"],p={id:"remove",title:"pnpm remove"},l=void 0,c={unversionedId:"cli/remove",id:"cli/remove",isDocsHomePage:!1,title:"pnpm remove",description:"Aliases: rm, uninstall, un",source:"@site/docs/cli/remove.md",sourceDirName:"cli",slug:"/cli/remove",permalink:"/pnpm.github.io/hu/next/cli/remove",editUrl:"https://crowdin.com/project/pnpm/hu",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1633113585,formattedLastUpdatedAt:"2021. 10. 01.",frontMatter:{id:"remove",title:"pnpm remove"},sidebar:"docs",previous:{title:"pnpm update",permalink:"/pnpm.github.io/hu/next/cli/update"},next:{title:"pnpm link",permalink:"/pnpm.github.io/hu/next/cli/link"}},d=[{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--global",id:"--global",children:[]},{value:"--save-dev, -D",id:"--save-dev--d",children:[]},{value:"--save-optional, -O",id:"--save-optional--o",children:[]},{value:"--save-prod, -P",id:"--save-prod--p",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],s={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Aliases: rm, uninstall, un"),(0,i.kt)("p",null,"Removes packages from ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," and from the project's ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,i.kt)("p",null,"When used inside a ",(0,i.kt)("a",{parentName:"p",href:"/pnpm.github.io/hu/next/workspaces"},"workspace"),", removes a dependency (or\ndependencies) from every workspace package."),(0,i.kt)("p",null,"When used not inside a workspace, removes a dependency (or dependencies) from\nevery package found in subdirectories."),(0,i.kt)("h3",{id:"--global"},"--global"),(0,i.kt)("p",null,"Remove a global package."),(0,i.kt)("h3",{id:"--save-dev--d"},"--save-dev, -D"),(0,i.kt)("p",null,"Only remove the dependency from ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,i.kt)("h3",{id:"--save-optional--o"},"--save-optional, -O"),(0,i.kt)("p",null,"Only remove the dependency from ",(0,i.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,i.kt)("h3",{id:"--save-prod--p"},"--save-prod, -P"),(0,i.kt)("p",null,"Only remove the dependency from ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies"),"."),(0,i.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pnpm.github.io/hu/next/filtering"},"Read more about filtering.")))}u.isMDXComponent=!0}}]);