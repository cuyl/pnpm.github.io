(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{155:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var r=t(3),o=t(8),a=(t(0),t(318)),p={id:"pnpm-run",title:"pnpm run",original_id:"pnpm-run"},i={unversionedId:"pnpm-run",id:"version-4.x/pnpm-run",isDocsHomePage:!1,title:"pnpm run",description:"Runs a defined package script.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-4.x/pnpm-run.md",slug:"/pnpm-run",permalink:"/tr/4.x/pnpm-run",editUrl:"https://crowdin.com/project/pnpm/tr",version:"4.x"},c=[],u={toc:c};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Runs a defined package script."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"pnpm run <command> [-- <args>...]\n")),Object(a.b)("p",null,"In addition to the shell\u2019s pre-existing ",Object(a.b)("inlineCode",{parentName:"p"},"PATH"),", ",Object(a.b)("inlineCode",{parentName:"p"},"pnpm run")," adds ",Object(a.b)("inlineCode",{parentName:"p"},"node_modules/.bin")," to the ",Object(a.b)("inlineCode",{parentName:"p"},"PATH")," provided to ",Object(a.b)("inlineCode",{parentName:"p"},"scripts"),". As of v3.5, when executed inside a workspace, ",Object(a.b)("inlineCode",{parentName:"p"},"<workspace root>/node_modules/.bin")," is also added to the ",Object(a.b)("inlineCode",{parentName:"p"},"PATH"),", so if a tool is installed in the workspace root, it may be called in any workspace package's ",Object(a.b)("inlineCode",{parentName:"p"},"scripts"),"."))}l.isMDXComponent=!0},318:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),l=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=l(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=l(t),m=r,b=s["".concat(p,".").concat(m)]||s[m]||d[m]||a;return t?o.a.createElement(b,i(i({ref:n},u),{},{components:t})):o.a.createElement(b,i({ref:n},u))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,p=new Array(a);p[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var u=2;u<a;u++)p[u]=t[u];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);