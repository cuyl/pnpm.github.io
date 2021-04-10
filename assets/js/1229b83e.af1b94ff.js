(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{318:function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),b=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},o=function(e){var n=b(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),o=b(t),d=a,m=o["".concat(p,".").concat(d)]||o[d]||u[d]||l;return t?r.a.createElement(m,c(c({ref:n},s),{},{components:t})):r.a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,p=new Array(l);p[0]=d;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,p[1]=c;for(var s=2;s<l;s++)p[s]=t[s];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},96:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return b}));var a=t(3),r=t(8),l=(t(0),t(318)),p={id:"pnpm-recursive",title:"pnpm recursive",original_id:"pnpm-recursive"},c={unversionedId:"pnpm-recursive",id:"version-4.x/pnpm-recursive",isDocsHomePage:!1,title:"pnpm recursive",description:"tl;dr",source:"@site/versioned_docs/version-4.x/pnpm-recursive.md",slug:"/pnpm-recursive",permalink:"/4.x/pnpm-recursive",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/versioned_docs/version-4.x/pnpm-recursive.md",version:"4.x",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615638839,formattedLastUpdatedAt:"3/13/2021"},i=[{value:"tl;dr",id:"tldr",children:[]},{value:"Options",id:"options",children:[{value:"link-workspace-packages",id:"link-workspace-packages",children:[]},{value:"shared-workspace-lockfile",id:"shared-workspace-lockfile",children:[]},{value:"-- &lt;package_selector&gt;..., --filter &lt;package_selector&gt;",id:"---package_selector---filter-package_selector",children:[]},{value:"workspace-concurrency",id:"workspace-concurrency",children:[]},{value:"bail",id:"bail",children:[]},{value:"sort",id:"sort",children:[]}]},{value:"pnpm recursive install",id:"pnpm-recursive-install",children:[]},{value:"pnpm recursive update",id:"pnpm-recursive-update",children:[]},{value:"pnpm recursive uninstall",id:"pnpm-recursive-uninstall",children:[]},{value:"pnpm recursive dislink",id:"pnpm-recursive-dislink",children:[]},{value:"pnpm recursive outdated",id:"pnpm-recursive-outdated",children:[]},{value:"pnpm recursive list",id:"pnpm-recursive-list",children:[]},{value:"pnpm recursive run",id:"pnpm-recursive-run",children:[]},{value:"pnpm recursive test",id:"pnpm-recursive-test",children:[]},{value:"pnpm recursive rebuild",id:"pnpm-recursive-rebuild",children:[]},{value:"pnpm recursive exec",id:"pnpm-recursive-exec",children:[]}],s={toc:i};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"tldr"},"tl;dr"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Command"),Object(l.b)("th",{parentName:"tr",align:null},"Meaning"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"pnpm install -r")),Object(l.b)("td",{parentName:"tr",align:null},"runs installation for every package in every subfolder")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"pnpm run build --filter foo-*")),Object(l.b)("td",{parentName:"tr",align:null},"builds all packages with names that start with ",Object(l.b)("inlineCode",{parentName:"td"},"foo-"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"pnpm update -- login-page...")),Object(l.b)("td",{parentName:"tr",align:null},"updates dependencies in ",Object(l.b)("inlineCode",{parentName:"td"},"login-page")," and any dependencies of ",Object(l.b)("inlineCode",{parentName:"td"},"login-page")," that are also in the repository")))),Object(l.b)("h2",{id:"options"},"Options"),Object(l.b)("h3",{id:"link-workspace-packages"},"link-workspace-packages"),Object(l.b)("p",null,"Added in: v2.14.0"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: ",Object(l.b)("strong",{parentName:"li"},"true")),Object(l.b)("li",{parentName:"ul"},"Type: ",Object(l.b)("strong",{parentName:"li"},"Boolean"))),Object(l.b)("p",null,"When ",Object(l.b)("inlineCode",{parentName:"p"},"true"),", locally available packages are linked to ",Object(l.b)("inlineCode",{parentName:"p"},"node_modules")," instead of being downloaded from the registry.\nThis is very convenient in a multi-package repository."),Object(l.b)("h4",{id:"usage"},"Usage"),Object(l.b)("p",null,"Create a ",Object(l.b)("inlineCode",{parentName:"p"},".npmrc")," file in the root of your multi-package repository with the following content:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"link-workspace-packages = true\n")),Object(l.b)("p",null,"Create a ",Object(l.b)("a",{parentName:"p",href:"/4.x/workspace"},"pnpm-workspace.yaml")," file with the following content:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},"packages:\n  - '**'\n")),Object(l.b)("p",null,"Run ",Object(l.b)("inlineCode",{parentName:"p"},"pnpm recursive install"),"."),Object(l.b)("h3",{id:"shared-workspace-lockfile"},"shared-workspace-lockfile"),Object(l.b)("p",null,"Added in: v2.17.0 (initially named ",Object(l.b)("inlineCode",{parentName:"p"},"shared-workspace-shrinkwrap"),")"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: ",Object(l.b)("strong",{parentName:"li"},"true")),Object(l.b)("li",{parentName:"ul"},"Type: ",Object(l.b)("strong",{parentName:"li"},"Boolean"))),Object(l.b)("p",null,"When ",Object(l.b)("inlineCode",{parentName:"p"},"true"),", pnpm creates a single ",Object(l.b)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," file in the root of the workspace (in the directory that contains the ",Object(l.b)("inlineCode",{parentName:"p"},"pnpm-workspace.yaml")," file).\nA shared lockfile also means that all dependencies of all workspace packages will be in a single ",Object(l.b)("inlineCode",{parentName:"p"},"node_modules"),"."),Object(l.b)("p",null,"Advantages of this option:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"every dependency is a singleton"),Object(l.b)("li",{parentName:"ul"},"faster installations in a multi-package repository"),Object(l.b)("li",{parentName:"ul"},"fewer changes in code reviews")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"NOTE:")," even though all the dependencies will be hard linked into the root ",Object(l.b)("inlineCode",{parentName:"p"},"node_modules"),", packages will have access only to those dependencies\nthat are declared in their ",Object(l.b)("inlineCode",{parentName:"p"},"package.json"),". So pnpm's strictness is preserved."),Object(l.b)("h3",{id:"---package_selector---filter-package_selector"},"-- ","<","package_selector>..., --filter ","<","package_selector>"),Object(l.b)("p",null,"Added in: v2.13.0"),Object(l.b)("p",null,"Ability to pass selectors after ",Object(l.b)("inlineCode",{parentName:"p"},"--")," added in v2.15.0"),Object(l.b)("p",null,"Filters allow to restrict commands to a subset of packages.\nA rich selector syntax is supported for picking packages by name\nor by relation."),Object(l.b)("h4",{id:"--filter-package_name"},"--filter ","<","package_name>"),Object(l.b)("p",null,"Added in: v2.13.0"),Object(l.b)("p",null,"To select an exact package, just specify its name (",Object(l.b)("inlineCode",{parentName:"p"},"@babel/core"),") or use a pattern\nto select a set of packages (",Object(l.b)("inlineCode",{parentName:"p"},"@babel/*"),")."),Object(l.b)("p",null,"Usage examples:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"pnpm recursive install --filter @babel/core\npnpm recursive install --filter @babel/*\n# or\npnpm recursive install -- @babel/core\npnpm recursive install -- @babel/*\n")),Object(l.b)("h4",{id:"--filter-package_name-1"},"--filter ","<","package_name>..."),Object(l.b)("p",null,"Added in: v2.13.0"),Object(l.b)("p",null,"To select a package and its dependencies (direct and non-direct), suffix the package name with 3 dots: ",Object(l.b)("inlineCode",{parentName:"p"},"<package_name>..."),".\nFor instance, the next command will run installation in all dependencies of ",Object(l.b)("inlineCode",{parentName:"p"},"foo")," and in ",Object(l.b)("inlineCode",{parentName:"p"},"foo"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"pnpm recursive install --filter foo...\n# or\npnpm recursive install -- foo...\n")),Object(l.b)("p",null,'You may use a pattern to select a set of "root" packages:'),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"pnpm recursive install --filter @babel/preset-*...\n# or\npnpm recursive install -- @babel/preset-*...\n")),Object(l.b)("h4",{id:"--filter-package_name-2"},"--filter ...","<","package_name>"),Object(l.b)("p",null,"Added in: 2.14.0"),Object(l.b)("p",null,"To select a package and its dependent packages (direct and non-direct), prefix the package name with 3 dots: ",Object(l.b)("inlineCode",{parentName:"p"},"...<package_name>"),".\nFor instance, the next command will run installation in all dependents of ",Object(l.b)("inlineCode",{parentName:"p"},"foo")," and in ",Object(l.b)("inlineCode",{parentName:"p"},"foo"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"pnpm recursive install --filter ...foo\n# or\npnpm recursive install -- ...foo\n")),Object(l.b)("p",null,"When packages in the workspace are filtered, every package is taken that matches at least one of\nthe selectors. You can use as many filters as you want:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"pnpm recursive install --filter ...foo --filter bar --filter qar...\n# or\npnpm recursive install -- ...foo bar qar...\n")),Object(l.b)("h4",{id:"--filter-directory"},"--filter ./","<","directory>"),Object(l.b)("p",null,"Added in: v2.15.0"),Object(l.b)("h3",{id:"workspace-concurrency"},"workspace-concurrency"),Object(l.b)("p",null,"Added in: v2.13.0"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: ",Object(l.b)("strong",{parentName:"li"},"4")),Object(l.b)("li",{parentName:"ul"},"Type: ",Object(l.b)("strong",{parentName:"li"},"Number"))),Object(l.b)("p",null,"Set the maximum number of concurrency. For unlimited concurrency use ",Object(l.b)("inlineCode",{parentName:"p"},"Infinity"),"."),Object(l.b)("h3",{id:"bail"},"bail"),Object(l.b)("p",null,"Added in: v2.13.0"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: ",Object(l.b)("strong",{parentName:"li"},"true")),Object(l.b)("li",{parentName:"ul"},"Type: ",Object(l.b)("strong",{parentName:"li"},"Boolean"))),Object(l.b)("p",null,"If true, stops when a task throws an error."),Object(l.b)("p",null,"Usage example. Run tests in every package. Continue if tests fail in one of the packages:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"pnpm recursive test --no-bail\n")),Object(l.b)("h3",{id:"sort"},"sort"),Object(l.b)("p",null,"Added in: v2.14.0"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: ",Object(l.b)("strong",{parentName:"li"},"true")),Object(l.b)("li",{parentName:"ul"},"Type: ",Object(l.b)("strong",{parentName:"li"},"Boolean"))),Object(l.b)("p",null,"When ",Object(l.b)("inlineCode",{parentName:"p"},"true"),", packages are sorted topologically (dependencies before dependents). Pass ",Object(l.b)("inlineCode",{parentName:"p"},"--no-sort")," to disable."),Object(l.b)("p",null,"Usage examples:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"pnpm recursive test --no-sort\n")),Object(l.b)("h2",{id:"pnpm-recursive-install"},"pnpm recursive install"),Object(l.b)("p",null,"Added in: v1.24.0"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"pnpm recursive install [arguments]\n")),Object(l.b)("p",null,"Concurrently runs install in all subdirectories with a ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," (excluding node_modules)."),Object(l.b)("p",null,"Usage examples:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"pnpm recursive install\npnpm recursive install --ignore-scripts\n")),Object(l.b)("h2",{id:"pnpm-recursive-update"},"pnpm recursive update"),Object(l.b)("p",null,"Added in: v1.24.0"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"pnpm recursive update [arguments]\n")),Object(l.b)("p",null,"Concurrently runs update in all subdirectories with a ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," (excluding node_modules)."),Object(l.b)("p",null,"Usage examples:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"pnpm recursive update\npnpm recursive update --depth 100\n# update typescript to the latest version in every package\npnpm recursive update typescript@latest\n")),Object(l.b)("h2",{id:"pnpm-recursive-uninstall"},"pnpm recursive uninstall"),Object(l.b)("p",null,"Added in: v2.10.0"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"pnpm recursive uninstall [<@scope>/]<pkg>...\n")),Object(l.b)("p",null,"Uninstall a dependency from each package"),Object(l.b)("p",null,"Usage examples:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"pnpm recursive uninstall webpack\n")),Object(l.b)("h2",{id:"pnpm-recursive-dislink"},"pnpm recursive dislink"),Object(l.b)("p",null,"Added in: v1.32.0"),Object(l.b)("p",null,"An alias of ",Object(l.b)("inlineCode",{parentName:"p"},"recursive unlink")," from v2.0.0"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"pnpm recursive dislink [arguments]\n")),Object(l.b)("p",null,"Removes links to local packages and reinstalls them from the registry."),Object(l.b)("p",null,"Usage examples:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"pnpm recursive dislink\n")),Object(l.b)("h2",{id:"pnpm-recursive-outdated"},"pnpm recursive outdated"),Object(l.b)("p",null,"Added in: v2.2.0"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"pnpm recursive outdated [[<@scope>/]<pkg> ...]\n")),Object(l.b)("p",null,"Check for outdated packages in every project of the multi-package repo."),Object(l.b)("p",null,"Usage examples:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"pnpm recursive outdated\n")),Object(l.b)("h2",{id:"pnpm-recursive-list"},"pnpm recursive list"),Object(l.b)("p",null,"Added in: v2.2.0"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"pnpm recursive list [[<@scope>/]<pkg> ...]\n")),Object(l.b)("p",null,"List packages in each project of the multi-package repo.\nAccepts the same arguments and flags as the regular ",Object(l.b)("inlineCode",{parentName:"p"},"pnpm list")," command."),Object(l.b)("p",null,"Usage examples:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"pnpm recursive list\n")),Object(l.b)("h2",{id:"pnpm-recursive-run"},"pnpm recursive run"),Object(l.b)("p",null,"Added in: v2.3.0"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"pnpm recursive run <command> [-- <args>...]\n")),Object(l.b)("p",null,"This runs an arbitrary command from each package's \"scripts\" object.\nIf a package doesn't have the command, it is skipped.\nIf none of the packages have the command, the command fails."),Object(l.b)("p",null,"Usage examples:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"pnpm recursive run build\n")),Object(l.b)("p",null,"In addition to the shell\u2019s pre-existing ",Object(l.b)("inlineCode",{parentName:"p"},"PATH"),", ",Object(l.b)("inlineCode",{parentName:"p"},"pnpm run")," adds ",Object(l.b)("inlineCode",{parentName:"p"},"node_modules/.bin"),"\nto the ",Object(l.b)("inlineCode",{parentName:"p"},"PATH")," provided to ",Object(l.b)("inlineCode",{parentName:"p"},"scripts"),". As of v3.5, when executed inside a workspace,\n",Object(l.b)("inlineCode",{parentName:"p"},"<workspace root>/node_modules/.bin")," is also added to the ",Object(l.b)("inlineCode",{parentName:"p"},"PATH"),", so if a tool\nis installed in the workspace root, it may be called in any workspace package's ",Object(l.b)("inlineCode",{parentName:"p"},"scripts"),"."),Object(l.b)("h2",{id:"pnpm-recursive-test"},"pnpm recursive test"),Object(l.b)("p",null,"Added in: v2.3.0"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"pnpm recursive test [-- <args>...]\n")),Object(l.b)("p",null,'This runs each package\'s "test" script, if one was provided.'),Object(l.b)("p",null,"Usage examples:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"pnpm recursive test\n")),Object(l.b)("h2",{id:"pnpm-recursive-rebuild"},"pnpm recursive rebuild"),Object(l.b)("p",null,"Added in: v2.4.0"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"pnpm recursive rebuild [[<@scope>/<name>]...]\n")),Object(l.b)("p",null,"This command runs the ",Object(l.b)("strong",{parentName:"p"},"pnpm build")," command in every package of the multi-package repo."),Object(l.b)("p",null,"Usage examples:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"pnpm recursive rebuild\n")),Object(l.b)("h2",{id:"pnpm-recursive-exec"},"pnpm recursive exec"),Object(l.b)("p",null,"Added in: v2.9.0"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"pnpm recursive exec -- <command> [args...]\n")),Object(l.b)("p",null,"This command runs a command in each package of the multi-package repo."),Object(l.b)("p",null,"The name of the current package is available through the environment variable ",Object(l.b)("inlineCode",{parentName:"p"},"PNPM_PACKAGE_NAME")," (supported from pnpm v2.22.0)."),Object(l.b)("p",null,"Usage examples:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"pnpm recursive exec -- rm -rf node_modules\npnpm recursive exec -- pnpm view $PNPM_PACKAGE_NAME\n")))}b.isMDXComponent=!0}}]);