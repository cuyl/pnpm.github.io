(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{247:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(8),p=(n(0),n(318)),i={id:"update",title:"pnpm update",original_id:"update"},l={unversionedId:"cli/update",id:"version-4.x/cli/update",isDocsHomePage:!1,title:"pnpm update",description:"Aliases: up",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-4.x/cli/update.md",slug:"/cli/update",permalink:"/es/4.x/cli/update",editUrl:"https://crowdin.com/project/pnpm/es",version:"4.x",sidebar:"version-4.x/docs",previous:{title:"pnpm install",permalink:"/es/4.x/cli/install"},next:{title:"pnpm remove",permalink:"/es/4.x/cli/remove"}},c=[{value:"Synopsis",id:"synopsis",children:[]},{value:"tl;dr",id:"tldr",children:[]},{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--latest, -L",id:"--latest--l",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]},{value:"--global",id:"--global",children:[]},{value:"--workspace",id:"--workspace",children:[]},{value:"--prod, -P",id:"--prod--p",children:[]},{value:"--dev, -D",id:"--dev--d",children:[]},{value:"--no-optional",id:"--no-optional",children:[]},{value:"--interactive, -i",id:"--interactive--i",children:[]}]}],o={toc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(p.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,"Aliases: ",Object(p.b)("inlineCode",{parentName:"p"},"up")),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"pnpm update")," updates packages to their latest version based on the specified range."),Object(p.b)("p",null,"When used without arguments, updates all dopependencies. You can use patterns to update all dependencies that match it."),Object(p.b)("h2",{id:"synopsis"},"Synopsis"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-text"},"pnpm update [-r] [--filter <package selector>]\n            [<package pattern> ...]\n\npnpm recursive update [--filter <package selector>]\n                      [<package pattern> ...]\n")),Object(p.b)("h2",{id:"tldr"},"tl;dr"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:null},"Command"),Object(p.b)("th",{parentName:"tr",align:null},"Meaning"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("inlineCode",{parentName:"td"},"pnpm up")),Object(p.b)("td",{parentName:"tr",align:null},"updates all dependencies. Adheres ranges specified in ",Object(p.b)("inlineCode",{parentName:"td"},"package.json"))),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("inlineCode",{parentName:"td"},"pnpm up --latest")),Object(p.b)("td",{parentName:"tr",align:null},"updates all dependencies. Ignores ranges specified in ",Object(p.b)("inlineCode",{parentName:"td"},"package.json"))),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("inlineCode",{parentName:"td"},"pnpm up foo@2")),Object(p.b)("td",{parentName:"tr",align:null},"updates ",Object(p.b)("inlineCode",{parentName:"td"},"foo")," to the latest v2")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("inlineCode",{parentName:"td"},"pnpm up @babel/*")),Object(p.b)("td",{parentName:"tr",align:null},"updates all dependencies with the ",Object(p.b)("inlineCode",{parentName:"td"},"@babel")," scope")))),Object(p.b)("h2",{id:"options"},"Options"),Object(p.b)("h3",{id:"--recursive--r"},"--recursive, -r"),Object(p.b)("p",null,"Concurrently runs update in all subdirectories with a ",Object(p.b)("inlineCode",{parentName:"p"},"package.json")," (excluding node_modules)."),Object(p.b)("p",null,"Usage examples:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-sh"},"pnpm --recursive update\npnpm --recursive update --depth 100\n# update typescript to the latest version in every package\npnpm --recursive update typescript@latest\n")),Object(p.b)("h3",{id:"--latest--l"},"--latest, -L"),Object(p.b)("p",null,"Added in: v3.2.0"),Object(p.b)("p",null,"Ignores the version range specified in ",Object(p.b)("inlineCode",{parentName:"p"},"package.json"),". Instead, the version specified by the ",Object(p.b)("inlineCode",{parentName:"p"},"latest")," tag will be used (potentially upgrading the packages across major versions)."),Object(p.b)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector>"),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/es/4.x/filtering"},"Read more about filtering.")),Object(p.b)("h3",{id:"--global"},"--global"),Object(p.b)("p",null,"Update global packages."),Object(p.b)("h3",{id:"--workspace"},"--workspace"),Object(p.b)("p",null,"Added in: v4.4.0"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-text"},"pnpm [-r] update --workspace [<pkg>...]\n")),Object(p.b)("p",null,"Tries to link all packages from the workspace. Versions are updated to match the versions of packages inside the workspace."),Object(p.b)("p",null,"If specific packages are updated, the command will fail if any of the updated dependencies is not found inside the workspace. For instance, the following command fails if ",Object(p.b)("inlineCode",{parentName:"p"},"express")," is not a workspace package: ",Object(p.b)("inlineCode",{parentName:"p"},"pnpm up -r --workspace express"),"."),Object(p.b)("h3",{id:"--prod--p"},"--prod, -P"),Object(p.b)("p",null,"Update packages only in ",Object(p.b)("inlineCode",{parentName:"p"},"dependencies")," and ",Object(p.b)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),Object(p.b)("h3",{id:"--dev--d"},"--dev, -D"),Object(p.b)("p",null,"Update packages only in ",Object(p.b)("inlineCode",{parentName:"p"},"devDependencies"),"."),Object(p.b)("h3",{id:"--no-optional"},"--no-optional"),Object(p.b)("p",null,"Don't update packages in ",Object(p.b)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),Object(p.b)("h3",{id:"--interactive--i"},"--interactive, -i"),Object(p.b)("p",null,"Added in: v4.8.0"),Object(p.b)("p",null,"Show outdated dependencies and select which ones to update."))}d.isMDXComponent=!0},318:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),d=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),s=d(n),u=a,m=s["".concat(i,".").concat(u)]||s[u]||b[u]||p;return n?r.a.createElement(m,l(l({ref:t},o),{},{components:n})):r.a.createElement(m,l({ref:t},o))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,i=new Array(p);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var o=2;o<p;o++)i[o]=n[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);