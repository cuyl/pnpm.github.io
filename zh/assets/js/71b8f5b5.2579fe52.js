"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6568],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=d(n),m=i,v=s["".concat(p,".").concat(m)]||s[m]||u[m]||o;return n?r.createElement(v,a(a({ref:t},c),{},{components:n})):r.createElement(v,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var d=2;d<o;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3269:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>d,toc:()=>c,default:()=>s});var r=n(98),i=n(6862),o=(n(9496),n(9613)),a=["components"],l={id:"audit",title:"pnpm audit"},p=void 0,d={unversionedId:"cli/audit",id:"version-5.x/cli/audit",isDocsHomePage:!1,title:"pnpm audit",description:"Added in: 4.3.0",source:"@site/versioned_docs/version-5.x/cli/audit.md",sourceDirName:"cli",slug:"/cli/audit",permalink:"/pnpm.github.io/zh/5.x/cli/audit",editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"5.x",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1633160590,formattedLastUpdatedAt:"2021/10/2",frontMatter:{id:"audit",title:"pnpm audit"},sidebar:"version-5.x/docs",previous:{title:"pnpm install-test",permalink:"/pnpm.github.io/zh/5.x/cli/install-test"},next:{title:"pnpm list",permalink:"/pnpm.github.io/zh/5.x/cli/list"}},c=[{value:"Options",id:"options",children:[{value:"--audit-level &lt;severity&gt;",id:"--audit-level-severity",children:[]},{value:"--json",id:"--json",children:[]},{value:"--dev, -D",id:"--dev--d",children:[]},{value:"--prod, -P",id:"--prod--p",children:[]},{value:"--no-optional",id:"--no-optional",children:[]}]}],u={toc:c};function s(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Added in: 4.3.0"),(0,o.kt)("p",null,"Checks for known security issues with the installed packages."),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("h3",{id:"--audit-level-severity"},"--audit-level ","<","severity",">"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("strong",{parentName:"li"},"low"),", ",(0,o.kt)("strong",{parentName:"li"},"moderate"),", ",(0,o.kt)("strong",{parentName:"li"},"high"),", ",(0,o.kt)("strong",{parentName:"li"},"critical")),(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("strong",{parentName:"li"},"low"))),(0,o.kt)("p",null,"Only print advisories with severity greater than or equal to ",(0,o.kt)("inlineCode",{parentName:"p"},"<severity>"),"."),(0,o.kt)("h3",{id:"--json"},"--json"),(0,o.kt)("p",null,"Output audit report in JSON format."),(0,o.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,o.kt)("p",null,"Only audit dev dependencies."),(0,o.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,o.kt)("p",null,"Only audit production dependencies."),(0,o.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,o.kt)("p",null,"Don't audit ",(0,o.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."))}s.isMDXComponent=!0}}]);