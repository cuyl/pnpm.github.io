"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7436],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),h=s(n),d=i,m=h["".concat(o,".").concat(d)]||h[d]||u[d]||a;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=h;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3762:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>o,metadata:()=>s,toc:()=>c,default:()=>h});var r=n(98),i=n(6862),a=(n(9496),n(9613)),l=["components"],p={id:"publish",title:"pnpm publish"},o=void 0,s={unversionedId:"cli/publish",id:"cli/publish",isDocsHomePage:!1,title:"pnpm publish",description:"Publishes a package to the registry.",source:"@site/docs/cli/publish.md",sourceDirName:"cli",slug:"/cli/publish",permalink:"/pnpm.github.io/ru/next/cli/publish",editUrl:"https://crowdin.com/project/pnpm/ru",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1633138159,formattedLastUpdatedAt:"02.10.2021",frontMatter:{id:"publish",title:"pnpm publish"},sidebar:"docs",previous:{title:"pnpm env <cmd>",permalink:"/pnpm.github.io/ru/next/cli/env"},next:{title:"pnpm pack",permalink:"/pnpm.github.io/ru/next/cli/pack"}},c=[{value:"Options",id:"options",children:[{value:"--tag &lt;tag&gt;",id:"--tag-tag",children:[]},{value:"--access &lt;public|restricted&gt;",id:"--access-publicrestricted",children:[]},{value:"git-checks",id:"git-checks",children:[]},{value:"publish-branch",id:"publish-branch",children:[]},{value:"--force",id:"--force",children:[]},{value:"--report-summary",id:"--report-summary",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],u={toc:c};function h(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Publishes a package to the registry."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm [-r] publish [<tarball|folder>] [--tag <tag>]\n     [--access <public|restricted>]\n")),(0,a.kt)("p",null,"When publishing a package inside a ",(0,a.kt)("a",{parentName:"p",href:"/pnpm.github.io/ru/next/workspaces"},"workspace"),", the LICENSE file\nfrom the root of the workspace is packed with the package (unless the package\nhas a license of its own)."),(0,a.kt)("p",null,"You may override some fields before publish, using the\n",(0,a.kt)("a",{parentName:"p",href:"/pnpm.github.io/ru/next/package_json#publishconfig"},"publishConfig")," field in ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),".\nYou also can use the ",(0,a.kt)("a",{parentName:"p",href:"/pnpm.github.io/ru/next/package_json#publishconfigdirectory"},(0,a.kt)("inlineCode",{parentName:"a"},"publishConfig.directory"))," to customize the published subdirectory (usually using third party build tools). "),(0,a.kt)("p",null,"When running this command recursively (",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm -r publish"),"), pnpm will publish all\nthe packages that have versions not yet published to the registry."),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("h3",{id:"--tag-tag"},"--tag ","<","tag",">"),(0,a.kt)("p",null,"Publishes the package with the given tag. By default, ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm publish")," updates\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"latest")," tag."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# inside the foo package directory\npnpm publish --tag next\n# in a project where you want to use the next version of foo\npnpm add foo@next\n")),(0,a.kt)("h3",{id:"--access-publicrestricted"},"--access ","<","public|restricted",">"),(0,a.kt)("p",null,"Tells the registry whether the published package should be public or restricted."),(0,a.kt)("h3",{id:"git-checks"},"git-checks"),(0,a.kt)("p",null,"Added in: v4.11.0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Default : ",(0,a.kt)("strong",{parentName:"li"},"true")," (since v5)"),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("strong",{parentName:"li"},"Boolean"))),(0,a.kt)("p",null,"When true, ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm publish")," checks if the current branch is your publish branch\n(master by default), clean, and up-to-date."),(0,a.kt)("h3",{id:"publish-branch"},"publish-branch"),(0,a.kt)("p",null,"Added in: v4.11.0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("strong",{parentName:"li"},"master")),(0,a.kt)("li",{parentName:"ul"},"Types: ",(0,a.kt)("strong",{parentName:"li"},"String"))),(0,a.kt)("p",null,"The primary branch of the repository which is used for publishing the latest\nchanges."),(0,a.kt)("h3",{id:"--force"},"--force"),(0,a.kt)("p",null,"Added in: v5.18.0"),(0,a.kt)("p",null,"Try to publish packages even if their current version is already found in the\nregistry."),(0,a.kt)("h3",{id:"--report-summary"},"--report-summary"),(0,a.kt)("p",null,"Added in: v6.5.0"),(0,a.kt)("p",null,"Save the list of published packages to ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm-publish-summary.json"),". Useful when some other tooling is used to report the list of published packages."),(0,a.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,a.kt)("p",null,"Added in: 4.6.0"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/pnpm.github.io/ru/next/filtering"},"Read more about filtering.")))}h.isMDXComponent=!0}}]);