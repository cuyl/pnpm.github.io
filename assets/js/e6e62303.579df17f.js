"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[198],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=m(n),u=a,f=s["".concat(l,".").concat(u)]||s[u]||d[u]||i;return n?r.createElement(f,p(p({ref:t},c),{},{components:n})):r.createElement(f,p({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=s;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var m=2;m<i;m++)p[m]=n[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3749:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>l,metadata:()=>m,toc:()=>c,default:()=>s});var r=n(98),a=n(6862),i=(n(9496),n(9613)),p=["components"],o={id:"pnpm-cli",title:"pnpm CLI"},l=void 0,m={unversionedId:"pnpm-cli",id:"pnpm-cli",isDocsHomePage:!1,title:"pnpm CLI",description:"Differences vs npm",source:"@site/docs/pnpm-cli.md",sourceDirName:".",slug:"/pnpm-cli",permalink:"/pnpm.github.io/next/pnpm-cli",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/docs/pnpm-cli.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1633315858,formattedLastUpdatedAt:"10/4/2021",frontMatter:{id:"pnpm-cli",title:"pnpm CLI"},sidebar:"docs",previous:{title:"Installation",permalink:"/pnpm.github.io/next/installation"},next:{title:"pnpx CLI",permalink:"/pnpm.github.io/next/pnpx-cli"}},c=[{value:"Differences vs npm",id:"differences-vs-npm",children:[]},{value:"Options",id:"options",children:[{value:"-C &lt;path&gt;, --dir &lt;path&gt;",id:"-c-path---dir-path",children:[]},{value:"-w, --workspace-root",id:"-w---workspace-root",children:[]}]},{value:"Commands",id:"commands",children:[]}],d={toc:c};function s(e){var t=e.components,n=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"differences-vs-npm"},"Differences vs npm"),(0,i.kt)("p",null,"Unlike npm, pnpm validates all options. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install --foo")," will\nfail as ",(0,i.kt)("inlineCode",{parentName:"p"},"--foo")," is not a valid option for ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install"),"."),(0,i.kt)("p",null,"However, some dependencies may use the ",(0,i.kt)("inlineCode",{parentName:"p"},"npm_config_")," environment variable, which\nis populated from the CLI options. In this case, you have the following options:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"explicitly set the env variable: ",(0,i.kt)("inlineCode",{parentName:"li"},"npm_config_foo=true pnpm install")),(0,i.kt)("li",{parentName:"ol"},"force the unknown option with ",(0,i.kt)("inlineCode",{parentName:"li"},"--config."),": ",(0,i.kt)("inlineCode",{parentName:"li"},"pnpm install --config.foo"))),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"-c-path---dir-path"},"-C ","<","path",">",", --dir ","<","path",">"),(0,i.kt)("p",null,"Run as if pnpm was started in ",(0,i.kt)("inlineCode",{parentName:"p"},"<path>")," instead of the current working directory."),(0,i.kt)("h3",{id:"-w---workspace-root"},"-w, --workspace-root"),(0,i.kt)("p",null,"Added in: v5.6.0"),(0,i.kt)("p",null,"Run as if pnpm was started in the root of the workspace instead of the current\nworking directory."),(0,i.kt)("h2",{id:"commands"},"Commands"),(0,i.kt)("p",null,"For more information, see the documentation for individual CLI commands. Here is\na list of handy npm equivalents to get you started:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"npm command"),(0,i.kt)("th",{parentName:"tr",align:null},"pnpm equivalent"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"npm install")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pnpm.github.io/next/cli/install"},(0,i.kt)("inlineCode",{parentName:"a"},"pnpm install")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"npm i <pkg>")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pnpm.github.io/next/cli/add"},(0,i.kt)("inlineCode",{parentName:"a"},"pnpm add <pkg>")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"npm run <cmd>")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pnpm.github.io/next/cli/run"},(0,i.kt)("inlineCode",{parentName:"a"},"pnpm <cmd>")))))),(0,i.kt)("p",null,"When an unknown command is used, pnpm will search for a script with the given name,\nso ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm run lint")," is the same as ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm lint"),". If there is no script with the specified name,\nthen pnpm will execute the command as a shell script, so you can do things like ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm eslint")," (see ",(0,i.kt)("a",{parentName:"p",href:"/pnpm.github.io/next/cli/exec"},"pnpm exec"),")."))}s.isMDXComponent=!0}}]);