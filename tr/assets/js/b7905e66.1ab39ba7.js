(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{254:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(8),o=(n(0),n(318)),i={id:"motivation",title:"Motivasyon"},l={unversionedId:"motivation",id:"version-6.x/motivation",isDocsHomePage:!1,title:"Motivasyon",description:"Disk alan\u0131ndan tasarruf etmek ve kurulum h\u0131z\u0131n\u0131 art\u0131rmak",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-6.x/motivation.md",slug:"/motivation",permalink:"/tr/motivation",editUrl:"https://crowdin.com/project/pnpm/tr",version:"6.x",sidebar:"version-6.x/docs",next:{title:"Installation",permalink:"/tr/installation"}},s=[{value:"Disk alan\u0131ndan tasarruf etmek ve kurulum h\u0131z\u0131n\u0131 art\u0131rmak",id:"disk-alan\u0131ndan-tasarruf-etmek-ve-kurulum-h\u0131z\u0131n\u0131-art\u0131rmak",children:[]},{value:"Creating a non-flat node_modules directory",id:"creating-a-non-flat-node_modules-directory",children:[]}],c={toc:s};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"disk-alan\u0131ndan-tasarruf-etmek-ve-kurulum-h\u0131z\u0131n\u0131-art\u0131rmak"},"Disk alan\u0131ndan tasarruf etmek ve kurulum h\u0131z\u0131n\u0131 art\u0131rmak"),Object(o.b)("p",null,"Yarn veye npm kullan\u0131rken, e\u011fer bir ba\u011f\u0131ml\u0131l\u0131\u011f\u0131 kullanan 100 projeniz varsa, disk \xfczerinde o ba\u011f\u0131ml\u0131l\u0131ktan 100 adet kopya kay\u0131tl\u0131 olur. Pnpm ile ba\u011f\u0131ml\u0131l\u0131k, i\xe7eri\u011fi adreslenebilir bir depoda kaydolur, bu nedenle:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"If you depend on different versions of the dependency, only the files that differ are added to the store. For instance, if it has 100 files, and a new version has a change in only one of those files, ",Object(o.b)("inlineCode",{parentName:"li"},"pnpm update")," will only add 1 new file to the store, instead of cloning the entire dependency just for the singular change."),Object(o.b)("li",{parentName:"ol"},"All the files are saved in a single place on the disk. When packages are installed, their files are hard-linked from that single place, consuming no additional disk space. This allows you to share dependencies of the same version across projects.")),Object(o.b)("p",null,"As a result, you save a lot of space on your disk proportional to the number of projects and dependencies, and you have a lot faster installations!"),Object(o.b)("h2",{id:"creating-a-non-flat-node_modules-directory"},"Creating a non-flat node_modules directory"),Object(o.b)("p",null,"When installing dependencies with npm, all packages are hoisted to the root of the modules directory. As a result, source code has access to dependencies that are not added as dependencies to the project."),Object(o.b)("p",null,"pnpm uses symlinks to add only the direct dependencies of the project into the root of the modules directory. If you'd like more details about the unique ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules")," structure that pnpm creates and why it works fine with the Node.js ecosystem, read:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/blog/2020/05/27/flat-node-modules-is-not-the-only-way"},"Flat node_modules is not the only way")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/tr/symlinked-node-modules-structure"},"Symlinked node_modules structure"))))}d.isMDXComponent=!0},318:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),d=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,f=u["".concat(i,".").concat(m)]||u[m]||p[m]||o;return n?a.a.createElement(f,l(l({ref:t},c),{},{components:n})):a.a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);