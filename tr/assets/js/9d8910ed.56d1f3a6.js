(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{228:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return d}));var a=n(3),l=n(8),r=(n(0),n(318)),i={id:"pnpm-install-pkg",title:"pnpm install <pkg>",original_id:"pnpm-install-pkg"},p={unversionedId:"pnpm-install-pkg",id:"version-4.x/pnpm-install-pkg",isDocsHomePage:!1,title:"pnpm install <pkg>",description:"Bir paketi ve ba\u011f\u0131ml\u0131 oldu\u011fu paketleri y\xfckler. By default, any new package is installed as a prod dependency.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-4.x/pnpm-install-pkg.md",slug:"/pnpm-install-pkg",permalink:"/tr/4.x/pnpm-install-pkg",editUrl:"https://crowdin.com/project/pnpm/tr",version:"4.x"},b=[{value:"tl;dr",id:"tldr",children:[]},{value:"Desteklenen paket konumlar\u0131",id:"desteklenen-paket-konumlar\u0131",children:[{value:"Npm kay\u0131t defterinden y\xfckleyin",id:"npm-kay\u0131t-defterinden-y\xfckleyin",children:[]},{value:"Yerel dosya sisteminden y\xfckleyin",id:"yerel-dosya-sisteminden-y\xfckleyin",children:[]},{value:"Install from remote gzipped tarball",id:"install-from-remote-gzipped-tarball",children:[]},{value:"Git deposundan y\xfckleyin",id:"git-deposundan-y\xfckleyin",children:[]}]},{value:"Options",id:"options",children:[{value:"--save-prod, -P",id:"--save-prod--p",children:[]},{value:"--save-dev, -D",id:"--save-dev--d",children:[]},{value:"--save-optional, -O",id:"--save-optional--o",children:[]},{value:"--save-exact, -E",id:"--save-exact--e",children:[]},{value:"--save-peer",id:"--save-peer",children:[]}]}],c={toc:b};function d(e){var t=e.components,i=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Bir paketi ve ba\u011f\u0131ml\u0131 oldu\u011fu paketleri y\xfckler. By default, any new package is installed as a prod dependency."),Object(r.b)("p",null,Object(r.b)("img",{src:n(337).default})),Object(r.b)("h2",{id:"tldr"},"tl;dr"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Command"),Object(r.b)("th",{parentName:"tr",align:null},"Meaning"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"pnpm i sax")),Object(r.b)("td",{parentName:"tr",align:null},"npm package (save to ",Object(r.b)("inlineCode",{parentName:"td"},"dependencies"),")")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"pnpm i -D sax")),Object(r.b)("td",{parentName:"tr",align:null},"save to ",Object(r.b)("inlineCode",{parentName:"td"},"devDependencies"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"pnpm i -O sax")),Object(r.b)("td",{parentName:"tr",align:null},"save to ",Object(r.b)("inlineCode",{parentName:"td"},"optionalDependencies"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"pnpm i -P sax")),Object(r.b)("td",{parentName:"tr",align:null},"save to ",Object(r.b)("inlineCode",{parentName:"td"},"dependencies"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"pnpm i sax@next")),Object(r.b)("td",{parentName:"tr",align:null},"Specify tag ",Object(r.b)("inlineCode",{parentName:"td"},"next"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"pnpm i sax@3.0.0")),Object(r.b)("td",{parentName:"tr",align:null},"S\xfcr\xfcm belirt ",Object(r.b)("inlineCode",{parentName:"td"},"3.0.0"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},'pnpm i sax@">=1 <2.0"')),Object(r.b)("td",{parentName:"tr",align:null},"Specify version range")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"pnpm i user/repo")),Object(r.b)("td",{parentName:"tr",align:null},"GitHub")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"pnpm i user/repo#master")),Object(r.b)("td",{parentName:"tr",align:null},"GitHub")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"pnpm i user/repo#semver:^2.0.0")),Object(r.b)("td",{parentName:"tr",align:null},"GitHub")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"pnpm i github:user/repo")),Object(r.b)("td",{parentName:"tr",align:null},"GitHub")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"pnpm i gitlab:user/repo")),Object(r.b)("td",{parentName:"tr",align:null},"GitHub")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"pnpm i /path/to/repo")),Object(r.b)("td",{parentName:"tr",align:null},"Absolute path")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"pnpm i ./archive.tgz")),Object(r.b)("td",{parentName:"tr",align:null},"Tarball")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"pnpm i https://site.com/archive.tgz")),Object(r.b)("td",{parentName:"tr",align:null},"Tarball via HTTP")))),Object(r.b)("h2",{id:"desteklenen-paket-konumlar\u0131"},"Desteklenen paket konumlar\u0131"),Object(r.b)("p",null,"A package can be installed from different locations:"),Object(r.b)("h3",{id:"npm-kay\u0131t-defterinden-y\xfckleyin"},"Npm kay\u0131t defterinden y\xfckleyin"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"pnpm install package-name")," will install the latest version of ",Object(r.b)("inlineCode",{parentName:"p"},"package-name")," from the ",Object(r.b)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm registry"),"."),Object(r.b)("p",null,"Paketleri \u015fu \u015fekilde de kurabilirsiniz:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"tag: ",Object(r.b)("inlineCode",{parentName:"li"},"pnpm install express@nightly")),Object(r.b)("li",{parentName:"ul"},"version: ",Object(r.b)("inlineCode",{parentName:"li"},"pnpm install express@1.0.0")),Object(r.b)("li",{parentName:"ul"},"version range: ",Object(r.b)("inlineCode",{parentName:"li"},'pnpm install express@2 react@">=0.1.0 <0.2.0"'))),Object(r.b)("h3",{id:"yerel-dosya-sisteminden-y\xfckleyin"},"Yerel dosya sisteminden y\xfckleyin"),Object(r.b)("p",null,"Yerel dosya sisteminden y\xfcklemenin iki yolu vard\u0131r:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"tarball dosyas\u0131ndan (",Object(r.b)("inlineCode",{parentName:"li"},".tar"),", ",Object(r.b)("inlineCode",{parentName:"li"},".tar.gz")," veya ",Object(r.b)("inlineCode",{parentName:"li"},".tgz"),")"),Object(r.b)("li",{parentName:"ol"},"dizinden")),Object(r.b)("p",null,"Examples:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"pnpm install ./package.tgz\npnpm install ./some-directory\n")),Object(r.b)("p",null,"When you install from a directory, a symlink will be created in the current project's ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules"),", so it is the same as running ",Object(r.b)("inlineCode",{parentName:"p"},"pnpm link"),"."),Object(r.b)("h3",{id:"install-from-remote-gzipped-tarball"},"Install from remote gzipped tarball"),Object(r.b)("p",null,'The argument must start with "http://" or "https://".'),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"pnpm install https://github.com/indexzero/forever/tarball/v0.5.6\n")),Object(r.b)("h3",{id:"git-deposundan-y\xfckleyin"},"Git deposundan y\xfckleyin"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"npm install <git remote url>\n")),Object(r.b)("p",null,"Paketi, Git ile klonlayarak bar\u0131nd\u0131r\u0131lan Git sa\u011flay\u0131c\u0131s\u0131ndan y\xfckler."),Object(r.b)("p",null,"Git'ten \u015fu \u015fekilde kurabilirsiniz:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"commit: ",Object(r.b)("inlineCode",{parentName:"li"},"pnpm install kevva/is-positive#97edff6f525f192a3f83cea1944765f769ae2678")),Object(r.b)("li",{parentName:"ul"},"branch: ",Object(r.b)("inlineCode",{parentName:"li"},"pnpm install kevva/is-positive#master")),Object(r.b)("li",{parentName:"ul"},"version range: ",Object(r.b)("inlineCode",{parentName:"li"},"pnpm install kevva/is-positive#semver:^2.0.0"))),Object(r.b)("h2",{id:"options"},"Options"),Object(r.b)("h3",{id:"--save-prod--p"},"--save-prod, -P"),Object(r.b)("p",null,"This will install one or more packages in your ",Object(r.b)("inlineCode",{parentName:"p"},"dependencies"),"."),Object(r.b)("h3",{id:"--save-dev--d"},"--save-dev, -D"),Object(r.b)("p",null,"Using ",Object(r.b)("inlineCode",{parentName:"p"},"--save-dev")," or ",Object(r.b)("inlineCode",{parentName:"p"},"-D")," will install one or more packages in your ",Object(r.b)("inlineCode",{parentName:"p"},"devDependencies"),"."),Object(r.b)("h3",{id:"--save-optional--o"},"--save-optional, -O"),Object(r.b)("p",null,"Using ",Object(r.b)("inlineCode",{parentName:"p"},"--save-optional")," or ",Object(r.b)("inlineCode",{parentName:"p"},"-O")," will install one or more packages in your ",Object(r.b)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),Object(r.b)("h3",{id:"--save-exact--e"},"--save-exact, -E"),Object(r.b)("p",null,"Saved dependencies will be configured with an exact version rather than using pnpm's default semver range operator."),Object(r.b)("h3",{id:"--save-peer"},"--save-peer"),Object(r.b)("p",null,"Added in: v3.2.0"),Object(r.b)("p",null,"Using ",Object(r.b)("inlineCode",{parentName:"p"},"--save-peer")," will add one or more packages to ",Object(r.b)("inlineCode",{parentName:"p"},"peerDependencies")," and install them as dev dependencies."))}d.isMDXComponent=!0},318:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return u}));var a=n(0),l=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=l.a.createContext({}),d=function(e){var t=l.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},o=function(e){var t=d(e.components);return l.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},s=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),o=d(n),s=a,u=o["".concat(i,".").concat(s)]||o[s]||m[s]||r;return n?l.a.createElement(u,p(p({ref:t},c),{},{components:n})):l.a.createElement(u,p({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=s;var p={};for(var b in t)hasOwnProperty.call(t,b)&&(p[b]=t[b]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<r;c++)i[c]=n[c];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},337:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/pnpm-install-package-5a2978bb5d926b98518d1aa3d97b5122.svg"}}]);