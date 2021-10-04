"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2191],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4208:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>p,metadata:()=>c,toc:()=>s,default:()=>d});var r=n(98),a=n(6862),o=(n(9496),n(9613)),l=["components"],i={id:"exec",title:"pnpm exec"},p=void 0,c={unversionedId:"cli/exec",id:"cli/exec",isDocsHomePage:!1,title:"pnpm exec",description:"Execute a shell command in scope of a project.",source:"@site/docs/cli/exec.md",sourceDirName:"cli",slug:"/cli/exec",permalink:"/pnpm.github.io/tr/next/cli/exec",editUrl:"https://crowdin.com/project/pnpm/tr",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1633321346,formattedLastUpdatedAt:"04.10.2021",frontMatter:{id:"exec",title:"pnpm exec"},sidebar:"docs",previous:{title:"pnpm test",permalink:"/pnpm.github.io/tr/next/cli/test"},next:{title:"pnpm dlx",permalink:"/pnpm.github.io/tr/next/cli/dlx"}},s=[{value:"Examples",id:"examples",children:[]},{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--parallel",id:"--parallel",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],u={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Execute a shell command in scope of a project."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"node_modules/.bin")," is added to the ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH"),", so ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm exec")," allows executing commands of dependencies."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"If you have Jest as a dependency of your project, there is no need to install Jest globally, just run it with ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm exec"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm exec jest\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"exec")," part is actually optional when the command is not in conflict with a builtin pnpm command, so you may also just run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm jest\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,o.kt)("p",null,"Added in: v2.9.0"),(0,o.kt)("p",null,"Execute the shell command in every project of the workspace."),(0,o.kt)("p",null,"The name of the current package is available through the environment variable\n",(0,o.kt)("inlineCode",{parentName:"p"},"PNPM_PACKAGE_NAME")," (supported from pnpm v2.22.0 onwards)."),(0,o.kt)("p",null,"Examples:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# prune node_modules installations for all packages\npnpm -r exec -- rm -rf node_modules\n# view package information for all packages\npnpm -r exec -- pnpm view $PNPM_PACKAGE_NAME\n")),(0,o.kt)("h3",{id:"--parallel"},"--parallel"),(0,o.kt)("p",null,"Added in: v5.1.0"),(0,o.kt)("p",null,"Completely disregard concurrency and topological sorting, running a given script\nimmediately in all matching packages with prefixed streaming output. This is the\npreferred flag for long-running processes over many packages, for instance, a\nlengthy build process."),(0,o.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pnpm.github.io/tr/next/filtering"},"Read more about filtering.")))}d.isMDXComponent=!0}}]);