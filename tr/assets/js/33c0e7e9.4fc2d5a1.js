(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{135:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(8),o=(t(0),t(318)),p={id:"pnpx-cli",title:"pnpx CLI"},i={unversionedId:"pnpx-cli",id:"version-6.x/pnpx-cli",isDocsHomePage:!1,title:"pnpx CLI",description:"For new users",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-6.x/pnpx-cli.md",slug:"/pnpx-cli",permalink:"/tr/pnpx-cli",editUrl:"https://crowdin.com/project/pnpm/tr",version:"6.x",sidebar:"version-6.x/docs",previous:{title:"pnpm CLI",permalink:"/tr/pnpm-cli"},next:{title:"Configuring",permalink:"/tr/configuring"}},c=[{value:"For new users",id:"for-new-users",children:[]},{value:"For npm users",id:"for-npm-users",children:[]}],l={toc:c};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"for-new-users"},"For new users"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"pnpx")," (PNPm eXecute) is a command line tool that fetches a package from the registry without installing it as a dependency, hotloads it, and runs whatever default command binary it exposes."),Object(o.b)("p",null,"For example, to use ",Object(o.b)("inlineCode",{parentName:"p"},"create-react-app")," anywhere to bootstrap a react app without needing to install it under another project, you can run:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"pnpx create-react-app my-project\n")),Object(o.b)("p",null,"This will fetch ",Object(o.b)("inlineCode",{parentName:"p"},"create-react-app")," from the registry and run it with the given arguments. For more information, you may want to look at ",Object(o.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/npx"},"npx")," from npm, as it offers the same interface, except it uses ",Object(o.b)("inlineCode",{parentName:"p"},"npm")," instead of ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm")," under the hood."),Object(o.b)("h2",{id:"for-npm-users"},"For npm users"),Object(o.b)("p",null,"npm has a great package runner called ",Object(o.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/npx"},"npx"),". pnpm offers the same tool via the ",Object(o.b)("inlineCode",{parentName:"p"},"pnpx")," command. The only difference is that ",Object(o.b)("inlineCode",{parentName:"p"},"pnpx")," uses ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm")," for installing packages."))}s.isMDXComponent=!0},318:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),s=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(t),f=r,b=u["".concat(p,".").concat(f)]||u[f]||m[f]||o;return t?a.a.createElement(b,i(i({ref:n},l),{},{components:t})):a.a.createElement(b,i({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,p=new Array(o);p[0]=f;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var l=2;l<o;l++)p[l]=t[l];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);