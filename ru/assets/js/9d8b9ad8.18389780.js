(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{279:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(8),i=(n(0),n(394)),o={id:"pnpm-cli",title:"pnpm CLI"},p={unversionedId:"pnpm-cli",id:"pnpm-cli",isDocsHomePage:!1,title:"pnpm CLI",description:"Differences vs npm",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/pnpm-cli.md",slug:"/pnpm-cli",permalink:"/ru/next/pnpm-cli",editUrl:"https://crowdin.com/project/pnpm/ru",version:"current",sidebar:"docs",previous:{title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",permalink:"/ru/next/installation"},next:{title:"pnpx CLI",permalink:"/ru/next/pnpx-cli"}},c=[{value:"Differences vs npm",id:"differences-vs-npm",children:[]},{value:"Options",id:"options",children:[{value:"-C &lt;path&gt;, --dir &lt;path&gt;",id:"-c-path---dir-path",children:[]},{value:"-w, --workspace-root",id:"-w---workspace-root",children:[]}]},{value:"Commands",id:"commands",children:[]}],l={toc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"differences-vs-npm"},"Differences vs npm"),Object(i.b)("p",null,"Unlike npm, pnpm validates all options. For example, ",Object(i.b)("inlineCode",{parentName:"p"},"pnpm install --foo")," will fail as ",Object(i.b)("inlineCode",{parentName:"p"},"--foo")," is not a valid option for ",Object(i.b)("inlineCode",{parentName:"p"},"pnpm install"),"."),Object(i.b)("p",null,"However, some dependencies may use the ",Object(i.b)("inlineCode",{parentName:"p"},"npm_config_")," environment variable, which is populated from the CLI options. In this case, you have the following options:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"explicitly set the env variable: ",Object(i.b)("inlineCode",{parentName:"li"},"npm_config_foo=true pnpm install")),Object(i.b)("li",{parentName:"ol"},"force the unknown option with ",Object(i.b)("inlineCode",{parentName:"li"},"--config."),": ",Object(i.b)("inlineCode",{parentName:"li"},"pnpm install --config.foo"))),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("h3",{id:"-c-path---dir-path"},"-C ","<","path",">",", --dir ","<","path",">"),Object(i.b)("p",null,"Run as if pnpm was started in ",Object(i.b)("inlineCode",{parentName:"p"},"<path>")," instead of the current working directory."),Object(i.b)("h3",{id:"-w---workspace-root"},"-w, --workspace-root"),Object(i.b)("p",null,"Added in: v5.6.0"),Object(i.b)("p",null,"Run as if pnpm was started in the root of the workspace instead of the current working directory."),Object(i.b)("h2",{id:"commands"},"Commands"),Object(i.b)("p",null,"For more information, see the documentation for individual CLI commands. Here is a list of handy npm equivalents to get you started:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"npm command"),Object(i.b)("th",{parentName:"tr",align:null},"pnpm equivalent"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"npm install")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"/ru/next/cli/install"},Object(i.b)("inlineCode",{parentName:"a"},"pnpm install")))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"npm i <pkg>")),Object(i.b)("td",{parentName:"tr",align:null},"[",Object(i.b)("inlineCode",{parentName:"td"},"pnpm add <pkg>"),"]")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"npm run <cmd>")),Object(i.b)("td",{parentName:"tr",align:null},"[",Object(i.b)("inlineCode",{parentName:"td"},"pnpm <cmd>"),"]")))))}b.isMDXComponent=!0},394:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=b(n),u=r,s=m["".concat(o,".").concat(u)]||m[u]||d[u]||i;return n?a.a.createElement(s,p(p({ref:t},l),{},{components:n})):a.a.createElement(s,p({ref:t},l))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);