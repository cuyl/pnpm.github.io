(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{318:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},b=function(e){var t=d(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),b=d(n),m=a,u=b["".concat(i,".").concat(m)]||b[m]||s[m]||l;return n?r.a.createElement(u,p(p({ref:t},c),{},{components:n})):r.a.createElement(u,p({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<l;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},337:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/pnpm-install-package-5a2978bb5d926b98518d1aa3d97b5122.svg"},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(8),l=(n(0),n(318)),i={id:"add",title:"pnpm add <pkg>",original_id:"add"},p={unversionedId:"cli/add",id:"version-4.x/cli/add",isDocsHomePage:!1,title:"pnpm add <pkg>",description:"Installs a package and any packages that it depends on. By default, any new package is installed as a prod dependency.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-4.x/cli/add.md",slug:"/cli/add",permalink:"/es/4.x/cli/add",editUrl:"https://crowdin.com/project/pnpm/es",version:"4.x",sidebar:"version-4.x/docs",previous:{title:"Filtering",permalink:"/es/4.x/filtering"},next:{title:"pnpm install",permalink:"/es/4.x/cli/install"}},o=[{value:"tl;dr",id:"tldr",children:[]},{value:"Supported package locations",id:"supported-package-locations",children:[{value:"Install from npm registry",id:"install-from-npm-registry",children:[]},{value:"Install from the workspace",id:"install-from-the-workspace",children:[]},{value:"Install from local file system",id:"install-from-local-file-system",children:[]},{value:"Install from remote gzipped tarball",id:"install-from-remote-gzipped-tarball",children:[]},{value:"Install from Git repository",id:"install-from-git-repository",children:[]}]},{value:"Options",id:"options",children:[{value:"--save-prod, -P",id:"--save-prod--p",children:[]},{value:"--save-dev, -D",id:"--save-dev--d",children:[]},{value:"--save-optional, -O",id:"--save-optional--o",children:[]},{value:"--save-exact, -E",id:"--save-exact--e",children:[]},{value:"--save-peer",id:"--save-peer",children:[]},{value:"--ignore-workspace-root-check, -W",id:"--ignore-workspace-root-check--w",children:[]},{value:"--global",id:"--global",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]},{value:"--workspace",id:"--workspace",children:[]}]}],c={toc:o};function d(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Installs a package and any packages that it depends on. By default, any new package is installed as a prod dependency."),Object(l.b)("p",null,Object(l.b)("img",{src:n(337).default})),Object(l.b)("h2",{id:"tldr"},"tl;dr"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Command"),Object(l.b)("th",{parentName:"tr",align:null},"Meaning"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"pnpm add sax")),Object(l.b)("td",{parentName:"tr",align:null},"save to ",Object(l.b)("inlineCode",{parentName:"td"},"dependencies"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"pnpm add -D sax")),Object(l.b)("td",{parentName:"tr",align:null},"save to ",Object(l.b)("inlineCode",{parentName:"td"},"devDependencies"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"pnpm add -O sax")),Object(l.b)("td",{parentName:"tr",align:null},"save to ",Object(l.b)("inlineCode",{parentName:"td"},"optionalDependencies"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"pnpm add sax@next")),Object(l.b)("td",{parentName:"tr",align:null},"Specify tag ",Object(l.b)("inlineCode",{parentName:"td"},"next"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"pnpm add sax@3.0.0")),Object(l.b)("td",{parentName:"tr",align:null},"Specify version ",Object(l.b)("inlineCode",{parentName:"td"},"3.0.0"))))),Object(l.b)("h2",{id:"supported-package-locations"},"Supported package locations"),Object(l.b)("p",null,"A package can be installed from different locations:"),Object(l.b)("h3",{id:"install-from-npm-registry"},"Install from npm registry"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"pnpm add package-name")," will install the latest version of ",Object(l.b)("inlineCode",{parentName:"p"},"package-name")," from the ",Object(l.b)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm registry"),"."),Object(l.b)("p",null,"You may also install packages by:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"tag: ",Object(l.b)("inlineCode",{parentName:"li"},"pnpm add express@nightly")),Object(l.b)("li",{parentName:"ul"},"version: ",Object(l.b)("inlineCode",{parentName:"li"},"pnpm add express@1.0.0")),Object(l.b)("li",{parentName:"ul"},"version range: ",Object(l.b)("inlineCode",{parentName:"li"},'pnpm add express@2 react@">=0.1.0 <0.2.0"'))),Object(l.b)("h3",{id:"install-from-the-workspace"},"Install from the workspace"),Object(l.b)("p",null,"Note that when adding dependencies and working within a ",Object(l.b)("a",{parentName:"p",href:"/es/4.x/workspaces"},"workspace"),", packages will be installed from the configured sources, depending on whether or not ",Object(l.b)("a",{parentName:"p",href:"/es/4.x/workspaces#link-workspace-packages"},Object(l.b)("inlineCode",{parentName:"a"},"link-workspace-packages"))," is set, and use of the ",Object(l.b)("a",{parentName:"p",href:"/es/4.x/workspaces#workspace-ranges-workspace"},Object(l.b)("inlineCode",{parentName:"a"},"workspace: range protocol")),"."),Object(l.b)("h3",{id:"install-from-local-file-system"},"Install from local file system"),Object(l.b)("p",null,"There are two ways to install from the local file system:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"from a tarball file (",Object(l.b)("inlineCode",{parentName:"li"},".tar"),", ",Object(l.b)("inlineCode",{parentName:"li"},".tar.gz"),", or ",Object(l.b)("inlineCode",{parentName:"li"},".tgz"),")"),Object(l.b)("li",{parentName:"ol"},"from a directory")),Object(l.b)("p",null,"Examples:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"pnpm add ./package.tgz\npnpm add ./some-directory\n")),Object(l.b)("p",null,"When you install from a directory, a symlink will be created in the current project's ",Object(l.b)("inlineCode",{parentName:"p"},"node_modules"),", so it is the same as running ",Object(l.b)("inlineCode",{parentName:"p"},"pnpm link"),"."),Object(l.b)("h3",{id:"install-from-remote-gzipped-tarball"},"Install from remote gzipped tarball"),Object(l.b)("p",null,'The argument must start with "http://" or "https://".'),Object(l.b)("p",null,"Example:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"pnpm add https://github.com/indexzero/forever/tarball/v0.5.6\n")),Object(l.b)("h3",{id:"install-from-git-repository"},"Install from Git repository"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"pnpm add <git remote url>\n")),Object(l.b)("p",null,"Installs the package from the hosted Git provider, cloning it with Git."),Object(l.b)("p",null,"You may install from Git by:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"latest commit from master: ",Object(l.b)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive")),Object(l.b)("li",{parentName:"ul"},"commit: ",Object(l.b)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#97edff6f525f192a3f83cea1944765f769ae2678")),Object(l.b)("li",{parentName:"ul"},"branch: ",Object(l.b)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#master")),Object(l.b)("li",{parentName:"ul"},"version range: ",Object(l.b)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#semver:^2.0.0"))),Object(l.b)("h2",{id:"options"},"Options"),Object(l.b)("h3",{id:"--save-prod--p"},"--save-prod, -P"),Object(l.b)("p",null,"This will install one or more packages in your ",Object(l.b)("inlineCode",{parentName:"p"},"dependencies"),"."),Object(l.b)("h3",{id:"--save-dev--d"},"--save-dev, -D"),Object(l.b)("p",null,"Using ",Object(l.b)("inlineCode",{parentName:"p"},"--save-dev")," or ",Object(l.b)("inlineCode",{parentName:"p"},"-D")," will install one or more packages in your ",Object(l.b)("inlineCode",{parentName:"p"},"devDependencies"),"."),Object(l.b)("h3",{id:"--save-optional--o"},"--save-optional, -O"),Object(l.b)("p",null,"Using ",Object(l.b)("inlineCode",{parentName:"p"},"--save-optional")," or ",Object(l.b)("inlineCode",{parentName:"p"},"-O")," will install one or more packages in your ",Object(l.b)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),Object(l.b)("h3",{id:"--save-exact--e"},"--save-exact, -E"),Object(l.b)("p",null,"Saved dependencies will be configured with an exact version rather than using pnpm's default semver range operator."),Object(l.b)("h3",{id:"--save-peer"},"--save-peer"),Object(l.b)("p",null,"Added in: v3.2.0"),Object(l.b)("p",null,"Using ",Object(l.b)("inlineCode",{parentName:"p"},"--save-peer")," will add one or more packages to ",Object(l.b)("inlineCode",{parentName:"p"},"peerDependencies")," and install them as dev dependencies."),Object(l.b)("h3",{id:"--ignore-workspace-root-check--w"},"--ignore-workspace-root-check, -W"),Object(l.b)("p",null,"Added in: v3.6.0"),Object(l.b)("p",null,"Adding a new dependency to the root workspace package fails, unless the ",Object(l.b)("inlineCode",{parentName:"p"},"--ignore-workspace-root-check")," or ",Object(l.b)("inlineCode",{parentName:"p"},"-W")," flag is used. For instance, ",Object(l.b)("inlineCode",{parentName:"p"},"pnpm add debug -W"),"."),Object(l.b)("h3",{id:"--global"},"--global"),Object(l.b)("p",null,"Install a package globally."),Object(l.b)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector>"),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"/es/4.x/filtering"},"Read more about filtering.")),Object(l.b)("h3",{id:"--workspace"},"--workspace"),Object(l.b)("p",null,"Added in: v4.4.0"),Object(l.b)("p",null,"Only adds the new dependency if it is found in the workspace."))}d.isMDXComponent=!0}}]);