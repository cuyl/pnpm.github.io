(self.webpackChunk=self.webpackChunk||[]).push([[9965],{9848:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>s,kt:()=>d});var i=n(7689);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),p=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?i.createElement(f,a(a({ref:t},s),{},{components:n})):i.createElement(f,a({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6199:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>p,toc:()=>s,default:()=>m});var i=n(2791),r=n(9698),o=(n(7689),n(9848)),a=["components"],l={id:"git",title:"Lavorare con Git"},c=void 0,p={unversionedId:"git",id:"version-5.x/git",isDocsHomePage:!1,title:"Lavorare con Git",description:"File Lock",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-5.x/git.md",sourceDirName:".",slug:"/git",permalink:"/it/5.x/git",editUrl:"https://crowdin.com/project/pnpm/it",version:"5.x",frontMatter:{id:"git",title:"Lavorare con Git"},sidebar:"version-5.x/docs",previous:{title:"Consenti solo pnpm",permalink:"/it/5.x/only-allow-pnpm"},next:{title:"Loghi",permalink:"/it/5.x/logos"}},s=[{value:"File Lock",id:"file-lock",children:[{value:"Conflitti Merge",id:"conflitti-merge",children:[]}]}],u={toc:s};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"file-lock"},"File Lock"),(0,o.kt)("p",null,"Dovresti eseguire sempre il commit del file lock (",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml"),"). Questo per molte ragioni, le principali sono:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"permette di avere installazioni veloci per CI e ambienti di produzione, grazie alla possibilit\xe0 di saltare la risoluzione dei pacchetti"),(0,o.kt)("li",{parentName:"ul"},"it enforces consistent installations and resolution between development, testing, and production environments, meaning the packages used in testing and production will be exactly the same as when you developed your project")),(0,o.kt)("h3",{id:"conflitti-merge"},"Conflitti Merge"),(0,o.kt)("p",null,"pnpm pu\xf2 risolvere automaticamente i conflitti di merge in ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml"),". Se hai conflitti, esegui ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install")," ed esegui il commit dei cambiamenti."),(0,o.kt)("p",null,"Attenzione, per\xf2. It is advised that you review the changes prior to staging a commit, because we cannot guarantee that pnpm will choose the correct head - it instead builds with the most updated of lockfiles, which is ideal in most cases."))}m.isMDXComponent=!0}}]);