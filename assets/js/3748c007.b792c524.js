(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{131:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(8),i=(n(0),n(318)),o={id:"pnpm-cli",title:"pnpm CLI"},p={unversionedId:"pnpm-cli",id:"version-6.x/pnpm-cli",isDocsHomePage:!1,title:"pnpm CLI",description:"Differences vs npm",source:"@site/versioned_docs/version-6.x/pnpm-cli.md",slug:"/pnpm-cli",permalink:"/pnpm-cli",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/versioned_docs/version-6.x/pnpm-cli.md",version:"6.x",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1617662238,formattedLastUpdatedAt:"4/5/2021",sidebar:"version-6.x/docs",previous:{title:"Installation",permalink:"/installation"},next:{title:"pnpx CLI",permalink:"/pnpx-cli"}},l=[{value:"Differences vs npm",id:"differences-vs-npm",children:[]},{value:"Options",id:"options",children:[{value:"-C &lt;path&gt;, --dir &lt;path&gt;",id:"-c-path---dir-path",children:[]},{value:"-w, --workspace-root",id:"-w---workspace-root",children:[]}]},{value:"Commands",id:"commands",children:[]}],c={toc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"differences-vs-npm"},"Differences vs npm"),Object(i.b)("p",null,"Unlike npm, pnpm validates all options. For example, ",Object(i.b)("inlineCode",{parentName:"p"},"pnpm install --foo")," will\nfail as ",Object(i.b)("inlineCode",{parentName:"p"},"--foo")," is not a valid option for ",Object(i.b)("inlineCode",{parentName:"p"},"pnpm install"),"."),Object(i.b)("p",null,"However, some dependencies may use the ",Object(i.b)("inlineCode",{parentName:"p"},"npm_config_")," environment variable, which\nis populated from the CLI options. In this case, you have the following options:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"explicitly set the env variable: ",Object(i.b)("inlineCode",{parentName:"li"},"npm_config_foo=true pnpm install")),Object(i.b)("li",{parentName:"ol"},"force the unknown option with ",Object(i.b)("inlineCode",{parentName:"li"},"--config."),": ",Object(i.b)("inlineCode",{parentName:"li"},"pnpm install --config.foo"))),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("h3",{id:"-c-path---dir-path"},"-C ","<","path",">",", --dir ","<","path",">"),Object(i.b)("p",null,"Run as if pnpm was started in ",Object(i.b)("inlineCode",{parentName:"p"},"<path>")," instead of the current working directory."),Object(i.b)("h3",{id:"-w---workspace-root"},"-w, --workspace-root"),Object(i.b)("p",null,"Added in: v5.6.0"),Object(i.b)("p",null,"Run as if pnpm was started in the root of the workspace instead of the current\nworking directory."),Object(i.b)("h2",{id:"commands"},"Commands"),Object(i.b)("p",null,"For more information, see the documentation for individual CLI commands. Here is\na list of handy npm equivalents to get you started:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"npm command"),Object(i.b)("th",{parentName:"tr",align:null},"pnpm equivalent"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"npm install")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"/cli/install"},Object(i.b)("inlineCode",{parentName:"a"},"pnpm install")))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"npm i <pkg>")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"/cli/add"},Object(i.b)("inlineCode",{parentName:"a"},"pnpm add <pkg>")))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"npm run <cmd>")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"/cli/exec"},Object(i.b)("inlineCode",{parentName:"a"},"pnpm <cmd>")))))))}b.isMDXComponent=!0},318:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),b=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=b(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=b(n),s=r,u=d["".concat(o,".").concat(s)]||d[s]||m[s]||i;return n?a.a.createElement(u,p(p({ref:t},c),{},{components:n})):a.a.createElement(u,p({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);