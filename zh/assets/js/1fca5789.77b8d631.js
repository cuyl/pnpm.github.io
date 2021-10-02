"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1204],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=d(n),m=o,k=s["".concat(p,".").concat(m)]||s[m]||u[m]||i;return n?r.createElement(k,a(a({ref:t},c),{},{components:n})):r.createElement(k,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},677:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>d,toc:()=>c,default:()=>s});var r=n(98),o=n(6862),i=(n(9496),n(9613)),a=["components"],l={id:"outdated",title:"pnpm outdated"},p=void 0,d={unversionedId:"cli/outdated",id:"version-5.x/cli/outdated",isDocsHomePage:!1,title:"pnpm outdated",description:"Checks for outdated packages. The check can be limited to a subset of the",source:"@site/versioned_docs/version-5.x/cli/outdated.md",sourceDirName:"cli",slug:"/cli/outdated",permalink:"/pnpm.github.io/zh/5.x/cli/outdated",editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"5.x",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1633145775,formattedLastUpdatedAt:"2021/10/2",frontMatter:{id:"outdated",title:"pnpm outdated"},sidebar:"version-5.x/docs",previous:{title:"pnpm list",permalink:"/pnpm.github.io/zh/5.x/cli/list"},next:{title:"pnpm why",permalink:"/pnpm.github.io/zh/5.x/cli/why"}},c=[{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]},{value:"--global",id:"--global",children:[]},{value:"--long",id:"--long",children:[]},{value:"--no-table",id:"--no-table",children:[]},{value:"--compatible",id:"--compatible",children:[]},{value:"--dev, -D",id:"--dev--d",children:[]},{value:"--prod, -P",id:"--prod--p",children:[]},{value:"--no-optional",id:"--no-optional",children:[]}]}],u={toc:c};function s(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Checks for outdated packages. The check can be limited to a subset of the\ninstalled packages by providing arguments (patterns are supported)."),(0,i.kt)("p",null,"Examples:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm outdated\npnpm outdated "*gulp-*" @babel/core\n')),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,i.kt)("p",null,"Check for outdated dependencies in every package found in subdirectories, or in\nevery workspace package when executed inside a workspace."),(0,i.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pnpm.github.io/zh/5.x/filtering"},"Read more about filtering.")),(0,i.kt)("h3",{id:"--global"},"--global"),(0,i.kt)("p",null,"List outdated global packages."),(0,i.kt)("h3",{id:"--long"},"--long"),(0,i.kt)("p",null,"Added in: v4.0.0"),(0,i.kt)("p",null,"Print details."),(0,i.kt)("h3",{id:"--no-table"},"--no-table"),(0,i.kt)("p",null,"Added in: v4.0.0"),(0,i.kt)("p",null,"Prints the outdated dependencies in a list format instead of the default table.\nGood for small consoles."),(0,i.kt)("h3",{id:"--compatible"},"--compatible"),(0,i.kt)("p",null,"Added in: v4.7.0"),(0,i.kt)("p",null,"Prints only versions that satisfy specifications in ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,i.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,i.kt)("p",null,"Added in: v4.7.0"),(0,i.kt)("p",null,"Checks only ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,i.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,i.kt)("p",null,"Added in: v4.7.0"),(0,i.kt)("p",null,"Checks only ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,i.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,i.kt)("p",null,"Added in: v4.7.0"),(0,i.kt)("p",null,"Doesn't check ",(0,i.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."))}s.isMDXComponent=!0}}]);