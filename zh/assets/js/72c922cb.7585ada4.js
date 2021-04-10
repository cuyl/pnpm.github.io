(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{184:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return p})),r.d(n,"metadata",(function(){return i})),r.d(n,"toc",(function(){return a})),r.d(n,"default",(function(){return l}));var t=r(3),o=r(8),c=(r(0),r(318)),p={id:"configuring",title:"\u914d\u7f6e"},i={unversionedId:"configuring",id:"version-5.x/configuring",isDocsHomePage:!1,title:"\u914d\u7f6e",description:"pnpm \u4f7f\u7528 npm \u7684\u914d\u7f6e \u683c\u5f0f\u3002 \u56e0\u6b64\uff0c\u60a8\u8bbe\u7f6e\u914d\u7f6e\u7684\u65b9\u5f0f\u5e94\u8be5\u4e0e npm \u76f8\u540c\u3002 \u4f8b\u5982\uff0c",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-5.x/configuring.md",slug:"/configuring",permalink:"/zh/5.x/configuring",editUrl:"https://crowdin.com/project/pnpm/zh-CN",version:"5.x",sidebar:"version-5.x/docs",previous:{title:"pnpx CLI",permalink:"/zh/5.x/pnpx-cli"},next:{title:"\u8fc7\u6ee4",permalink:"/zh/5.x/filtering"}},a=[],u={toc:a};function l(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(t.a)({},u,r,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"pnpm \u4f7f\u7528 ",Object(c.b)("a",{parentName:"p",href:"https://docs.npmjs.com/misc/config"},"npm \u7684\u914d\u7f6e")," \u683c\u5f0f\u3002 \u56e0\u6b64\uff0c\u60a8\u8bbe\u7f6e\u914d\u7f6e\u7684\u65b9\u5f0f\u5e94\u8be5\u4e0e npm \u76f8\u540c\u3002 \u4f8b\u5982\uff0c"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"pnpm config set store-dir /path/to/.pnpm-store\n")),Object(c.b)("p",null,"\u5982\u679c\u6ca1\u6709\u914d\u7f6e store \uff0c\u90a3\u4e48pnpm \u5c06\u81ea\u52a8\u5728\u540c\u4e00\u78c1\u76d8\u4e0a\u521b\u5efa store\u3002 \u5982\u679c\u60a8\u9700\u8981 pnpm \u8de8\u8d8a\u591a\u4e2a\u786c\u76d8\u6216\u6587\u4ef6\u7cfb\u7edf\uff0c\u8bf7\u9605\u8bfb ",Object(c.b)("a",{parentName:"p",href:"/zh/5.x/faq#does-pnpm-work-across-multiple-hard-drives-or-filesystems"},"\u5e38\u89c1\u95ee\u9898")),Object(c.b)("p",null,"\u6b64\u5916\uff0cpnpm \u4f7f\u7528\u4e0e npm \u76f8\u540c\u7684\u914d\u7f6e\u8fdb\u884c\u5b89\u88c5\u3002 \u5982\u679c\u60a8\u6709\u4e00\u4e2a\u79c1\u6709\u6e90\u5e76\u4e14 npm \u88ab\u914d\u7f6e\u4f7f\u7528\u5b83\uff0c pnpm \u5e94\u8be5\u4e0d\u9700\u8981\u989d\u5916\u7684\u914d\u7f6e\u4e5f\u80fd\u591f\u6388\u6743\u8bf7\u6c42\u3002"),Object(c.b)("p",null,"\u9664\u4e86\u8fd9\u4e9b\u9009\u9879\u5916\uff0c pnpm \u4e5f\u5141\u8bb8\u60a8\u4f7f\u7528\u6240\u6709\u6807\u8bb0\u4e3a\u4f5c\u9009\u9879\u7684\u53c2\u6570(\u4f8b\u5982 ",Object(c.b)("inlineCode",{parentName:"p"},"--filter")," \u6216 ",Object(c.b)("inlineCode",{parentName:"p"},"--workspace concurrency"),") \uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"workspace-concurrency = 1\nfilter = @my-scope/*\n")),Object(c.b)("p",null,"\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u9605 ",Object(c.b)("a",{parentName:"p",href:"/zh/5.x/cli/config"},Object(c.b)("inlineCode",{parentName:"a"},"config")," \u547d\u4ee4"),"\u3002"))}l.isMDXComponent=!0},318:function(e,n,r){"use strict";r.d(n,"a",(function(){return s})),r.d(n,"b",(function(){return b}));var t=r(0),o=r.n(t);function c(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function p(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?p(Object(r),!0).forEach((function(n){c(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var n=o.a.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},s=function(e){var n=l(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,c=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=l(r),m=t,b=s["".concat(p,".").concat(m)]||s[m]||f[m]||c;return r?o.a.createElement(b,i(i({ref:n},u),{},{components:r})):o.a.createElement(b,i({ref:n},u))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var c=r.length,p=new Array(c);p[0]=m;var i={};for(var a in n)hasOwnProperty.call(n,a)&&(i[a]=n[a]);i.originalType=e,i.mdxType="string"==typeof e?e:t,p[1]=i;for(var u=2;u<c;u++)p[u]=r[u];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);