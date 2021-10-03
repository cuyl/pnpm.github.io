"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6670],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,f=u["".concat(l,".").concat(m)]||u[m]||c[m]||a;return n?o.createElement(f,r(r({ref:t},p),{},{components:n})):o.createElement(f,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var d=2;d<a;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7745:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>d,toc:()=>p,default:()=>u});var o=n(98),i=n(6862),a=(n(9496),n(9613)),r=["components"],s={id:"motivation",title:"Motivation"},l=void 0,d={unversionedId:"motivation",id:"version-5.x/motivation",isDocsHomePage:!1,title:"Motivation",description:"Saving disk space and boosting installation speed",source:"@site/versioned_docs/version-5.x/motivation.md",sourceDirName:".",slug:"/motivation",permalink:"/pnpm.github.io/5.x/motivation",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/versioned_docs/version-5.x/motivation.md",tags:[],version:"5.x",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1633229388,formattedLastUpdatedAt:"10/3/2021",frontMatter:{id:"motivation",title:"Motivation"},sidebar:"version-5.x/docs",next:{title:"Installation",permalink:"/pnpm.github.io/5.x/installation"}},p=[{value:"Saving disk space and boosting installation speed",id:"saving-disk-space-and-boosting-installation-speed",children:[]},{value:"Creating a non-flat node_modules directory",id:"creating-a-non-flat-node_modules-directory",children:[]}],c={toc:p};function u(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"saving-disk-space-and-boosting-installation-speed"},"Saving disk space and boosting installation speed"),(0,a.kt)("p",null,"When using npm or Yarn, if you have 100 projects using a dependency, you will\nhave 100 copies of that dependency saved on disk. With pnpm, the dependency will be\nstored in a content-addressable store, so:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"If you depend on different versions of the dependency, only the files that\ndiffer are added to the store. For instance, if it has 100 files, and a new\nversion has a change in only one of those files, ",(0,a.kt)("inlineCode",{parentName:"li"},"pnpm update")," will only add 1\nnew file to the store, instead of cloning the entire dependency just for the\nsingular change."),(0,a.kt)("li",{parentName:"ol"},"All the files are saved in a single place on the disk. When packages are\ninstalled, their files are hard-linked from that single place, consuming no\nadditional disk space. This allows you to share dependencies of the same version\nacross projects.")),(0,a.kt)("p",null,"As a result, you save a lot of space on your disk proportional to the number of\nprojects and dependencies, and you have a lot faster installations!"),(0,a.kt)("h2",{id:"creating-a-non-flat-node_modules-directory"},"Creating a non-flat node_modules directory"),(0,a.kt)("p",null,"When installing dependencies with npm, all packages are hoisted to the root of the\nmodules directory. As a result, source code has access to dependencies that are\nnot added as dependencies to the project."),(0,a.kt)("p",null,"pnpm uses symlinks to add only the direct dependencies of the project into the root of the modules directory.\nIf you'd like more details about the unique ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," structure that pnpm\ncreates and why it works fine with the Node.js ecosystem, read:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/blog/2020/05/27/flat-node-modules-is-not-the-only-way"},"Flat node_modules is not the only way")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/pnpm.github.io/5.x/symlinked-node-modules-structure"},"Symlinked node_modules structure"))))}u.isMDXComponent=!0}}]);