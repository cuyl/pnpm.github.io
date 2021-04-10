(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{157:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return s}));var a=t(3),r=t(8),o=(t(0),t(318)),i={id:"workspaces",title:"Workspaces",original_id:"workspaces"},p={unversionedId:"workspaces",id:"version-4.x/workspaces",isDocsHomePage:!1,title:"Workspaces",description:"pnpm has built-in support for monorepos (a.k.a. multi-package repositories,",source:"@site/versioned_docs/version-4.x/workspaces.md",slug:"/workspaces",permalink:"/4.x/workspaces",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/versioned_docs/version-4.x/workspaces.md",version:"4.x",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615638839,formattedLastUpdatedAt:"3/13/2021",sidebar:"version-4.x/docs",previous:{title:"pnpmfile.js",permalink:"/4.x/pnpmfile"},next:{title:"Aliases",permalink:"/4.x/aliases"}},l=[{value:"Workspace ranges (workspace:)",id:"workspace-ranges-workspace",children:[]},{value:"Publishing workspace packages",id:"publishing-workspace-packages",children:[]},{value:"Options",id:"options",children:[{value:"link-workspace-packages",id:"link-workspace-packages",children:[]},{value:"shared-workspace-lockfile",id:"shared-workspace-lockfile",children:[]},{value:"save-workspace-protocol",id:"save-workspace-protocol",children:[]}]}],c={toc:l};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"pnpm has built-in support for monorepos (a.k.a. multi-package repositories,\nmulti-project repositories or monolithic repositories). You can create a\nworkspace to unite multiple projects inside a single repository."),Object(o.b)("p",null,"A workspace must have a ",Object(o.b)("a",{parentName:"p",href:"/4.x/pnpm-workspace_yaml"},"pnpm-workspace.yaml")," file in\nits root. A workspace also may have a ",Object(o.b)("a",{parentName:"p",href:"/4.x/npmrc"},".npmrc")," in its root."),Object(o.b)("h2",{id:"workspace-ranges-workspace"},"Workspace ranges (workspace:)"),Object(o.b)("p",null,"Supported since v3.7.0."),Object(o.b)("p",null,"By default, pnpm will link packages from the workspace if the available packages match\nthe declared ranges. For instance, ",Object(o.b)("inlineCode",{parentName:"p"},"foo@1.0.0")," is linked into ",Object(o.b)("inlineCode",{parentName:"p"},"bar")," if ",Object(o.b)("inlineCode",{parentName:"p"},"bar")," has ",Object(o.b)("inlineCode",{parentName:"p"},'"foo": "^1.0.0"')," in dependencies.\nBut if ",Object(o.b)("inlineCode",{parentName:"p"},"bar")," has ",Object(o.b)("inlineCode",{parentName:"p"},'"foo": "2.0.0"')," in dependencies and ",Object(o.b)("inlineCode",{parentName:"p"},"foo@2.0.0")," is not in the workspace then\n",Object(o.b)("inlineCode",{parentName:"p"},"foo@2.0.0")," will be installed from the registry. This behavior introduces some uncertainty."),Object(o.b)("p",null,"Luckily, pnpm supports the ",Object(o.b)("inlineCode",{parentName:"p"},"workspace:")," protocol (same as in Yarn v2). When this protocol is used pnpm will refuse\nto resolve to anything else than a local workspace package. So if you set ",Object(o.b)("inlineCode",{parentName:"p"},'"foo": "workspace:2.0.0"')," installation\nwill fail telling that no ",Object(o.b)("inlineCode",{parentName:"p"},'"foo@2.0.0"')," is present in the workspace."),Object(o.b)("p",null,"This protocol is especially useful when the ",Object(o.b)("a",{parentName:"p",href:"#link-workspace-packages"},"link-workspace-packages")," config is set to ",Object(o.b)("inlineCode",{parentName:"p"},"false"),".\nIn that case, pnpm will only link packages from the workspace if the ",Object(o.b)("inlineCode",{parentName:"p"},"workspace:")," protocol is used."),Object(o.b)("h2",{id:"publishing-workspace-packages"},"Publishing workspace packages"),Object(o.b)("p",null,"When a workspace package is packed into an archive (whether it's through ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm pack")," or one of the publish commands like ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm publish"),"), we dynamically replace any ",Object(o.b)("inlineCode",{parentName:"p"},"workspace:")," dependency by:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The corresponding version in the target workspace (if you use ",Object(o.b)("inlineCode",{parentName:"li"},"*"),")"),Object(o.b)("li",{parentName:"ul"},"The associated semver range (for any other range type)")),Object(o.b)("p",null,"So for example, if we assume we have three workspace packages whose current version is ",Object(o.b)("inlineCode",{parentName:"p"},"1.5.0"),", the following:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "foo": "workspace:*",\n    "bar": "workspace:^1.2.3"\n  }\n}\n')),Object(o.b)("p",null,"Will be transformed into:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "foo": "1.5.0",\n    "bar": "^1.2.3"\n  }\n}\n')),Object(o.b)("p",null,"This feature allows you to not have to depend on something else than your local workspace packages, while still being able to publish the resulting packages to the remote registry without having to run intermediary publish steps - your consumers will be able to use your published workspaces as any other package, still benefiting from the guarantees semver offers."),Object(o.b)("h2",{id:"options"},"Options"),Object(o.b)("h3",{id:"link-workspace-packages"},"link-workspace-packages"),Object(o.b)("p",null,"Added in: v2.14.0"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Default: ",Object(o.b)("strong",{parentName:"li"},"true")),Object(o.b)("li",{parentName:"ul"},"Type: ",Object(o.b)("strong",{parentName:"li"},"Boolean"))),Object(o.b)("p",null,"When ",Object(o.b)("inlineCode",{parentName:"p"},"true"),", locally available packages are linked to ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules")," instead of being downloaded from the registry.\nThis is very convenient in a monorepo."),Object(o.b)("p",null,"When ",Object(o.b)("inlineCode",{parentName:"p"},"false"),", packages are downloaded and installed from the registry. However, workspace packages can still be linked by using the ",Object(o.b)("inlineCode",{parentName:"p"},"workspace:")," range protocol. e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm add batman@workspace:*")),Object(o.b)("h4",{id:"usage"},"Usage"),Object(o.b)("p",null,"Create a ",Object(o.b)("inlineCode",{parentName:"p"},".npmrc")," file in the root of your monorepo with the following content:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"link-workspace-packages = true\n")),Object(o.b)("p",null,"Create a ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm-workspace.yaml")," file with the following content:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"packages:\n  - '**'\n")),Object(o.b)("p",null,"Run ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm recursive install"),"."),Object(o.b)("h3",{id:"shared-workspace-lockfile"},"shared-workspace-lockfile"),Object(o.b)("p",null,"Added in: v2.17.0 (initially named ",Object(o.b)("inlineCode",{parentName:"p"},"shared-workspace-shrinkwrap"),")"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Default: ",Object(o.b)("strong",{parentName:"li"},"true")),Object(o.b)("li",{parentName:"ul"},"Type: ",Object(o.b)("strong",{parentName:"li"},"Boolean"))),Object(o.b)("p",null,"When ",Object(o.b)("inlineCode",{parentName:"p"},"true"),", pnpm creates a single ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," file in the root of the workspace (in the directory that contains the ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm-workspace.yaml")," file).\nA shared lockfile also means that all dependencies of all workspace packages will be in a single ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules"),"."),Object(o.b)("p",null,"Advantages of this option:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"every dependency is a singleton"),Object(o.b)("li",{parentName:"ul"},"faster installations in a monorepo"),Object(o.b)("li",{parentName:"ul"},"fewer changes in code reviews")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"NOTE:")," even though all the dependencies will be hard linked into the root ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules"),", packages will have access only to those dependencies\nthat are declared in their ",Object(o.b)("inlineCode",{parentName:"p"},"package.json"),". So pnpm's strictness is preserved."),Object(o.b)("h3",{id:"save-workspace-protocol"},"save-workspace-protocol"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Default: ",Object(o.b)("strong",{parentName:"li"},"true")),Object(o.b)("li",{parentName:"ul"},"Type: ",Object(o.b)("strong",{parentName:"li"},"Boolean"))),Object(o.b)("p",null,"When true, new dependencies will be added with the workspace protocol, if they are present in the workspace."),Object(o.b)("p",null,"You might want to change this setting to ",Object(o.b)("inlineCode",{parentName:"p"},"false"),", if the tooling in your repository does not understand the workspace protocol."))}s.isMDXComponent=!0},318:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),s=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},b=function(e){var n=s(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=s(t),d=a,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return t?r.a.createElement(m,p(p({ref:n},c),{},{components:t})):r.a.createElement(m,p({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=t[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);