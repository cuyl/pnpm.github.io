"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1394],{9613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=i,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||a;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5857:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>c,toc:()=>u,default:()=>m});var r=t(98),i=t(6862),a=(t(9496),t(9613)),o=["components"],l={id:"unlink",title:"pnpm unlink"},p=void 0,c={unversionedId:"cli/unlink",id:"version-5.x/cli/unlink",isDocsHomePage:!1,title:"pnpm unlink",description:"Unlinks a system-wide package (inverse of pnpm link).",source:"@site/versioned_docs/version-5.x/cli/unlink.md",sourceDirName:"cli",slug:"/cli/unlink",permalink:"/pnpm.github.io/ja/5.x/cli/unlink",editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"5.x",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1633321346,formattedLastUpdatedAt:"2021/10/4",frontMatter:{id:"unlink",title:"pnpm unlink"},sidebar:"version-5.x/docs",previous:{title:"pnpm link",permalink:"/pnpm.github.io/ja/5.x/cli/link"},next:{title:"pnpm import",permalink:"/pnpm.github.io/ja/5.x/cli/import"}},u=[{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],s={toc:u};function m(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Unlinks a system-wide package (inverse of ",(0,a.kt)("a",{parentName:"p",href:"/pnpm.github.io/ja/5.x/cli/link"},(0,a.kt)("inlineCode",{parentName:"a"},"pnpm link")),")."),(0,a.kt)("p",null,"If called without arguments, all linked dependencies will be unlinked."),(0,a.kt)("p",null,"This is similar to ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn unlink"),", except pnpm re-installs the dependency after\nremoving the external link."),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,a.kt)("p",null,"Unlink in every package found in subdirectories or in every workspace package,\nwhen executed inside a ",(0,a.kt)("a",{parentName:"p",href:"/pnpm.github.io/ja/5.x/workspaces"},"workspace"),"."),(0,a.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/pnpm.github.io/ja/5.x/filtering"},"Read more about filtering.")))}m.isMDXComponent=!0}}]);