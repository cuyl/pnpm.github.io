"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6367],{9613:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1932:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>p,contentTitle:()=>s,metadata:()=>l,toc:()=>c,default:()=>u});var n=r(98),o=r(6862),i=(r(9496),r(9613)),a=["components"],p={id:"errors",title:"Error Codes"},s=void 0,l={unversionedId:"errors",id:"errors",isDocsHomePage:!1,title:"Error Codes",description:"ERRPNPMUNEXPECTED_STORE",source:"@site/docs/errors.md",sourceDirName:".",slug:"/errors",permalink:"/pnpm.github.io/next/errors",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/docs/errors.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1633160590,formattedLastUpdatedAt:"10/2/2021",frontMatter:{id:"errors",title:"Error Codes"},sidebar:"docs",previous:{title:"Working with Git",permalink:"/pnpm.github.io/next/git"},next:{title:"Logos",permalink:"/pnpm.github.io/next/logos"}},c=[{value:"ERR_PNPM_UNEXPECTED_STORE",id:"err_pnpm_unexpected_store",children:[]},{value:"ERR_PNPM_NO_MATCHING_VERSION_INSIDE_WORKSPACE",id:"err_pnpm_no_matching_version_inside_workspace",children:[]}],d={toc:c};function u(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"err_pnpm_unexpected_store"},"ERR_PNPM_UNEXPECTED_STORE"),(0,i.kt)("p",null,"A modules directory is present and is linked to a different store directory."),(0,i.kt)("p",null,"If you changed the store directory intentionally, run ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install")," and pnpm will reinstall the dependencies using the new store."),(0,i.kt)("h2",{id:"err_pnpm_no_matching_version_inside_workspace"},"ERR_PNPM_NO_MATCHING_VERSION_INSIDE_WORKSPACE"),(0,i.kt)("p",null,"A project has a workspace dependency that does not exist in the workspace."),(0,i.kt)("p",null,"For instance, package ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," has ",(0,i.kt)("inlineCode",{parentName:"p"},"bar@1.0.0")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "foo",\n  "version": "1.0.0",\n  "dependencies": {\n    "bar": "workspace:1.0.0"\n  }\n}\n')),(0,i.kt)("p",null,"However, there is only ",(0,i.kt)("inlineCode",{parentName:"p"},"bar@2.0.0")," in the workspace, so ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install")," will fail."),(0,i.kt)("p",null,"To fix this error, all dependencies that use the ",(0,i.kt)("a",{parentName:"p",href:"/pnpm.github.io/next/workspaces#workspace-protocol-workspace"},"workspace protocol")," should be updated to use versions of packages that are present in the workspace. This can be done either manually or using the ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm -r update")," command."))}u.isMDXComponent=!0}}]);