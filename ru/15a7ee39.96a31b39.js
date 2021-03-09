(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{411:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=o,h=u["".concat(i,".").concat(b)]||u[b]||d[b]||r;return n?a.a.createElement(h,l(l({ref:t},s),{},{components:n})):a.a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var o=n(3),a=n(7),r=(n(0),n(411)),i={title:"Node-Modules configuration options with pnpm",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://pbs.twimg.com/profile_images/1143606083262586880/EW2GCFKK_400x400.jpg"},l={permalink:"/ru/blog/2020/10/17/node-modules-configuration-options-with-pnpm",source:"@site/i18n/ru/docusaurus-plugin-content-blog/2020-10-17-node-modules-configuration-options-with-pnpm.md",description:"There are many ways to create a nodemodules directory. Your goal must be to create the most strict one but if that is not possible, there are options to make a loose nodemodules as well.",date:"2020-10-17T00:00:00.000Z",tags:[],title:"Node-Modules configuration options with pnpm",readingTime:1.86,truncated:!0,nextItem:{title:"Flat node_modules is not the only way",permalink:"/ru/blog/2020/05/27/flat-node-modules-is-not-the-only-way"}},c=[{value:"The default setup",id:"the-default-setup",children:[]},{value:"Plug&#39;n&#39;Play. The strictest configuration",id:"plugnplay-the-strictest-configuration",children:[]},{value:"A strict, traditional modules directory",id:"a-strict-traditional-modules-directory",children:[]},{value:"The worst case - hoisting to the root",id:"the-worst-case---hoisting-to-the-root",children:[]}],s={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"There are many ways to create a node_modules directory. Your goal must be to create the most strict one but if that is not possible, there are options to make a loose node_modules as well."),Object(r.b)("h2",{id:"the-default-setup"},"The default setup"),Object(r.b)("p",null,"By default, pnpm v5 will create a semi-strict node_modules. Semi-strict means that your application will only be able to require packages that are added as dependencies to ",Object(r.b)("inlineCode",{parentName:"p"},"package.json")," (with a few exceptions). However, your dependencies will be able to access any packages."),Object(r.b)("p",null,"The default configuration looks like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ini"},"; All packages are hoisted to node_modules/.pnpm/node_modules\nhoist-pattern[]=*\n\n; All types are hoisted to the root in order to make TypeScript happy\npublic-hoist-pattern[]=*types*\n\n; All ESLint-related packages are hoisted to the root as well\npublic-hoist-pattern[]=*eslint*\n")),Object(r.b)("h2",{id:"plugnplay-the-strictest-configuration"},"Plug'n'Play. The strictest configuration"),Object(r.b)("p",null,"pnpm supports ",Object(r.b)("a",{parentName:"p",href:"https://yarnpkg.com/features/pnp"},"Yarn's Plug'n'Play")," since v5.9. With PnP, both your application and the dependencies of your application will have access only to their declared dependencies. This is even stricter then setting ",Object(r.b)("inlineCode",{parentName:"p"},"hoist=false")," because inside a monorepo, you're application will not be able to access even the dependencies of the root project."),Object(r.b)("p",null,"To use Plug'n'Play, set these settings:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ini"},"node-linker=pnp\nsymlink=false\n")),Object(r.b)("h2",{id:"a-strict-traditional-modules-directory"},"A strict, traditional modules directory"),Object(r.b)("p",null,"If you are not ready to use PnP yet, you can still be strict and only allow packages to access their own dependencies by setting the hoist configuration to false:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ini"},"hoist=false\n")),Object(r.b)("p",null,"However, if some of your dependencies are trying to access packages that they don't have in dependencies, you have two options:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Create a ",Object(r.b)("inlineCode",{parentName:"p"},"pnpmfile.js")," and use a ",Object(r.b)("a",{parentName:"p",href:"/en/pnpmfile"},"hook")," to add the missing dependency to the package's manifest.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Add a pattern to the ",Object(r.b)("inlineCode",{parentName:"p"},"hoist-pattern")," setting. For instance, if the not found module is ",Object(r.b)("inlineCode",{parentName:"p"},"babel-core"),", add the following setting to ",Object(r.b)("inlineCode",{parentName:"p"},".npmrc"),":"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-ini"},"hoist-pattern[]=babel-core\n")))),Object(r.b)("h2",{id:"the-worst-case---hoisting-to-the-root"},"The worst case - hoisting to the root"),Object(r.b)("p",null,"Some tools might not work even with the default configuration of pnpm, which hoists everything to the root of the virtual store and some packages to the root. In this case, you can hoist either everything or a subset of dependencies to the root of the modules directory."),Object(r.b)("p",null,"Hoisting everything to the the root of node_modules:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ini"},"shamefully-hoist=true\n")),Object(r.b)("p",null,"Hoisting only packages that match a pattern:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ini"},"public-hoist-pattern[]=babel-*\n")))}p.isMDXComponent=!0}}]);