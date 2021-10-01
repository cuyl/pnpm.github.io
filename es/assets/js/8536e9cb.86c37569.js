"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3491],{9613:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(n),f=o,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||i;return n?r.createElement(d,a(a({ref:t},l),{},{components:n})):r.createElement(d,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},651:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>s,metadata:()=>c,toc:()=>l,default:()=>m});var r=n(98),o=n(6862),i=(n(9496),n(9613)),a=["components"],p={id:"configuring",title:"Configuring"},s=void 0,c={unversionedId:"configuring",id:"version-5.x/configuring",isDocsHomePage:!1,title:"Configuring",description:"pnpm uses [npm's configuration] formats. Hence, you should set configuration",source:"@site/versioned_docs/version-5.x/configuring.md",sourceDirName:".",slug:"/configuring",permalink:"/pnpm.github.io/es/5.x/configuring",editUrl:"https://crowdin.com/project/pnpm/es",tags:[],version:"5.x",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1633113585,formattedLastUpdatedAt:"1/10/2021",frontMatter:{id:"configuring",title:"Configuring"},sidebar:"version-5.x/docs",previous:{title:"pnpx CLI",permalink:"/pnpm.github.io/es/5.x/pnpx-cli"},next:{title:"Filtering",permalink:"/pnpm.github.io/es/5.x/filtering"}},l=[],u={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"pnpm uses ",(0,i.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/misc/config"},"npm's configuration")," formats. Hence, you should set configuration\nthe same way you would for npm. For example,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pnpm config set store-dir /path/to/.pnpm-store\n")),(0,i.kt)("p",null,"If no store is configured, then pnpm will automatically create a store on the\nsame drive. If you need pnpm to work across multiple hard drives or filesystems,\nplease read ",(0,i.kt)("a",{parentName:"p",href:"/pnpm.github.io/es/5.x/faq#does-pnpm-work-across-multiple-hard-drives-or-filesystems"},"the FAQ"),"."),(0,i.kt)("p",null,"Furthermore, pnpm uses the same configuration that npm uses for doing\ninstallations. If you have a private registry and npm is configured to work with\nit, pnpm should be able to authorize requests as well, with no additional\nconfiguration."),(0,i.kt)("p",null,"In addition to those options, pnpm also allows you to use all parameters that\nare flags (for example ",(0,i.kt)("inlineCode",{parentName:"p"},"--filter")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"--workspace-concurrency"),") as options:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"workspace-concurrency = 1\nfilter = @my-scope/*\n")),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"/pnpm.github.io/es/5.x/cli/config"},(0,i.kt)("inlineCode",{parentName:"a"},"config")," command")," for more information."))}m.isMDXComponent=!0}}]);