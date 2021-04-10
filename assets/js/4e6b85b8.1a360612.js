(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return d}));var r=n(3),i=n(8),a=(n(0),n(318)),l={id:"list",title:"pnpm list"},o={unversionedId:"cli/list",id:"version-6.x/cli/list",isDocsHomePage:!1,title:"pnpm list",description:"Aliases: ls",source:"@site/versioned_docs/version-6.x/cli/list.md",slug:"/cli/list",permalink:"/cli/list",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/versioned_docs/version-6.x/cli/list.md",version:"6.x",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1617662238,formattedLastUpdatedAt:"4/5/2021",sidebar:"version-6.x/docs",previous:{title:"pnpm audit",permalink:"/cli/audit"},next:{title:"pnpm outdated",permalink:"/cli/outdated"}},p=[{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--json",id:"--json",children:[]},{value:"--long",id:"--long",children:[]},{value:"--parseable",id:"--parseable",children:[]},{value:"--global",id:"--global",children:[]},{value:"--depth &lt;number&gt;",id:"--depth-number",children:[]},{value:"--prod, -P",id:"--prod--p",children:[]},{value:"--dev, -D",id:"--dev--d",children:[]},{value:"--no-optional",id:"--no-optional",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],c={toc:p};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Aliases: ",Object(a.b)("inlineCode",{parentName:"p"},"ls")),Object(a.b)("p",null,"This command will output all the versions of packages that are installed, as\nwell as their dependencies, in a tree-structure."),Object(a.b)("p",null,"Positional arguments are ",Object(a.b)("inlineCode",{parentName:"p"},"name-pattern@version-range")," identifiers, which will\nlimit the results to only the packages named. For example,\n",Object(a.b)("inlineCode",{parentName:"p"},'pnpm list "babel-*" "eslint-*" semver@5'),"."),Object(a.b)("h2",{id:"options"},"Options"),Object(a.b)("h3",{id:"--recursive--r"},"--recursive, -r"),Object(a.b)("p",null,"Perform command on every package in subdirectories or on every workspace\npackage, when executed inside a workspace."),Object(a.b)("h3",{id:"--json"},"--json"),Object(a.b)("p",null,"Added in: 3.7.0"),Object(a.b)("p",null,"Log output in JSON format."),Object(a.b)("h3",{id:"--long"},"--long"),Object(a.b)("p",null,"Show extended information."),Object(a.b)("h3",{id:"--parseable"},"--parseable"),Object(a.b)("p",null,"Outputs package directories in a parseable format instead of their tree view."),Object(a.b)("h3",{id:"--global"},"--global"),Object(a.b)("p",null,"List packages in the global install directory instead of in the current project."),Object(a.b)("h3",{id:"--depth-number"},"--depth ","<","number",">"),Object(a.b)("p",null,"Max display depth of the dependency tree."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"pnpm ls --depth 0")," will list direct dependencies only.\n",Object(a.b)("inlineCode",{parentName:"p"},"pnpm ls --depth -1")," will list projects only. Useful inside a workspace when\nused with the ",Object(a.b)("inlineCode",{parentName:"p"},"-r")," option."),Object(a.b)("h3",{id:"--prod--p"},"--prod, -P"),Object(a.b)("p",null,"Display only the dependency graph for packages in ",Object(a.b)("inlineCode",{parentName:"p"},"dependencies")," and\n",Object(a.b)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),Object(a.b)("h3",{id:"--dev--d"},"--dev, -D"),Object(a.b)("p",null,"Display only the dependency graph for packages in ",Object(a.b)("inlineCode",{parentName:"p"},"devDependencies"),"."),Object(a.b)("h3",{id:"--no-optional"},"--no-optional"),Object(a.b)("p",null,"Don't display packages from ",Object(a.b)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),Object(a.b)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/filtering"},"Read more about filtering.")))}d.isMDXComponent=!0},318:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),d=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=d(n),u=r,m=s["".concat(l,".").concat(u)]||s[u]||b[u]||a;return n?i.a.createElement(m,o(o({ref:t},c),{},{components:n})):i.a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);