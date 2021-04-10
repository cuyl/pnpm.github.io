(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{238:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return s}));var r=t(3),o=t(8),a=(t(0),t(318)),i={id:"configuring",title:"Configuring"},c={unversionedId:"configuring",id:"configuring",isDocsHomePage:!1,title:"Configuring",description:"pnpm uses npm's configuration formats. Hence, you should set configuration the same way you would for npm. For example,",source:"@site/i18n/hu/docusaurus-plugin-content-docs/current/configuring.md",slug:"/configuring",permalink:"/hu/next/configuring",editUrl:"https://crowdin.com/project/pnpm/hu",version:"current",sidebar:"docs",previous:{title:"pnpx CLI",permalink:"/hu/next/pnpx-cli"},next:{title:"Filtering",permalink:"/hu/next/filtering"}},p=[],u={toc:p};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"pnpm uses ",Object(a.b)("a",{parentName:"p",href:"https://docs.npmjs.com/misc/config"},"npm's configuration")," formats. Hence, you should set configuration the same way you would for npm. For example,"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"pnpm config set store-dir /path/to/.pnpm-store\n")),Object(a.b)("p",null,"If no store is configured, then pnpm will automatically create a store on the same drive. If you need pnpm to work across multiple hard drives or filesystems, please read ",Object(a.b)("a",{parentName:"p",href:"/hu/next/faq#does-pnpm-work-across-multiple-hard-drives-or-filesystems"},"the FAQ"),"."),Object(a.b)("p",null,"Furthermore, pnpm uses the same configuration that npm uses for doing installations. If you have a private registry and npm is configured to work with it, pnpm should be able to authorize requests as well, with no additional configuration."),Object(a.b)("p",null,"In addition to those options, pnpm also allows you to use all parameters that are flags (for example ",Object(a.b)("inlineCode",{parentName:"p"},"--filter")," or ",Object(a.b)("inlineCode",{parentName:"p"},"--workspace-concurrency"),") as options:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"workspace-concurrency = 1\nfilter = @my-scope/*\n")),Object(a.b)("p",null,"See the ",Object(a.b)("a",{parentName:"p",href:"/hu/next/cli/config"},Object(a.b)("inlineCode",{parentName:"a"},"config")," command")," for more information."))}s.isMDXComponent=!0},318:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),s=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=s(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=s(t),m=r,d=l["".concat(i,".").concat(m)]||l[m]||f[m]||a;return t?o.a.createElement(d,c(c({ref:n},u),{},{components:t})):o.a.createElement(d,c({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);