(window.webpackJsonp=window.webpackJsonp||[]).push([[235],{308:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return b}));var r=t(3),a=t(8),i=(t(0),t(318)),o={id:"pnpm-cli",title:"pnpm CLI"},p={unversionedId:"pnpm-cli",id:"version-5.x/pnpm-cli",isDocsHomePage:!1,title:"pnpm CLI",description:"Differences vs npm",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-5.x/pnpm-cli.md",slug:"/pnpm-cli",permalink:"/es/5.x/pnpm-cli",editUrl:"https://crowdin.com/project/pnpm/es",version:"5.x",sidebar:"version-5.x/docs",previous:{title:"Instalaci\xf3n",permalink:"/es/5.x/installation"},next:{title:"pnpx CLI",permalink:"/es/5.x/pnpx-cli"}},l=[{value:"Differences vs npm",id:"differences-vs-npm",children:[]},{value:"Options",id:"options",children:[{value:"-C &lt;path&gt;, --dir &lt;path&gt;",id:"-c-path---dir-path",children:[]},{value:"-w, --workspace-root",id:"-w---workspace-root",children:[]}]},{value:"Commands",id:"commands",children:[]}],c={toc:l};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"differences-vs-npm"},"Differences vs npm"),Object(i.b)("p",null,"Unlike npm, pnpm validates all options. For example, ",Object(i.b)("inlineCode",{parentName:"p"},"pnpm install --foo")," will fail as ",Object(i.b)("inlineCode",{parentName:"p"},"--foo")," is not a valid option for ",Object(i.b)("inlineCode",{parentName:"p"},"pnpm install"),"."),Object(i.b)("p",null,"However, some dependencies may use the ",Object(i.b)("inlineCode",{parentName:"p"},"npm_config_")," environment variable, which is populated from the CLI options. In this case, you have the following options:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"explicitly set the env variable: ",Object(i.b)("inlineCode",{parentName:"li"},"npm_config_foo=true pnpm install")),Object(i.b)("li",{parentName:"ol"},"force the unknown option with ",Object(i.b)("inlineCode",{parentName:"li"},"--config."),": ",Object(i.b)("inlineCode",{parentName:"li"},"pnpm install --config.foo"))),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("h3",{id:"-c-path---dir-path"},"-C ","<","path",">",", --dir ","<","path",">"),Object(i.b)("p",null,"Run as if pnpm was started in ",Object(i.b)("inlineCode",{parentName:"p"},"<path>")," instead of the current working directory."),Object(i.b)("h3",{id:"-w---workspace-root"},"-w, --workspace-root"),Object(i.b)("p",null,"Added in: v5.6.0"),Object(i.b)("p",null,"Run as if pnpm was started in the root of the workspace instead of the current working directory."),Object(i.b)("h2",{id:"commands"},"Commands"),Object(i.b)("p",null,"For more information, see the documentation for individual CLI commands. Here is a list of handy npm equivalents to get you started:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"npm command"),Object(i.b)("th",{parentName:"tr",align:null},"pnpm equivalent"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"npm install")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"/es/5.x/cli/install"},Object(i.b)("inlineCode",{parentName:"a"},"pnpm install")))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"npm i <pkg>")),Object(i.b)("td",{parentName:"tr",align:null},"[",Object(i.b)("inlineCode",{parentName:"td"},"pnpm add <pkg>"),"]")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"npm run <cmd>")),Object(i.b)("td",{parentName:"tr",align:null},"[",Object(i.b)("inlineCode",{parentName:"td"},"pnpm <cmd>"),"]")))))}b.isMDXComponent=!0},318:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return u}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),b=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},m=function(e){var n=b(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},s=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=b(t),s=r,u=m["".concat(o,".").concat(s)]||m[s]||d[s]||i;return t?a.a.createElement(u,p(p({ref:n},c),{},{components:t})):a.a.createElement(u,p({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=s;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var c=2;c<i;c++)o[c]=t[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);