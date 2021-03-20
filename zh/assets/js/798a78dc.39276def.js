(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{229:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return s}));var l=n(3),a=n(8),i=(n(0),n(394)),r={id:"npmrc",title:".npmrc"},o={unversionedId:"npmrc",id:"version-5.x/npmrc",isDocsHomePage:!1,title:".npmrc",description:"pnpm gets its configuration from the command line, environment variables, and .npmrc files.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-5.x/npmrc.md",slug:"/npmrc",permalink:"/zh/npmrc",editUrl:"https://crowdin.com/project/pnpm/zh-CN",version:"5.x",sidebar:"version-5.x/docs",previous:{title:"package.json",permalink:"/zh/package_json"},next:{title:"pnpm-workspace.yaml",permalink:"/zh/pnpm-workspace_yaml"}},b=[{value:"Dependency Hoisting Settings",id:"dependency-hoisting-settings",children:[{value:"hoist",id:"hoist",children:[]},{value:"hoist-pattern",id:"hoist-pattern",children:[]},{value:"public-hoist-pattern",id:"public-hoist-pattern",children:[]},{value:"shamefully-hoist",id:"shamefully-hoist",children:[]}]},{value:"Node-Modules Settings",id:"node-modules-settings",children:[{value:"store-dir",id:"store-dir",children:[]},{value:"modules-dir",id:"modules-dir",children:[]},{value:"node-linker",id:"node-linker",children:[]},{value:"symlink",id:"symlink",children:[]},{value:"enable-modules-dir",id:"enable-modules-dir",children:[]},{value:"virtual-store-dir",id:"virtual-store-dir",children:[]},{value:"package-import-method",id:"package-import-method",children:[]}]},{value:"Lockfile Settings",id:"lockfile-settings",children:[{value:"lockfile",id:"lockfile",children:[]},{value:"prefer-frozen-lockfile",id:"prefer-frozen-lockfile",children:[]}]},{value:"Registry &amp; Authentication Settings",id:"registry--authentication-settings",children:[{value:"registry",id:"registry",children:[]},{value:"&lt;URL&gt;:_authToken",id:"url_authtoken",children:[]},{value:"&lt;URL&gt;:always-auth",id:"urlalways-auth",children:[]}]},{value:"Request Settings",id:"request-settings",children:[{value:"ca",id:"ca",children:[]},{value:"cafile",id:"cafile",children:[]},{value:"cert",id:"cert",children:[]},{value:"https-proxy",id:"https-proxy",children:[]},{value:"key",id:"key",children:[]},{value:"local-address",id:"local-address",children:[]},{value:"proxy",id:"proxy",children:[]},{value:"noproxy",id:"noproxy",children:[]},{value:"strict-ssl",id:"strict-ssl",children:[]},{value:"network-concurrency",id:"network-concurrency",children:[]},{value:"fetch-retries",id:"fetch-retries",children:[]},{value:"fetch-retry-factor",id:"fetch-retry-factor",children:[]},{value:"fetch-retry-mintimeout",id:"fetch-retry-mintimeout",children:[]},{value:"fetch-retry-maxtimeout",id:"fetch-retry-maxtimeout",children:[]}]},{value:"CLI Settings",id:"cli-settings",children:[{value:"no-color",id:"no-color",children:[]},{value:"loglevel",id:"loglevel",children:[]},{value:"strict-peer-dependencies",id:"strict-peer-dependencies",children:[]},{value:"use-beta-cli",id:"use-beta-cli",children:[]},{value:"recursive-install",id:"recursive-install",children:[]},{value:"engine-strict",id:"engine-strict",children:[]},{value:"npm-path",id:"npm-path",children:[]}]},{value:"Build Settings",id:"build-settings",children:[{value:"child-concurrency",id:"child-concurrency",children:[]},{value:"side-effects-cache",id:"side-effects-cache",children:[]},{value:"side-effects-cache-readonly",id:"side-effects-cache-readonly",children:[]},{value:"unsafe-perm",id:"unsafe-perm",children:[]}]},{value:"Other Settings",id:"other-settings",children:[{value:"use-running-store-server",id:"use-running-store-server",children:[]},{value:"save-prefix",id:"save-prefix",children:[]},{value:"tag",id:"tag",children:[]},{value:"global-dir",id:"global-dir",children:[]}]}],c={toc:b};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(l.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"pnpm gets its configuration from the command line, environment variables, and ",Object(i.b)("inlineCode",{parentName:"p"},".npmrc")," files."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"pnpm config")," command can be used to update and edit the contents of the user and global ",Object(i.b)("inlineCode",{parentName:"p"},".npmrc")," files."),Object(i.b)("p",null,"The four relevant files are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"per-project configuration file (",Object(i.b)("inlineCode",{parentName:"li"},"/path/to/my/project/.npmrc"),")"),Object(i.b)("li",{parentName:"ul"},"per-workspace configuration file (the directory that contains the ",Object(i.b)("inlineCode",{parentName:"li"},"pnpm-workspace.yaml")," file)"),Object(i.b)("li",{parentName:"ul"},"per-user configuration file (",Object(i.b)("inlineCode",{parentName:"li"},"~/.npmrc"),")"),Object(i.b)("li",{parentName:"ul"},"global configuration file (",Object(i.b)("inlineCode",{parentName:"li"},"/etc/npmrc"),")")),Object(i.b)("p",null,"All ",Object(i.b)("inlineCode",{parentName:"p"},".npmrc")," files are an ",Object(i.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/INI_file"},"INI-formatted")," list of ",Object(i.b)("inlineCode",{parentName:"p"},"key = value")," parameters."),Object(i.b)("h2",{id:"dependency-hoisting-settings"},"Dependency Hoisting Settings"),Object(i.b)("h3",{id:"hoist"},"hoist"),Object(i.b)("p",null,"Added in: v4.0.0"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: ",Object(i.b)("strong",{parentName:"li"},"true")),Object(i.b)("li",{parentName:"ul"},"Type: ",Object(i.b)("strong",{parentName:"li"},"boolean"))),Object(i.b)("p",null,"When ",Object(i.b)("inlineCode",{parentName:"p"},"true"),", all dependencies are hoisted to ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules/.pnpm"),". This makes unlisted dependencies accessible to all packages inside ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules"),"."),Object(i.b)("h3",{id:"hoist-pattern"},"hoist-pattern"),Object(i.b)("p",null,"Added in: v4.0.0"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: ",Object(i.b)("strong",{parentName:"li"},"['","*","']")),Object(i.b)("li",{parentName:"ul"},"Type: ",Object(i.b)("strong",{parentName:"li"},"string[]"))),Object(i.b)("p",null,"Tells pnpm which packages should be hoisted to ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules/.pnpm"),". By default, all packages are hoisted - however, if you know that only some flawed packages have phantom dependencies, you can use this option to exclusively hoist the phantom dependencies (recommended)."),Object(i.b)("p",null,"For instance:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"hoist-pattern[]=*eslint*\nhoist-pattern[]=*babel*\n")),Object(i.b)("h3",{id:"public-hoist-pattern"},"public-hoist-pattern"),Object(i.b)("p",null,"Added in: v5.2.0"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: ",Object(i.b)("strong",{parentName:"li"},"['","*","types","*","', '","*","eslint","*","', '@prettier/plugin-","*","', '","*","prettier-plugin-","*","']")),Object(i.b)("li",{parentName:"ul"},"Type: ",Object(i.b)("strong",{parentName:"li"},"string[]"))),Object(i.b)("p",null,"Unlike ",Object(i.b)("inlineCode",{parentName:"p"},"hoist-pattern"),", which hoists dependencies to a hidden modules directory inside the virtual store, ",Object(i.b)("inlineCode",{parentName:"p"},"public-hoist-pattern")," hoists dependencies matching the pattern to the root modules directory. Hoisting to the root modules directory means that application code will have access to phantom dependencies, even if they modify the resolution strategy improperly."),Object(i.b)("p",null,"This setting is useful when dealing with some flawed pluggable tools that don't resolve dependencies properly."),Object(i.b)("p",null,"For instance:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"public-hoist-pattern[]=*plugin*\n")),Object(i.b)("p",null,"Note: Setting ",Object(i.b)("inlineCode",{parentName:"p"},"shamefully-hoist")," to ",Object(i.b)("inlineCode",{parentName:"p"},"true")," is the same as setting ",Object(i.b)("inlineCode",{parentName:"p"},"public-hoist-pattern")," to ",Object(i.b)("inlineCode",{parentName:"p"},"*"),"."),Object(i.b)("h3",{id:"shamefully-hoist"},"shamefully-hoist"),Object(i.b)("p",null,"Added in: v1.34.0 as ",Object(i.b)("inlineCode",{parentName:"p"},"shamefully-flatten"),", renamed in v4.0.0"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: ",Object(i.b)("strong",{parentName:"li"},"false")),Object(i.b)("li",{parentName:"ul"},"Type: ",Object(i.b)("strong",{parentName:"li"},"Boolean"))),Object(i.b)("p",null,"By default, pnpm creates a semistrict ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules"),", meaning dependencies have access to undeclared dependencies but modules outside of ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules")," do not. With this layout, most of the packages in the ecosystem work with no issues. However, if some tooling only works when the hoisted dependencies are in the root of ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules"),", you can set this to ",Object(i.b)("inlineCode",{parentName:"p"},"true")," to hoist them for you."),Object(i.b)("h2",{id:"node-modules-settings"},"Node-Modules Settings"),Object(i.b)("h3",{id:"store-dir"},"store-dir"),Object(i.b)("p",null,"Added in: v4.2.0 as ",Object(i.b)("inlineCode",{parentName:"p"},"store")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: ",Object(i.b)("strong",{parentName:"li"},"~/.pnpm-store")),Object(i.b)("li",{parentName:"ul"},"Type: ",Object(i.b)("strong",{parentName:"li"},"path"))),Object(i.b)("p",null,"The location where all the packages are saved on the disk."),Object(i.b)("p",null,"The store should be always on the same disk on which installation is happening, so there will be one store per disk. If there is a home directory on the current disk, then the store is created in ",Object(i.b)("inlineCode",{parentName:"p"},"<home dir>/.pnpm-store"),". If there is no home on the disk, then the store is created at the root of the filesystem. For example, if installation is happening on a filesystem mounted at ",Object(i.b)("inlineCode",{parentName:"p"},"/mnt"),", then the store will be created at ",Object(i.b)("inlineCode",{parentName:"p"},"/mnt/.pnpm-store"),". The same goes for Windows systems."),Object(i.b)("p",null,"It is possible to set a store from a different disk but in that case pnpm will copy packages from the store instead of hard-linking them, as hard links are only possible on the same filesystem."),Object(i.b)("h3",{id:"modules-dir"},"modules-dir"),Object(i.b)("p",null,"Added in: v4.14.0"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: ",Object(i.b)("strong",{parentName:"li"},"node_modules")),Object(i.b)("li",{parentName:"ul"},"Type: ",Object(i.b)("strong",{parentName:"li"},"path"))),Object(i.b)("p",null,"The directory in which dependencies will be installed (instead of ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules"),")."),Object(i.b)("h3",{id:"node-linker"},"node-linker"),Object(i.b)("p",null,"Added in: v5.9.0"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: ",Object(i.b)("strong",{parentName:"li"},"undefined")),Object(i.b)("li",{parentName:"ul"},"Type: ",Object(i.b)("strong",{parentName:"li"},"undefined"),", ",Object(i.b)("strong",{parentName:"li"},"pnp"))),Object(i.b)("p",null,"Defines what linker should be used for installing Node packages. By default, pnpm creates a linked modules directory, but the Plug'n'Play build and resolution strategy is supported as well. Plug'n'Play is an innovative strategy for Node that is ",Object(i.b)("a",{parentName:"p",href:"https://yarnpkg.com/features/pnp"},"used by Yarn"),"."),Object(i.b)("p",null,"It is recommended to also set ",Object(i.b)("inlineCode",{parentName:"p"},"symlink")," setting to ",Object(i.b)("inlineCode",{parentName:"p"},"false")," when using ",Object(i.b)("inlineCode",{parentName:"p"},"pnp")," as your linker."),Object(i.b)("h3",{id:"symlink"},"symlink"),Object(i.b)("p",null,"Added in: v5.9.0"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: ",Object(i.b)("strong",{parentName:"li"},"true")),Object(i.b)("li",{parentName:"ul"},"Type: ",Object(i.b)("strong",{parentName:"li"},"Boolean"))),Object(i.b)("p",null,"When ",Object(i.b)("inlineCode",{parentName:"p"},"symlink")," is set to ",Object(i.b)("inlineCode",{parentName:"p"},"false"),", pnpm creates a virtual store directory without any symlinks. It is a useful setting together with ",Object(i.b)("inlineCode",{parentName:"p"},"node-linker=pnp"),"."),Object(i.b)("h3",{id:"enable-modules-dir"},"enable-modules-dir"),Object(i.b)("p",null,"Added in: v5.15.0"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: ",Object(i.b)("strong",{parentName:"li"},"false")),Object(i.b)("li",{parentName:"ul"},"Type: ",Object(i.b)("strong",{parentName:"li"},"Boolean"))),Object(i.b)("p",null,"When ",Object(i.b)("inlineCode",{parentName:"p"},"false"),", pnpm will not write any files to the modules directory (",Object(i.b)("inlineCode",{parentName:"p"},"node_modules"),"). This is useful for when the modules directory is mounted with filesystem in userspace (FUSE). There is an experimental CLI that allows you to mount a modules directory with FUSE: ",Object(i.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/@pnpm/mount-modules"},"@pnpm/mount-modules"),"."),Object(i.b)("h3",{id:"virtual-store-dir"},"virtual-store-dir"),Object(i.b)("p",null,"Added in: v4.1.0"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: ",Object(i.b)("strong",{parentName:"li"},"node_modules/.pnpm")),Object(i.b)("li",{parentName:"ul"},"Types: ",Object(i.b)("strong",{parentName:"li"},"path"))),Object(i.b)("p",null,"The directory with links to the store. All direct and indirect dependencies of the project are linked into this directory."),Object(i.b)("p",null,"This is a useful setting that can solve issues with long paths on Windows. If you have some dependencies with very long paths, you can select a virtual store in the root of your drive (for instance ",Object(i.b)("inlineCode",{parentName:"p"},"C:\\my-project-store"),")."),Object(i.b)("p",null,"Or you can set the virtual store to ",Object(i.b)("inlineCode",{parentName:"p"},".pnpm")," and add it to ",Object(i.b)("inlineCode",{parentName:"p"},".gitignore"),". This will make stacktraces cleaner as paths to dependencies will be one directory higher."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"NOTE:")," the virtual store cannot be shared between several projects. Every project should have its own virtual store (except for in workspaces where the root is shared)."),Object(i.b)("h3",{id:"package-import-method"},"package-import-method"),Object(i.b)("p",null,"Added in: v1.25.0"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: ",Object(i.b)("strong",{parentName:"li"},"auto")),Object(i.b)("li",{parentName:"ul"},"Type: ",Object(i.b)("strong",{parentName:"li"},"auto"),", ",Object(i.b)("strong",{parentName:"li"},"hardlink"),", ",Object(i.b)("strong",{parentName:"li"},"copy"),", ",Object(i.b)("strong",{parentName:"li"},"clone"))),Object(i.b)("p",null,"Controls the way packages are imported from the store."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"auto")," - try to clone packages from the store. If cloning is not supported then hardlink packages from the store. If neither cloning nor linking is possible, fall back to copying"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"hardlink")," - hard link packages from the store"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"copy")," - copy packages from the store"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"clone")," - clone (AKA copy-on-write or reference link) packages from the store")),Object(i.b)("h2",{id:"lockfile-settings"},"Lockfile Settings"),Object(i.b)("h3",{id:"lockfile"},"lockfile"),Object(i.b)("p",null,"Added in: v1.32.0 as ",Object(i.b)("inlineCode",{parentName:"p"},"shrinkwrap")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: ",Object(i.b)("strong",{parentName:"li"},"true")),Object(i.b)("li",{parentName:"ul"},"Type: ",Object(i.b)("strong",{parentName:"li"},"Boolean"))),Object(i.b)("p",null,"When set to ",Object(i.b)("inlineCode",{parentName:"p"},"false"),", pnpm won't read or generate a ",Object(i.b)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," file."),Object(i.b)("h3",{id:"prefer-frozen-lockfile"},"prefer-frozen-lockfile"),Object(i.b)("p",null,"Added in: v1.37.1 as ",Object(i.b)("inlineCode",{parentName:"p"},"prefer-frozen-shrinkwrap")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: ",Object(i.b)("strong",{parentName:"li"},"true")," (from v1.38.0)"),Object(i.b)("li",{parentName:"ul"},"Type: ",Object(i.b)("strong",{parentName:"li"},"Boolean"))),Object(i.b)("p",null,"When set to ",Object(i.b)("inlineCode",{parentName:"p"},"true")," and the available ",Object(i.b)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," satisfies the ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," dependencies directive, a headless installation is performed. A headless installation skips all dependency resolution as it does not need to modify the lockfile."),Object(i.b)("h2",{id:"registry--authentication-settings"},"Registry & Authentication Settings"),Object(i.b)("h3",{id:"registry"},"registry"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: ",Object(i.b)("strong",{parentName:"li"},Object(i.b)("a",{parentName:"strong",href:"https://registry.npmjs.org/"},"https://registry.npmjs.org/"))),Object(i.b)("li",{parentName:"ul"},"Type: ",Object(i.b)("strong",{parentName:"li"},"url"))),Object(i.b)("p",null,"The base URL of the npm package registry (trailing slash included)."),Object(i.b)("h4",{id:"scoperegistry"},"<","scope",">",":registry"),Object(i.b)("p",null,"The npm registry that should be used for packages of the specified scope. For example, setting ",Object(i.b)("inlineCode",{parentName:"p"},"@babel:registry=https://example.com/packages/npm/")," will enforce that when you use ",Object(i.b)("inlineCode",{parentName:"p"},"pnpm add @babel/core"),", or any ",Object(i.b)("inlineCode",{parentName:"p"},"@babel")," scoped package, the package will be fetched from ",Object(i.b)("inlineCode",{parentName:"p"},"https://example.com/packages/npm")," instead of the default registry."),Object(i.b)("h3",{id:"url_authtoken"},"<","URL",">",":_authToken"),Object(i.b)("p",null,"Define the authentication bearer token to use when accessing the specified registry. For example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"//registry.npmjs.org/:_authToken=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx \n")),Object(i.b)("p",null,"You may also use an environment variable. For example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"//registry.npmjs.org/:_authToken={NPM_TOKEN}\n")),Object(i.b)("h3",{id:"urlalways-auth"},"<","URL",">",":always-auth"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: ",Object(i.b)("strong",{parentName:"li"},"false")),Object(i.b)("li",{parentName:"ul"},"Type: ",Object(i.b)("strong",{parentName:"li"},"Boolean"))),Object(i.b)("p",null,"Force pnpm to always require authentication (even for GET requests) when accessing the specified registry. For example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"@babel:registry=https://gitlab.com/api/v4/packages/npm/\n//gitlab.com/api/v4/packages/npm/:always-auth=true\n\nregistry=https://registry.npmjs.org/\n//registry.npmjs.org/:always-auth=true\n")),Object(i.b)("h2",{id:"request-settings"},"Request Settings"),Object(i.b)("h3",{id:"ca"},"ca"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: ",Object(i.b)("strong",{parentName:"li"},"The npm CA certificate")),Object(i.b)("li",{parentName:"ul"},"Type: ",Object(i.b)("strong",{parentName:"li"},"String, Array or null"))),Object(i.b)("p",null,'The Certificate Authority signing certificate that is trusted for SSL connections to the registry. Values should be in PEM format (AKA "Base-64 encoded X.509 (.CER)"). For example:'),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},'ca="-----BEGIN CERTIFICATE-----\\nXXXX\\nXXXX\\n-----END CERTIFICATE-----"\n')),Object(i.b)("p",null,"Set to null to only allow known registrars, or to a specific CA cert to trust only that specific signing authority."),Object(i.b)("p",null,"Multiple CAs can be trusted by specifying an array of certificates:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},'ca[]="..."\nca[]="..."\n')),Object(i.b)("p",null,"See also the ",Object(i.b)("inlineCode",{parentName:"p"},"strict-ssl")," config."),Object(i.b)("h3",{id:"cafile"},"cafile"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: ",Object(i.b)("strong",{parentName:"li"},"null")),Object(i.b)("li",{parentName:"ul"},"Type: ",Object(i.b)("strong",{parentName:"li"},"path"))),Object(i.b)("p",null,"A path to a file containing one or multiple Certificate Authority signing certificates. Similar to the ",Object(i.b)("inlineCode",{parentName:"p"},"ca")," setting, but allows for multiple CAs, as well as for the CA information to be stored in a file instead of being specified via CLI."),Object(i.b)("h3",{id:"cert"},"cert"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: ",Object(i.b)("strong",{parentName:"li"},"null")),Object(i.b)("li",{parentName:"ul"},"Type: ",Object(i.b)("strong",{parentName:"li"},"String"))),Object(i.b)("p",null,'A client certificate to pass when accessing the registry. Values should be in PEM format (AKA "Base-64 encoded X.509 (.CER)"). For example:'),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-test"},'cert="-----BEGIN CERTIFICATE-----\\nXXXX\\nXXXX\\n-----END CERTIFICATE-----"\n')),Object(i.b)("p",null,"It is not the path to a certificate file (and there is no ",Object(i.b)("inlineCode",{parentName:"p"},"certfile")," option)."),Object(i.b)("h3",{id:"https-proxy"},"https-proxy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: ",Object(i.b)("strong",{parentName:"li"},"null")),Object(i.b)("li",{parentName:"ul"},"Type: ",Object(i.b)("strong",{parentName:"li"},"url"))),Object(i.b)("p",null,"A proxy to use for outgoing HTTPS requests. If the ",Object(i.b)("inlineCode",{parentName:"p"},"HTTPS_PROXY"),", ",Object(i.b)("inlineCode",{parentName:"p"},"https_proxy"),", ",Object(i.b)("inlineCode",{parentName:"p"},"HTTP_PROXY")," or ",Object(i.b)("inlineCode",{parentName:"p"},"http_proxy")," environment variables are set, their values will be used instead."),Object(i.b)("h3",{id:"key"},"key"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: ",Object(i.b)("strong",{parentName:"li"},"null")),Object(i.b)("li",{parentName:"ul"},"Type: ",Object(i.b)("strong",{parentName:"li"},"String"))),Object(i.b)("p",null,'A client key to pass when accessing the registry. Values should be in PEM format (AKA "Base-64 encoded X.509 (.CER)"). For example:'),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},'key="-----BEGIN PRIVATE KEY-----\\nXXXX\\nXXXX\\n-----END PRIVATE KEY-----"\n')),Object(i.b)("p",null,"It is not the path to a key file (and there is no ",Object(i.b)("inlineCode",{parentName:"p"},"keyfile")," option)."),Object(i.b)("h3",{id:"local-address"},"local-address"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: ",Object(i.b)("strong",{parentName:"li"},"undefined")),Object(i.b)("li",{parentName:"ul"},"Type: ",Object(i.b)("strong",{parentName:"li"},"IP Address"))),Object(i.b)("p",null,"The IP address of the local interface to use when making connections to the npm registry. Must be IPv4 in versions of Node prior to 12.x."),Object(i.b)("h3",{id:"proxy"},"proxy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: ",Object(i.b)("strong",{parentName:"li"},"null")),Object(i.b)("li",{parentName:"ul"},"Type: ",Object(i.b)("strong",{parentName:"li"},"url"))),Object(i.b)("p",null,"A proxy to use for outgoing http requests. If the HTTP_PROXY or http_proxy environment variables are set, proxy settings will be honored by the underlying request library."),Object(i.b)("h3",{id:"noproxy"},"noproxy"),Object(i.b)("p",null,"Added in: v5.18.8"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: ",Object(i.b)("strong",{parentName:"li"},"null")),Object(i.b)("li",{parentName:"ul"},"Type: ",Object(i.b)("strong",{parentName:"li"},"String"))),Object(i.b)("p",null,"A comma-separated string of domain extensions that a proxy should not be used for."),Object(i.b)("h3",{id:"strict-ssl"},"strict-ssl"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: ",Object(i.b)("strong",{parentName:"li"},"true")),Object(i.b)("li",{parentName:"ul"},"Type: ",Object(i.b)("strong",{parentName:"li"},"Boolean"))),Object(i.b)("p",null,"Whether or not to do SSL key validation when making requests to the registry via HTTPS."),Object(i.b)("p",null,"See also the ",Object(i.b)("inlineCode",{parentName:"p"},"ca")," option."),Object(i.b)("h3",{id:"network-concurrency"},"network-concurrency"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: ",Object(i.b)("strong",{parentName:"li"},"16")),Object(i.b)("li",{parentName:"ul"},"Type: ",Object(i.b)("strong",{parentName:"li"},"Number"))),Object(i.b)("p",null,"Controls the maximum number of HTTP(S) requests to process simultaneously."),Object(i.b)("h3",{id:"fetch-retries"},"fetch-retries"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: ",Object(i.b)("strong",{parentName:"li"},"2")),Object(i.b)("li",{parentName:"ul"},"Type: ",Object(i.b)("strong",{parentName:"li"},"Number"))),Object(i.b)("p",null,"How many times to retry if pnpm fails to fetch from the registry."),Object(i.b)("h3",{id:"fetch-retry-factor"},"fetch-retry-factor"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: ",Object(i.b)("strong",{parentName:"li"},"10")),Object(i.b)("li",{parentName:"ul"},"Type: ",Object(i.b)("strong",{parentName:"li"},"Number"))),Object(i.b)("p",null,"The exponential factor for retry backoff."),Object(i.b)("h3",{id:"fetch-retry-mintimeout"},"fetch-retry-mintimeout"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: ",Object(i.b)("strong",{parentName:"li"},"10000 (10 seconds)")),Object(i.b)("li",{parentName:"ul"},"Type: ",Object(i.b)("strong",{parentName:"li"},"Number"))),Object(i.b)("p",null,"The minimum (base) timeout for retrying requests."),Object(i.b)("h3",{id:"fetch-retry-maxtimeout"},"fetch-retry-maxtimeout"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: ",Object(i.b)("strong",{parentName:"li"},"60000 (1 minute)")),Object(i.b)("li",{parentName:"ul"},"Type: ",Object(i.b)("strong",{parentName:"li"},"Number"))),Object(i.b)("p",null,"The maximum fallback timeout to ensure the retry factor does not make requests too long."),Object(i.b)("h2",{id:"cli-settings"},"CLI Settings"),Object(i.b)("h3",{id:"no-color"},"[no-]","color"),Object(i.b)("p",null,"Added in: v4.1.0"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: ",Object(i.b)("strong",{parentName:"li"},"auto")),Object(i.b)("li",{parentName:"ul"},"Type: ",Object(i.b)("strong",{parentName:"li"},"auto"),", ",Object(i.b)("strong",{parentName:"li"},"always"),", ",Object(i.b)("strong",{parentName:"li"},"never"))),Object(i.b)("p",null,"Controls colors in the output."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"auto")," - output uses colors when the standard output is a terminal or TTY."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"always")," - ignore the difference between terminals and pipes. You\u2019ll rarely want this; in most scenarios, if you want color codes in your redirected output, you can instead pass a ",Object(i.b)("inlineCode",{parentName:"li"},"--color")," flag to the pnpm command to force it to use color codes. The default setting is almost always what you\u2019ll want."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"never")," - turns off colors. This is the setting used by ",Object(i.b)("inlineCode",{parentName:"li"},"--no-color"),".")),Object(i.b)("h3",{id:"loglevel"},"loglevel"),Object(i.b)("p",null,"Added in: v4.13.0"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: ",Object(i.b)("strong",{parentName:"li"},"info")),Object(i.b)("li",{parentName:"ul"},"Type: ",Object(i.b)("strong",{parentName:"li"},"debug"),", ",Object(i.b)("strong",{parentName:"li"},"info"),", ",Object(i.b)("strong",{parentName:"li"},"warn"),", ",Object(i.b)("strong",{parentName:"li"},"error"))),Object(i.b)("p",null,"Any logs at or higher than the given level will be shown. You can instead pass ",Object(i.b)("inlineCode",{parentName:"p"},"--silent")," to turn off all output logs."),Object(i.b)("h3",{id:"strict-peer-dependencies"},"strict-peer-dependencies"),Object(i.b)("p",null,"Added in: v2.15.0"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: ",Object(i.b)("strong",{parentName:"li"},"false")),Object(i.b)("li",{parentName:"ul"},"Type: ",Object(i.b)("strong",{parentName:"li"},"Boolean"))),Object(i.b)("p",null,"If this is enabled, commands will fail if there is a missing or invalid peer dependency in the tree."),Object(i.b)("h3",{id:"use-beta-cli"},"use-beta-cli"),Object(i.b)("p",null,"Added in: v3.6.0"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: ",Object(i.b)("strong",{parentName:"li"},"false")),Object(i.b)("li",{parentName:"ul"},"Type: ",Object(i.b)("strong",{parentName:"li"},"Boolean"))),Object(i.b)("p",null,"Experimental option that enables beta features of the CLI. This means that you may get some changes to the CLI functionality that are breaking changes, or potentially bugs."),Object(i.b)("h3",{id:"recursive-install"},"recursive-install"),Object(i.b)("p",null,"Added in: v5.4.0"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: ",Object(i.b)("strong",{parentName:"li"},"true")),Object(i.b)("li",{parentName:"ul"},"Type: ",Object(i.b)("strong",{parentName:"li"},"Boolean"))),Object(i.b)("p",null,"If this is enabled, the primary behaviour of ",Object(i.b)("inlineCode",{parentName:"p"},"pnpm install")," becomes that of ",Object(i.b)("inlineCode",{parentName:"p"},"pnpm install -r"),", meaning the install is performed on all workspace or subdirectory packages."),Object(i.b)("p",null,"Else, ",Object(i.b)("inlineCode",{parentName:"p"},"pnpm install")," will exclusively build the package in the current directory."),Object(i.b)("h3",{id:"engine-strict"},"engine-strict"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: ",Object(i.b)("strong",{parentName:"li"},"false")),Object(i.b)("li",{parentName:"ul"},"Type: ",Object(i.b)("strong",{parentName:"li"},"Boolean"))),Object(i.b)("p",null,"If this is enabled, pnpm will not install any package that claims to not be compatible with the current Node version."),Object(i.b)("p",null,"Regardless of this configuration, installation will always fail if a project (not a dependency) specifies an incompatible version in its ",Object(i.b)("inlineCode",{parentName:"p"},"engines")," field."),Object(i.b)("h3",{id:"npm-path"},"npm-path"),Object(i.b)("p",null,"Added in: v4.8.0"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Type: ",Object(i.b)("strong",{parentName:"li"},"path"))),Object(i.b)("p",null,"The location of the npm binary that pnpm uses for some actions, like publishing."),Object(i.b)("h2",{id:"build-settings"},"Build Settings"),Object(i.b)("h3",{id:"child-concurrency"},"child-concurrency"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: ",Object(i.b)("strong",{parentName:"li"},"5")),Object(i.b)("li",{parentName:"ul"},"Type: ",Object(i.b)("strong",{parentName:"li"},"Number"))),Object(i.b)("p",null,"The maximum number of child processes to allocate simultaneously to build node_modules."),Object(i.b)("h3",{id:"side-effects-cache"},"side-effects-cache"),Object(i.b)("p",null,"Added in: v1.31.0"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: ",Object(i.b)("strong",{parentName:"li"},"false")),Object(i.b)("li",{parentName:"ul"},"Type: ",Object(i.b)("strong",{parentName:"li"},"Boolean")),Object(i.b)("li",{parentName:"ul"},"Stability: ",Object(i.b)("strong",{parentName:"li"},"Experimental"))),Object(i.b)("p",null,"Use and cache the results of (pre/post)install hooks."),Object(i.b)("h3",{id:"side-effects-cache-readonly"},"side-effects-cache-readonly"),Object(i.b)("p",null,"Added in: v1.31.0"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: ",Object(i.b)("strong",{parentName:"li"},"false")),Object(i.b)("li",{parentName:"ul"},"Type: ",Object(i.b)("strong",{parentName:"li"},"Boolean")),Object(i.b)("li",{parentName:"ul"},"Stability: ",Object(i.b)("strong",{parentName:"li"},"Experimental"))),Object(i.b)("p",null,"Only use the side effects cache if present, do not create it for new packages."),Object(i.b)("h3",{id:"unsafe-perm"},"unsafe-perm"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: ",Object(i.b)("strong",{parentName:"li"},"false")," IF running as root, ELSE ",Object(i.b)("strong",{parentName:"li"},"true")),Object(i.b)("li",{parentName:"ul"},"Type: ",Object(i.b)("strong",{parentName:"li"},"Boolean"))),Object(i.b)("p",null,"Set to true to enable UID/GID switching when running package scripts. If set explicitly to false, then installing as a non-root user will fail."),Object(i.b)("h2",{id:"other-settings"},"Other Settings"),Object(i.b)("h3",{id:"use-running-store-server"},"use-running-store-server"),Object(i.b)("p",null,"Added in: v2.5.0"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: ",Object(i.b)("strong",{parentName:"li"},"false")),Object(i.b)("li",{parentName:"ul"},"Type: ",Object(i.b)("strong",{parentName:"li"},"Boolean"))),Object(i.b)("p",null,"Only allows installation with a store server. If no store server is running, installation will fail."),Object(i.b)("h3",{id:"save-prefix"},"save-prefix"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: ",Object(i.b)("strong",{parentName:"li"},"'^'")),Object(i.b)("li",{parentName:"ul"},"Type: ",Object(i.b)("strong",{parentName:"li"},"String"))),Object(i.b)("p",null,"Configure how versions of packages installed to a ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," file get prefixed."),Object(i.b)("p",null,"For example, if a package has version ",Object(i.b)("inlineCode",{parentName:"p"},"1.2.3"),", by default its version is set to ",Object(i.b)("inlineCode",{parentName:"p"},"^1.2.3")," which allows minor upgrades for that package, but after ",Object(i.b)("inlineCode",{parentName:"p"},"pnpm config set save-prefix='~'")," it would be set to ",Object(i.b)("inlineCode",{parentName:"p"},"~1.2.3")," which only allows patch upgrades."),Object(i.b)("p",null,"This setting is ignored when the added package has a range specified. For instance, ",Object(i.b)("inlineCode",{parentName:"p"},"pnpm add foo@2")," will set the version of ",Object(i.b)("inlineCode",{parentName:"p"},"foo")," in ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," to ",Object(i.b)("inlineCode",{parentName:"p"},"2"),", regardless of the value of ",Object(i.b)("inlineCode",{parentName:"p"},"save-prefix"),"."),Object(i.b)("h3",{id:"tag"},"tag"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: ",Object(i.b)("strong",{parentName:"li"},"latest")),Object(i.b)("li",{parentName:"ul"},"Type: ",Object(i.b)("strong",{parentName:"li"},"String"))),Object(i.b)("p",null,"If you ",Object(i.b)("inlineCode",{parentName:"p"},"pnpm add")," a package and you don't provide a specific version, then it will install the package at the version registered under the tag from this setting."),Object(i.b)("p",null,"This also sets the tag that is added to the ",Object(i.b)("inlineCode",{parentName:"p"},"package@version")," specified by the ",Object(i.b)("inlineCode",{parentName:"p"},"pnpm tag")," command if no explicit tag is given."),Object(i.b)("h3",{id:"global-dir"},"global-dir"),Object(i.b)("p",null,"Added in: v4.2.0"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: ",Object(i.b)("strong",{parentName:"li"},"<","path to node",">","/pnpm-global")),Object(i.b)("li",{parentName:"ul"},"Type: ",Object(i.b)("strong",{parentName:"li"},"path"))),Object(i.b)("p",null,"Specify a custom directory to store global packages."))}s.isMDXComponent=!0},394:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var l=n(0),a=n.n(l);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),s=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,r=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),p=s(n),d=l,m=p["".concat(r,".").concat(d)]||p[d]||u[d]||i;return n?a.a.createElement(m,o(o({ref:t},c),{},{components:n})):a.a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=d;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var c=2;c<i;c++)r[c]=n[c];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);