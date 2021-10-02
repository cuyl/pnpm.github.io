"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7441],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5913:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>p,metadata:()=>s,toc:()=>c,default:()=>d});var r=n(98),a=n(6862),i=(n(9496),n(9613)),l=["components"],o={id:"recursive",title:"pnpm recursive"},p=void 0,s={unversionedId:"cli/recursive",id:"cli/recursive",isDocsHomePage:!1,title:"pnpm recursive",description:"Runs a pnpm command recursively on all subdirectories in the package or every",source:"@site/docs/cli/recursive.md",sourceDirName:"cli",slug:"/cli/recursive",permalink:"/pnpm.github.io/pt/next/cli/recursive",editUrl:"https://crowdin.com/project/pnpm/pt",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1633151074,formattedLastUpdatedAt:"02/10/2021",frontMatter:{id:"recursive",title:"pnpm recursive"},sidebar:"docs",previous:{title:"pnpm pack",permalink:"/pnpm.github.io/pt/next/cli/pack"},next:{title:"pnpm server",permalink:"/pnpm.github.io/pt/next/cli/server"}},c=[{value:"Options",id:"options",children:[{value:"--link-workspace-packages",id:"--link-workspace-packages",children:[]},{value:"--workspace-concurrency",id:"--workspace-concurrency",children:[]},{value:"--no-bail",id:"--no-bail",children:[]},{value:"--no-sort",id:"--no-sort",children:[]},{value:"--reverse",id:"--reverse",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],u={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Runs a pnpm command recursively on all subdirectories in the package or every\navailable workspace. Currently, only the following commands can be used\nrecursively: ",(0,i.kt)("inlineCode",{parentName:"p"},"add"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"exec"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"install"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"list"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"outdated"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"publish"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"rebuild"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"remove"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"run"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"test"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"unlink"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"update"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"why")),(0,i.kt)("p",null,"Aliases: ",(0,i.kt)("inlineCode",{parentName:"p"},"m"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"multi"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<command> -r")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"--link-workspace-packages"},"--link-workspace-packages"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"true")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"true, false, deep"))),(0,i.kt)("p",null,"Link locally available packages in workspaces of a monorepo into ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules"),"\ninstead of re-downloading them from the registry. This emulates functionality\nsimilar to ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn workspaces"),"."),(0,i.kt)("p",null,"When this is set to deep, local packages can also be linked to subdependencies."),(0,i.kt)("p",null,"Be advised that it is encouraged instead to use ",(0,i.kt)("a",{parentName:"p",href:"/pnpm.github.io/pt/next/workspaces#link-workspace-packages"},"npmrc")," for this setting, to\nenforce the same behaviour in all environments. This option exists solely so you\nmay override that if necessary."),(0,i.kt)("h3",{id:"--workspace-concurrency"},"--workspace-concurrency"),(0,i.kt)("p",null,"Added in: v2.13.0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"4")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"Number"))),(0,i.kt)("p",null,"Set the maximum number of tasks to run simultaneously. For unlimited concurrency\nuse ",(0,i.kt)("inlineCode",{parentName:"p"},"Infinity"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Since v6.10.0 you can set the ",(0,i.kt)("inlineCode",{parentName:"p"},"workpace-concurrency")," as ",(0,i.kt)("inlineCode",{parentName:"p"},"<= 0")," and it will use amount of cores of the host as: ",(0,i.kt)("inlineCode",{parentName:"p"},"max(1, (number of cores) - abs(workspace-concurrency))"))),(0,i.kt)("h3",{id:"--no-bail"},"--","[no-]","bail"),(0,i.kt)("p",null,"Added in: v2.13.0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"true")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,"If true, stops when a task throws an error."),(0,i.kt)("p",null,"This config does not affect the exit code.\nEven if ",(0,i.kt)("inlineCode",{parentName:"p"},"--no-bail")," is used, all tasks will finish but if any of the tasks fail,\nthe command will exit with a non-zero code."),(0,i.kt)("p",null,"Example (run tests in every package, continue if tests fail in one of them):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm -r --no-bail test\n")),(0,i.kt)("h3",{id:"--no-sort"},"--","[no-]","sort"),(0,i.kt)("p",null,"Added in: v2.14.0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"true")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", packages are sorted topologically (dependencies before dependents).\nPass ",(0,i.kt)("inlineCode",{parentName:"p"},"--no-sort")," to disable."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm -r --no-sort test\n")),(0,i.kt)("h3",{id:"--reverse"},"--reverse"),(0,i.kt)("p",null,"Added in: v5.17.1"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"false")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"boolean"))),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", the order of packages is reversed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pnpm -r --reverse run clean\n")),(0,i.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pnpm.github.io/pt/next/filtering"},"Read more about filtering.")))}d.isMDXComponent=!0}}]);