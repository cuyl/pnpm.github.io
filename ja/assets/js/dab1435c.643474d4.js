"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5860],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5124:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>s,toc:()=>p,default:()=>m});var r=n(98),o=n(6862),i=(n(9496),n(9613)),a=["components"],l={id:"git",title:"Working with Git"},c=void 0,s={unversionedId:"git",id:"version-5.x/git",isDocsHomePage:!1,title:"Working with Git",description:"Lockfiles",source:"@site/versioned_docs/version-5.x/git.md",sourceDirName:".",slug:"/git",permalink:"/pnpm.github.io/ja/5.x/git",editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"5.x",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1633142957,formattedLastUpdatedAt:"2021/10/2",frontMatter:{id:"git",title:"Working with Git"},sidebar:"version-5.x/docs",previous:{title:"Only allow pnpm",permalink:"/pnpm.github.io/ja/5.x/only-allow-pnpm"},next:{title:"Logos",permalink:"/pnpm.github.io/ja/5.x/logos"}},p=[{value:"Lockfiles",id:"lockfiles",children:[{value:"Merge conflicts",id:"merge-conflicts",children:[]}]}],u={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"lockfiles"},"Lockfiles"),(0,i.kt)("p",null,"You should always commit the lockfile (",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml"),"). This is for a\nmultitude of reasons, the primary of which being:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"it enables faster installation for CI and production environments, due to\nbeing able to skip package resolution"),(0,i.kt)("li",{parentName:"ul"},"it enforces consistent installations and resolution between development,\ntesting, and production environments, meaning the packages used in testing\nand production will be exactly the same as when you developed your project")),(0,i.kt)("h3",{id:"merge-conflicts"},"Merge conflicts"),(0,i.kt)("p",null,"pnpm can automatically resolve merge conflicts in ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml"),".\nIf you have conflicts, just run ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install")," and commit the changes."),(0,i.kt)("p",null,"Be warned, however. It is advised that you review the changes prior to\nstaging a commit, because we cannot guarantee that pnpm will choose the correct\nhead - it instead builds with the most updated of lockfiles, which is ideal in\nmost cases."))}m.isMDXComponent=!0}}]);