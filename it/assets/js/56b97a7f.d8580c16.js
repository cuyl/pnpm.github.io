(self.webpackChunk=self.webpackChunk||[]).push([[2594],{9848:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7689);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(a),m=i,k=u["".concat(p,".").concat(m)]||u[m]||s[m]||l;return a?n.createElement(k,r(r({ref:t},c),{},{components:a})):n.createElement(k,r({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var d=2;d<l;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6051:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>o,metadata:()=>p,toc:()=>d,default:()=>s});var n=a(1424),i=a(2489),l=(a(7689),a(9848)),r=["components"],o={id:"add",title:"pnpm add <pkg>"},p={unversionedId:"cli/add",id:"cli/add",isDocsHomePage:!1,title:"pnpm add <pkg>",description:"Installa un pacchetto e gli eventuali pacchetti da cui dipende. Di default, qualsiasi nuovo pacchetto \xe8 installato come dipendenza di produzione.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/cli/add.md",sourceDirName:"cli",slug:"/cli/add",permalink:"/it/next/cli/add",editUrl:"https://crowdin.com/project/pnpm/it",version:"current",frontMatter:{id:"add",title:"pnpm add <pkg>"},sidebar:"docs",previous:{title:"Filtering",permalink:"/it/next/filtering"},next:{title:"pnpm install",permalink:"/it/next/cli/install"}},d=[{value:"TL;DR",id:"tldr",children:[]},{value:"Percorsi dei pacchetti supportati",id:"percorsi-dei-pacchetti-supportati",children:[{value:"Installazione dal registro npm",id:"installazione-dal-registro-npm",children:[]},{value:"Installazione da workspace",id:"installazione-da-workspace",children:[]},{value:"Installazione dal file system locale",id:"installazione-dal-file-system-locale",children:[]},{value:"Installazione da un tarball remoto",id:"installazione-da-un-tarball-remoto",children:[]},{value:"Installazione da un repository Git",id:"installazione-da-un-repository-git",children:[]}]},{value:"Opzioni",id:"opzioni",children:[{value:"--save-prod, -P",id:"--save-prod--p",children:[]},{value:"--save-dev, -D",id:"--save-dev--d",children:[]},{value:"--save-optional, -O",id:"--save-optional--o",children:[]},{value:"--save-exact, -E",id:"--save-exact--e",children:[]},{value:"--save-peer",id:"--save-peer",children:[]},{value:"--ignore-workspace-root-check, -W",id:"--ignore-workspace-root-check--w",children:[]},{value:"--global",id:"--global",children:[]},{value:"--workspace",id:"--workspace",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],c={toc:d};function s(e){var t=e.components,a=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Installa un pacchetto e gli eventuali pacchetti da cui dipende. Di default, qualsiasi nuovo pacchetto \xe8 installato come dipendenza di produzione."),(0,l.kt)("h2",{id:"tldr"},"TL;DR"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Comando"),(0,l.kt)("th",{parentName:"tr",align:null},"Significato"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm add sax")),(0,l.kt)("td",{parentName:"tr",align:null},"Salva in ",(0,l.kt)("inlineCode",{parentName:"td"},"dependencies"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm add -D sax")),(0,l.kt)("td",{parentName:"tr",align:null},"Salva in ",(0,l.kt)("inlineCode",{parentName:"td"},"devDependencies"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm add -O sax")),(0,l.kt)("td",{parentName:"tr",align:null},"Salva in ",(0,l.kt)("inlineCode",{parentName:"td"},"optionalDependencies"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm add sax@next")),(0,l.kt)("td",{parentName:"tr",align:null},"Installa dal tag ",(0,l.kt)("inlineCode",{parentName:"td"},"next"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm add sax@3.0.0")),(0,l.kt)("td",{parentName:"tr",align:null},"Specifica la versione ",(0,l.kt)("inlineCode",{parentName:"td"},"3.0.0"))))),(0,l.kt)("h2",{id:"percorsi-dei-pacchetti-supportati"},"Percorsi dei pacchetti supportati"),(0,l.kt)("h3",{id:"installazione-dal-registro-npm"},"Installazione dal registro npm"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pnpm add nome-pacchetto")," installer\xe0 l'ultima versione di ",(0,l.kt)("inlineCode",{parentName:"p"},"nome-pacchetto")," dal ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"registro npm")," di default. Per installare un pacchetto da un altro registro, puoi usare il link del tarball (vedi ",(0,l.kt)("a",{parentName:"p",href:"#install-from-remote-tarball"},"la guida corrispondente"),")."),(0,l.kt)("p",null,"\xc8 inoltre possibile installare pacchetti per:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"tag: ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm add express@nightly")),(0,l.kt)("li",{parentName:"ul"},"versione: ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm add express@1.0.0")),(0,l.kt)("li",{parentName:"ul"},"intervallo di versioni: ",(0,l.kt)("inlineCode",{parentName:"li"},'pnpm add express@2 react@">=0.1.0 <0.2.0"'))),(0,l.kt)("h3",{id:"installazione-da-workspace"},"Installazione da workspace"),(0,l.kt)("p",null,"Nota che quando si aggiungono dipendenze e si lavora all'interno di un ",(0,l.kt)("a",{parentName:"p",href:"/it/next/workspaces"},"workspace"),", i pacchetti verranno installati dalle sorgenti configurate, a seconda che sia impostato ",(0,l.kt)("a",{parentName:"p",href:"/it/next/workspaces#link-workspace-packages"},(0,l.kt)("inlineCode",{parentName:"a"},"link-workspace-packages"))," e dell'uso di ",(0,l.kt)("a",{parentName:"p",href:"/it/next/workspaces#workspace-ranges-workspace"},(0,l.kt)("inlineCode",{parentName:"a"},"workspace: protocollo di intervallo")),"."),(0,l.kt)("h3",{id:"installazione-dal-file-system-locale"},"Installazione dal file system locale"),(0,l.kt)("p",null,"Ci sono due possibili metodi per installare da file system locale:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"da un file tarball (",(0,l.kt)("inlineCode",{parentName:"li"},".tar"),", ",(0,l.kt)("inlineCode",{parentName:"li"},".tar.gz"),", or ",(0,l.kt)("inlineCode",{parentName:"li"},".tgz"),")"),(0,l.kt)("li",{parentName:"ol"},"da una cartella")),(0,l.kt)("p",null,"Esempi:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add ./package.tar.gz\npnpm add ./some-directory\n")),(0,l.kt)("p",null,"Quando esegui l'installazione da una cartella, un link simbolico viene creato nella cartella ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules")," del progetto corrente, quindi \xe8 come eseguire ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm link"),"."),(0,l.kt)("h3",{id:"installazione-da-un-tarball-remoto"},"Installazione da un tarball remoto"),(0,l.kt)("p",null,'Il parametro deve essere un URL risolvibile che inizi con "http://" o "https://".'),(0,l.kt)("p",null,"Esempio:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add https://github.com/indexzero/forever/tarball/v0.5.6\n")),(0,l.kt)("h3",{id:"installazione-da-un-repository-git"},"Installazione da un repository Git"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add <git remote url>\n")),(0,l.kt)("p",null,"Installa il pacchetto da un provider Git, clonandolo con Git. \xc8 possibile specificare un protocollo per alcuni provider Git. Ad esempio, ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm add github:user/repo")),(0,l.kt)("p",null,"\xc8 possibile installare da Git da:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ultimo commit sul branch master ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive")),(0,l.kt)("li",{parentName:"ul"},"commit: ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#97edff6f525f192a3f83cea1944765f769ae2678")),(0,l.kt)("li",{parentName:"ul"},"branch: ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#master")),(0,l.kt)("li",{parentName:"ul"},"range di versione: ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#semver:^2.0.0"))),(0,l.kt)("h2",{id:"opzioni"},"Opzioni"),(0,l.kt)("h3",{id:"--save-prod--p"},"--save-prod, -P"),(0,l.kt)("p",null,"Installa i pacchetti specificati come ",(0,l.kt)("inlineCode",{parentName:"p"},"dependencies")," normali."),(0,l.kt)("h3",{id:"--save-dev--d"},"--save-dev, -D"),(0,l.kt)("p",null,"Installa i pacchetti specificati come ",(0,l.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,l.kt)("h3",{id:"--save-optional--o"},"--save-optional, -O"),(0,l.kt)("p",null,"Installa il pacchetto specificato come ",(0,l.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,l.kt)("h3",{id:"--save-exact--e"},"--save-exact, -E"),(0,l.kt)("p",null,'Le dipendenze salvate verranno configurate con una versione specifica invece di utilizzare l\'operatore "semver range" predefinito per pnpm.'),(0,l.kt)("h3",{id:"--save-peer"},"--save-peer"),(0,l.kt)("p",null,"Aggiunto in: v3.2.0"),(0,l.kt)("p",null,"L'uso di ",(0,l.kt)("inlineCode",{parentName:"p"},"--save-peer"),", aggiunger\xe0 uno o pi\xf9 pacchetti a ",(0,l.kt)("inlineCode",{parentName:"p"},"peerDependencies")," e li installer\xe0 come dev dependencies."),(0,l.kt)("h3",{id:"--ignore-workspace-root-check--w"},"--ignore-workspace-root-check, -W"),(0,l.kt)("p",null,"Aggiunto in: v3.6.0"),(0,l.kt)("p",null,"L'aggiunta di una dipendenza alla radice del workspace fallisce, a meno che non venga utilizzato il flag ",(0,l.kt)("inlineCode",{parentName:"p"},"--ignore-workspace-root-check")," o ",(0,l.kt)("inlineCode",{parentName:"p"},"-W"),"."),(0,l.kt)("p",null,"Ad esempio, ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm add debug -W"),"."),(0,l.kt)("h3",{id:"--global"},"--global"),(0,l.kt)("p",null,"Installa un pacchetto a livello globale."),(0,l.kt)("h3",{id:"--workspace"},"--workspace"),(0,l.kt)("p",null,"Aggiunto in: v4.4.0"),(0,l.kt)("p",null,"Aggiunge la nuova dipendenza solo se si trova all'interno di un workspace."),(0,l.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/it/next/filtering"},"Ulteriori informazioni sui filtri.")))}s.isMDXComponent=!0}}]);