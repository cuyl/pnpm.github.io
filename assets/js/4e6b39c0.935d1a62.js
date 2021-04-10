(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return c}));var l=n(3),r=n(8),a=(n(0),n(318)),i={id:"install",title:"pnpm install",original_id:"install"},o={unversionedId:"cli/install",id:"version-4.x/cli/install",isDocsHomePage:!1,title:"pnpm install",description:"pnpm install is used to install all dependencies for a project.",source:"@site/versioned_docs/version-4.x/cli/install.md",slug:"/cli/install",permalink:"/4.x/cli/install",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/versioned_docs/version-4.x/cli/install.md",version:"4.x",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615633789,formattedLastUpdatedAt:"3/13/2021",sidebar:"version-4.x/docs",previous:{title:"pnpm add <pkg>",permalink:"/4.x/cli/add"},next:{title:"pnpm update",permalink:"/4.x/cli/update"}},p=[{value:"tl;dr",id:"tldr",children:[]},{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--offline",id:"--offline",children:[]},{value:"--prefer-offline",id:"--prefer-offline",children:[]},{value:"--ignore-scripts",id:"--ignore-scripts",children:[]},{value:"--prod, -P",id:"--prod--p",children:[]},{value:"--dev, -D",id:"--dev--d",children:[]},{value:"--no-optional",id:"--no-optional",children:[]},{value:"--lockfile-only",id:"--lockfile-only",children:[]},{value:"--frozen-lockfile",id:"--frozen-lockfile",children:[]},{value:"--reporter=&lt;name&gt;",id:"--reportername",children:[]},{value:"--use-store-server",id:"--use-store-server",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],b={toc:p};function c(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(l.a)({},b,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"pnpm install")," is used to install all dependencies for a project."),Object(a.b)("p",null,"In a CI environment, installation fails if a lockfile is present but needs an\nupdate."),Object(a.b)("p",null,Object(a.b)("img",{src:n(325).default})),Object(a.b)("h2",{id:"tldr"},"tl;dr"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Command"),Object(a.b)("th",{parentName:"tr",align:null},"Meaning"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"pnpm i --offline")),Object(a.b)("td",{parentName:"tr",align:null},"no network requests")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"pnpm i --frozen-lockfile")),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"pnpm-lock.yaml")," is not updated")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"pnpm i --prefer-frozen-lockfile")),Object(a.b)("td",{parentName:"tr",align:null},"when possible, ",Object(a.b)("inlineCode",{parentName:"td"},"pnpm-lock.yaml")," is not updated")))),Object(a.b)("h2",{id:"options"},"Options"),Object(a.b)("h3",{id:"--recursive--r"},"--recursive, -r"),Object(a.b)("p",null,"Concurrently runs install in all subdirectories with a ",Object(a.b)("inlineCode",{parentName:"p"},"package.json")," (excluding node_modules)."),Object(a.b)("h3",{id:"--offline"},"--offline"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Default: ",Object(a.b)("strong",{parentName:"li"},"false")),Object(a.b)("li",{parentName:"ul"},"Type: ",Object(a.b)("strong",{parentName:"li"},"Boolean"))),Object(a.b)("p",null,"If true, pnpm will use only packages already available in the store.\nIf a package won't be found locally, the installation will fail."),Object(a.b)("h3",{id:"--prefer-offline"},"--prefer-offline"),Object(a.b)("p",null,"Added in: v1.28.0"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Default: ",Object(a.b)("strong",{parentName:"li"},"false")),Object(a.b)("li",{parentName:"ul"},"Type: ",Object(a.b)("strong",{parentName:"li"},"Boolean"))),Object(a.b)("p",null,"If true, staleness checks for cached data will be bypassed, but missing data will be requested from the server.\nTo force full offline mode, use ",Object(a.b)("inlineCode",{parentName:"p"},"--offline"),"."),Object(a.b)("h3",{id:"--ignore-scripts"},"--ignore-scripts"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Default: ",Object(a.b)("strong",{parentName:"li"},"false")),Object(a.b)("li",{parentName:"ul"},"Type: ",Object(a.b)("strong",{parentName:"li"},"Boolean"))),Object(a.b)("p",null,"Do not execute any scripts defined in the project ",Object(a.b)("inlineCode",{parentName:"p"},"package.json")," and its dependencies."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note: this flag does not prevent the execution of ",Object(a.b)("a",{parentName:"p",href:"/4.x/pnpmfile"},"pnpmfile.js"))),Object(a.b)("h3",{id:"--prod--p"},"--prod, -P"),Object(a.b)("p",null,"pnpm will not install any package listed in ",Object(a.b)("inlineCode",{parentName:"p"},"devDependencies")," if the ",Object(a.b)("inlineCode",{parentName:"p"},"NODE_ENV")," environment variable is set to production. Use this flag to instruct pnpm to ignore ",Object(a.b)("inlineCode",{parentName:"p"},"NODE_ENV")," and take its production-or-not status from this flag instead."),Object(a.b)("h3",{id:"--dev--d"},"--dev, -D"),Object(a.b)("p",null,"Only ",Object(a.b)("inlineCode",{parentName:"p"},"devDependencies")," are installed regardless of the ",Object(a.b)("inlineCode",{parentName:"p"},"NODE_ENV"),"."),Object(a.b)("h3",{id:"--no-optional"},"--no-optional"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"optionalDependencies")," are not installed."),Object(a.b)("h3",{id:"--lockfile-only"},"--lockfile-only"),Object(a.b)("p",null,"Added in: v1.26.0 (initially named ",Object(a.b)("inlineCode",{parentName:"p"},"shrinkwrap-only"),")"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Default: ",Object(a.b)("strong",{parentName:"li"},"false")),Object(a.b)("li",{parentName:"ul"},"Type: ",Object(a.b)("strong",{parentName:"li"},"Boolean"))),Object(a.b)("p",null,"When used, only updates ",Object(a.b)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," and ",Object(a.b)("inlineCode",{parentName:"p"},"package.json")," instead of checking ",Object(a.b)("inlineCode",{parentName:"p"},"node_modules")," and downloading dependencies."),Object(a.b)("h3",{id:"--frozen-lockfile"},"--frozen-lockfile"),Object(a.b)("p",null,"Added in: v1.37.1 (initially named ",Object(a.b)("inlineCode",{parentName:"p"},"frozen-shrinkwrap"),")"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Default:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"For non-CI: ",Object(a.b)("strong",{parentName:"li"},"false")),Object(a.b)("li",{parentName:"ul"},"For CI: ",Object(a.b)("strong",{parentName:"li"},"true"),", if a lockfile is present"))),Object(a.b)("li",{parentName:"ul"},"Type: ",Object(a.b)("strong",{parentName:"li"},"Boolean"))),Object(a.b)("p",null,"If ",Object(a.b)("inlineCode",{parentName:"p"},"true"),", pnpm doesn't generate a lockfile and fails if an update is needed or\nno lockfile is present."),Object(a.b)("h3",{id:"--reportername"},"--reporter=","<","name>"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Default:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"For TTY stdout: ",Object(a.b)("strong",{parentName:"li"},"default")),Object(a.b)("li",{parentName:"ul"},"For non-TTY stdout: ",Object(a.b)("strong",{parentName:"li"},"append-only")))),Object(a.b)("li",{parentName:"ul"},"Type: ",Object(a.b)("strong",{parentName:"li"},"default"),", ",Object(a.b)("strong",{parentName:"li"},"append-only"),", ",Object(a.b)("strong",{parentName:"li"},"ndjson"),", ",Object(a.b)("strong",{parentName:"li"},"silent"))),Object(a.b)("p",null,"Allows to choose the reporter that will print info about\nthe installation progress."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"silent")," - no output is logged to the console, except fatal errors"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"default")," - the default reporter when the stdout is TTY"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"append-only")," (Added in v1.29.1) - the output is always appended to the end. No cursor manipulations are performed"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"ndjson")," - the most verbose reporter. Prints all logs in ",Object(a.b)("a",{parentName:"li",href:"http://ndjson.org/"},"ndjson")," format")),Object(a.b)("h3",{id:"--use-store-server"},"--use-store-server"),Object(a.b)("p",null,"Added in: v1.30.0"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Default: ",Object(a.b)("strong",{parentName:"li"},"false")),Object(a.b)("li",{parentName:"ul"},"Type: ",Object(a.b)("strong",{parentName:"li"},"Boolean"))),Object(a.b)("p",null,"Starts a store server in the background. The store server will keep running after installation is done.\nTo stop the store server, run ",Object(a.b)("inlineCode",{parentName:"p"},"pnpm server stop")),Object(a.b)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector>"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/4.x/filtering"},"Read more about filtering.")))}c.isMDXComponent=!0},318:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var l=n(0),r=n.n(l);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),c=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),s=c(n),u=l,m=s["".concat(i,".").concat(u)]||s[u]||d[u]||a;return n?r.a.createElement(m,o(o({ref:t},b),{},{components:n})):r.a.createElement(m,o({ref:t},b))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var b=2;b<a;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},325:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/pnpm-install-922fbb8bb4d96b8f602a40e6cd07ee13.svg"}}]);