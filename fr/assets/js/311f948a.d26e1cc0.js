"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6578],{9613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(f,p(p({ref:t},s),{},{components:r})):n.createElement(f,p({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,p[1]=c;for(var l=2;l<o;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7399:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>c,contentTitle:()=>i,metadata:()=>l,toc:()=>s,default:()=>u});var n=r(98),a=r(6862),o=(r(9496),r(9613)),p=["components"],c={id:"pnpm-workspace_yaml",title:"pnpm-workspace.yaml"},i=void 0,l={unversionedId:"pnpm-workspace_yaml",id:"version-5.x/pnpm-workspace_yaml",isDocsHomePage:!1,title:"pnpm-workspace.yaml",description:"pnpm-workspace.yaml defines the root of the [workspace] and enables you to",source:"@site/versioned_docs/version-5.x/pnpm-workspace_yaml.md",sourceDirName:".",slug:"/pnpm-workspace_yaml",permalink:"/pnpm.github.io/fr/5.x/pnpm-workspace_yaml",editUrl:"https://crowdin.com/project/pnpm/fr",tags:[],version:"5.x",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1633151074,formattedLastUpdatedAt:"02/10/2021",frontMatter:{id:"pnpm-workspace_yaml",title:"pnpm-workspace.yaml"},sidebar:"version-5.x/docs",previous:{title:".npmrc",permalink:"/pnpm.github.io/fr/5.x/npmrc"},next:{title:"pnpmfile.js",permalink:"/pnpm.github.io/fr/5.x/pnpmfile"}},s=[],m={toc:s};function u(e){var t=e.components,r=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pnpm-workspace.yaml")," defines the root of the ",(0,o.kt)("a",{parentName:"p",href:"/pnpm.github.io/fr/5.x/workspaces"},"workspace")," and enables you to\ninclude / exclude directories from the workspace. By default, all packages of\nall subdirectories are included."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="pnpm-workspace.yaml"',title:'"pnpm-workspace.yaml"'},"packages:\n  # all packages in subdirs of packages/ and components/\n  - 'packages/**'\n  - 'components/**'\n  # exclude packages that are inside test directories\n  - '!**/test/**'\n")),(0,o.kt)("p",null,"The root package is always included, even when custom location wildcards are\nused."))}u.isMDXComponent=!0}}]);