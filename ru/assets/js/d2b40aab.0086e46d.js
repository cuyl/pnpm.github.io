(self.webpackChunk=self.webpackChunk||[]).push([[5067],{9848:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7689);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,p=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(t),m=i,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||p;return t?r.createElement(f,a(a({ref:n},c),{},{components:t})):r.createElement(f,a({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var p=t.length,a=new Array(p);a[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var s=2;s<p;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},351:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>o,contentTitle:()=>l,metadata:()=>s,toc:()=>c,default:()=>d});var r=t(2791),i=t(9698),p=(t(7689),t(9848)),a=["components"],o={id:"pnpm-publish",title:"pnpm publish",original_id:"pnpm-publish"},l=void 0,s={unversionedId:"pnpm-publish",id:"version-4.x/pnpm-publish",isDocsHomePage:!1,title:"pnpm publish",description:"\u041f\u0443\u0431\u043b\u0438\u043a\u0443\u0435\u0442 \u043f\u0430\u043a\u0435\u0442 \u0432 \u0440\u0435\u0435\u0441\u0442\u0440.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-4.x/pnpm-publish.md",sourceDirName:".",slug:"/pnpm-publish",permalink:"/ru/4.x/pnpm-publish",editUrl:"https://crowdin.com/project/pnpm/ru",version:"4.x",frontMatter:{id:"pnpm-publish",title:"pnpm publish",original_id:"pnpm-publish"}},c=[{value:"--tag &lt;tag&gt;",id:"--tag-tag",children:[]},{value:"--access &lt;public|restricted&gt;",id:"--access-publicrestricted",children:[]},{value:"package.json publishConfig",id:"packagejson-publishconfig",children:[]}],u={toc:c};function d(e){var n=e.components,t=(0,i.Z)(e,a);return(0,p.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\u041f\u0443\u0431\u043b\u0438\u043a\u0443\u0435\u0442 \u043f\u0430\u043a\u0435\u0442 \u0432 \u0440\u0435\u0435\u0441\u0442\u0440."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm publish [<tarball>|<folder>] [--tag <tag>] [--access <public|restricted>]\n")),(0,p.kt)("p",null,"When publishing a package inside a ",(0,p.kt)("a",{parentName:"p",href:"/ru/4.x/workspace"},"workspace"),", the LICENSE file from the root of the workspace is packed with the package (unless the package has a license of its own)."),(0,p.kt)("h2",{id:"--tag-tag"},"--tag ","<","tag>"),(0,p.kt)("p",null,"Publishes the package with the given tag. By default, ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm publish")," updates the ",(0,p.kt)("inlineCode",{parentName:"p"},"latest")," tag."),(0,p.kt)("p",null,"For example:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"# inside the foo package directory\npnpm publish --tag next\n# in a project where you want to use the next version of foo\npnpm add foo@next\n")),(0,p.kt)("h2",{id:"--access-publicrestricted"},"--access ","<","public|restricted>"),(0,p.kt)("p",null,"Tells the registry whether the published package should be public or restricted."),(0,p.kt)("h2",{id:"packagejson-publishconfig"},"package.json publishConfig"),(0,p.kt)("p",null,"Added in: v3.4.0"),(0,p.kt)("p",null,"It is possible to override some fields in the manifest, before the package is packed. The following fields may be overriden: ",(0,p.kt)("inlineCode",{parentName:"p"},"typings"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"types"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"main")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"module"),". To override a field, add the publish version of the field to ",(0,p.kt)("inlineCode",{parentName:"p"},"publishConfig"),"."),(0,p.kt)("p",null,"For instance, the following ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "foo",\n    "version": "1.0.0",\n    "main": "src/index.ts",\n    "publishConfig": {\n        "main": "lib/index.js",\n        "typings": "lib/index.d.ts"\n    }\n}\n')),(0,p.kt)("p",null,"Will be published as:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "foo",\n    "version": "1.0.0",\n    "main": "lib/index.js",\n    "typings": "lib/index.d.ts"\n}\n')))}d.isMDXComponent=!0}}]);