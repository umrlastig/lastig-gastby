"use strict";(self.webpackChunklastig_gastby=self.webpackChunklastig_gastby||[]).push([[765],{4815:function(e,t,n){n.d(t,{U6:function(){return r.U},c_:function(){return c},K8:function(){return m},B2:function(){return i.B}});var r=n(951),l=n(6540),a=n(4794),o=n(4033),i=n(2596);const c=e=>{let{to:t,language:n,...r}=e;const{defaultLang:c,prefixDefault:s,locale:u}=(0,i.B)(),d=n||u;return l.createElement(a.Link,Object.assign({},r,{to:(0,o.localizedPath)({defaultLang:c,prefixDefault:s,locale:d,path:t})}))},s=e=>/^#/.test(e),u=e=>/^\/(?!\/)/.test(e),d=e=>/\..+$/.test(e);function m(e){let{href:t,children:n,...r}=e;return s(t)||!u(t)||d(t)?l.createElement("a",Object.assign({},r,{href:t}),n):l.createElement(c,Object.assign({},r,{to:t}),n)}n(6462)},87:function(e,t,n){n.d(t,{A:function(){return C}});var r=n(6540),l=n(1510),a=n(4815),o=n(6442);const i=l.default.button.withConfig({displayName:"Navstyled__NavButton",componentId:"sc-1ayqu13-0"})(["display:none;padding:24px;background-color:",";color:white;border:none;&:hover{background-color:",";}@media (max-width:600px){display:block;}"],(e=>{let{theme:t}=e;return t.colors.header}),(e=>{let{theme:t}=e;return t.colors.highlight})),c=l.default.nav.withConfig({displayName:"Navstyled__StyledNav",componentId:"sc-1ayqu13-1"})(["flex-direction:row;align-items:baseline;justify-content:space-between;padding:24px;background-color:",";color:white;display:flex;@media (max-width:600px){flex-direction:column;display:",";}"],(e=>{let{theme:t}=e;return t.colors.header}),(e=>{let{$isOpen:t}=e;return t?"flex":"none"})),s=l.default.div.withConfig({displayName:"Dropdownstyled__DropdownContainer",componentId:"sc-5ucibi-0"})(["display:flex;flex-direction:column;width:150px;"]),u=l.default.div.withConfig({displayName:"Dropdownstyled__Button",componentId:"sc-5ucibi-1"})(["width:100%;text-align:left;padding:2px;background-color:",";color:",";&:hover{background-color:",";}a{width:100%;text-align:left;padding:",";margin-left:",";background-color:",";color:",";text-decoration:none;&:hover{background-color:",";}}img{width:auto;height:60px;}"],(e=>{let{theme:t}=e;return t.colors.header}),(e=>{let{theme:t}=e;return t.colors.headerText}),(e=>{let{theme:t}=e;return t.colors.highlight}),(e=>{let{$subButton:t}=e;return t?"2px":"0"}),(e=>{let{$subButton:t}=e;return t?"5px":"0"}),(e=>{let{theme:t}=e;return t.colors.header}),(e=>{let{theme:t}=e;return t.colors.headerText}),(e=>{let{theme:t}=e;return t.colors.highlight})),d=l.default.div.withConfig({displayName:"Dropdownstyled__Box",componentId:"sc-5ucibi-2"})(["display:",";margin-top:2;"],(e=>{let{$isDropdownOpen:t}=e;return t?"block":"none"})),m=e=>{let{name:t,image:n,options:l}=e;const i=r.useContext(a.U6),c=(0,o.A)();function m(e){return c.formatMessage({id:e})}const{0:f,1:g}=(0,r.useState)(!1);return r.createElement(s,null,r.createElement(u,{onClick:()=>{g(!f)},$subButton:!1},n?r.createElement("img",{src:n,alt:m(t)}):m(t)),r.createElement(d,{$isDropdownOpen:f},l.map(((e,t)=>r.createElement(u,{key:t,$subButton:!0},r.createElement(a.c_,{to:e[1],language:e[2]||i},e[3]?e[0]:m(e[0])))))))},f=e=>{let{isOpen:t}=e;const n=(0,o.A)();return r.createElement(c,{$isOpen:t},r.createElement(m,{name:"Lab",options:[["Presentation","/presentation"],["History","/history"],["Access","/access"]]}),r.createElement(m,{name:"Research",options:[["Teams","/teams"],["Members","/members"],["Projects","/projects"]]}),r.createElement(m,{name:"Production",options:[["Publications","/publications"],["Datasets","/datasets"]]}),r.createElement(s,null,r.createElement(u,{$subButton:!1},r.createElement(a.c_,{to:"/join/"},(l="Join",n.formatMessage({id:l}))))));var l};var g=()=>{const{config:e}=(0,a.B2)();return r.createElement(m,{name:"Language",image:"https://languageicon.org/language-icon.svg",options:e.map((e=>[e.localName,"/",e.code,!0]))})};const h=(0,l.createGlobalStyle)(["body{margin:0;font-family:sans-serif;}a{text-decoration:none;}"]);var p=n(9197);const w=l.default.header.withConfig({displayName:"Headerstyled__Header",componentId:"sc-flkkqf-0"})(["background-color:",";"],(e=>{let{theme:t}=e;return t.colors.header})),b=l.default.div.withConfig({displayName:"Containerstyled__VerticalContainer",componentId:"sc-1u2w6cg-0"})(["display:flex;flex-direction:column;minHeight:100vh;overflow:hidden;"]),y=l.default.div.withConfig({displayName:"Containerstyled__MainContainer",componentId:"sc-1u2w6cg-1"})(["width:100%;display:flex;flex-direction:column;svg{margin:0 auto 0 auto;width:50%;height:50%;}"]),E=l.default.div.withConfig({displayName:"Containerstyled__HorizontalContainer",componentId:"sc-1u2w6cg-2"})(["display:flex;width:100%;flex-direction:row;justify-content:space-between;"]),v=l.default.div.withConfig({displayName:"Containerstyled__HorizontalCenteredContainer",componentId:"sc-1u2w6cg-3"})(["display:flex;width:100%;flex-direction:row;place-items:center;justify-content:center;"]),x=l.default.footer.withConfig({displayName:"Footerstyled__Footer",componentId:"sc-r3nxg5-0"})(["width:100%;background-color:",";"],(e=>{let{theme:t}=e;return t.colors.header})),O=(0,l.default)(a.c_).withConfig({displayName:"LastigLogostyled__LastigLogo",componentId:"sc-19mm7xq-0"})(["flex-direction:row;align-items:baseline;padding:8px;display:flex;"]);var _=n(7065);var C=e=>{let{children:t}=e;const{0:n,1:c}=(0,r.useState)(!1),s=(0,o.A)();function d(e){return s.formatMessage({id:e})}return r.createElement(l.ThemeProvider,{theme:_.w},r.createElement(h,null),r.createElement(b,null,r.createElement(w,null,r.createElement(E,null,r.createElement(O,{to:"/"},r.createElement("img",{src:"https://www.umr-lastig.fr/img/lastig1.svg",alt:"LASTIG LOGO",style:{width:"auto",height:60}})),r.createElement(b,null,r.createElement(i,{onClick:()=>{c(!n)}},r.createElement(p.f08,null)),r.createElement(f,{isOpen:n})),r.createElement(g,null))),r.createElement("main",null,r.createElement(y,null,t)),r.createElement(x,null,r.createElement(E,null,r.createElement("section",null,r.createElement("div",null,r.createElement(u,null,r.createElement(a.c_,{to:"/access/"},r.createElement(p.I4Y,null)," ",d("Access"))))),r.createElement("section",null,r.createElement("div",null,r.createElement(u,null,r.createElement(a.c_,{to:"/legal/"},r.createElement(p.iBi,null)," ",d("Legal"))),r.createElement(u,null,r.createElement("a",{href:"https://github.com/umrlastig/lastig-gatsby"},r.createElement(p.hL4,null)," ",d("Source"))))),r.createElement("section",null,r.createElement("div",null,r.createElement(u,null,r.createElement("a",{href:"https://x.com/LASTIG_lab"},r.createElement(p.feZ,null)," Twitter")),r.createElement(u,null,r.createElement("a",{href:"https://www.youtube.com/channel/UCpVokwKUh9S4pqZ4cd-GTCQ"},r.createElement(p.Vk6,null)," YouTube")),r.createElement(u,null,r.createElement("a",{href:"https://github.com/umrlastig"},r.createElement(p.hL4,null)," GitHub"))))),r.createElement(v,null,r.createElement("a",{href:"https://www.univ-gustave-eiffel.fr"},r.createElement("img",{src:"https://www.univ-gustave-eiffel.fr/fileadmin/logo_eiffel_white.svg",style:{width:"auto",height:60},alt:"Université Gustave Eiffel"})),r.createElement("a",{href:"https://ensg.eu"},r.createElement("img",{src:"https://www.univ-gustave-eiffel.fr/fileadmin/_processed_/9/6/csm_ENSG-footer-logo_c0b9f2880f.png",style:{width:"auto",height:60},alt:"ENSG"})),r.createElement("a",{href:"https://www.eivp-paris.fr/"},r.createElement("img",{src:"https://www.univ-gustave-eiffel.fr/fileadmin/_processed_/2/6/csm_EIVP-footer-logo_dd40d6347f.png",style:{width:"auto",height:60},alt:"EIVP"}))))))}},7065:function(e,t,n){n.d(t,{w:function(){return r}});const r={colors:{header:"#337ab7",highlight:"#2269a6",headerText:"#ffffff",ACTE:"#e41a1c",GEOVIS:"#377eb8",MEIG:"#4daf4a",STRUDEL:"#984ea3",LASTIG:"#337ab7",ACTElight:"#e41a1ccc",GEOVISlight:"#377eb8cc",MEIGlight:"#4daf4acc",STRUDELlight:"#984ea3cc",LASTIGlight:"#337ab7cc",Agriculture:"#9fd6b6",DigitalHumanities:"#0c8ae3",Tourism:"#de2cfa",Planning:"#dae3fb",Urban:"#ea0604",LULC:"#fbc422",Security:"#0ceee3",Climate:"#f6f812"}}},6442:function(e,t,n){n.d(t,{A:function(){return o}});var r=n(6540),l=n(8798),a=n(4184);function o(){var e=r.useContext(l.ob);return(0,a.HM)(e),e}},2225:function(e,t,n){n.d(t,{k5:function(){return f}});var r=n(6540),l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=r.createContext&&r.createContext(l),o=["attr","size","title"];function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){var r;return(t="symbol"==typeof(r=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?r:r+"")in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){return e&&e.map(((e,t)=>r.createElement(e.tag,u({key:t},e.attr),m(e.child))))}function f(e){return t=>r.createElement(g,c({attr:u({},e.attr)},t),m(e.child))}function g(e){var t=t=>{var n,{attr:l,size:a,title:s}=e,d=i(e,o),m=a||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,l,d,{className:n,style:u(u({color:e.color||t.color},t.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),s&&r.createElement("title",null,s),e.children)};return void 0!==a?r.createElement(a.Consumer,null,(e=>t(e))):t(l)}}}]);
//# sourceMappingURL=bce3faccc4638c6d666318b2eb5ab0fe113530b2-24cce07663a398e61482.js.map