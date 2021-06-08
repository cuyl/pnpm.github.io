(self.webpackChunk=self.webpackChunk||[]).push([[4275],{9848:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7689);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=l(r),m=i,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return r?n.createElement(f,p(p({ref:t},u),{},{components:r})):n.createElement(f,p({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,p=new Array(o);p[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,p[1]=a;for(var l=2;l<o;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3044:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>a,metadata:()=>c,toc:()=>l,default:()=>s});var n=r(1424),i=r(2489),o=(r(7689),r(9848)),p=["components"],a={id:"prune",title:"pnpm prune",original_id:"prune"},c={unversionedId:"cli/prune",id:"version-4.x/cli/prune",isDocsHomePage:!1,title:"pnpm prune",description:"Removes extraneous packages",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-4.x/cli/prune.md",sourceDirName:"cli",slug:"/cli/prune",permalink:"/it/4.x/cli/prune",editUrl:"https://crowdin.com/project/pnpm/it",version:"4.x",frontMatter:{id:"prune",title:"pnpm prune",original_id:"prune"},sidebar:"version-4.x/docs",previous:{title:"pnpm rebuild",permalink:"/it/4.x/cli/rebuild"},next:{title:"pnpm install-test",permalink:"/it/4.x/cli/install-test"}},l=[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[{value:"--prod",id:"--prod",children:[]}]}],u={toc:l};function s(e){var t=e.components,r=(0,i.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Removes extraneous packages"),(0,o.kt)("h2",{id:"synopsis"},"Synopsis"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"pnpm prune [--prod]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("h3",{id:"--prod"},"--prod"),(0,o.kt)("p",null,"Rimuove i pacchetti specificati nelle ",(0,o.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."))}s.isMDXComponent=!0}}]);