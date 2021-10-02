"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1055],{9613:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>m});var n=t(9496);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),s=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},c=function(e){var a=s(e.components);return n.createElement(l.Provider,{value:a},e.children)},k={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(t),m=i,u=d["".concat(l,".").concat(m)]||d[m]||k[m]||o;return t?n.createElement(u,r(r({ref:a},c),{},{components:t})):n.createElement(u,r({ref:a},c))}));function m(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=d;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,r[1]=p;for(var s=2;s<o;s++)r[s]=t[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4101:(e,a,t)=>{t.r(a),t.d(a,{frontMatter:()=>p,contentTitle:()=>l,metadata:()=>s,toc:()=>c,default:()=>d});var n=t(98),i=t(6862),o=(t(9496),t(9613)),r=["components"],p={id:"workspaces",title:"Workspace"},l=void 0,s={unversionedId:"workspaces",id:"workspaces",isDocsHomePage:!1,title:"Workspace",description:"pnpm has built-in support for monorepositories (AKA multi-package repositories,",source:"@site/docs/workspaces.md",sourceDirName:".",slug:"/workspaces",permalink:"/pnpm.github.io/it/next/workspaces",editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1633139546,formattedLastUpdatedAt:"2/10/2021",frontMatter:{id:"workspaces",title:"Workspace"},sidebar:"docs",previous:{title:".pnpmfile.cjs",permalink:"/pnpm.github.io/it/next/pnpmfile"},next:{title:"Aliases",permalink:"/pnpm.github.io/it/next/aliases"}},c=[{value:"Workspace protocol (workspace:)",id:"workspace-protocol-workspace",children:[{value:"Referencing workspace packages through aliases",id:"referencing-workspace-packages-through-aliases",children:[]},{value:"Referencing workspace packages through their relative path",id:"referencing-workspace-packages-through-their-relative-path",children:[]},{value:"Publishing workspace packages",id:"publishing-workspace-packages",children:[]}]},{value:"Release workflow",id:"release-workflow",children:[]},{value:"Options",id:"options",children:[{value:"link-workspace-packages",id:"link-workspace-packages",children:[]},{value:"prefer-workspace-packages",id:"prefer-workspace-packages",children:[]},{value:"shared-workspace-lockfile",id:"shared-workspace-lockfile",children:[]},{value:"save-workspace-protocol",id:"save-workspace-protocol",children:[]}]},{value:"Troubleshooting",id:"troubleshooting",children:[]},{value:"Usage examples",id:"usage-examples",children:[]}],k={toc:c};function d(e){var a=e.components,t=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},k,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"pnpm has built-in support for monorepositories (AKA multi-package repositories,\nmulti-project repositories, or monolithic repositories). You can create a\nworkspace to unite multiple projects inside a single repository."),(0,o.kt)("p",null,"A workspace must have a ",(0,o.kt)("a",{parentName:"p",href:"/pnpm.github.io/it/next/pnpm-workspace_yaml"},(0,o.kt)("inlineCode",{parentName:"a"},"pnpm-workspace.yaml"))," file in its\nroot. A workspace also may have an ",(0,o.kt)("a",{parentName:"p",href:"/pnpm.github.io/it/next/npmrc"},(0,o.kt)("inlineCode",{parentName:"a"},".npmrc"))," in its root."),(0,o.kt)("h2",{id:"workspace-protocol-workspace"},"Workspace protocol (workspace:)"),(0,o.kt)("p",null,"Added in: v3.7.0."),(0,o.kt)("p",null,"By default, pnpm will link packages from the workspace if the available packages\nmatch the declared ranges. For instance, ",(0,o.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," is linked into ",(0,o.kt)("inlineCode",{parentName:"p"},"bar")," if\n",(0,o.kt)("inlineCode",{parentName:"p"},"bar")," has ",(0,o.kt)("inlineCode",{parentName:"p"},'"foo": "^1.0.0"')," in its dependencies. However, if ",(0,o.kt)("inlineCode",{parentName:"p"},"bar")," has\n",(0,o.kt)("inlineCode",{parentName:"p"},'"foo": "2.0.0"')," in dependencies and ",(0,o.kt)("inlineCode",{parentName:"p"},"foo@2.0.0")," is not in the workspace,\n",(0,o.kt)("inlineCode",{parentName:"p"},"foo@2.0.0")," will be installed from the registry. This behavior introduces some\nuncertainty."),(0,o.kt)("p",null,"Luckily, pnpm supports the ",(0,o.kt)("inlineCode",{parentName:"p"},"workspace:")," protocol. When\nthis protocol is used, pnpm will refuse to resolve to anything other than a\nlocal workspace package. So, if you set ",(0,o.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:2.0.0"'),", this time\ninstallation will fail because ",(0,o.kt)("inlineCode",{parentName:"p"},'"foo@2.0.0"')," isn't present in the workspace."),(0,o.kt)("p",null,"This protocol is especially useful when the ",(0,o.kt)("a",{parentName:"p",href:"#link-workspace-packages"},"link-workspace-packages")," option is\nset to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),". In that case, pnpm will only link packages from the workspace if\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"workspace:")," protocol is used."),(0,o.kt)("h3",{id:"referencing-workspace-packages-through-aliases"},"Referencing workspace packages through aliases"),(0,o.kt)("p",null,"Added in: v5.12.0"),(0,o.kt)("p",null,"Let's say you have a package in the workspace named ",(0,o.kt)("inlineCode",{parentName:"p"},"foo"),". Usually, you would\nreference it as ",(0,o.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:*"'),"."),(0,o.kt)("p",null,"If you want to use a different alias, the following syntax will work too:\n",(0,o.kt)("inlineCode",{parentName:"p"},'"bar": "workspace:foo@*"'),"."),(0,o.kt)("p",null,"Before publish, aliases are converted to regular aliased dependencies. The above\nexample will become: ",(0,o.kt)("inlineCode",{parentName:"p"},'"bar": "npm:foo@1.0.0"'),"."),(0,o.kt)("h3",{id:"referencing-workspace-packages-through-their-relative-path"},"Referencing workspace packages through their relative path"),(0,o.kt)("p",null,"Added in: v5.12.0"),(0,o.kt)("p",null,"In a workspace with 2 packages:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+ packages\n    + foo\n    + bar\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"bar")," may have ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," in its dependencies declared as\n",(0,o.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:../foo"'),". Before publishing, these specs are converted to\nregular version specs supported by all package managers."),(0,o.kt)("h3",{id:"publishing-workspace-packages"},"Publishing workspace packages"),(0,o.kt)("p",null,"When a workspace package is packed into an archive (whether it's through\n",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm pack")," or one of the publish commands like ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm publish"),"), we dynamically\nreplace any ",(0,o.kt)("inlineCode",{parentName:"p"},"workspace:")," dependency by:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The corresponding version in the target workspace (if you use ",(0,o.kt)("inlineCode",{parentName:"li"},"workspace:*"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"workspace:~"),", or ",(0,o.kt)("inlineCode",{parentName:"li"},"workspace:^"),")"),(0,o.kt)("li",{parentName:"ul"},"The associated semver range (for any other range type)")),(0,o.kt)("p",null,"So for example, if we have ",(0,o.kt)("inlineCode",{parentName:"p"},"foo"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"bar"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"qar"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"zoo "),"in the workspace and they all are at version ",(0,o.kt)("inlineCode",{parentName:"p"},"1.5.0"),", the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "dependencies": {\n        "foo": "workspace:*",\n        "bar": "workspace:~",\n        "qar": "workspace:^",\n        "zoo": "workspace:^1.5.0"\n    }\n}\n')),(0,o.kt)("p",null,"Will be transformed into:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "dependencies": {\n        "foo": "1.5.0",\n        "bar": "~1.5.0",\n        "qar": "^1.5.0",\n        "zoo": "^1.5.0"\n    }\n}\n')),(0,o.kt)("p",null,"This feature allows you to depend on your local workspace packages while still\nbeing able to publish the resulting packages to the remote registry without\nneeding intermediary publish steps - your consumers will be able to use your\npublished workspaces as any other package, still benefitting from the guarantees\nsemver offers."),(0,o.kt)("h2",{id:"release-workflow"},"Release workflow"),(0,o.kt)("p",null,"Versioning packages inside a workspace is a complex task and pnpm currently does\nnot provide a built-in solution for it. However, there are 2 well tested tools\nthat handle versioning and support pnpm:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/atlassian/changesets"},"changesets")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://rushjs.io"},"Rush"),".")),(0,o.kt)("p",null,"For how to set up a repository using Rush, read ",(0,o.kt)("a",{parentName:"p",href:"https://rushjs.io/pages/maintainer/setup_new_repo"},"this page"),"."),(0,o.kt)("p",null,"For using Changesets with pnpm, read ",(0,o.kt)("a",{parentName:"p",href:"/pnpm.github.io/it/next/using-changesets"},"this guide"),"."),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("h3",{id:"link-workspace-packages"},"link-workspace-packages"),(0,o.kt)("p",null,"Added in: v2.14.0"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("strong",{parentName:"li"},"true")),(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("strong",{parentName:"li"},"true"),", ",(0,o.kt)("strong",{parentName:"li"},"false"),", ",(0,o.kt)("strong",{parentName:"li"},"deep"))),(0,o.kt)("p",null,"If this is enabled, locally available packages are linked to ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules"),"\ninstead of being downloaded from the registry. This is very convenient in a\nmonorepo. If you need local packages to also be linked to subdependencies, you\ncan use the ",(0,o.kt)("inlineCode",{parentName:"p"},"deep")," setting (since v5)."),(0,o.kt)("p",null,"Else, packages are downloaded and installed from the registry. However,\nworkspace packages can still be linked by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"workspace:")," range protocol."),(0,o.kt)("h3",{id:"prefer-workspace-packages"},"prefer-workspace-packages"),(0,o.kt)("p",null,"Added in: v5.13.0"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("strong",{parentName:"li"},"false")),(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("strong",{parentName:"li"},"Boolean"))),(0,o.kt)("p",null,"If this is enabled, local packages from the workspace are preferred over\npackages from the registry, even if there is a newer version of the package in\nthe registry."),(0,o.kt)("p",null,"This setting is only useful if the workspace doesn't use\n",(0,o.kt)("inlineCode",{parentName:"p"},"save-workspace-protocol"),"."),(0,o.kt)("h3",{id:"shared-workspace-lockfile"},"shared-workspace-lockfile"),(0,o.kt)("p",null,"Added in: v2.17.0 as ",(0,o.kt)("inlineCode",{parentName:"p"},"shared-workspace-shrinkwrap")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("strong",{parentName:"li"},"true")),(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("strong",{parentName:"li"},"Boolean"))),(0,o.kt)("p",null,"If this is enabled, pnpm creates a single ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," file in the root of\nthe workspace. This also means that all dependencies of workspace packages will\nbe in a single ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," (and get symlinked to their package ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules"),"\nfolder for Node's module resolution)."),(0,o.kt)("p",null,"Advantages of this option:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"every dependency is a singleton"),(0,o.kt)("li",{parentName:"ul"},"faster installations in a monorepo"),(0,o.kt)("li",{parentName:"ul"},"fewer changes in code reviews as they are all in one file")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Even though all the dependencies will be hard linked into the root\n",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules"),", packages will have access only to those dependencies\nthat are declared in their ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),", so pnpm's strictness is preserved.\nThis is a result of the aforementioned symbolic linking."))),(0,o.kt)("h3",{id:"save-workspace-protocol"},"save-workspace-protocol"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("strong",{parentName:"li"},"true")),(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("strong",{parentName:"li"},"Boolean"))),(0,o.kt)("p",null,"If this is enabled, new dependencies will be added with the workspace protocol\nIF (and only if) they are present in the workspace."),(0,o.kt)("p",null,"You might want to change this setting to ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," if the tooling in your\nrepository does not understand the workspace protocol (and ideally submit a PR\nto your tooling to get it added in the future)."),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("p",null,"pnpm cannot guarantee that scripts will be run in topological order if there are cycles between workspace dependencies. If pnpm detects cyclic dependencies during installation, it will produce a warning. If pnpm is able to find out which dependencies are causing the cycles, it will display them too."),(0,o.kt)("p",null,"If you see the message ",(0,o.kt)("inlineCode",{parentName:"p"},"There are cyclic workspace dependencies"),", please inspect workspace dependencies declared in ",(0,o.kt)("inlineCode",{parentName:"p"},"dependencies"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,o.kt)("h2",{id:"usage-examples"},"Usage examples"),(0,o.kt)("p",null,"Here are a few open source projects that use the workspace feature of pnpm:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/vitejs/vite"},"Vite")," (as of 9/26/2021, commit ",(0,o.kt)("inlineCode",{parentName:"li"},"3e1cce01d01493d33e50966d0d0fd39a86d229f9"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/cyclejs/cyclejs"},"Cycle.js")," (as of 9/21/2021, commit ",(0,o.kt)("inlineCode",{parentName:"li"},"f2187ab6688368edb904b649bd371a658f6a8637"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/prisma/prisma"},"Prisma")," (as of 9/21/2021, commit ",(0,o.kt)("inlineCode",{parentName:"li"},"c4c83e788aa16d61bae7a6d00adc8a58b3789a06"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/verdaccio/verdaccio"},"Verdaccio")," (as of 9/21/2021, commit ",(0,o.kt)("inlineCode",{parentName:"li"},"9dbf73e955fcb70b0a623c5ab89649b95146c744"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/rollup/plugins"},"Rollup plugins")," (as of 9/21/2021, commit ",(0,o.kt)("inlineCode",{parentName:"li"},"53fb18c0c2852598200c547a0b1d745d15b5b487"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Saul-Mirone/milkdown"},"Milkdown")," (as of 9/26/2021, commit ",(0,o.kt)("inlineCode",{parentName:"li"},"4b2e1dd6125bc2198fd1b851c4f00eda70e9b913"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/bytedance/bytemd"},"ByteMD")," (as of 2/18/2021, commit ",(0,o.kt)("inlineCode",{parentName:"li"},"36ef25f1ea1cd0b08752df5f8c832302017bb7fb"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/vueuse/vueuse"},"VueUse")," (as of 9/25/2021, commit ",(0,o.kt)("inlineCode",{parentName:"li"},"826351ba1d9c514e34426c85f3d69fb9875c7dd9"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/slidevjs/slidev"},"Slidev")," (as of 4/12/2021, commit ",(0,o.kt)("inlineCode",{parentName:"li"},"d6783323eb1ab1fc612577eb63579c8f7bc99c3a"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/sveltejs/kit"},"SvelteKit")," (as of 9/26/2021, commit ",(0,o.kt)("inlineCode",{parentName:"li"},"b164420ab26fa04fd0fbe0ac05431f36a89ef193"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/telecraft/telecraft"},"Telecraft")," (as of 9/26/2021, commit ",(0,o.kt)("inlineCode",{parentName:"li"},"73a9c48c9d4f160d758b8881f404cc52c20a7454"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/hayes/giraphql"},"GiraphQL")," (as of 8/4/2021, commit ",(0,o.kt)("inlineCode",{parentName:"li"},"3dd3ff148da382d6f406f20626a9a5c25707c0c8"),")")))}d.isMDXComponent=!0}}]);