"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7293],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,h=u["".concat(p,".").concat(m)]||u[m]||c[m]||l;return n?r.createElement(h,a(a({ref:t},s),{},{components:n})):r.createElement(h,a({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var d=2;d<l;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6878:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>p,metadata:()=>d,toc:()=>s,default:()=>u});var r=n(98),i=n(6862),l=(n(9496),n(9613)),a=["components"],o={id:"list",title:"pnpm list"},p=void 0,d={unversionedId:"cli/list",id:"version-5.x/cli/list",isDocsHomePage:!1,title:"pnpm list",description:"Aliases: ls",source:"@site/versioned_docs/version-5.x/cli/list.md",sourceDirName:"cli",slug:"/cli/list",permalink:"/pnpm.github.io/it/5.x/cli/list",editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"5.x",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1633139546,formattedLastUpdatedAt:"2/10/2021",frontMatter:{id:"list",title:"pnpm list"},sidebar:"version-5.x/docs",previous:{title:"pnpm audit",permalink:"/pnpm.github.io/it/5.x/cli/audit"},next:{title:"pnpm outdated",permalink:"/pnpm.github.io/it/5.x/cli/outdated"}},s=[{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--json",id:"--json",children:[]},{value:"--long",id:"--long",children:[]},{value:"--parseable",id:"--parseable",children:[]},{value:"--global",id:"--global",children:[]},{value:"--depth &lt;number&gt;",id:"--depth-number",children:[]},{value:"--prod, -P",id:"--prod--p",children:[]},{value:"--dev, -D",id:"--dev--d",children:[]},{value:"--no-optional",id:"--no-optional",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],c={toc:s};function u(e){var t=e.components,n=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Aliases: ",(0,l.kt)("inlineCode",{parentName:"p"},"ls")),(0,l.kt)("p",null,"This command will output all the versions of packages that are installed, as\nwell as their dependencies, in a tree-structure."),(0,l.kt)("p",null,"Positional arguments are ",(0,l.kt)("inlineCode",{parentName:"p"},"name-pattern@version-range")," identifiers, which will\nlimit the results to only the packages named. For example,\n",(0,l.kt)("inlineCode",{parentName:"p"},'pnpm list "babel-*" "eslint-*" semver@5'),"."),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,l.kt)("p",null,"Perform command on every package in subdirectories or on every workspace\npackage, when executed inside a workspace."),(0,l.kt)("h3",{id:"--json"},"--json"),(0,l.kt)("p",null,"Added in: 3.7.0"),(0,l.kt)("p",null,"Log output in JSON format."),(0,l.kt)("h3",{id:"--long"},"--long"),(0,l.kt)("p",null,"Show extended information."),(0,l.kt)("h3",{id:"--parseable"},"--parseable"),(0,l.kt)("p",null,"Outputs package directories in a parseable format instead of their tree view."),(0,l.kt)("h3",{id:"--global"},"--global"),(0,l.kt)("p",null,"List packages in the global install directory instead of in the current project."),(0,l.kt)("h3",{id:"--depth-number"},"--depth ","<","number",">"),(0,l.kt)("p",null,"Max display depth of the dependency tree."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pnpm ls --depth 0")," will list direct dependencies only.\n",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm ls --depth -1")," will list projects only. Useful inside a workspace when\nused with the ",(0,l.kt)("inlineCode",{parentName:"p"},"-r")," option."),(0,l.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,l.kt)("p",null,"Display only the dependency graph for packages in ",(0,l.kt)("inlineCode",{parentName:"p"},"dependencies")," and\n",(0,l.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,l.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,l.kt)("p",null,"Display only the dependency graph for packages in ",(0,l.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,l.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,l.kt)("p",null,"Don't display packages from ",(0,l.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,l.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/pnpm.github.io/it/5.x/filtering"},"Read more about filtering.")))}u.isMDXComponent=!0}}]);