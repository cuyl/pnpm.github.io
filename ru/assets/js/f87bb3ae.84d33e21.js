"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7149],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=i,f=c["".concat(p,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var d=2;d<o;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8669:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>d,toc:()=>s,default:()=>c});var r=n(98),i=n(6862),o=(n(9496),n(9613)),a=["components"],l={id:"audit",title:"pnpm audit"},p=void 0,d={unversionedId:"cli/audit",id:"cli/audit",isDocsHomePage:!1,title:"pnpm audit",description:"Added in: v4.3.0",source:"@site/docs/cli/audit.md",sourceDirName:"cli",slug:"/cli/audit",permalink:"/pnpm.github.io/ru/next/cli/audit",editUrl:"https://crowdin.com/project/pnpm/ru",tags:[],version:"current",lastUpdatedBy:"Yuchao",lastUpdatedAt:1633141056,formattedLastUpdatedAt:"02.10.2021",frontMatter:{id:"audit",title:"pnpm audit"},sidebar:"docs",previous:{title:"pnpm install-test",permalink:"/pnpm.github.io/ru/next/cli/install-test"},next:{title:"pnpm list",permalink:"/pnpm.github.io/ru/next/cli/list"}},s=[{value:"Options",id:"options",children:[{value:"--audit-level &lt;severity&gt;",id:"--audit-level-severity",children:[]},{value:"--fix",id:"--fix",children:[]},{value:"--json",id:"--json",children:[]},{value:"--dev, -D",id:"--dev--d",children:[]},{value:"--prod, -P",id:"--prod--p",children:[]},{value:"--no-optional",id:"--no-optional",children:[]},{value:"--ignore-registry-errors",id:"--ignore-registry-errors",children:[]}]}],u={toc:s};function c(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Added in: v4.3.0"),(0,o.kt)("p",null,"Checks for known security issues with the installed packages."),(0,o.kt)("p",null,"If security issues are found, try to update your dependencies via ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm update"),".\nIf a simple update does not fix all the issues, use ",(0,o.kt)("a",{parentName:"p",href:"/pnpm.github.io/ru/next/package_json#pnpmoverrides"},"overrides")," to force\nversions that are not vulnerable. For instance, if ",(0,o.kt)("inlineCode",{parentName:"p"},"lodash@<2.1.0")," is vulnerable,\nuse this overrides to force ",(0,o.kt)("inlineCode",{parentName:"p"},"lodash@^2.1.0"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n    "pnpm": {\n        "overrides": {\n            "lodash@<2.1.0": "^2.1.0"\n        }\n    }\n}\n')),(0,o.kt)("p",null,"Or alternatively, run ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm audit --fix"),"."),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("h3",{id:"--audit-level-severity"},"--audit-level ","<","severity",">"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("strong",{parentName:"li"},"low"),", ",(0,o.kt)("strong",{parentName:"li"},"moderate"),", ",(0,o.kt)("strong",{parentName:"li"},"high"),", ",(0,o.kt)("strong",{parentName:"li"},"critical")),(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("strong",{parentName:"li"},"low"))),(0,o.kt)("p",null,"Only print advisories with severity greater than or equal to ",(0,o.kt)("inlineCode",{parentName:"p"},"<severity>"),"."),(0,o.kt)("h3",{id:"--fix"},"--fix"),(0,o.kt)("p",null,"Added in: v6.11.0"),(0,o.kt)("p",null,"Add overrides to the ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file in order to force non-vulnerable versions of the dependencies."),(0,o.kt)("h3",{id:"--json"},"--json"),(0,o.kt)("p",null,"Output audit report in JSON format."),(0,o.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,o.kt)("p",null,"Only audit dev dependencies."),(0,o.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,o.kt)("p",null,"Only audit production dependencies."),(0,o.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,o.kt)("p",null,"Don't audit ",(0,o.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,o.kt)("h3",{id:"--ignore-registry-errors"},"--ignore-registry-errors"),(0,o.kt)("p",null,"Added in: v6.7.1"),(0,o.kt)("p",null,"If the registry responds with a non-200 status code, the process should exit with 0.\nSo the process will fail only if the registry actually successfully responds with found vulnerabilities."))}c.isMDXComponent=!0}}]);