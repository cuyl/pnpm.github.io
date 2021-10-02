"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1066],{9613:(I,i,l)=>{l.d(i,{Zo:()=>m,kt:()=>Z});var t=l(9496);function e(I,i,l){return i in I?Object.defineProperty(I,i,{value:l,enumerable:!0,configurable:!0,writable:!0}):I[i]=l,I}function a(I,i){var l=Object.keys(I);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(I);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(I,i).enumerable}))),l.push.apply(l,t)}return l}function n(I){for(var i=1;i<arguments.length;i++){var l=null!=arguments[i]?arguments[i]:{};i%2?a(Object(l),!0).forEach((function(i){e(I,i,l[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(I,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(i){Object.defineProperty(I,i,Object.getOwnPropertyDescriptor(l,i))}))}return I}function g(I,i){if(null==I)return{};var l,t,e=function(I,i){if(null==I)return{};var l,t,e={},a=Object.keys(I);for(t=0;t<a.length;t++)l=a[t],i.indexOf(l)>=0||(e[l]=I[l]);return e}(I,i);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(I);for(t=0;t<a.length;t++)l=a[t],i.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(I,l)&&(e[l]=I[l])}return e}var d=t.createContext({}),r=function(I){var i=t.useContext(d),l=i;return I&&(l="function"==typeof I?I(i):n(n({},i),I)),l},m=function(I){var i=r(I.components);return t.createElement(d.Provider,{value:i},I.children)},N={inlineCode:"code",wrapper:function(I){var i=I.children;return t.createElement(t.Fragment,{},i)}},j=t.forwardRef((function(I,i){var l=I.components,e=I.mdxType,a=I.originalType,d=I.parentName,m=g(I,["components","mdxType","originalType","parentName"]),j=r(l),Z=e,p=j["".concat(d,".").concat(Z)]||j[Z]||N[Z]||a;return l?t.createElement(p,n(n({ref:i},m),{},{components:l})):t.createElement(p,n({ref:i},m))}));function Z(I,i){var l=arguments,e=i&&i.mdxType;if("string"==typeof I||e){var a=l.length,n=new Array(a);n[0]=j;var g={};for(var d in i)hasOwnProperty.call(i,d)&&(g[d]=i[d]);g.originalType=I,g.mdxType="string"==typeof I?I:e,n[1]=g;for(var r=2;r<a;r++)n[r]=l[r];return t.createElement.apply(null,n)}return t.createElement.apply(null,l)}j.displayName="MDXCreateElement"},413:(I,i,l)=>{l.r(i),l.d(i,{frontMatter:()=>g,contentTitle:()=>d,metadata:()=>r,toc:()=>m,default:()=>j});var t=l(98),e=l(6862),a=(l(9496),l(9613)),n=["components"],g={},d="Benchmarks of JavaScript Package Managers",r={type:"mdx",permalink:"/pnpm.github.io/tr/benchmarks",source:"@site/src/pages/benchmarks.md"},m=[{value:"Lots of Files",id:"lots-of-files",children:[]}],N={toc:m};function j(I){var i=I.components,g=(0,e.Z)(I,n);return(0,a.kt)("wrapper",(0,t.Z)({},N,g,{components:i,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"benchmarks-of-javascript-package-managers"},"Benchmarks of JavaScript Package Managers"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Last benchmarked at"),": ",(0,a.kt)("em",{parentName:"p"},"Oct 2, 2021, 3:31 AM")," (",(0,a.kt)("em",{parentName:"p"},"daily")," updated)."),(0,a.kt)("p",null,"This benchmark compares the performance of npm, pnpm, and Yarn (both regular and PnP variant)."),(0,a.kt)("p",null,"Here's a quick explanation of how these tests could apply to the real world:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"clean install"),": How long it takes to run a totally fresh install: no lockfile present, no packages in the cache, no ",(0,a.kt)("inlineCode",{parentName:"li"},"node_modules")," folder."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"with cache"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"with lockfile"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"with node_modules"),": After the first install is done, the install command is run again."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"with cache"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"with lockfile"),": When a repo is fetched by a developer and installation is first run."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"with cache"),": Same as the one above, but the package manager doesn't have a lockfile to work from."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"with lockfile"),": When an installation runs on a CI server."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"with cache"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"with node_modules"),": The lockfile is deleted and the install command is run again."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"with node_modules"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"with lockfile"),": The package cache is deleted and the install command is run again."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"with node_modules"),": The package cache and the lockfile is deleted and the install command is run again."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"update"),": Updating your dependencies by changing the version in the ",(0,a.kt)("inlineCode",{parentName:"li"},"package.json")," and running the install command again.")),(0,a.kt)("h2",{id:"lots-of-files"},"Lots of Files"),(0,a.kt)("p",null,"The app's ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm.github.io/blob/main/benchmarks/fixtures/alotta-files/package.json"},"here")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"action"),(0,a.kt)("th",{parentName:"tr",align:null},"cache"),(0,a.kt)("th",{parentName:"tr",align:null},"lockfile"),(0,a.kt)("th",{parentName:"tr",align:null},"node_modules"),(0,a.kt)("th",{parentName:"tr",align:null},"npm"),(0,a.kt)("th",{parentName:"tr",align:null},"pnpm"),(0,a.kt)("th",{parentName:"tr",align:null},"Yarn PnP"),(0,a.kt)("th",{parentName:"tr",align:null},"Yarn nm"),(0,a.kt)("th",{parentName:"tr",align:null},"Yarn pnpm"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"install"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"49.2s"),(0,a.kt)("td",{parentName:"tr",align:null},"18.5s"),(0,a.kt)("td",{parentName:"tr",align:null},"28.6s"),(0,a.kt)("td",{parentName:"tr",align:null},"40.9s"),(0,a.kt)("td",{parentName:"tr",align:null},"37.1s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"install"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,a.kt)("td",{parentName:"tr",align:null},"2.1s"),(0,a.kt)("td",{parentName:"tr",align:null},"1.5s"),(0,a.kt)("td",{parentName:"tr",align:null},"n/a"),(0,a.kt)("td",{parentName:"tr",align:null},"2.3s"),(0,a.kt)("td",{parentName:"tr",align:null},"2.1s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"install"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"12.2s"),(0,a.kt)("td",{parentName:"tr",align:null},"4.7s"),(0,a.kt)("td",{parentName:"tr",align:null},"1.7s"),(0,a.kt)("td",{parentName:"tr",align:null},"12.5s"),(0,a.kt)("td",{parentName:"tr",align:null},"11.7s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"install"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"17.2s"),(0,a.kt)("td",{parentName:"tr",align:null},"8.1s"),(0,a.kt)("td",{parentName:"tr",align:null},"7.7s"),(0,a.kt)("td",{parentName:"tr",align:null},"18.4s"),(0,a.kt)("td",{parentName:"tr",align:null},"16.3s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"install"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"29.9s"),(0,a.kt)("td",{parentName:"tr",align:null},"15.8s"),(0,a.kt)("td",{parentName:"tr",align:null},"21.9s"),(0,a.kt)("td",{parentName:"tr",align:null},"32.6s"),(0,a.kt)("td",{parentName:"tr",align:null},"28.9s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"install"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,a.kt)("td",{parentName:"tr",align:null},"19.6s"),(0,a.kt)("td",{parentName:"tr",align:null},"2s"),(0,a.kt)("td",{parentName:"tr",align:null},"n/a"),(0,a.kt)("td",{parentName:"tr",align:null},"8.3s"),(0,a.kt)("td",{parentName:"tr",align:null},"6.8s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"install"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,a.kt)("td",{parentName:"tr",align:null},"2.1s"),(0,a.kt)("td",{parentName:"tr",align:null},"1.5s"),(0,a.kt)("td",{parentName:"tr",align:null},"n/a"),(0,a.kt)("td",{parentName:"tr",align:null},"22.8s"),(0,a.kt)("td",{parentName:"tr",align:null},"18.1s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"install"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,a.kt)("td",{parentName:"tr",align:null},"20.4s"),(0,a.kt)("td",{parentName:"tr",align:null},"7.1s"),(0,a.kt)("td",{parentName:"tr",align:null},"n/a"),(0,a.kt)("td",{parentName:"tr",align:null},"28.8s"),(0,a.kt)("td",{parentName:"tr",align:null},"23.9s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"update"),(0,a.kt)("td",{parentName:"tr",align:null},"n/a"),(0,a.kt)("td",{parentName:"tr",align:null},"n/a"),(0,a.kt)("td",{parentName:"tr",align:null},"n/a"),(0,a.kt)("td",{parentName:"tr",align:null},"2.1s"),(0,a.kt)("td",{parentName:"tr",align:null},"13.5s"),(0,a.kt)("td",{parentName:"tr",align:null},"35.8s"),(0,a.kt)("td",{parentName:"tr",align:null},"43.2s"),(0,a.kt)("td",{parentName:"tr",align:null},"38.9s")))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Graph of the alotta-files results",src:l(2005).Z})))}j.isMDXComponent=!0},2005:(I,i,l)=>{l.d(i,{Z:()=>t});const t="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMwMCAzNzcuNSI+CiAgPHN0eWxlPgogICAgLmZvbnQgeyBmb250LWZhbWlseTogc2Fucy1zZXJpZjsgfQogICAgLnMzIHsgZm9udC1zaXplOiAzcHg7IH0KICAgIC5zNCB7IGZvbnQtc2l6ZTogNHB4OyB9CiAgICAuczUgeyBmb250LXNpemU6IDVweDsgfQogICAgLmxpbmUgeyBzdHJva2U6ICNjYWNhY2E7IH0KICAgIC53aWR0aCB7IHN0cm9rZS13aWR0aDogMC41OyB9CiAgICAudGV4dCB7IGZpbGw6ICM4ODg7IH0KICA8L3N0eWxlPgogIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIzMDAiIGhlaWdodD0iMzc3LjUiIGZpbGw9IiNmZmYiPjwvcmVjdD4KICA8Y2lyY2xlIGN4PSI0NCIgY3k9IjYiIHI9IjQiIGZpbGw9IiNjZDM3MzEiPjwvY2lyY2xlPgogIDx0ZXh0IHg9IjQ0IiB5PSIxNiIgY2xhc3M9ImZvbnQgczQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPm5wbTwvdGV4dD4KICA8dGV4dCB4PSI0NCIgeT0iMjAiIGNsYXNzPSJmb250IHMzIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj52Ny4yNC4xPC90ZXh0PgogIDxjaXJjbGUgY3g9IjYyIiBjeT0iNiIgcj0iNCIgZmlsbD0iI2ZiYWUwMCI+PC9jaXJjbGU+CiAgPHRleHQgeD0iNjIiIHk9IjE2IiBjbGFzcz0iZm9udCBzNCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+cG5wbTwvdGV4dD4KICA8dGV4dCB4PSI2MiIgeT0iMjAiIGNsYXNzPSJmb250IHMzIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj52Ni4xNi4wPC90ZXh0PgogIDxjaXJjbGUgY3g9IjgwIiBjeT0iNiIgcj0iNCIgZmlsbD0iIzI0OGViZCI+PC9jaXJjbGU+CiAgPHRleHQgeD0iODAiIHk9IjE2IiBjbGFzcz0iZm9udCBzNCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+WWFybiBQblA8L3RleHQ+CiAgPHRleHQgeD0iODAiIHk9IjIwIiBjbGFzcz0iZm9udCBzMyIgdGV4dC1hbmNob3I9Im1pZGRsZSI+djMuMC4yPC90ZXh0PgogIDxjaXJjbGUgY3g9Ijk4IiBjeT0iNiIgcj0iNCIgZmlsbD0iIzI0OGViZCI+PC9jaXJjbGU+CiAgPHRleHQgeD0iOTgiIHk9IjE2IiBjbGFzcz0iZm9udCBzNCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+WWFybiBubTwvdGV4dD4KICA8dGV4dCB4PSI5OCIgeT0iMjAiIGNsYXNzPSJmb250IHMzIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj52My4wLjI8L3RleHQ+CiAgPGNpcmNsZSBjeD0iMTE2IiBjeT0iNiIgcj0iNCIgZmlsbD0iIzI0OGViZCI+PC9jaXJjbGU+CiAgPHRleHQgeD0iMTE2IiB5PSIxNiIgY2xhc3M9ImZvbnQgczQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPllhcm4gcG5wbTwvdGV4dD4KICA8dGV4dCB4PSIxMTYiIHk9IjIwIiBjbGFzcz0iZm9udCBzMyIgdGV4dC1hbmNob3I9Im1pZGRsZSI+djMuMC4yPC90ZXh0PgogIDx0ZXh0IHg9IjQwIiB5PSIyOCIgY2xhc3M9ImZvbnQgczUgdGV4dCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MDwvdGV4dD4KICA8dGV4dCB4PSI0MCIgeT0iMzY4LjUiIGNsYXNzPSJmb250IHM1IHRleHQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjA8L3RleHQ+CiAgPGxpbmUgeDE9IjkwIiB5MT0iMzEiIHgyPSI5MCIgeTI9IjM2My41IiBjbGFzcz0ibGluZSB3aWR0aCI+PC9saW5lPgogIDx0ZXh0IHg9IjkwIiB5PSIyOCIgY2xhc3M9ImZvbnQgczUgdGV4dCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTA8L3RleHQ+CiAgPHRleHQgeD0iOTAiIHk9IjM2OC41IiBjbGFzcz0iZm9udCBzNSB0ZXh0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4xMDwvdGV4dD4KICA8bGluZSB4MT0iMTQwIiB5MT0iMzEiIHgyPSIxNDAiIHkyPSIzNjMuNSIgY2xhc3M9ImxpbmUgd2lkdGgiPjwvbGluZT4KICA8dGV4dCB4PSIxNDAiIHk9IjI4IiBjbGFzcz0iZm9udCBzNSB0ZXh0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4yMDwvdGV4dD4KICA8dGV4dCB4PSIxNDAiIHk9IjM2OC41IiBjbGFzcz0iZm9udCBzNSB0ZXh0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4yMDwvdGV4dD4KICA8bGluZSB4MT0iMTkwIiB5MT0iMzEiIHgyPSIxOTAiIHkyPSIzNjMuNSIgY2xhc3M9ImxpbmUgd2lkdGgiPjwvbGluZT4KICA8dGV4dCB4PSIxOTAiIHk9IjI4IiBjbGFzcz0iZm9udCBzNSB0ZXh0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4zMDwvdGV4dD4KICA8dGV4dCB4PSIxOTAiIHk9IjM2OC41IiBjbGFzcz0iZm9udCBzNSB0ZXh0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj4zMDwvdGV4dD4KICA8bGluZSB4MT0iMjQwIiB5MT0iMzEiIHgyPSIyNDAiIHkyPSIzNjMuNSIgY2xhc3M9ImxpbmUgd2lkdGgiPjwvbGluZT4KICA8dGV4dCB4PSIyNDAiIHk9IjI4IiBjbGFzcz0iZm9udCBzNSB0ZXh0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj40MDwvdGV4dD4KICA8dGV4dCB4PSIyNDAiIHk9IjM2OC41IiBjbGFzcz0iZm9udCBzNSB0ZXh0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj40MDwvdGV4dD4KICA8bGluZSB4MT0iMjkwIiB5MT0iMzEiIHgyPSIyOTAiIHkyPSIzNjMuNSIgY2xhc3M9ImxpbmUgd2lkdGgiPjwvbGluZT4KICA8dGV4dCB4PSIyOTAiIHk9IjI4IiBjbGFzcz0iZm9udCBzNSB0ZXh0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj41MDwvdGV4dD4KICA8dGV4dCB4PSIyOTAiIHk9IjM2OC41IiBjbGFzcz0iZm9udCBzNSB0ZXh0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj41MDwvdGV4dD4KICA8dGV4dCB4PSIyOTAiIHk9IjIwIiBjbGFzcz0iZm9udCBzNCB0ZXh0IiBmb250LXN0eWxlPSJpdGFsaWMiIHRleHQtYW5jaG9yPSJlbmQiPkluc3RhbGxhdGlvbiB0aW1lIGluIHNlY29uZHMgKGxvd2VyIGlzIGJldHRlcik8L3RleHQ+CiAgPHJlY3QgeD0iNDAiIHk9IjM1IiB3aWR0aD0iMjQ2IiBoZWlnaHQ9IjYiIGZpbGw9IiNjZDM3MzEiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSI0MS41IiB3aWR0aD0iOTMiIGhlaWdodD0iNiIgZmlsbD0iI2ZiYWUwMCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjQ4IiB3aWR0aD0iMTQzIiBoZWlnaHQ9IjYiIGZpbGw9IiMyNDhlYmQiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSI1NC41IiB3aWR0aD0iMjA1IiBoZWlnaHQ9IjYiIGZpbGw9IiMyNDhlYmQiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSI2MSIgd2lkdGg9IjE4NiIgaGVpZ2h0PSI2IiBmaWxsPSIjMjQ4ZWJkIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iNzEuNSIgd2lkdGg9IjExIiBoZWlnaHQ9IjYiIGZpbGw9IiNjZDM3MzEiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSI3OCIgd2lkdGg9IjgiIGhlaWdodD0iNiIgZmlsbD0iI2ZiYWUwMCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9Ijg0LjUiIHdpZHRoPSIwIiBoZWlnaHQ9IjYiIGZpbGw9IiMyNDhlYmQiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSI5MSIgd2lkdGg9IjEyIiBoZWlnaHQ9IjYiIGZpbGw9IiMyNDhlYmQiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSI5Ny41IiB3aWR0aD0iMTEiIGhlaWdodD0iNiIgZmlsbD0iIzI0OGViZCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjEwOCIgd2lkdGg9IjYxIiBoZWlnaHQ9IjYiIGZpbGw9IiNjZDM3MzEiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIxMTQuNSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjYiIGZpbGw9IiNmYmFlMDAiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIxMjEiIHdpZHRoPSI5IiBoZWlnaHQ9IjYiIGZpbGw9IiMyNDhlYmQiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIxMjcuNSIgd2lkdGg9IjYzIiBoZWlnaHQ9IjYiIGZpbGw9IiMyNDhlYmQiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIxMzQiIHdpZHRoPSI1OSIgaGVpZ2h0PSI2IiBmaWxsPSIjMjQ4ZWJkIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMTQ0LjUiIHdpZHRoPSI4NiIgaGVpZ2h0PSI2IiBmaWxsPSIjY2QzNzMxIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMTUxIiB3aWR0aD0iNDEiIGhlaWdodD0iNiIgZmlsbD0iI2ZiYWUwMCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjE1Ny41IiB3aWR0aD0iMzkiIGhlaWdodD0iNiIgZmlsbD0iIzI0OGViZCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjE2NCIgd2lkdGg9IjkyIiBoZWlnaHQ9IjYiIGZpbGw9IiMyNDhlYmQiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIxNzAuNSIgd2lkdGg9IjgyIiBoZWlnaHQ9IjYiIGZpbGw9IiMyNDhlYmQiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIxODEiIHdpZHRoPSIxNTAiIGhlaWdodD0iNiIgZmlsbD0iI2NkMzczMSIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjE4Ny41IiB3aWR0aD0iNzkiIGhlaWdodD0iNiIgZmlsbD0iI2ZiYWUwMCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjE5NCIgd2lkdGg9IjExMCIgaGVpZ2h0PSI2IiBmaWxsPSIjMjQ4ZWJkIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMjAwLjUiIHdpZHRoPSIxNjMiIGhlaWdodD0iNiIgZmlsbD0iIzI0OGViZCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjIwNyIgd2lkdGg9IjE0NSIgaGVpZ2h0PSI2IiBmaWxsPSIjMjQ4ZWJkIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMjE3LjUiIHdpZHRoPSI5OCIgaGVpZ2h0PSI2IiBmaWxsPSIjY2QzNzMxIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMjI0IiB3aWR0aD0iMTAiIGhlaWdodD0iNiIgZmlsbD0iI2ZiYWUwMCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjIzMC41IiB3aWR0aD0iMCIgaGVpZ2h0PSI2IiBmaWxsPSIjMjQ4ZWJkIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMjM3IiB3aWR0aD0iNDIiIGhlaWdodD0iNiIgZmlsbD0iIzI0OGViZCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjI0My41IiB3aWR0aD0iMzQiIGhlaWdodD0iNiIgZmlsbD0iIzI0OGViZCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjI1NCIgd2lkdGg9IjExIiBoZWlnaHQ9IjYiIGZpbGw9IiNjZDM3MzEiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIyNjAuNSIgd2lkdGg9IjgiIGhlaWdodD0iNiIgZmlsbD0iI2ZiYWUwMCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjI2NyIgd2lkdGg9IjAiIGhlaWdodD0iNiIgZmlsbD0iIzI0OGViZCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjI3My41IiB3aWR0aD0iMTE0IiBoZWlnaHQ9IjYiIGZpbGw9IiMyNDhlYmQiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIyODAiIHdpZHRoPSI5MSIgaGVpZ2h0PSI2IiBmaWxsPSIjMjQ4ZWJkIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMjkwLjUiIHdpZHRoPSIxMDIiIGhlaWdodD0iNiIgZmlsbD0iI2NkMzczMSIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjI5NyIgd2lkdGg9IjM2IiBoZWlnaHQ9IjYiIGZpbGw9IiNmYmFlMDAiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIzMDMuNSIgd2lkdGg9IjAiIGhlaWdodD0iNiIgZmlsbD0iIzI0OGViZCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjMxMCIgd2lkdGg9IjE0NCIgaGVpZ2h0PSI2IiBmaWxsPSIjMjQ4ZWJkIiByeD0iMSIgcnk9IjEiPjwvcmVjdD4KICA8cmVjdCB4PSI0MCIgeT0iMzE2LjUiIHdpZHRoPSIxMjAiIGhlaWdodD0iNiIgZmlsbD0iIzI0OGViZCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjMyNyIgd2lkdGg9IjExIiBoZWlnaHQ9IjYiIGZpbGw9IiNjZDM3MzEiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIzMzMuNSIgd2lkdGg9IjY4IiBoZWlnaHQ9IjYiIGZpbGw9IiNmYmFlMDAiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIzNDAiIHdpZHRoPSIxNzkiIGhlaWdodD0iNiIgZmlsbD0iIzI0OGViZCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPHJlY3QgeD0iNDAiIHk9IjM0Ni41IiB3aWR0aD0iMjE2IiBoZWlnaHQ9IjYiIGZpbGw9IiMyNDhlYmQiIHJ4PSIxIiByeT0iMSI+PC9yZWN0PgogIDxyZWN0IHg9IjQwIiB5PSIzNTMiIHdpZHRoPSIxOTUiIGhlaWdodD0iNiIgZmlsbD0iIzI0OGViZCIgcng9IjEiIHJ5PSIxIj48L3JlY3Q+CiAgPGxpbmUgeDE9IjQwIiB5MT0iMzEiIHgyPSI0MCIgeTI9IjM2My41IiBjbGFzcz0ibGluZSI+PC9saW5lPgogIDx0ZXh0IHg9IjM4IiB5PSI0NC41IiBjbGFzcz0iZm9udCBzNCIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9ImVuZCI+Y2xlYW4gaW5zdGFsbDwvdGV4dD4KICA8dGV4dCB4PSIzOCIgeT0iNzciIGNsYXNzPSJmb250IHM0IiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0iZW5kIj53aXRoIGNhY2hlPC90ZXh0PgogIDx0ZXh0IHg9IjM4IiB5PSI4MSIgY2xhc3M9ImZvbnQgczQiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJlbmQiPndpdGggbG9ja2ZpbGU8L3RleHQ+CiAgPHRleHQgeD0iMzgiIHk9Ijg1IiBjbGFzcz0iZm9udCBzNCIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9ImVuZCI+d2l0aCBub2RlX21vZHVsZXM8L3RleHQ+CiAgPHRleHQgeD0iMzgiIHk9IjExNS41IiBjbGFzcz0iZm9udCBzNCIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9ImVuZCI+d2l0aCBjYWNoZTwvdGV4dD4KICA8dGV4dCB4PSIzOCIgeT0iMTE5LjUiIGNsYXNzPSJmb250IHM0IiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0iZW5kIj53aXRoIGxvY2tmaWxlPC90ZXh0PgogIDx0ZXh0IHg9IjM4IiB5PSIxNTQiIGNsYXNzPSJmb250IHM0IiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0iZW5kIj53aXRoIGNhY2hlPC90ZXh0PgogIDx0ZXh0IHg9IjM4IiB5PSIxOTAuNSIgY2xhc3M9ImZvbnQgczQiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJlbmQiPndpdGggbG9ja2ZpbGU8L3RleHQ+CiAgPHRleHQgeD0iMzgiIHk9IjIyNSIgY2xhc3M9ImZvbnQgczQiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJlbmQiPndpdGggY2FjaGU8L3RleHQ+CiAgPHRleHQgeD0iMzgiIHk9IjIyOSIgY2xhc3M9ImZvbnQgczQiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJlbmQiPndpdGggbm9kZV9tb2R1bGVzPC90ZXh0PgogIDx0ZXh0IHg9IjM4IiB5PSIyNjEuNSIgY2xhc3M9ImZvbnQgczQiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJlbmQiPndpdGggbm9kZV9tb2R1bGVzPC90ZXh0PgogIDx0ZXh0IHg9IjM4IiB5PSIyNjUuNSIgY2xhc3M9ImZvbnQgczQiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJlbmQiPndpdGggbG9ja2ZpbGU8L3RleHQ+CiAgPHRleHQgeD0iMzgiIHk9IjMwMCIgY2xhc3M9ImZvbnQgczQiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJlbmQiPndpdGggbm9kZV9tb2R1bGVzPC90ZXh0PgogIDx0ZXh0IHg9IjM4IiB5PSIzMzYuNSIgY2xhc3M9ImZvbnQgczQiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJlbmQiPnVwZGF0ZTwvdGV4dD4KICA8dGV4dCB4PSIyOTAiIHk9IjM3NS41IiBjbGFzcz0iZm9udCBzNCB0ZXh0IiB0ZXh0LWFuY2hvcj0iZW5kIj5UZXN0cyB3ZXJlIHJ1biB1c2luZyBOb2RlLmpzIHYxNi4xMC4wIGF0OiBPY3QgMiwgMjAyMSwgMzozMSBBTTwvdGV4dD4KPC9zdmc+Cg=="}}]);