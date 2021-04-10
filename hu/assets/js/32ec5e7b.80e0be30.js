(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{123:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(3),i=t(8),c=(t(0),t(318)),a={id:"unlink",title:"pnpm unlink"},o={unversionedId:"cli/unlink",id:"cli/unlink",isDocsHomePage:!1,title:"pnpm unlink",description:"Unlinks a system-wide package (inverse of pnpm link).",source:"@site/i18n/hu/docusaurus-plugin-content-docs/current/cli/unlink.md",slug:"/cli/unlink",permalink:"/hu/next/cli/unlink",editUrl:"https://crowdin.com/project/pnpm/hu",version:"current",sidebar:"docs",previous:{title:"pnpm link",permalink:"/hu/next/cli/link"},next:{title:"pnpm import",permalink:"/hu/next/cli/import"}},l=[{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],p={toc:l};function u(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Unlinks a system-wide package (inverse of ",Object(c.b)("a",{parentName:"p",href:"/hu/next/cli/link"},Object(c.b)("inlineCode",{parentName:"a"},"pnpm link")),")."),Object(c.b)("p",null,"If called without arguments, all linked dependencies will be unlinked."),Object(c.b)("p",null,"This is similar to ",Object(c.b)("inlineCode",{parentName:"p"},"yarn unlink"),", except pnpm re-installs the dependency after removing the external link."),Object(c.b)("h2",{id:"options"},"Options"),Object(c.b)("h3",{id:"--recursive--r"},"--recursive, -r"),Object(c.b)("p",null,"Unlink in every package found in subdirectories or in every workspace package, when executed inside a ",Object(c.b)("a",{parentName:"p",href:"/hu/next/workspaces"},"workspace"),"."),Object(c.b)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/hu/next/filtering"},"Read more about filtering.")))}u.isMDXComponent=!0},318:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return b}));var r=t(0),i=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),u=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(t),d=r,b=s["".concat(a,".").concat(d)]||s[d]||f[d]||c;return t?i.a.createElement(b,o(o({ref:n},p),{},{components:t})):i.a.createElement(b,o({ref:n},p))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,a=new Array(c);a[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var p=2;p<c;p++)a[p]=t[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);