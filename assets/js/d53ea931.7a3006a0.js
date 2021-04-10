(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{268:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return d}));var r=t(3),o=t(8),a=(t(0),t(318)),c={id:"remove",title:"pnpm remove"},i={unversionedId:"cli/remove",id:"cli/remove",isDocsHomePage:!1,title:"pnpm remove",description:"Removes packages from node_modules and from the project's package.json.",source:"@site/docs/cli/remove.md",slug:"/cli/remove",permalink:"/next/cli/remove",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/docs/cli/remove.md",version:"current",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615633789,formattedLastUpdatedAt:"3/13/2021",sidebar:"docs",previous:{title:"pnpm update",permalink:"/next/cli/update"},next:{title:"pnpm link",permalink:"/next/cli/link"}},p=[{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--global",id:"--global",children:[]},{value:"--save-dev, -D",id:"--save-dev--d",children:[]},{value:"--save-optional, -O",id:"--save-optional--o",children:[]},{value:"--save-prod, -P",id:"--save-prod--p",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],l={toc:p};function d(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Removes packages from ",Object(a.b)("inlineCode",{parentName:"p"},"node_modules")," and from the project's ",Object(a.b)("inlineCode",{parentName:"p"},"package.json"),"."),Object(a.b)("p",null,"Aliases: rm, uninstall, un"),Object(a.b)("h2",{id:"options"},"Options"),Object(a.b)("h3",{id:"--recursive--r"},"--recursive, -r"),Object(a.b)("p",null,"When used inside a ",Object(a.b)("a",{parentName:"p",href:"/next/workspaces"},"workspace"),", removes a dependency (or\ndependencies) from every workspace package."),Object(a.b)("p",null,"When used not inside a workspace, removes a dependency (or dependencies) from\nevery package found in subdirectories."),Object(a.b)("h3",{id:"--global"},"--global"),Object(a.b)("p",null,"Remove a global package."),Object(a.b)("h3",{id:"--save-dev--d"},"--save-dev, -D"),Object(a.b)("p",null,"Only remove the dependency from ",Object(a.b)("inlineCode",{parentName:"p"},"devDependencies"),"."),Object(a.b)("h3",{id:"--save-optional--o"},"--save-optional, -O"),Object(a.b)("p",null,"Only remove the dependency from ",Object(a.b)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),Object(a.b)("h3",{id:"--save-prod--p"},"--save-prod, -P"),Object(a.b)("p",null,"Only remove the dependency from ",Object(a.b)("inlineCode",{parentName:"p"},"dependencies"),"."),Object(a.b)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/next/filtering"},"Read more about filtering.")))}d.isMDXComponent=!0},318:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),d=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=d(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=d(t),b=r,m=s["".concat(c,".").concat(b)]||s[b]||u[b]||a;return t?o.a.createElement(m,i(i({ref:n},l),{},{components:t})):o.a.createElement(m,i({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=b;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);