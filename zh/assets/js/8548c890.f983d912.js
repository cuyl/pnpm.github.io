"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2990],{9613:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var a=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,p=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),m=l(t),u=i,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||p;return t?a.createElement(k,o(o({ref:n},d),{},{components:t})):a.createElement(k,o({ref:n},d))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var p=t.length,o=new Array(p);o[0]=m;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var l=2;l<p;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2384:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>r,contentTitle:()=>s,metadata:()=>l,toc:()=>d,default:()=>m});var a=t(98),i=t(6862),p=(t(9496),t(9613)),o=["components"],r={id:"package_json",title:"package.json"},s=void 0,l={unversionedId:"package_json",id:"package_json",isDocsHomePage:!1,title:"package.json",description:"The manifest file of a package. It contains all the package's metadata,",source:"@site/docs/package_json.md",sourceDirName:".",slug:"/package_json",permalink:"/pnpm.github.io/zh/next/package_json",editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1633402441,formattedLastUpdatedAt:"2021/10/5",frontMatter:{id:"package_json",title:"package.json"},sidebar:"docs",previous:{title:"pnpm store",permalink:"/pnpm.github.io/zh/next/cli/store"},next:{title:".npmrc",permalink:"/pnpm.github.io/zh/next/npmrc"}},d=[{value:"Fields",id:"fields",children:[{value:"engines",id:"engines",children:[]},{value:"peerDependenciesMeta",id:"peerdependenciesmeta",children:[]},{value:"publishConfig",id:"publishconfig",children:[]},{value:"pnpm.overrides",id:"pnpmoverrides",children:[]},{value:"pnpm.packageExtensions",id:"pnpmpackageextensions",children:[]},{value:"pnpm.neverBuiltDependencies",id:"pnpmneverbuiltdependencies",children:[]}]}],c={toc:d};function m(e){var n=e.components,t=(0,i.Z)(e,o);return(0,p.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"The manifest file of a package. It contains all the package's metadata,\nincluding dependencies, title, author, et cetera. This is a standard preserved\nacross all major Node.JS package managers, including pnpm."),(0,p.kt)("h2",{id:"fields"},"Fields"),(0,p.kt)("h3",{id:"engines"},"engines"),(0,p.kt)("p",null,"You can specify the version of Node and pnpm that your software works on:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "engines": {\n        "node": ">=10",\n        "pnpm": ">=3"\n    }\n}\n')),(0,p.kt)("p",null,"During local development, pnpm will always fail with an error message\nif its version does not match the one specified in the ",(0,p.kt)("inlineCode",{parentName:"p"},"engines")," field."),(0,p.kt)("p",null,"Unless the user has set the ",(0,p.kt)("inlineCode",{parentName:"p"},"engine-strict")," config flag (see ",(0,p.kt)("a",{parentName:"p",href:"/pnpm.github.io/zh/next/npmrc#engine-strict"},".npmrc"),"), this\nfield is advisory only and will only produce warnings when your package is\ninstalled as a dependency."),(0,p.kt)("h3",{id:"peerdependenciesmeta"},"peerDependenciesMeta"),(0,p.kt)("p",null,"This field lists some extra information related to the dependencies listed in\nthe ",(0,p.kt)("inlineCode",{parentName:"p"},"peerDependencies")," field."),(0,p.kt)("h4",{id:"peerdependenciesmetaoptional"},"peerDependenciesMeta.*.optional"),(0,p.kt)("p",null,"If this is set to true, the selected peer dependency will be marked as optional\nby the package manager. Therefore, the consumer omitting it will no longer be\nreported as an error."),(0,p.kt)("p",null,"For example:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "peerDependencies": {\n        "foo": "1"\n    },\n    "peerDependenciesMeta": {\n        "foo": {\n            "optional": true\n        },\n        "bar": {\n            "optional": true\n        }\n    }\n}\n')),(0,p.kt)("p",null,"Note that even though ",(0,p.kt)("inlineCode",{parentName:"p"},"bar")," was not specified in ",(0,p.kt)("inlineCode",{parentName:"p"},"peerDependencies"),", it is\nmarked as optional. pnpm will therefore assume that any version of bar is fine.\nHowever, ",(0,p.kt)("inlineCode",{parentName:"p"},"foo")," is optional, but only to the required version specification."),(0,p.kt)("h3",{id:"publishconfig"},"publishConfig"),(0,p.kt)("p",null,"Added in: v3.4.0"),(0,p.kt)("p",null,"It is possible to override some fields in the manifest before the package is\npacked.\nThe following fields may be overridden:\n",(0,p.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#bin"},(0,p.kt)("inlineCode",{parentName:"a"},"bin")),",\n",(0,p.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#main"},(0,p.kt)("inlineCode",{parentName:"a"},"main")),",\n",(0,p.kt)("a",{parentName:"p",href:"https://nodejs.org/api/esm.html#esm_package_exports"},(0,p.kt)("inlineCode",{parentName:"a"},"exports")),",\n",(0,p.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#types"},(0,p.kt)("inlineCode",{parentName:"a"},"types")," or ",(0,p.kt)("inlineCode",{parentName:"a"},"typings")),",\n",(0,p.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#module"},(0,p.kt)("inlineCode",{parentName:"a"},"module")),",\n",(0,p.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#browser"},(0,p.kt)("inlineCode",{parentName:"a"},"browser")),",\n",(0,p.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#esnext"},(0,p.kt)("inlineCode",{parentName:"a"},"esnext")),",\n",(0,p.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#es2015"},(0,p.kt)("inlineCode",{parentName:"a"},"es2015")),",\n",(0,p.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#unpkg-1"},(0,p.kt)("inlineCode",{parentName:"a"},"unpkg"))," and\n",(0,p.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#microbundle"},(0,p.kt)("inlineCode",{parentName:"a"},"umd:main")),"."),(0,p.kt)("p",null,"To override a field, add the publish version of the field to ",(0,p.kt)("inlineCode",{parentName:"p"},"publishConfig"),"."),(0,p.kt)("p",null,"For instance, the following ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "foo",\n    "version": "1.0.0",\n    "main": "src/index.ts",\n    "publishConfig": {\n        "main": "lib/index.js",\n        "typings": "lib/index.d.ts"\n    }\n}\n')),(0,p.kt)("p",null,"Will be published as:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "foo",\n    "version": "1.0.0",\n    "main": "lib/index.js",\n    "typings": "lib/index.d.ts"\n}\n')),(0,p.kt)("h4",{id:"publishconfigexecutablefiles"},"publishConfig.executableFiles"),(0,p.kt)("p",null,"Added in: v6.11.5"),(0,p.kt)("p",null,"By default, for portability reasons, no files except those listed in the bin field will be marked as executable in the resulting package archive. The ",(0,p.kt)("inlineCode",{parentName:"p"},"executableFiles")," field lets you declare additional fields that must have the executable flag (+x) set even if they aren't directly accessible through the bin field."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "publishConfig": {\n    "executableFiles": [\n      "./dist/shim.js",\n    ]\n  }\n}\n')),(0,p.kt)("h4",{id:"publishconfigdirectory"},"publishConfig.directory"),(0,p.kt)("p",null,"Added in: v6.7.0"),(0,p.kt)("p",null,"You also can use the field ",(0,p.kt)("inlineCode",{parentName:"p"},"publishConfig.directory")," to customize the published subdirectory relative to the current ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,p.kt)("p",null,"It is expected to have a modified version of the current package in the specified directory (usually using third party build tools)."),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"In this example the ",(0,p.kt)("inlineCode",{parentName:"p"},'"dist"')," folder must contain a ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json"))),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "foo",\n  "version": "1.0.0",\n  "publishConfig": {\n    "directory": "dist"\n  }\n}\n')),(0,p.kt)("h3",{id:"pnpmoverrides"},"pnpm.overrides"),(0,p.kt)("p",null,"Added in: v5.10.1"),(0,p.kt)("p",null,"This field allows you to instruct pnpm to override any dependency in the\ndependency graph. This is useful to enforce all your packages to use a single\nversion of a dependency, backport a fix, or replace a dependency with a fork."),(0,p.kt)("p",null,"Note that the overrides field can only be set at the root of the project."),(0,p.kt)("p",null,"An example of the ",(0,p.kt)("inlineCode",{parentName:"p"},'"pnpm"."overrides"')," field:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "overrides": {\n      "foo": "^1.0.0",\n      "bar@^2.1.0": "3.0.0",\n      "qar@1>zoo": "2"\n    }\n  }\n}\n')),(0,p.kt)("p",null,'You may specify the package the overriden dependency belongs to by\nseparating the package selector from the dependency selector with a ">", for\nexample ',(0,p.kt)("inlineCode",{parentName:"p"},"qar@1>zoo")," will only override the ",(0,p.kt)("inlineCode",{parentName:"p"},"zoo")," dependency of ",(0,p.kt)("inlineCode",{parentName:"p"},"qar@1"),", not for\nany other dependencies."),(0,p.kt)("h3",{id:"pnpmpackageextensions"},"pnpm.packageExtensions"),(0,p.kt)("p",null,"Added in: v6.9.0"),(0,p.kt)("p",null,"The ",(0,p.kt)("inlineCode",{parentName:"p"},"packageExtensions")," fields offer a way to extend the existing package definitions with additional information. For example, if ",(0,p.kt)("inlineCode",{parentName:"p"},"react-redux")," should have ",(0,p.kt)("inlineCode",{parentName:"p"},"react-dom")," in its ",(0,p.kt)("inlineCode",{parentName:"p"},"peerDependencies")," but it has not, it is possible to patch ",(0,p.kt)("inlineCode",{parentName:"p"},"react-redux")," using ",(0,p.kt)("inlineCode",{parentName:"p"},"packageExtensions"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "packageExtensions": {\n      "react-redux": {\n        "peerDependencies": {\n          "react-dom": "*"\n        }\n      }\n    }\n  }\n}\n')),(0,p.kt)("p",null,"The keys in ",(0,p.kt)("inlineCode",{parentName:"p"},"packageExtensions")," are package names or package names and semver ranges, so it is possible to patch only some versions of a package:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "packageExtensions": {\n      "react-redux@1": {\n        "peerDependencies": {\n          "react-dom": "*"\n        }\n      }\n    }\n  }\n}\n')),(0,p.kt)("p",null,"The following fields may be extended using ",(0,p.kt)("inlineCode",{parentName:"p"},"packageExtensions"),": ",(0,p.kt)("inlineCode",{parentName:"p"},"dependencies"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"peerDependencies"),", and ",(0,p.kt)("inlineCode",{parentName:"p"},"peerDependenciesMeta"),"."),(0,p.kt)("p",null,"A bigger example:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "packageExtensions": {\n      "express@1": {\n        "optionalDependencies": {\n          "typescript": "2"\n        }\n      },\n      "fork-ts-checker-webpack-plugin": {\n        "dependencies": {\n          "@babel/core": "1"\n        },\n        "peerDependencies": {\n          "eslint": ">= 6"\n        },\n        "peerDependenciesMeta": {\n          "eslint": {\n            "optional": true\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,p.kt)("h3",{id:"pnpmneverbuiltdependencies"},"pnpm.neverBuiltDependencies"),(0,p.kt)("p",null,"Added in: v5.16.0"),(0,p.kt)("p",null,"This field allows to ignore the builds of specific dependencies."),(0,p.kt)("p",null,"An example of the ",(0,p.kt)("inlineCode",{parentName:"p"},'"pnpm"."neverBuiltDependencies"')," field:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "neverBuiltDependencies": ["fsevents", "level"]\n  }\n}\n')))}m.isMDXComponent=!0}}]);