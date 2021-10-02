"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7363],{9613:(e,a,n)=>{n.d(a,{Zo:()=>c,kt:()=>u});var t=n(9496);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),s=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},c=function(e){var a=s(e.components);return t.createElement(l.Provider,{value:a},e.children)},k={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,h=d["".concat(l,".").concat(u)]||d[u]||k[u]||o;return n?t.createElement(h,i(i({ref:a},c),{},{components:n})):t.createElement(h,i({ref:a},c))}));function u(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3793:(e,a,n)=>{n.r(a),n.d(a,{frontMatter:()=>p,contentTitle:()=>l,metadata:()=>s,toc:()=>c,default:()=>d});var t=n(98),r=n(6862),o=(n(9496),n(9613)),i=["components"],p={id:"workspaces",title:"Workspace"},l=void 0,s={unversionedId:"workspaces",id:"version-5.x/workspaces",isDocsHomePage:!1,title:"Workspace",description:"pnpm has built-in support for monorepositories (AKA multi-package repositories,",source:"@site/versioned_docs/version-5.x/workspaces.md",sourceDirName:".",slug:"/workspaces",permalink:"/pnpm.github.io/pt/5.x/workspaces",editUrl:"https://crowdin.com/project/pnpm/pt",tags:[],version:"5.x",lastUpdatedBy:"Yuchao",lastUpdatedAt:1633157218,formattedLastUpdatedAt:"02/10/2021",frontMatter:{id:"workspaces",title:"Workspace"},sidebar:"version-5.x/docs",previous:{title:"pnpmfile.js",permalink:"/pnpm.github.io/pt/5.x/pnpmfile"},next:{title:"Aliases",permalink:"/pnpm.github.io/pt/5.x/aliases"}},c=[{value:"Workspace protocol (workspace:)",id:"workspace-protocol-workspace",children:[{value:"Referencing workspace packages through aliases",id:"referencing-workspace-packages-through-aliases",children:[]},{value:"Referencing workspace packages through their relative path",id:"referencing-workspace-packages-through-their-relative-path",children:[]},{value:"Publishing workspace packages",id:"publishing-workspace-packages",children:[]}]},{value:"Release workflow",id:"release-workflow",children:[]},{value:"Options",id:"options",children:[{value:"link-workspace-packages",id:"link-workspace-packages",children:[]},{value:"prefer-workspace-packages",id:"prefer-workspace-packages",children:[]},{value:"shared-workspace-lockfile",id:"shared-workspace-lockfile",children:[]},{value:"save-workspace-protocol",id:"save-workspace-protocol",children:[]}]}],k={toc:c};function d(e){var a=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},k,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"pnpm has built-in support for monorepositories (AKA multi-package repositories,\nmulti-project repositories, or monolithic repositories). You can create a\nworkspace to unite multiple projects inside a single repository."),(0,o.kt)("p",null,"A workspace must have a ",(0,o.kt)("a",{parentName:"p",href:"/pnpm.github.io/pt/5.x/pnpm-workspace_yaml"},(0,o.kt)("inlineCode",{parentName:"a"},"pnpm-workspace.yaml"))," file in its\nroot. A workspace also may have an ",(0,o.kt)("a",{parentName:"p",href:"/pnpm.github.io/pt/5.x/npmrc"},(0,o.kt)("inlineCode",{parentName:"a"},".npmrc"))," in its root."),(0,o.kt)("h2",{id:"workspace-protocol-workspace"},"Workspace protocol (workspace:)"),(0,o.kt)("p",null,"Supported since v3.7.0."),(0,o.kt)("p",null,"By default, pnpm will link packages from the workspace if the available packages\nmatch the declared ranges. For instance, ",(0,o.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," is linked into ",(0,o.kt)("inlineCode",{parentName:"p"},"bar")," if\n",(0,o.kt)("inlineCode",{parentName:"p"},"bar")," has ",(0,o.kt)("inlineCode",{parentName:"p"},'"foo": "^1.0.0"')," in its dependencies. However, if ",(0,o.kt)("inlineCode",{parentName:"p"},"bar")," has\n",(0,o.kt)("inlineCode",{parentName:"p"},'"foo": "2.0.0"')," in dependencies and ",(0,o.kt)("inlineCode",{parentName:"p"},"foo@2.0.0")," is not in the workspace,\n",(0,o.kt)("inlineCode",{parentName:"p"},"foo@2.0.0")," will be installed from the registry. This behavior introduces some\nuncertainty."),(0,o.kt)("p",null,"Luckily, pnpm supports the ",(0,o.kt)("inlineCode",{parentName:"p"},"workspace:")," protocol (the same as in Yarn v2). When\nthis protocol is used, pnpm will refuse to resolve to anything other than a\nlocal workspace package. So, if you set ",(0,o.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:2.0.0"'),", this time\ninstallation will fail because ",(0,o.kt)("inlineCode",{parentName:"p"},'"foo@2.0.0"')," isn't present in the workspace."),(0,o.kt)("p",null,"This protocol is especially useful when the ",(0,o.kt)("a",{parentName:"p",href:"#link-workspace-packages"},"link-workspace-packages")," option is\nset to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),". In that case, pnpm will only link packages from the workspace if\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"workspace:")," protocol is used."),(0,o.kt)("h3",{id:"referencing-workspace-packages-through-aliases"},"Referencing workspace packages through aliases"),(0,o.kt)("p",null,"Added in 5.12.0"),(0,o.kt)("p",null,"Let's say you have a package in the workspace named ",(0,o.kt)("inlineCode",{parentName:"p"},"foo"),". Usually, you would\nreference it as ",(0,o.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:*"'),"."),(0,o.kt)("p",null,"If you want to use a different alias, the following syntax will work too:\n",(0,o.kt)("inlineCode",{parentName:"p"},'"bar": "workspace:foo@*"'),"."),(0,o.kt)("p",null,"Before publish, aliases are converted to regular aliased dependencies. The above\nexample will become: ",(0,o.kt)("inlineCode",{parentName:"p"},'"bar": "npm:foo@1.0.0"'),"."),(0,o.kt)("h3",{id:"referencing-workspace-packages-through-their-relative-path"},"Referencing workspace packages through their relative path"),(0,o.kt)("p",null,"Added in 5.12.0"),(0,o.kt)("p",null,"In a workspace with 2 packages:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+ packages\n    + foo\n    + bar\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"bar")," may have ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," in its dependencies declared as\n",(0,o.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:../foo"'),". Before publishing, these specs are converted to\nregular version specs supported by all package managers."),(0,o.kt)("h3",{id:"publishing-workspace-packages"},"Publishing workspace packages"),(0,o.kt)("p",null,"When a workspace package is packed into an archive (whether it's through\n",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm pack")," or one of the publish commands like ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm publish"),"), we dynamically\nreplace any ",(0,o.kt)("inlineCode",{parentName:"p"},"workspace:")," dependency by:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The corresponding version in the target workspace (if you use ",(0,o.kt)("inlineCode",{parentName:"li"},"*"),")"),(0,o.kt)("li",{parentName:"ul"},"The associated semver range (for any other range type)")),(0,o.kt)("p",null,"So for example, if we have a workspace package at version ",(0,o.kt)("inlineCode",{parentName:"p"},"1.5.0"),", the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "dependencies": {\n        "foo": "workspace:*",\n        "bar": "workspace:^1.2.3"\n    }\n}\n')),(0,o.kt)("p",null,"Will be transformed into:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "dependencies": {\n        "foo": "1.5.0",\n        "bar": "^1.2.3"\n    }\n}\n')),(0,o.kt)("p",null,"This feature allows you to depend on your local workspace packages while still\nbeing able to publish the resulting packages to the remote registry without\nneeding intermediary publish steps - your consumers will be able to use your\npublished workspaces as any other package, still benefitting from the guarantees\nsemver offers."),(0,o.kt)("h2",{id:"release-workflow"},"Release workflow"),(0,o.kt)("p",null,"Versioning packages inside a workspace is a complex task and pnpm currently does\nnot provide a built-in solution for it. However, there are 2 well tested tools\nthat handle versioning and support pnpm:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/atlassian/changesets"},"changesets")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://rushjs.io"},"Rush"),".")),(0,o.kt)("p",null,"For how to set up a repository using Rush, read ",(0,o.kt)("a",{parentName:"p",href:"https://rushjs.io/pages/maintainer/setup_new_repo"},"this page"),"."),(0,o.kt)("p",null,"For using Changesets with pnpm, read ",(0,o.kt)("a",{parentName:"p",href:"/pnpm.github.io/pt/5.x/using-changesets"},"this guide"),"."),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("h3",{id:"link-workspace-packages"},"link-workspace-packages"),(0,o.kt)("p",null,"Added in: v2.14.0"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("strong",{parentName:"li"},"true")),(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("strong",{parentName:"li"},"true"),", ",(0,o.kt)("strong",{parentName:"li"},"false"),", ",(0,o.kt)("strong",{parentName:"li"},"deep"))),(0,o.kt)("p",null,"If this is enabled, locally available packages are linked to ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules"),"\ninstead of being downloaded from the registry. This is very convenient in a\nmonorepo. If you need local packages to also be linked to subdependencies, you\ncan use the ",(0,o.kt)("inlineCode",{parentName:"p"},"deep")," setting (since v5)."),(0,o.kt)("p",null,"Else, packages are downloaded and installed from the registry. However,\nworkspace packages can still be linked by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"workspace:")," range protocol."),(0,o.kt)("h3",{id:"prefer-workspace-packages"},"prefer-workspace-packages"),(0,o.kt)("p",null,"Added in: v5.13.0"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("strong",{parentName:"li"},"false")),(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("strong",{parentName:"li"},"Boolean"))),(0,o.kt)("p",null,"If this is enabled, local packages from the workspace are preferred over\npackages from the registry, even if there is a newer version of the package in\nthe registry."),(0,o.kt)("p",null,"This setting is only useful if the workspace doesn't use\n",(0,o.kt)("inlineCode",{parentName:"p"},"save-workspace-protocol"),"."),(0,o.kt)("h3",{id:"shared-workspace-lockfile"},"shared-workspace-lockfile"),(0,o.kt)("p",null,"Added in: v2.17.0 as ",(0,o.kt)("inlineCode",{parentName:"p"},"shared-workspace-shrinkwrap")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("strong",{parentName:"li"},"true")),(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("strong",{parentName:"li"},"Boolean"))),(0,o.kt)("p",null,"If this is enabled, pnpm creates a single ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," file in the root of\nthe workspace. This also means that all dependencies of workspace packages will\nbe in a single ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," (and get symlinked to their package ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules"),"\nfolder for Node's module resolution)."),(0,o.kt)("p",null,"Advantages of this option:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"every dependency is a singleton"),(0,o.kt)("li",{parentName:"ul"},"faster installations in a monorepo"),(0,o.kt)("li",{parentName:"ul"},"fewer changes in code reviews as they are all in one file")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Even though all the dependencies will be hard linked into the root\n",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules"),", packages will have access only to those dependencies\nthat are declared in their ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),", so pnpm's strictness is preserved.\nThis is a result of the aforementioned symbolic linking."))),(0,o.kt)("h3",{id:"save-workspace-protocol"},"save-workspace-protocol"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("strong",{parentName:"li"},"true")),(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("strong",{parentName:"li"},"Boolean"))),(0,o.kt)("p",null,"If this is enabled, new dependencies will be added with the workspace protocol\nIF (and only if) they are present in the workspace."),(0,o.kt)("p",null,"You might want to change this setting to ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," if the tooling in your\nrepository does not understand the workspace protocol (and ideally submit a PR\nto your tooling to get it added in the future)."))}d.isMDXComponent=!0}}]);