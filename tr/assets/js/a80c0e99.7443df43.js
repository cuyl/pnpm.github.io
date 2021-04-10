(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{235:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(3),o=t(8),a=(t(0),t(318)),i={id:"releasing-apps",title:"Releasing apps",original_id:"releasing-apps"},p={unversionedId:"releasing-apps",id:"version-4.x/releasing-apps",isDocsHomePage:!1,title:"Releasing apps",description:"There are two ways to release an app with pnpm. One way is to commit pnpm-lock.yaml into your repo. Which we recommend doing anyway. And then in prod you'll have just to run pnpm install. You'll be sure in that case that the same dependencies will be used, with which you tested your app in other environments.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-4.x/releasing-apps.md",slug:"/releasing-apps",permalink:"/tr/4.x/releasing-apps",editUrl:"https://crowdin.com/project/pnpm/tr",version:"4.x"},c=[],l={toc:c};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"There are two ways to release an app with pnpm. One way is to commit ",Object(a.b)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," into your repo. Which we recommend doing anyway. And then in prod you'll have just to run ",Object(a.b)("inlineCode",{parentName:"p"},"pnpm install"),". You'll be sure in that case that the same dependencies will be used, with which you tested your app in other environments."),Object(a.b)("p",null,"If you'd like to copy packages to prod, you'll have to commit ",Object(a.b)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," anyway. And you'll have to copy paste the global store to production. The global store location is configurable via the ",Object(a.b)("inlineCode",{parentName:"p"},"store")," config key. Then you can run ",Object(a.b)("inlineCode",{parentName:"p"},"pnpm install --offline")," in your app and pnpm will be using packages that are already in the global store without making any requests to the npm registry."))}s.isMDXComponent=!0},318:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),s=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=s(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},y=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(t),y=r,d=u["".concat(i,".").concat(y)]||u[y]||m[y]||a;return t?o.a.createElement(d,p(p({ref:n},l),{},{components:t})):o.a.createElement(d,p({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=y;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<a;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}y.displayName="MDXCreateElement"}}]);