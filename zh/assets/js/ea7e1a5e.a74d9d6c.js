"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4145],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return t?r.createElement(k,l(l({ref:n},c),{},{components:t})):r.createElement(k,l({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1328:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>o,contentTitle:()=>p,metadata:()=>s,toc:()=>c,default:()=>m});var r=t(98),a=t(6862),i=(t(9496),t(9613)),l=["components"],o={id:"recursive",title:"pnpm recursive"},p=void 0,s={unversionedId:"cli/recursive",id:"version-5.x/cli/recursive",isDocsHomePage:!1,title:"pnpm recursive",description:"Runs a pnpm command recursively on all subdirectories in the package or every",source:"@site/versioned_docs/version-5.x/cli/recursive.md",sourceDirName:"cli",slug:"/cli/recursive",permalink:"/pnpm.github.io/zh/5.x/cli/recursive",editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"5.x",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1633160590,formattedLastUpdatedAt:"2021/10/2",frontMatter:{id:"recursive",title:"pnpm recursive"},sidebar:"version-5.x/docs",previous:{title:"pnpm publish",permalink:"/pnpm.github.io/zh/5.x/cli/publish"},next:{title:"pnpm server",permalink:"/pnpm.github.io/zh/5.x/cli/server"}},c=[{value:"Options",id:"options",children:[{value:"--link-workspace-packages",id:"--link-workspace-packages",children:[]},{value:"--workspace-concurrency",id:"--workspace-concurrency",children:[]},{value:"--no-bail",id:"--no-bail",children:[]},{value:"--no-sort",id:"--no-sort",children:[]},{value:"--reverse",id:"--reverse",children:[]}]},{value:"pnpm -r exec",id:"pnpm--r-exec",children:[{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],u={toc:c};function m(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Runs a pnpm command recursively on all subdirectories in the package or every\navailable workspace. Currently, only the following commands can be used\nrecursively: ",(0,i.kt)("inlineCode",{parentName:"p"},"add"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"exec"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"install"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"list"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"outdated"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"publish"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"rebuild"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"remove"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"run"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"test"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"unlink"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"update"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"why")),(0,i.kt)("p",null,"Aliases: ",(0,i.kt)("inlineCode",{parentName:"p"},"m"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"multi"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<command> -r")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"--link-workspace-packages"},"--link-workspace-packages"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"true")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"true, false, deep"))),(0,i.kt)("p",null,"Link locally available packages in workspaces of a monorepo into ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules"),"\ninstead of re-downloading them from the registry. This emulates functionality\nsimilar to ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn workspaces"),"."),(0,i.kt)("p",null,"When this is set to deep, local packages can also be linked to subdependencies."),(0,i.kt)("p",null,"Be advised that it is encouraged instead to use ",(0,i.kt)("a",{parentName:"p",href:"/pnpm.github.io/zh/5.x/workspaces#link-workspace-packages"},"npmrc")," for this setting, to\nenforce the same behaviour in all environments. This option exists solely so you\nmay override that if necessary."),(0,i.kt)("h3",{id:"--workspace-concurrency"},"--workspace-concurrency"),(0,i.kt)("p",null,"Added in: v2.13.0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"4")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"Number"))),(0,i.kt)("p",null,"Set the maximum number of tasks to run simultaneously. For unlimited concurrency\nuse ",(0,i.kt)("inlineCode",{parentName:"p"},"Infinity"),"."),(0,i.kt)("h3",{id:"--no-bail"},"--","[no-]","bail"),(0,i.kt)("p",null,"Added in: v2.13.0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"true")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,"If true, stops when a task throws an error."),(0,i.kt)("p",null,"This config does not affect the exit code.\nEven if ",(0,i.kt)("inlineCode",{parentName:"p"},"--no-bail")," is used, all tasks will finish but if any of the tasks fail,\nthe command will exit with a non-zero code."),(0,i.kt)("p",null,"Example (run tests in every package, continue if tests fail in one of them):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm -r --no-bail test\n")),(0,i.kt)("h3",{id:"--no-sort"},"--","[no-]","sort"),(0,i.kt)("p",null,"Added in: v2.14.0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"true")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", packages are sorted topologically (dependencies before dependents).\nPass ",(0,i.kt)("inlineCode",{parentName:"p"},"--no-sort")," to disable."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm -r --no-sort test\n")),(0,i.kt)("h3",{id:"--reverse"},"--reverse"),(0,i.kt)("p",null,"Added in: v5.17.1"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"false")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"boolean"))),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", the order of packages is reversed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pnpm -r --reverse run clean\n")),(0,i.kt)("h2",{id:"pnpm--r-exec"},"pnpm -r exec"),(0,i.kt)("p",null,"Added in: v2.9.0"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm -r exec -- <command> [args...]\n")),(0,i.kt)("p",null,"This command runs a command in each package of the monorepo."),(0,i.kt)("p",null,"The name of the current package is available through the environment variable\n",(0,i.kt)("inlineCode",{parentName:"p"},"PNPM_PACKAGE_NAME")," (supported from pnpm v2.22.0 onwards)."),(0,i.kt)("p",null,"Examples:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"# prune node_modules installations for all packages\npnpm -r exec -- rm -rf node_modules\n# view package information for all packages\npnpm -r exec -- pnpm view $PNPM_PACKAGE_NAME\n")),(0,i.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pnpm.github.io/zh/5.x/filtering"},"Read more about filtering.")))}m.isMDXComponent=!0}}]);