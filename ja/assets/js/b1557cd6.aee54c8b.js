"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3426],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var l=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.createContext({}),s=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return l.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(n),k=a,c=m["".concat(p,".").concat(k)]||m[k]||u[k]||i;return n?l.createElement(c,r(r({ref:t},d),{},{components:n})):l.createElement(c,r({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var s=2;s<i;s++)r[s]=n[s];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4849:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>p,metadata:()=>s,toc:()=>d,default:()=>m});var l=n(98),a=n(6862),i=(n(9496),n(9613)),r=["components"],o={id:"install",title:"pnpm install"},p=void 0,s={unversionedId:"cli/install",id:"cli/install",isDocsHomePage:!1,title:"pnpm install",description:"Aliases: i",source:"@site/docs/cli/install.md",sourceDirName:"cli",slug:"/cli/install",permalink:"/pnpm.github.io/ja/next/cli/install",editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1633151074,formattedLastUpdatedAt:"2021/10/2",frontMatter:{id:"install",title:"pnpm install"},sidebar:"docs",previous:{title:"pnpm add <pkg>",permalink:"/pnpm.github.io/ja/next/cli/add"},next:{title:"pnpm update",permalink:"/pnpm.github.io/ja/next/cli/update"}},d=[{value:"TL;DR",id:"tldr",children:[]},{value:"Options",id:"options",children:[{value:"--offline",id:"--offline",children:[]},{value:"--prefer-offline",id:"--prefer-offline",children:[]},{value:"--ignore-scripts",id:"--ignore-scripts",children:[]},{value:"--prod, -P",id:"--prod--p",children:[]},{value:"--dev, -D",id:"--dev--d",children:[]},{value:"--no-optional",id:"--no-optional",children:[]},{value:"--lockfile-only",id:"--lockfile-only",children:[]},{value:"--fix-lockfile",id:"--fix-lockfile",children:[]},{value:"--frozen-lockfile",id:"--frozen-lockfile",children:[]},{value:"--reporter=&lt;name&gt;",id:"--reportername",children:[]},{value:"--use-store-server",id:"--use-store-server",children:[]},{value:"--shamefully-hoist",id:"--shamefully-hoist",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],u={toc:d};function m(e){var t=e.components,o=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,l.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Aliases: ",(0,i.kt)("inlineCode",{parentName:"p"},"i")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install")," is used to install all dependencies for a project."),(0,i.kt)("p",null,"In a CI environment, installation fails if a lockfile is present but needs an\nupdate."),(0,i.kt)("p",null,"Inside a ",(0,i.kt)("a",{parentName:"p",href:"/pnpm.github.io/ja/next/workspaces"},"workspace"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install")," installs all dependencies in all the\nprojects. If you want to disable this behavior, set the ",(0,i.kt)("inlineCode",{parentName:"p"},"recursive-install"),"\nsetting to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(4949).Z})),(0,i.kt)("h2",{id:"tldr"},"TL;DR"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Command"),(0,i.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pnpm i --offline")),(0,i.kt)("td",{parentName:"tr",align:null},"Install offline from the store only")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pnpm i --frozen-lockfile")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pnpm-lock.yaml")," is not updated")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pnpm i --lockfile-only")),(0,i.kt)("td",{parentName:"tr",align:null},"Only ",(0,i.kt)("inlineCode",{parentName:"td"},"pnpm-lock.yaml")," is updated")))),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"--offline"},"--offline"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"false")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", pnpm will use only packages already available in the store.\nIf a package won't be found locally, the installation will fail."),(0,i.kt)("h3",{id:"--prefer-offline"},"--prefer-offline"),(0,i.kt)("p",null,"Added in: v1.28.0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"false")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", staleness checks for cached data will be bypassed, but missing data\nwill be requested from the server. To force full offline mode, use ",(0,i.kt)("inlineCode",{parentName:"p"},"--offline"),"."),(0,i.kt)("h3",{id:"--ignore-scripts"},"--ignore-scripts"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"false")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,"Do not execute any scripts defined in the project ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," and its\ndependencies."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This flag does not prevent the execution of ",(0,i.kt)("a",{parentName:"p",href:"/pnpm.github.io/ja/next/pnpmfile"},".pnpmfile.cjs")))),(0,i.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,i.kt)("p",null,"pnpm will not install any package listed in ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies")," if the ",(0,i.kt)("inlineCode",{parentName:"p"},"NODE_ENV"),"\nenvironment variable is set to production. Use this flag to instruct pnpm to\nignore ",(0,i.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," and take its production status from this flag instead."),(0,i.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,i.kt)("p",null,"Only ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies")," are installed regardless of the ",(0,i.kt)("inlineCode",{parentName:"p"},"NODE_ENV"),"."),(0,i.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," are not installed."),(0,i.kt)("h3",{id:"--lockfile-only"},"--lockfile-only"),(0,i.kt)("p",null,"Added in: v1.26.0 (initially named ",(0,i.kt)("inlineCode",{parentName:"p"},"shrinkwrap-only"),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"false")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,"When used, only updates ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," instead of checking\n",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," and downloading dependencies."),(0,i.kt)("h3",{id:"--fix-lockfile"},"--fix-lockfile"),(0,i.kt)("p",null,"Added in: v6.15.0"),(0,i.kt)("p",null,"Fix broken lockfile entries automatically."),(0,i.kt)("h3",{id:"--frozen-lockfile"},"--frozen-lockfile"),(0,i.kt)("p",null,"Added in: v1.37.1 (initially named ",(0,i.kt)("inlineCode",{parentName:"p"},"frozen-shrinkwrap"),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For non-CI: ",(0,i.kt)("strong",{parentName:"li"},"false")),(0,i.kt)("li",{parentName:"ul"},"For CI: ",(0,i.kt)("strong",{parentName:"li"},"true"),", if a lockfile is present"))),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", pnpm doesn't generate a lockfile and fails to install if the lockfile\nis out of sync with the manifest / an update is needed or no lockfile is\npresent."),(0,i.kt)("h3",{id:"--reportername"},"--reporter=","<","name",">"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For TTY stdout: ",(0,i.kt)("strong",{parentName:"li"},"default")),(0,i.kt)("li",{parentName:"ul"},"For non-TTY stdout: ",(0,i.kt)("strong",{parentName:"li"},"append-only")))),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"default"),", ",(0,i.kt)("strong",{parentName:"li"},"append-only"),", ",(0,i.kt)("strong",{parentName:"li"},"ndjson"),", ",(0,i.kt)("strong",{parentName:"li"},"silent"))),(0,i.kt)("p",null,"Allows you to choose the reporter that will log debug info to the terminal about\nthe installation progress."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"silent")," - no output is logged to the console, except fatal errors"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"default")," - the default reporter when the stdout is TTY"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"append-only")," (Added in v1.29.1) - the output is always appended to the end. No cursor manipulations are performed"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ndjson")," - the most verbose reporter. Prints all logs in ",(0,i.kt)("a",{parentName:"li",href:"http://ndjson.org/"},"ndjson")," format")),(0,i.kt)("h3",{id:"--use-store-server"},"--use-store-server"),(0,i.kt)("p",null,"Added in: v1.30.0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"false")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,"Starts a store server in the background. The store server will keep running\nafter installation is done. To stop the store server, run ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm server stop")),(0,i.kt)("h3",{id:"--shamefully-hoist"},"--shamefully-hoist"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"false")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,"Creates a flat ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," structure, similar to that of ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn"),".\n",(0,i.kt)("strong",{parentName:"p"},"WARNING"),": This is highly discouraged."),(0,i.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector>"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pnpm.github.io/ja/next/filtering"},"Read more about filtering.")))}m.isMDXComponent=!0},4949:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/pnpm-install-922fbb8bb4d96b8f602a40e6cd07ee13.svg"}}]);