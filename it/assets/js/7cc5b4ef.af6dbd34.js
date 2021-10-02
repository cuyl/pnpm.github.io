"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2191],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4208:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>c,toc:()=>s,default:()=>d});var r=n(98),a=n(6862),i=(n(9496),n(9613)),o=["components"],l={id:"exec",title:"pnpm exec"},p=void 0,c={unversionedId:"cli/exec",id:"cli/exec",isDocsHomePage:!1,title:"pnpm exec",description:"Execute a shell command in scope of a project.",source:"@site/docs/cli/exec.md",sourceDirName:"cli",slug:"/cli/exec",permalink:"/pnpm.github.io/it/next/cli/exec",editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1633151074,formattedLastUpdatedAt:"2/10/2021",frontMatter:{id:"exec",title:"pnpm exec"},sidebar:"docs",previous:{title:"pnpm test",permalink:"/pnpm.github.io/it/next/cli/test"},next:{title:"pnpm dlx",permalink:"/pnpm.github.io/it/next/cli/dlx"}},s=[{value:"Examples",id:"examples",children:[]},{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--parallel",id:"--parallel",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],u={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Execute a shell command in scope of a project."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"node_modules/.bin")," is added to the ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH"),", so ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm exec")," allows executing commands of dependencies."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"If you have Jest as a dependency of your project, there is no need to install Jest globally, just run it with ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm exec"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pnpm exec jest\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"exec")," part is actually optional when the command is not in conflict with a builtin pnpm command, so you may also just run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pnpm jest\n")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,i.kt)("p",null,"Added in: v2.9.0"),(0,i.kt)("p",null,"Execute the shell command in every project of the workspace."),(0,i.kt)("p",null,"The name of the current package is available through the environment variable\n",(0,i.kt)("inlineCode",{parentName:"p"},"PNPM_PACKAGE_NAME")," (supported from pnpm v2.22.0 onwards)."),(0,i.kt)("p",null,"Examples:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# prune node_modules installations for all packages\npnpm -r exec -- rm -rf node_modules\n# view package information for all packages\npnpm -r exec -- pnpm view $PNPM_PACKAGE_NAME\n")),(0,i.kt)("h3",{id:"--parallel"},"--parallel"),(0,i.kt)("p",null,"Added in: v5.1.0"),(0,i.kt)("p",null,"Completely disregard concurrency and topological sorting, running a given script\nimmediately in all matching packages with prefixed streaming output. This is the\npreferred flag for long-running processes over many packages, for instance, a\nlengthy build process."),(0,i.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pnpm.github.io/it/next/filtering"},"Read more about filtering.")))}d.isMDXComponent=!0}}]);