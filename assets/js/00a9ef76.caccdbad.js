(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{318:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),d=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=d(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(n),b=r,f=s["".concat(a,".").concat(b)]||s[b]||u[b]||o;return n?i.a.createElement(f,c(c({ref:t},p),{},{components:n})):i.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(3),i=n(8),o=(n(0),n(318)),a={id:"why",title:"pnpm why"},c={unversionedId:"cli/why",id:"version-5.x/cli/why",isDocsHomePage:!1,title:"pnpm why",description:"Shows all packages that depend on the specified package.",source:"@site/versioned_docs/version-5.x/cli/why.md",slug:"/cli/why",permalink:"/5.x/cli/why",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/versioned_docs/version-5.x/cli/why.md",version:"5.x",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615633789,formattedLastUpdatedAt:"3/13/2021",sidebar:"version-5.x/docs",previous:{title:"pnpm outdated",permalink:"/5.x/cli/outdated"},next:{title:"pnpm run",permalink:"/5.x/cli/run"}},l=[{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--json",id:"--json",children:[]},{value:"--long",id:"--long",children:[]},{value:"--parseable",id:"--parseable",children:[]},{value:"--global",id:"--global",children:[]},{value:"--prod, -P",id:"--prod--p",children:[]},{value:"--dev, -D",id:"--dev--d",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],p={toc:l};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Shows all packages that depend on the specified package."),Object(o.b)("h2",{id:"options"},"Options"),Object(o.b)("h3",{id:"--recursive--r"},"--recursive, -r"),Object(o.b)("p",null,"Show the dependency tree for the specified package on every package in\nsubdirectories or on every workspace package when executed inside a workspace."),Object(o.b)("h3",{id:"--json"},"--json"),Object(o.b)("p",null,"Added in: 3.7.0"),Object(o.b)("p",null,"Show information in JSON format."),Object(o.b)("h3",{id:"--long"},"--long"),Object(o.b)("p",null,"Show verbose output."),Object(o.b)("h3",{id:"--parseable"},"--parseable"),Object(o.b)("p",null,"Show parseable output instead of tree view."),Object(o.b)("h3",{id:"--global"},"--global"),Object(o.b)("p",null,"List packages in the global install directory instead of in the current project."),Object(o.b)("h3",{id:"--prod--p"},"--prod, -P"),Object(o.b)("p",null,"Only display the dependency tree for packages in ",Object(o.b)("inlineCode",{parentName:"p"},"dependencies"),"."),Object(o.b)("h3",{id:"--dev--d"},"--dev, -D"),Object(o.b)("p",null,"Only display the dependency tree for packages in ",Object(o.b)("inlineCode",{parentName:"p"},"devDependencies"),"."),Object(o.b)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/5.x/filtering"},"Read more about filtering.")))}d.isMDXComponent=!0}}]);