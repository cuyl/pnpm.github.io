"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1579],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,h=d["".concat(o,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5586:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>o,metadata:()=>s,toc:()=>c,default:()=>d});var r=n(98),i=n(6862),a=(n(9496),n(9613)),l=["components"],p={id:"run",title:"pnpm run"},o=void 0,s={unversionedId:"cli/run",id:"cli/run",isDocsHomePage:!1,title:"pnpm run",description:"Aliases: run-script",source:"@site/docs/cli/run.md",sourceDirName:"cli",slug:"/cli/run",permalink:"/pnpm.github.io/pt/next/cli/run",editUrl:"https://crowdin.com/project/pnpm/pt",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1633229388,formattedLastUpdatedAt:"03/10/2021",frontMatter:{id:"run",title:"pnpm run"},sidebar:"docs",previous:{title:"pnpm why",permalink:"/pnpm.github.io/pt/next/cli/why"},next:{title:"pnpm test",permalink:"/pnpm.github.io/pt/next/cli/test"}},c=[{value:"Examples",id:"examples",children:[]},{value:"Details",id:"details",children:[]},{value:"Differences with <code>npm run</code>",id:"differences-with-npm-run",children:[]},{value:"Options",id:"options",children:[{value:"script-shell",id:"script-shell",children:[]},{value:"shell-emulator",id:"shell-emulator",children:[]},{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--if-present",id:"--if-present",children:[]},{value:"--parallel",id:"--parallel",children:[]},{value:"--stream",id:"--stream",children:[]},{value:"enable-pre-post-scripts",id:"enable-pre-post-scripts",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],u={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Aliases: ",(0,a.kt)("inlineCode",{parentName:"p"},"run-script")),(0,a.kt)("p",null,"Runs a script defined in the package's manifest file."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Let's say you have a ",(0,a.kt)("inlineCode",{parentName:"p"},"watch")," script configured in your ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),", like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n    "watch": "build-command --watch"\n}\n')),(0,a.kt)("p",null,"You can now run that script by using ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run watch"),"! Simple, right?\nAnother thing to note for those that like to save keystrokes and time is that\nall scripts get aliased in as pnpm commands, so ultimately ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm watch")," is just\nshorthand for ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run watch")," (ONLY for scripts that do not share the same name\nas already existing pnpm commands)."),(0,a.kt)("h2",{id:"details"},"Details"),(0,a.kt)("p",null,"In addition to the shell\u2019s pre-existing ",(0,a.kt)("inlineCode",{parentName:"p"},"PATH"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run")," includes\n",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules/.bin")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"PATH")," provided to ",(0,a.kt)("inlineCode",{parentName:"p"},"scripts"),". This means that so\nlong as you have a package installed, you can use it in a script like a regular\ncommand. For example, if you have ",(0,a.kt)("inlineCode",{parentName:"p"},"eslint")," installed, you can write up a script\nlike so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"lint": "eslint src --fix"\n')),(0,a.kt)("p",null,"And even though ",(0,a.kt)("inlineCode",{parentName:"p"},"eslint")," is not installed globally in your shell, it will run."),(0,a.kt)("p",null,"For workspaces, as of v3.5, ",(0,a.kt)("inlineCode",{parentName:"p"},"<workspace root>/node_modules/.bin")," is also added\nto the ",(0,a.kt)("inlineCode",{parentName:"p"},"PATH"),", so if a tool is installed in the workspace root, it may be called\nin any workspace package's ",(0,a.kt)("inlineCode",{parentName:"p"},"scripts"),"."),(0,a.kt)("h2",{id:"differences-with-npm-run"},"Differences with ",(0,a.kt)("inlineCode",{parentName:"h2"},"npm run")),(0,a.kt)("p",null,"By default, pnpm doesn't run arbitrary ",(0,a.kt)("inlineCode",{parentName:"p"},"pre")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"post")," hooks for user-defined\nscripts (such as ",(0,a.kt)("inlineCode",{parentName:"p"},"prestart"),"). This behavior, inherited from npm, caused scripts\nto be implicit rather than explicit, obfuscating the execution flow. It also led\nto surprising executions with ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm serve")," also running ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm preserve"),"."),(0,a.kt)("p",null,"If for some reason you need the pre/post scripts behavior of npm, use the\n",(0,a.kt)("inlineCode",{parentName:"p"},"enable-pre-post-scripts")," option."),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("h3",{id:"script-shell"},"script-shell"),(0,a.kt)("p",null,"Added in: v5.10.0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("strong",{parentName:"li"},"null")),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("strong",{parentName:"li"},"path"))),(0,a.kt)("p",null,"The shell to use for scripts run with the ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run")," command."),(0,a.kt)("p",null,"For instance, to force usage of Git Bash on Windows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'pnpm config set script-shell "C:\\\\Program Files\\\\git\\\\bin\\\\bash.exe"\n')),(0,a.kt)("h3",{id:"shell-emulator"},"shell-emulator"),(0,a.kt)("p",null,"Added in: v5.8.0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("strong",{parentName:"li"},"false")),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("strong",{parentName:"li"},"Boolean"))),(0,a.kt)("p",null,"When ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", pnpm will use a JavaScript implementation of a ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@yarnpkg/shell"},"bash-like shell")," to\nexecute scripts."),(0,a.kt)("p",null,"This option simplifies cross-platform scripting. For instance, by default, the\nnext script will fail on non-POSIX-compliant systems:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n  "test": "NODE_ENV=test node test.js"\n}\n')),(0,a.kt)("p",null,"But if the ",(0,a.kt)("inlineCode",{parentName:"p"},"shell-emulator")," setting is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", it will work on all\nplatforms."),(0,a.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,a.kt)("p",null,"This runs an arbitrary command from each package's \"scripts\" object.\nIf a package doesn't have the command, it is skipped.\nIf none of the packages have the command, the command fails."),(0,a.kt)("h3",{id:"--if-present"},"--if-present"),(0,a.kt)("p",null,"Added in: v4.5.0"),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"--if-present")," flag to avoid exiting with a non-zero exit code\nwhen the script is undefined. This lets you run potentially undefined scripts\nwithout breaking the execution chain."),(0,a.kt)("h3",{id:"--parallel"},"--parallel"),(0,a.kt)("p",null,"Added in: v5.1.0"),(0,a.kt)("p",null,"Completely disregard concurrency and topological sorting, running a given script\nimmediately in all matching packages with prefixed streaming output. This is the\npreferred flag for long-running processes over many packages, for instance, a\nlengthy build process."),(0,a.kt)("h3",{id:"--stream"},"--stream"),(0,a.kt)("p",null,"Added in: v5.1.0"),(0,a.kt)("p",null,"Stream output from child processes immediately, prefixed with the originating\npackage directory. This allows output from different packages to be interleaved."),(0,a.kt)("h3",{id:"enable-pre-post-scripts"},"enable-pre-post-scripts"),(0,a.kt)("p",null,"Added in: v6.1.0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("strong",{parentName:"li"},"false")),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("strong",{parentName:"li"},"Boolean"))),(0,a.kt)("p",null,"When ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", pnpm will run any pre/post scripts automatically. So running ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm foo"),"\nwill be like running ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm prefoo && pnpm foo && pnpm postfoo"),"."),(0,a.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/pnpm.github.io/pt/next/filtering"},"Read more about filtering.")))}d.isMDXComponent=!0}}]);