"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[836],{9613:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var o=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=o.createContext({}),l=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=l(e.components);return o.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),m=l(t),h=a,u=m["".concat(p,".").concat(h)]||m[h]||c[h]||i;return t?o.createElement(u,s(s({ref:n},d),{},{components:t})):o.createElement(u,s({ref:n},d))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=m;var r={};for(var p in n)hasOwnProperty.call(n,p)&&(r[p]=n[p]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var l=2;l<i;l++)s[l]=t[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5076:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>r,contentTitle:()=>p,metadata:()=>l,toc:()=>d,default:()=>m});var o=t(98),a=t(6862),i=(t(9496),t(9613)),s=["components"],r={id:"faq",title:"Frequently Asked Questions"},p=void 0,l={unversionedId:"faq",id:"faq",isDocsHomePage:!1,title:"Frequently Asked Questions",description:"Why does my node_modules folder use disk space if packages are stored in a global store?",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/pnpm.github.io/pt/next/faq",editUrl:"https://crowdin.com/project/pnpm/pt",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1633151074,formattedLastUpdatedAt:"02/10/2021",frontMatter:{id:"faq",title:"Frequently Asked Questions"}},d=[{value:"Why does my <code>node_modules</code> folder use disk space if packages are stored in a global store?",id:"why-does-my-node_modules-folder-use-disk-space-if-packages-are-stored-in-a-global-store",children:[]},{value:"Does it work on Windows?",id:"does-it-work-on-windows",children:[]},{value:"But the nested <code>node_modules</code> approach is incompatible with Windows?",id:"but-the-nested-node_modules-approach-is-incompatible-with-windows",children:[]},{value:"What about circular symlinks?",id:"what-about-circular-symlinks",children:[]},{value:"Why have hard links at all? Why not symlink directly to the global store?",id:"why-have-hard-links-at-all-why-not-symlink-directly-to-the-global-store",children:[]},{value:"Does pnpm work across multiple drives or filesystems?",id:"does-pnpm-work-across-multiple-drives-or-filesystems",children:[{value:"Store path is specified",id:"store-path-is-specified",children:[]},{value:"Store path is NOT specified",id:"store-path-is-not-specified",children:[]}]},{value:"What does <code>pnpm store prune</code> do? Is it harmful?",id:"what-does-pnpm-store-prune-do-is-it-harmful",children:[]},{value:"What does <code>pnpm</code> stand for?",id:"what-does-pnpm-stand-for",children:[]},{value:"<code>pnpm</code> does not work with &lt;YOUR-PROJECT-HERE&gt;?",id:"pnpm-does-not-work-with-your-project-here",children:[{value:"Solution 1",id:"solution-1",children:[]},{value:"Solution 2",id:"solution-2",children:[]},{value:"Solution 3",id:"solution-3",children:[]}]}],c={toc:d};function m(e){var n=e.components,t=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"why-does-my-node_modules-folder-use-disk-space-if-packages-are-stored-in-a-global-store"},"Why does my ",(0,i.kt)("inlineCode",{parentName:"h2"},"node_modules")," folder use disk space if packages are stored in a global store?"),(0,i.kt)("p",null,"pnpm creates ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hard_link"},"hard links")," from the global store to the project's ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules"),"\nfolders. Hard links point to the same place on the disk where the original\nfiles are. So, for example, if you have ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," in your project as a dependency\nand it occupies 1MB of space, then it will look like it occupies 1MB of space in\nthe project's ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," folder and the same amount of space in the global\nstore. However, that 1MB is ",(0,i.kt)("em",{parentName:"p"},"the same space")," on the disk addressed from two\ndifferent locations. So in total ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," occupies 1MB, not 2MB."),(0,i.kt)("p",null,"For more on this subject:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://unix.stackexchange.com/questions/88423/why-do-hard-links-seem-to-take-the-same-space-as-the-originals"},"Why do hard links seem to take the same space as the originals?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gist.github.com/zkochan/106cfef49f8476b753a9cbbf9c65aff1"},"A thread from the pnpm chat room")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/pnpm/pnpm/issues/794"},"An issue in the pnpm repo"))),(0,i.kt)("h2",{id:"does-it-work-on-windows"},"Does it work on Windows?"),(0,i.kt)("p",null,"Short answer: Yes.\nLong answer: Using symbolic linking on Windows is problematic to say the least,\nhowever, pnpm has a workaround. For Windows, we use ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/win32/fileio/hard-links-and-junctions"},"junctions")," instead."),(0,i.kt)("h2",{id:"but-the-nested-node_modules-approach-is-incompatible-with-windows"},"But the nested ",(0,i.kt)("inlineCode",{parentName:"h2"},"node_modules")," approach is incompatible with Windows?"),(0,i.kt)("p",null,"Early versions of npm had issues because of nesting all ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," (see\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nodejs/node-v0.x-archive/issues/6960"},"this issue"),". However, pnpm does not create deep folders, it stores all packages\nflatly and uses symbolic links to create the dependency tree structure."),(0,i.kt)("h2",{id:"what-about-circular-symlinks"},"What about circular symlinks?"),(0,i.kt)("p",null,"Although pnpm uses linking to put dependencies into ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," folders,\ncircular symlinks are avoided because parent packages are placed into the same\n",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," folder in which their dependencies are. So ",(0,i.kt)("inlineCode",{parentName:"p"},"foo"),"'s dependencies\nare not in ",(0,i.kt)("inlineCode",{parentName:"p"},"foo/node_modules"),", but ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," is in ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," together with its\nown dependencies."),(0,i.kt)("h2",{id:"why-have-hard-links-at-all-why-not-symlink-directly-to-the-global-store"},"Why have hard links at all? Why not symlink directly to the global store?"),(0,i.kt)("p",null,"One package can have different sets of dependencies on one machine."),(0,i.kt)("p",null,"In project ",(0,i.kt)("strong",{parentName:"p"},"A")," ",(0,i.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," can have a dependency resolved to ",(0,i.kt)("inlineCode",{parentName:"p"},"bar@1.0.0"),", but\nin project ",(0,i.kt)("strong",{parentName:"p"},"B")," the same dependency of ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," might resolve to ",(0,i.kt)("inlineCode",{parentName:"p"},"bar@1.1.0"),"; so,\npnpm hard links ",(0,i.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," to every project where it is used, in order to\ncreate different sets of dependencies for it."),(0,i.kt)("p",null,"Direct symlinking to the global store would work with Node's\n",(0,i.kt)("inlineCode",{parentName:"p"},"--preserve-symlinks")," flag, however, that approach comes with a plethora of its\nown issues, so we decided to stick with hard links. For more details about why\nthis decision was made, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nodejs/node-eps/issues/46"},"this issue"),"."),(0,i.kt)("h2",{id:"does-pnpm-work-across-multiple-drives-or-filesystems"},"Does pnpm work across multiple drives or filesystems?"),(0,i.kt)("p",null,"The package store should be on the same drive and filesystem as installations,\notherwise packages will be copied, not linked. This is due to a limitation in\nhow hard linking works, in that a file on one filesystem cannot address a\nlocation in another. See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/712"},"Issue #712")," for more details."),(0,i.kt)("p",null,"pnpm functions differently in the 2 cases below:"),(0,i.kt)("h3",{id:"store-path-is-specified"},"Store path is specified"),(0,i.kt)("p",null,"If the store path is specified via ",(0,i.kt)("a",{parentName:"p",href:"/pnpm.github.io/pt/next/configuring"},"the store config"),", then copying\noccurs between the store and any projects that are on a different disk."),(0,i.kt)("p",null,"If you run ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install")," on disk ",(0,i.kt)("inlineCode",{parentName:"p"},"A"),", then the pnpm store must be on disk ",(0,i.kt)("inlineCode",{parentName:"p"},"A"),".\nIf the pnpm store is located on disk ",(0,i.kt)("inlineCode",{parentName:"p"},"B"),", then all required packages will be\ndirectly copied to the project location instead of being linked. This severely\ninhibits the storage and performance benefits of pnpm."),(0,i.kt)("h3",{id:"store-path-is-not-specified"},"Store path is NOT specified"),(0,i.kt)("p",null,"If the store path is not set, then multiple stores are created (one per drive or\nfilesystem)."),(0,i.kt)("p",null,"If installation is run on disk ",(0,i.kt)("inlineCode",{parentName:"p"},"A"),", the store will be created on ",(0,i.kt)("inlineCode",{parentName:"p"},"A"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},".pnpm-store")," under the filesystem root.  If later the installation is run on\ndisk ",(0,i.kt)("inlineCode",{parentName:"p"},"B"),", an independent store will be created on ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," at ",(0,i.kt)("inlineCode",{parentName:"p"},".pnpm-store"),". The\nprojects would still maintain the benefits of pnpm, but each drive may have\nredundant packages."),(0,i.kt)("h2",{id:"what-does-pnpm-store-prune-do-is-it-harmful"},"What does ",(0,i.kt)("inlineCode",{parentName:"h2"},"pnpm store prune")," do? Is it harmful?"),(0,i.kt)("p",null,"The command ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm store prune")," removes ",(0,i.kt)("em",{parentName:"p"},"unreferenced packages"),"."),(0,i.kt)("p",null,"Unreferenced packages are packages that are not used by any projects on the\nsystem. Packages can become unreferenced after most installation operations, for\ninstance when dependencies are made redundant."),(0,i.kt)("p",null,"For example, during ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install"),", package ",(0,i.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," is updated to\n",(0,i.kt)("inlineCode",{parentName:"p"},"foo@1.0.1"),". pnpm will keep ",(0,i.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," in the store, as it does not\nautomatically remove packages. If package ",(0,i.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," is not used by any other\nproject on the system, it becomes unreferenced. Running ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm store prune")," would\nremove ",(0,i.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," from the store."),(0,i.kt)("p",null,"Running ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm store prune")," is not harmful and has no side effects on your\nprojects. If future installations require removed packages, pnpm will download\nthem again."),(0,i.kt)("p",null,"It is best practice to run ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm store prune")," occasionally to clean up the\nstore, but not too frequently. Sometimes, unreferenced packages become required\nagain. This could occur when switching branches and installing older\ndependencies, in which case pnpm would need to re-download all removed packages,\nbriefly slowing down the installation process."),(0,i.kt)("h2",{id:"what-does-pnpm-stand-for"},"What does ",(0,i.kt)("inlineCode",{parentName:"h2"},"pnpm")," stand for?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pnpm")," stands for ",(0,i.kt)("inlineCode",{parentName:"p"},"performant npm"),".\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rstacruz/"},"@rstacruz")," came up with the name."),(0,i.kt)("h2",{id:"pnpm-does-not-work-with-your-project-here"},(0,i.kt)("inlineCode",{parentName:"h2"},"pnpm")," does not work with ","<","YOUR-PROJECT-HERE>?"),(0,i.kt)("p",null,"In most cases it means that one of the dependencies require packages not\ndeclared in ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),". It is a common mistake caused by flat\n",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules"),". If this happens, this is an error in the dependency and the\ndependency should be fixed. That might take time though, so pnpm supports\nworkarounds to make the buggy packages work."),(0,i.kt)("h3",{id:"solution-1"},"Solution 1"),(0,i.kt)("p",null,"In the following example, a dependency does ",(0,i.kt)("strong",{parentName:"p"},"not")," have the ",(0,i.kt)("inlineCode",{parentName:"p"},"iterall")," module in\nits own list of deps."),(0,i.kt)("p",null,"The easiest solution to resolve missing dependencies of the buggy packages is to\n",(0,i.kt)("strong",{parentName:"p"},"add ",(0,i.kt)("inlineCode",{parentName:"strong"},"iterall")," as a dependency to our project's ",(0,i.kt)("inlineCode",{parentName:"strong"},"package.json")),"."),(0,i.kt)("p",null,"You can do so, by installing it via ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm add iterall"),", and will be\nautomatically added to your project's ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'  "dependencies": {\n    ...\n    "iterall": "^1.2.2",\n    ...\n  }\n')),(0,i.kt)("h3",{id:"solution-2"},"Solution 2"),(0,i.kt)("p",null,"One of the solutions is to use ",(0,i.kt)("a",{parentName:"p",href:"/pnpm.github.io/pt/next/pnpmfile#hooks"},"hooks")," for adding the missing\ndependencies to the package's ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,i.kt)("p",null,"An example was ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/1043"},"Webpack Dashboard")," which wasn't working with ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm"),". It has\nsince been resolved such that it works with ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm")," now."),(0,i.kt)("p",null,"It used to throw an error:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"Error: Cannot find module 'babel-traverse'\n  at /node_modules/inspectpack@2.2.3/node_modules/inspectpack/lib/actions/parse\n")),(0,i.kt)("p",null,"The problem was that ",(0,i.kt)("inlineCode",{parentName:"p"},"babel-traverse")," was used in ",(0,i.kt)("inlineCode",{parentName:"p"},"inspectpack")," which\nwas used by ",(0,i.kt)("inlineCode",{parentName:"p"},"webpack-dashboard"),", but ",(0,i.kt)("inlineCode",{parentName:"p"},"babel-traverse")," wasn't specified in\n",(0,i.kt)("inlineCode",{parentName:"p"},"inspectpack"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),". It still worked with ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn")," because\nthey create flat ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules"),"."),(0,i.kt)("p",null,"The solution was to create a ",(0,i.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," with the following contents:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  hooks: {\n    readPackage: (pkg) => {\n      if (pkg.name === \"inspectpack\") {\n        pkg.dependencies['babel-traverse'] = '^6.26.0';\n      }\n      return pkg;\n    }\n  }\n};\n")),(0,i.kt)("p",null,"After creating a ",(0,i.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs"),", delete ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," only - there is no need\nto delete ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules"),", as pnpm hooks only affect module resolution. Then,\nrebuild the dependencies & it should be working."),(0,i.kt)("h3",{id:"solution-3"},"Solution 3"),(0,i.kt)("p",null,"In case there are too many issues, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"shamefully-hoist")," option.\nThis creates a flat ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," structure similar to the one created by ",(0,i.kt)("inlineCode",{parentName:"p"},"npm"),"\nor ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn"),", which is not recommended as avoiding this structure is the primary\npurpose of pnpm's ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," approach."),(0,i.kt)("p",null,"To use it, try ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install --shamefully-hoist"),"."))}m.isMDXComponent=!0}}]);