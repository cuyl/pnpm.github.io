(window.webpackJsonp=window.webpackJsonp||[]).push([[227],{300:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(8),o=(n(0),n(318)),a={id:"audit",title:"pnpm audit"},l={unversionedId:"cli/audit",id:"version-5.x/cli/audit",isDocsHomePage:!1,title:"pnpm audit",description:"Added in: 4.3.0",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-5.x/cli/audit.md",slug:"/cli/audit",permalink:"/ru/5.x/cli/audit",editUrl:"https://crowdin.com/project/pnpm/ru",version:"5.x",sidebar:"version-5.x/docs",previous:{title:"pnpm install-test",permalink:"/ru/5.x/cli/install-test"},next:{title:"pnpm list",permalink:"/ru/5.x/cli/list"}},c=[{value:"Options",id:"options",children:[{value:"-- audit-level &lt;\u0441\u0435\u0440\u044c\u0435\u0437\u043d\u043e\u0441\u0442\u044c&gt;",id:"---audit-level-\u0441\u0435\u0440\u044c\u0435\u0437\u043d\u043e\u0441\u0442\u044c",children:[]},{value:"--json",id:"--json",children:[]},{value:"--dev, -D",id:"--dev--d",children:[]},{value:"--prod, -P",id:"--prod--p",children:[]},{value:"--no-optional",id:"--no-optional",children:[]}]}],p={toc:c};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Added in: 4.3.0"),Object(o.b)("p",null,"\u041f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442 \u043d\u0430\u043b\u0438\u0447\u0438\u0435 \u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0445 \u043f\u0440\u043e\u0431\u043b\u0435\u043c \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438 \u0441 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u043c\u0438 \u043f\u0430\u043a\u0435\u0442\u0430\u043c\u0438."),Object(o.b)("h2",{id:"options"},"Options"),Object(o.b)("h3",{id:"---audit-level-\u0441\u0435\u0440\u044c\u0435\u0437\u043d\u043e\u0441\u0442\u044c"},"-- audit-level ","<","\u0441\u0435\u0440\u044c\u0435\u0437\u043d\u043e\u0441\u0442\u044c",">"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Type: ",Object(o.b)("strong",{parentName:"li"},"low"),", ",Object(o.b)("strong",{parentName:"li"},"moderate"),", ",Object(o.b)("strong",{parentName:"li"},"high"),", ",Object(o.b)("strong",{parentName:"li"},"critical")),Object(o.b)("li",{parentName:"ul"},"Default: ",Object(o.b)("strong",{parentName:"li"},"low"))),Object(o.b)("p",null,"Only print advisories with severity greater than or equal to ",Object(o.b)("inlineCode",{parentName:"p"},"<severity>"),"."),Object(o.b)("h3",{id:"--json"},"--json"),Object(o.b)("p",null,"Output audit report in JSON format."),Object(o.b)("h3",{id:"--dev--d"},"--dev, -D"),Object(o.b)("p",null,"Only audit dev dependencies."),Object(o.b)("h3",{id:"--prod--p"},"--prod, -P"),Object(o.b)("p",null,"Only audit production dependencies."),Object(o.b)("h3",{id:"--no-optional"},"--no-optional"),Object(o.b)("p",null,"Don't audit ",Object(o.b)("inlineCode",{parentName:"p"},"optionalDependencies"),"."))}u.isMDXComponent=!0},318:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return O}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),u=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},s=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(n),s=r,O=d["".concat(a,".").concat(s)]||d[s]||b[s]||o;return n?i.a.createElement(O,l(l({ref:t},p),{},{components:n})):i.a.createElement(O,l({ref:t},p))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);