"use strict";(self.webpackChunklastig_gastby=self.webpackChunklastig_gastby||[]).push([[853],{1959:function(e,t,n){n.r(t),n.d(t,{Head:function(){return d},createNodes:function(){return y},default:function(){return T},getPubType:function(){return s}});var a=n(6540),l=n(87),c=n(7528),r=n(6442);const i=n(1510).default.li.withConfig({displayName:"Publicationsstyled__Publication",componentId:"sc-997srn-0"})(['margin:1rem;span{a{color:#bfbfbf;text-decoration:none;&:not(:last-child)::after{content:", ";}&:last-child::after{content:". ";}}}a{color:#29af7f;text-decoration:none;&:after{content:". ";}}']),o="https://www.umr-lastig.fr/strudel/assets/images",p={"dx.doi.org":"doi.svg","www.mdpi.com":"mdpi.jpg"};function u(e){for(var t,n=/. <a[^>]*href="(https?:\/\/([^"/]*)\/[^"]*)"[^>]*>&#x27E8;([^<]*)&#x27E9;<\/a>/,a=[];null!==(t=n.exec(e));){const n=t[1];var l=t[2];const c=t[3];e=e.replace(t[0],"");const r=o+"/icons/"+(p[l]||"link.svg");a.push({url:n,text:c,img:r})}return{citation:e,links:a}}function s(e){return"1"===e.popularLevel?"PV":"0"===e.popularLevel&&"ART"===e.docType&&"0"===e.peerReviewing?"ASCL":"0"===e.popularLevel&&"ART"===e.docType&&"1"===e.peerReviewing&&"2"===e.audience?"ACL":"0"===e.popularLevel&&"ART"===e.docType&&"1"===e.peerReviewing?"ACLN":"0"===e.popularLevel&&"COMM"===e.docType&&"1"===e.invitedCommunication?"INV":"0"===e.popularLevel&&"COMM"===e.docType&&"0"===e.invitedCommunication&&"0"===e.proceedings?"COM":"0"===e.popularLevel&&"COMM"===e.docType&&"0"===e.invitedCommunication&&"1"===e.proceedings&&"2"===e.audience?"ACTI":"0"===e.popularLevel&&"COMM"===e.docType&&"0"===e.invitedCommunication&&"1"===e.proceedings?"ACTN":"COUV"===e.docType?"OS":"DOUV"===e.docType?"DO":"REPORT"===e.docType||"UNDEFINED"===e.docType?"AP":"THESE"===e.docType||"HDR"===e.docType?"TH":"POSTER"===e.docType?"AFF":"OTHER"}function y(e,t){function n(e){return console.log(`${e.id}-${t}`),`${e.id}-${t}`}return e.filter((e=>e.pubType===t)).map((e=>a.createElement(i,{key:n(e)},a.createElement("span",{key:`${e.id}-authors`},e.authIdHalFullName.map((e=>a.createElement("a",{href:e.idHal?`https://cv.archives-ouvertes.fr/${e.idHal}`:null},e.fullName)))),a.createElement("a",{href:e.fileMain,key:`${e.id}-title`},e.title),a.createElement("span",{key:`${e.id}-citation`,dangerouslySetInnerHTML:{__html:u(e.citationRef).citation}}))))}const d=()=>a.createElement(c.A,{title:"LASTIG Publications"});var T=e=>{let{data:t}=e;const n=(0,r.A)();function c(e){return n.formatMessage({id:e})}const i=t.allHal.nodes.map((e=>({pubType:s(e),...e})));function o(e){let{pubType:t}=e;const n=y(i,t);return n.length>0?a.createElement("div",{key:`pub${t}`},a.createElement("h2",null," ",c(t)," "),a.createElement("ol",null,n)):null}return a.createElement(l.A,{pageTitle:"LASTIG Publications"},a.createElement("h1",null,c("LASTIG Publications")),a.createElement("div",null,a.createElement(o,{pubType:"ACL",key:"ACL"}),a.createElement(o,{pubType:"ACLN",key:"ACLN"}),a.createElement(o,{pubType:"ASCL",key:"ASCL"}),a.createElement(o,{pubType:"PV",key:"PV"}),a.createElement(o,{pubType:"INV",key:"INV"}),a.createElement(o,{pubType:"COM",key:"COM"}),a.createElement(o,{pubType:"ACTI",key:"ACTI"}),a.createElement(o,{pubType:"ACTN",key:"ACTN"}),a.createElement(o,{pubType:"OS",key:"OS"}),a.createElement(o,{pubType:"DO",key:"DO"}),a.createElement(o,{pubType:"AP",key:"AP"}),a.createElement(o,{pubType:"TH",key:"TH"}),a.createElement(o,{pubType:"AFF",key:"AFF"}),a.createElement(o,{pubType:"OTHER",key:"OTHER"})))}}}]);
//# sourceMappingURL=component---src-pages-publications-index-js-fc50102267f00b654837.js.map