"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6756],{9613:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var a=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=l(t),u=r,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return t?a.createElement(h,i(i({ref:n},d),{},{components:t})):a.createElement(h,i({ref:n},d))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9828:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>p,contentTitle:()=>s,metadata:()=>l,toc:()=>d,default:()=>m});var a=t(98),r=t(6862),o=(t(9496),t(9613)),i=["components"],p={id:"package_json",title:"package.json"},s=void 0,l={unversionedId:"package_json",id:"version-5.x/package_json",isDocsHomePage:!1,title:"package.json",description:"The manifest file of a package. It contains all the package's metadata,",source:"@site/versioned_docs/version-5.x/package_json.md",sourceDirName:".",slug:"/package_json",permalink:"/pnpm.github.io/zh/5.x/package_json",editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"5.x",lastUpdatedBy:"Yuchao",lastUpdatedAt:1633141056,formattedLastUpdatedAt:"2021/10/2",frontMatter:{id:"package_json",title:"package.json"},sidebar:"version-5.x/docs",previous:{title:"pnpm store",permalink:"/pnpm.github.io/zh/5.x/cli/store"},next:{title:".npmrc",permalink:"/pnpm.github.io/zh/5.x/npmrc"}},d=[{value:"Fields",id:"fields",children:[{value:"engines",id:"engines",children:[]},{value:"peerDependenciesMeta",id:"peerdependenciesmeta",children:[]},{value:"publishConfig",id:"publishconfig",children:[]},{value:"pnpm.overrides",id:"pnpmoverrides",children:[]},{value:"pnpm.neverBuiltDependencies",id:"pnpmneverbuiltdependencies",children:[]}]}],c={toc:d};function m(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The manifest file of a package. It contains all the package's metadata,\nincluding dependencies, title, author, et cetera. This is a standard preserved\nacross all major Node.JS package managers, including pnpm."),(0,o.kt)("h2",{id:"fields"},"Fields"),(0,o.kt)("h3",{id:"engines"},"engines"),(0,o.kt)("p",null,"You can specify the version of Node and pnpm that your software works on:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "engines": {\n        "node": ">=10",\n        "pnpm": ">=3"\n    }\n}\n')),(0,o.kt)("p",null,"During local development, pnpm will always fail with an error message\nif its version does not match the one specified in the ",(0,o.kt)("inlineCode",{parentName:"p"},"engines")," field."),(0,o.kt)("p",null,"Unless the user has set the ",(0,o.kt)("inlineCode",{parentName:"p"},"engine-strict")," config flag (see ",(0,o.kt)("a",{parentName:"p",href:"/pnpm.github.io/zh/5.x/npmrc#engine-strict"},".npmrc"),"), this\nfield is advisory only and will only produce warnings when your package is\ninstalled as a dependency."),(0,o.kt)("h3",{id:"peerdependenciesmeta"},"peerDependenciesMeta"),(0,o.kt)("p",null,"This field lists some extra information related to the dependencies listed in\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"peerDependencies")," field."),(0,o.kt)("h4",{id:"peerdependenciesmetaoptional"},"peerDependenciesMeta.*.optional"),(0,o.kt)("p",null,"If this is set to true, the selected peer dependency will be marked as optional\nby the package manager. Therefore, the consumer omitting it will no longer be\nreported as an error."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "peerDependencies": {\n        "foo": "1"\n    },\n    "peerDependenciesMeta": {\n        "foo": {\n            "optional": true\n        },\n        "bar": {\n            "optional": true\n        }\n    }\n}\n')),(0,o.kt)("p",null,"Note that even though ",(0,o.kt)("inlineCode",{parentName:"p"},"bar")," was not specified in ",(0,o.kt)("inlineCode",{parentName:"p"},"peerDependencies"),", it is\nmarked as optional. pnpm will therefore assume that any version of bar is fine.\nHowever, ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," is optional, but only to the required version specification."),(0,o.kt)("h3",{id:"publishconfig"},"publishConfig"),(0,o.kt)("p",null,"Added in: v3.4.0"),(0,o.kt)("p",null,"It is possible to override some fields in the manifest before the package is\npacked.\nThe following fields may be overridden:\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#bin"},(0,o.kt)("inlineCode",{parentName:"a"},"bin")),",\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#main"},(0,o.kt)("inlineCode",{parentName:"a"},"main")),",\n",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/api/esm.html#esm_package_exports"},(0,o.kt)("inlineCode",{parentName:"a"},"exports")),",\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#types"},(0,o.kt)("inlineCode",{parentName:"a"},"types")," or ",(0,o.kt)("inlineCode",{parentName:"a"},"typings")),",\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#module"},(0,o.kt)("inlineCode",{parentName:"a"},"module")),",\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#browser"},(0,o.kt)("inlineCode",{parentName:"a"},"browser")),",\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#esnext"},(0,o.kt)("inlineCode",{parentName:"a"},"esnext")),",\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#es2015"},(0,o.kt)("inlineCode",{parentName:"a"},"es2015")),",\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#unpkg-1"},(0,o.kt)("inlineCode",{parentName:"a"},"unpkg"))," and\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#microbundle"},(0,o.kt)("inlineCode",{parentName:"a"},"umd:main")),"."),(0,o.kt)("p",null,"To override a field, add the publish version of the field to ",(0,o.kt)("inlineCode",{parentName:"p"},"publishConfig"),"."),(0,o.kt)("p",null,"For instance, the following ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "foo",\n    "version": "1.0.0",\n    "main": "src/index.ts",\n    "publishConfig": {\n        "main": "lib/index.js",\n        "typings": "lib/index.d.ts"\n    }\n}\n')),(0,o.kt)("p",null,"Will be published as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "foo",\n    "version": "1.0.0",\n    "main": "lib/index.js",\n    "typings": "lib/index.d.ts"\n}\n')),(0,o.kt)("h3",{id:"pnpmoverrides"},"pnpm.overrides"),(0,o.kt)("p",null,"Added in: v5.10.1"),(0,o.kt)("p",null,"This field allows you to instruct pnpm to override any dependency in the\ndependency graph. This is useful to enforce all your packages to use a single\nversion of a dependency, backport a fix, or replace a dependency with a fork."),(0,o.kt)("p",null,"Note that the overrides field can only be set at the root of the project."),(0,o.kt)("p",null,"An example of the ",(0,o.kt)("inlineCode",{parentName:"p"},'"pnpm"."overrides"')," field:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "overrides": {\n      "foo": "^1.0.0",\n      "bar@^2.1.0": "3.0.0",\n      "qar@1>zoo": "2"\n    }\n  }\n}\n')),(0,o.kt)("p",null,'You may specify the package the overriden dependency belongs to by\nseparating the package selector from the dependency selector with a ">", for\nexample ',(0,o.kt)("inlineCode",{parentName:"p"},"qar@1>zoo")," will only override the ",(0,o.kt)("inlineCode",{parentName:"p"},"zoo")," dependency of ",(0,o.kt)("inlineCode",{parentName:"p"},"qar@1"),", not for\nany other dependencies."),(0,o.kt)("h3",{id:"pnpmneverbuiltdependencies"},"pnpm.neverBuiltDependencies"),(0,o.kt)("p",null,"Added in: v5.16.0"),(0,o.kt)("p",null,"This field allows to ignore the builds of specific dependencies."),(0,o.kt)("p",null,"An example of the ",(0,o.kt)("inlineCode",{parentName:"p"},'"pnpm"."neverBuiltDependencies"')," field:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "neverBuiltDependencies": ["fsevents", "level"]\n  }\n}\n')))}m.isMDXComponent=!0}}]);