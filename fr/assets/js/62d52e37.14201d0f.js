(self.webpackChunk=self.webpackChunk||[]).push([[7754],{9848:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7689);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=c(r),m=o,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||i;return r?n.createElement(d,p(p({ref:t},l),{},{components:r})):n.createElement(d,p({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,p=new Array(i);p[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,p[1]=a;for(var c=2;c<i;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1951:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>a,contentTitle:()=>s,metadata:()=>c,toc:()=>l,default:()=>f});var n=r(2791),o=r(9698),i=(r(7689),r(9848)),p=["components"],a={id:"stop",title:"pnpm stop",original_id:"stop"},s=void 0,c={unversionedId:"cli/stop",id:"version-4.x/cli/stop",isDocsHomePage:!1,title:"pnpm stop",description:"Aliases: run stop",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-4.x/cli/stop.md",sourceDirName:"cli",slug:"/cli/stop",permalink:"/fr/4.x/cli/stop",editUrl:"https://crowdin.com/project/pnpm/fr",version:"4.x",frontMatter:{id:"stop",title:"pnpm stop",original_id:"stop"},sidebar:"version-4.x/docs",previous:{title:"pnpm start",permalink:"/fr/4.x/cli/start"},next:{title:"pnpm publish",permalink:"/fr/4.x/cli/publish"}},l=[{value:"Synopsis",id:"synopsis",children:[]}],u={toc:l};function f(e){var t=e.components,r=(0,o.Z)(e,p);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Aliases: ",(0,i.kt)("inlineCode",{parentName:"p"},"run stop")),(0,i.kt)("p",null,"Runs a package's ",(0,i.kt)("inlineCode",{parentName:"p"},'"stop"')," script, if one was provided."),(0,i.kt)("h2",{id:"synopsis"},"Synopsis"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"pnpm stop [-- <args>...]\n")))}f.isMDXComponent=!0}}]);