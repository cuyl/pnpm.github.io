(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{318:function(e,r,n){"use strict";n.d(r,"a",(function(){return s})),n.d(r,"b",(function(){return f}));var t=n(0),i=n.n(t);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var r=i.a.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},s=function(e){var r=u(e.components);return i.a.createElement(l.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return i.a.createElement(i.a.Fragment,{},r)}},d=i.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(n),d=t,f=s["".concat(c,".").concat(d)]||s[d]||b[d]||o;return n?i.a.createElement(f,a(a({ref:r},l),{},{components:n})):i.a.createElement(f,a({ref:r},l))}));function f(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,c=new Array(o);c[0]=d;var a={};for(var p in r)hasOwnProperty.call(r,p)&&(a[p]=r[p]);a.originalType=e,a.mdxType="string"==typeof e?e:t,c[1]=a;for(var l=2;l<o;l++)c[l]=n[l];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return c})),n.d(r,"metadata",(function(){return a})),n.d(r,"toc",(function(){return p})),n.d(r,"default",(function(){return u}));var t=n(3),i=n(8),o=(n(0),n(318)),c={id:"rebuild",title:"pnpm rebuild",original_id:"rebuild"},a={unversionedId:"cli/rebuild",id:"version-4.x/cli/rebuild",isDocsHomePage:!1,title:"pnpm rebuild",description:"Aliases: rb",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-4.x/cli/rebuild.md",slug:"/cli/rebuild",permalink:"/es/4.x/cli/rebuild",editUrl:"https://crowdin.com/project/pnpm/es",version:"4.x",sidebar:"version-4.x/docs",previous:{title:"pnpm import",permalink:"/es/4.x/cli/import"},next:{title:"pnpm prune",permalink:"/es/4.x/cli/prune"}},p=[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],l={toc:p};function u(e){var r=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},l,n,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Aliases: ",Object(o.b)("inlineCode",{parentName:"p"},"rb")),Object(o.b)("p",null,"Rebuild a package."),Object(o.b)("h2",{id:"synopsis"},"Synopsis"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"pnpm rebuild [-r [--workspace-concurrency=<number>] [--no-sort]]\n     [<pkg>...]\n")),Object(o.b)("h2",{id:"options"},"Options"),Object(o.b)("h3",{id:"--recursive--r"},"--recursive, -r"),Object(o.b)("p",null,"This command runs the ",Object(o.b)("strong",{parentName:"p"},"pnpm build")," command in every package of the monorepo."),Object(o.b)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector>"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/es/4.x/filtering"},"Read more about filtering.")))}u.isMDXComponent=!0}}]);