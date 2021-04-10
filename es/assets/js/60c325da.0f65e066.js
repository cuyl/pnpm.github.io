(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{167:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return p})),t.d(a,"toc",(function(){return s})),t.d(a,"default",(function(){return c}));var n=t(3),r=t(8),o=(t(0),t(318)),i={id:"workspaces",title:"Workspace"},p={unversionedId:"workspaces",id:"workspaces",isDocsHomePage:!1,title:"Workspace",description:"pnpm has built-in support for monorepositories (AKA multi-package repositories, multi-project repositories, or monolithic repositories). You can create a workspace to unite multiple projects inside a single repository.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/workspaces.md",slug:"/workspaces",permalink:"/es/next/workspaces",editUrl:"https://crowdin.com/project/pnpm/es",version:"current",sidebar:"docs",previous:{title:".pnpmfile.cjs",permalink:"/es/next/pnpmfile"},next:{title:"Aliases",permalink:"/es/next/aliases"}},s=[{value:"Workspace protocol (workspace:)",id:"workspace-protocol-workspace",children:[{value:"Referencing workspace packages through aliases",id:"referencing-workspace-packages-through-aliases",children:[]},{value:"Referencing workspace packages through their relative path",id:"referencing-workspace-packages-through-their-relative-path",children:[]},{value:"Publishing workspace packages",id:"publishing-workspace-packages",children:[]}]},{value:"Release workflow",id:"release-workflow",children:[]},{value:"Options",id:"options",children:[{value:"link-workspace-packages",id:"link-workspace-packages",children:[]},{value:"prefer-workspace-packages",id:"prefer-workspace-packages",children:[]},{value:"shared-workspace-lockfile",id:"shared-workspace-lockfile",children:[]},{value:"save-workspace-protocol",id:"save-workspace-protocol",children:[]}]}],l={toc:s};function c(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,t,{components:a,mdxType:"MDXLayout"}),Object(o.b)("p",null,"pnpm has built-in support for monorepositories (AKA multi-package repositories, multi-project repositories, or monolithic repositories). You can create a workspace to unite multiple projects inside a single repository."),Object(o.b)("p",null,"A workspace must have a ",Object(o.b)("a",{parentName:"p",href:"/es/next/pnpm-workspace_yaml"},Object(o.b)("inlineCode",{parentName:"a"},"pnpm-workspace.yaml"))," file in its root. A workspace also may have an ",Object(o.b)("a",{parentName:"p",href:"/es/next/npmrc"},Object(o.b)("inlineCode",{parentName:"a"},".npmrc"))," in its root."),Object(o.b)("h2",{id:"workspace-protocol-workspace"},"Workspace protocol (workspace:)"),Object(o.b)("p",null,"Supported since v3.7.0."),Object(o.b)("p",null,"By default, pnpm will link packages from the workspace if the available packages match the declared ranges. For instance, ",Object(o.b)("inlineCode",{parentName:"p"},"foo@1.0.0")," is linked into ",Object(o.b)("inlineCode",{parentName:"p"},"bar")," if ",Object(o.b)("inlineCode",{parentName:"p"},"bar")," has ",Object(o.b)("inlineCode",{parentName:"p"},'"foo": "^1.0.0"')," in its dependencies. However, if ",Object(o.b)("inlineCode",{parentName:"p"},"bar")," has ",Object(o.b)("inlineCode",{parentName:"p"},'"foo": "2.0.0"')," in dependencies and ",Object(o.b)("inlineCode",{parentName:"p"},"foo@2.0.0")," is not in the workspace, ",Object(o.b)("inlineCode",{parentName:"p"},"foo@2.0.0")," will be installed from the registry. This behavior introduces some uncertainty."),Object(o.b)("p",null,"Luckily, pnpm supports the ",Object(o.b)("inlineCode",{parentName:"p"},"workspace:")," protocol (the same as in Yarn v2). When this protocol is used, pnpm will refuse to resolve to anything other than a local workspace package. So, if you set ",Object(o.b)("inlineCode",{parentName:"p"},'"foo": "workspace:2.0.0"'),", this time installation will fail because ",Object(o.b)("inlineCode",{parentName:"p"},'"foo@2.0.0"')," isn't present in the workspace."),Object(o.b)("p",null,"This protocol is especially useful when the ",Object(o.b)("a",{parentName:"p",href:"#link-workspace-packages"},"link-workspace-packages")," option is set to ",Object(o.b)("inlineCode",{parentName:"p"},"false"),". In that case, pnpm will only link packages from the workspace if the ",Object(o.b)("inlineCode",{parentName:"p"},"workspace:")," protocol is used."),Object(o.b)("h3",{id:"referencing-workspace-packages-through-aliases"},"Referencing workspace packages through aliases"),Object(o.b)("p",null,"Added in 5.12.0"),Object(o.b)("p",null,"Let's say you have a package in the workspace named ",Object(o.b)("inlineCode",{parentName:"p"},"foo"),". Usually, you would reference it as ",Object(o.b)("inlineCode",{parentName:"p"},'"foo": "workspace:*"'),"."),Object(o.b)("p",null,"If you want to use a different alias, the following syntax will work too: ",Object(o.b)("inlineCode",{parentName:"p"},'"bar": "workspace:foo@*"'),"."),Object(o.b)("p",null,"Before publish, aliases are converted to regular aliased dependencies. The above example will become: ",Object(o.b)("inlineCode",{parentName:"p"},'"bar": "npm:foo@1.0.0"'),"."),Object(o.b)("h3",{id:"referencing-workspace-packages-through-their-relative-path"},"Referencing workspace packages through their relative path"),Object(o.b)("p",null,"Added in 5.12.0"),Object(o.b)("p",null,"In a workspace with 2 packages:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"+ packages\n    + foo\n    + bar\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"bar")," may have ",Object(o.b)("inlineCode",{parentName:"p"},"foo")," in its dependencies declared as ",Object(o.b)("inlineCode",{parentName:"p"},'"foo": "workspace:../foo"'),". Before publishing, these specs are converted to regular version specs supported by all package managers."),Object(o.b)("h3",{id:"publishing-workspace-packages"},"Publishing workspace packages"),Object(o.b)("p",null,"When a workspace package is packed into an archive (whether it's through ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm pack")," or one of the publish commands like ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm publish"),"), we dynamically replace any ",Object(o.b)("inlineCode",{parentName:"p"},"workspace:")," dependency by:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The corresponding version in the target workspace (if you use ",Object(o.b)("inlineCode",{parentName:"li"},"*"),")"),Object(o.b)("li",{parentName:"ul"},"The associated semver range (for any other range type)")),Object(o.b)("p",null,"So for example, if we have a workspace package at version ",Object(o.b)("inlineCode",{parentName:"p"},"1.5.0"),", the following:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n    "dependencies": {\n        "foo": "workspace:*",\n        "bar": "workspace:^1.2.3"\n    }\n}\n')),Object(o.b)("p",null,"Will be transformed into:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n    "dependencies": {\n        "foo": "1.5.0",\n        "bar": "^1.2.3"\n    }\n}\n')),Object(o.b)("p",null,"This feature allows you to depend on your local workspace packages while still being able to publish the resulting packages to the remote registry without needing intermediary publish steps - your consumers will be able to use your published workspaces as any other package, still benefitting from the guarantees semver offers."),Object(o.b)("h2",{id:"release-workflow"},"Release workflow"),Object(o.b)("p",null,"Versioning packages inside a workspace is a complex task and pnpm currently does not provide a built-in solution for it. However, there are 2 well tested tools that handle versioning and support pnpm:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/atlassian/changesets"},"changesets")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://rushjs.io"},"Rush"),".")),Object(o.b)("p",null,"For how to set up a repository using Rush, read ",Object(o.b)("a",{parentName:"p",href:"https://rushjs.io/pages/maintainer/setup_new_repo"},"this page"),"."),Object(o.b)("p",null,"For using Changesets with pnpm, read ",Object(o.b)("a",{parentName:"p",href:"/es/next/using-changesets"},"this guide"),"."),Object(o.b)("h2",{id:"options"},"Options"),Object(o.b)("h3",{id:"link-workspace-packages"},"link-workspace-packages"),Object(o.b)("p",null,"Added in: v2.14.0"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Default: ",Object(o.b)("strong",{parentName:"li"},"true")),Object(o.b)("li",{parentName:"ul"},"Type: ",Object(o.b)("strong",{parentName:"li"},"true"),", ",Object(o.b)("strong",{parentName:"li"},"false"),", ",Object(o.b)("strong",{parentName:"li"},"deep"))),Object(o.b)("p",null,"If this is enabled, locally available packages are linked to ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules")," instead of being downloaded from the registry. This is very convenient in a monorepo. If you need local packages to also be linked to subdependencies, you can use the ",Object(o.b)("inlineCode",{parentName:"p"},"deep")," setting (since v5)."),Object(o.b)("p",null,"Else, packages are downloaded and installed from the registry. However, workspace packages can still be linked by using the ",Object(o.b)("inlineCode",{parentName:"p"},"workspace:")," range protocol."),Object(o.b)("h3",{id:"prefer-workspace-packages"},"prefer-workspace-packages"),Object(o.b)("p",null,"Added in: v5.13.0"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Default: ",Object(o.b)("strong",{parentName:"li"},"false")),Object(o.b)("li",{parentName:"ul"},"Type: ",Object(o.b)("strong",{parentName:"li"},"Boolean"))),Object(o.b)("p",null,"If this is enabled, local packages from the workspace are preferred over packages from the registry, even if there is a newer version of the package in the registry."),Object(o.b)("p",null,"This setting is only useful if the workspace doesn't use ",Object(o.b)("inlineCode",{parentName:"p"},"save-workspace-protocol"),"."),Object(o.b)("h3",{id:"shared-workspace-lockfile"},"shared-workspace-lockfile"),Object(o.b)("p",null,"Added in: v2.17.0 as ",Object(o.b)("inlineCode",{parentName:"p"},"shared-workspace-shrinkwrap")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Default: ",Object(o.b)("strong",{parentName:"li"},"true")),Object(o.b)("li",{parentName:"ul"},"Type: ",Object(o.b)("strong",{parentName:"li"},"Boolean"))),Object(o.b)("p",null,"If this is enabled, pnpm creates a single ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," file in the root of the workspace. This also means that all dependencies of workspace packages will be in a single ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules")," (and get symlinked to their package ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules")," folder for Node's module resolution)."),Object(o.b)("p",null,"Advantages of this option:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"every dependency is a singleton"),Object(o.b)("li",{parentName:"ul"},"faster installations in a monorepo"),Object(o.b)("li",{parentName:"ul"},"fewer changes in code reviews as they are all in one file")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Even though all the dependencies will be hard linked into the root ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules"),", packages will have access only to those dependencies that are declared in their ",Object(o.b)("inlineCode",{parentName:"p"},"package.json"),", so pnpm's strictness is preserved. This is a result of the aforementioned symbolic linking."))),Object(o.b)("h3",{id:"save-workspace-protocol"},"save-workspace-protocol"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Default: ",Object(o.b)("strong",{parentName:"li"},"true")),Object(o.b)("li",{parentName:"ul"},"Type: ",Object(o.b)("strong",{parentName:"li"},"Boolean"))),Object(o.b)("p",null,"If this is enabled, new dependencies will be added with the workspace protocol IF (and only if) they are present in the workspace."),Object(o.b)("p",null,"You might want to change this setting to ",Object(o.b)("inlineCode",{parentName:"p"},"false")," if the tooling in your repository does not understand the workspace protocol (and ideally submit a PR to your tooling to get it added in the future)."))}c.isMDXComponent=!0},318:function(e,a,t){"use strict";t.d(a,"a",(function(){return b})),t.d(a,"b",(function(){return h}));var n=t(0),r=t.n(n);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),c=function(e){var a=r.a.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},b=function(e){var a=c(e.components);return r.a.createElement(l.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},u=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=c(t),u=n,h=b["".concat(i,".").concat(u)]||b[u]||d[u]||o;return t?r.a.createElement(h,p(p({ref:a},l),{},{components:t})):r.a.createElement(h,p({ref:a},l))}));function h(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=u;var p={};for(var s in a)hasOwnProperty.call(a,s)&&(p[s]=a[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var l=2;l<o;l++)i[l]=t[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);