(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{169:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(20),o=a.n(i),c=(a(69),a(9)),s=a(10),r=a(12),m=a(11),d=a(13),u=a(171),h=a(172),p=(a(70),a(71),a(75),a(7)),v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this,e))).handleWindowSizeChange=function(){a.setState({width:window.innerWidth})},a.handleScroll=function(){a.setState({open:!1})},a.handleClickOutside=function(e){a.wrapperRef&&!a.wrapperRef.contains(e.target)&&a.setState({open:!1})},a.state={width:window.innerWidth,open:!1,closeHover:!1,shown:!0},a.openNav=a.openNav.bind(Object(p.a)(a)),a.closeNav=a.closeNav.bind(Object(p.a)(a)),a.setWrapperRef=a.setWrapperRef.bind(Object(p.a)(a)),a.handleClickOutside=a.handleClickOutside.bind(Object(p.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){window.addEventListener("resize",this.handleWindowSizeChange),window.addEventListener("scroll",this.handleScroll),document.addEventListener("mousedown",this.handleClickOutside)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowSizeChange),window.removeEventListener("scroll",this.handleScroll),document.removeEventListener("mousedown",this.handleClickOutside)}},{key:"setWrapperRef",value:function(e){this.wrapperRef=e}},{key:"openNav",value:function(){this.setState({open:!0})}},{key:"closeNav",value:function(){this.setState({open:!1})}},{key:"closeHover",value:function(){this.setState({closeHover:!0})}},{key:"closeNotHover",value:function(){this.setState({closeHover:!1})}},{key:"toggle",value:function(){this.setState({shown:!this.state.shown})}},{key:"render",value:function(){var e=this,t=this.state,a=t.width,n=t.closeHover,i={};return i=a<=991?l.a.createElement("nav",null,l.a.createElement("div",{ref:this.setWrapperRef,className:"nav-wrapper container"},l.a.createElement("a",{className:"nav-text-name center brand-logo",href:"./"},"Joonas Nilp"),l.a.createElement("a",{className:"button-collapse",onClick:this.openNav},l.a.createElement("i",{className:"material-icons"},"menu")),l.a.createElement("ul",{className:"side-nav ".concat(this.state.open?"visible":"hidden"),tabIndex:"0",onBlur:this.closeNav},l.a.createElement("li",null,l.a.createElement("a",{className:"nav-text",onClick:this.closeNav,onMouseEnter:this.closeHover.bind(this),onMouseLeave:this.closeNotHover.bind(this)},l.a.createElement("i",{className:"".concat(n?"white-color":"black-color"," material-icons left sideNavClose")},"close"))),l.a.createElement("li",null,l.a.createElement("a",{className:"nav-text",onClick:this.closeNav,href:"./#minust"},"Minust")),l.a.createElement("li",null,l.a.createElement("a",{className:"nav-text",onClick:this.closeNav,href:"./#millegaTegelen"},"N\xe4ited")),l.a.createElement("li",null,l.a.createElement("a",{className:"nav-text",onClick:this.closeNav,href:"./#kontakt"},"Kontakt"))))):l.a.createElement("nav",null,l.a.createElement("div",{className:"nav-wrapper container"},l.a.createElement("a",{className:"nav-text-name",href:"./#algus",role:"button"},"Joonas Nilp"),l.a.createElement("ul",{className:"right hide-on-sm-and-down",onClick:function(){return e.toggle()}},l.a.createElement("li",null,l.a.createElement("a",{className:"nav-text",href:"./#minust"},"Minust")),l.a.createElement("li",null,l.a.createElement("a",{className:"nav-text",href:"./#millegaTegelen"},"Millega tegelen")),l.a.createElement("li",null,l.a.createElement("a",{className:"nav-text",href:"./#kontakt"},"Kontakt"))))),l.a.createElement("div",{className:"navbar-fixed"},i)}}]),t}(n.Component),g=a(50),f=a.n(g),E=a(51),w=a.n(E),N=function(e){return l.a.createElement("div",{id:"algus",className:"video-container"},l.a.createElement("video",{autoPlay:!0,loop:!0,muted:!0},l.a.createElement("source",{src:f.a,type:"video/mp4"})),l.a.createElement("div",{className:"overlay-desc"},l.a.createElement("img",{src:w.a,alt:"JoonasNilp"})),l.a.createElement("hr",null))},b=a(52),k=a.n(b),j=a(6),x=function(e){return l.a.createElement("section",{id:"minust"},l.a.createElement("div",{className:"container minustTaust"},l.a.createElement("hr",{className:"white-color"}),l.a.createElement("h3",{className:"white-color"},"Kes ma olen?"),l.a.createElement(j.Row,null,l.a.createElement(j.Col,{s:12,m:6,l:4,className:"grid-example"},l.a.createElement("p",{className:"text-faded white-color"},"Videograafia ning fotograafia on olnud pikalt juba t\xf5sine kirg. Viimased 2,5 aastat olen sellega tegelenud t\xf5sisemalt ning p\xfchendanud enamuse oma vabast ajast fotograafiale.")),l.a.createElement(j.Col,{s:12,m:6,l:4,className:"grid-example"},l.a.createElement("p",{className:"text-faded white-color"},"Olen alati olnud see kes proovib k\xf5ike seega ei ole ka endale fotograafias seadnud mingeid piire ning v\xf5tan uusi katsumusi alati v\xf5imalusena ennast harida.")),l.a.createElement(j.Col,{s:12,l:4,className:"grid-example"},l.a.createElement(j.MediaBox,{src:k.a,width:"100%",className:"minuPilt"})))))},O=a(53),y=a.n(O),C=a(54),S=a.n(C),L=a(55),I=a.n(L),W=function(e){function t(){return Object(c.a)(this,t),Object(r.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement(j.Row,null,l.a.createElement(j.Col,{s:12,m:4,className:"modalPilt"},l.a.createElement(j.MediaBox,{src:"https://failid.joonasnilp.ee/esilehepildid_edit/4.jpg",caption:"N\xe4ide 1",width:"100%"})),l.a.createElement(j.Col,{s:12,m:4,className:"modalPilt"},l.a.createElement(j.MediaBox,{src:"https://failid.joonasnilp.ee/esilehepildid_edit/4.jpg",caption:"N\xe4ide 1",width:"100%"})),l.a.createElement(j.Col,{s:12,m:4,className:"modalPilt"},l.a.createElement(j.MediaBox,{src:"https://failid.joonasnilp.ee/esilehepildid_edit/4.jpg",caption:"N\xe4ide 1",width:"100%"}))))}}]),t}(n.Component),M=function(e){return l.a.createElement("section",{id:"millegaTegelen"},l.a.createElement("div",{className:"container millegaTeglen"},l.a.createElement("hr",null),l.a.createElement("h3",null,"Millega ma tegelen"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12 l4"},l.a.createElement("div",{className:"background-text text-faded "},l.a.createElement("div",{className:"card z-depth-2"},l.a.createElement("div",{className:"card-image waves-effect waves-block waves-light"},l.a.createElement("img",{className:"activator",src:y.a,alt:"Portree"})),l.a.createElement("div",{className:"card-action"},l.a.createElement("a",{className:"waves-effect waves-light btn modal-trigger tooltipped","data-position":"right","data-tooltip":"*Uuendamisel*",href:"#modal1"},"Vaata n\xe4iteid"))))),l.a.createElement("div",{className:"col s12 l4"},l.a.createElement("div",{className:"background-text text-faded"},l.a.createElement("div",{className:"card z-depth-2"},l.a.createElement("div",{className:"card-image waves-effect waves-block waves-light"},l.a.createElement("img",{className:"activator",src:S.a,alt:"Loodus"})),l.a.createElement("div",{className:"card-action"},l.a.createElement(j.Modal,{header:"Droonifotod ja Videod",trigger:l.a.createElement(j.Button,null,"Vaata n\xe4iteid"),fixedFooter:!0,actions:l.a.createElement(j.Button,{className:"waves-effect waves-light btn-flat modal-action modal-close tekst-valge"},"Sulge")},l.a.createElement(W,null)))))),l.a.createElement("div",{className:"col s12 l4"},l.a.createElement("div",{className:"background-text text-faded"},l.a.createElement("div",{className:"card z-depth-2"},l.a.createElement("div",{className:"card-image waves-effect waves-block waves-light"},l.a.createElement("img",{src:I.a,alt:"Loodus"})),l.a.createElement("div",{className:"card-action"},l.a.createElement("a",{className:"waves-effect waves-light btn modal-trigger tooltipped","data-position":"right","data-tooltip":"*Uuendamisel*",href:"#modal1"},"Vaata n\xe4iteid"))))))))},B=function(e){return l.a.createElement("section",{id:"videod"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12 l4"},l.a.createElement("div",{className:"video-container"},l.a.createElement("iframe",{width:"560",height:"315",title:"Video",src:"https://www.youtube.com/embed/MwFv5puREe8?rel=0&showinfo=0",frameBorder:"0",allow:"autoplay; encrypted-media",allowFullScreen:!0}))),l.a.createElement("div",{className:"col s12 l4"},l.a.createElement("div",{className:"video-container"},l.a.createElement("iframe",{width:"560",height:"315",title:"Video",src:"https://www.youtube.com/embed/EjG2TCssbsY?rel=0&showinfo=0",frameBorder:"0",allow:"autoplay; encrypted-media",allowFullScreen:!0}))),l.a.createElement("div",{className:"col s12 l4"},l.a.createElement("div",{className:"video-container"},l.a.createElement("iframe",{width:"560",height:"315",title:"Video",src:"https://www.youtube.com/embed/5TYzFQmlwc8?rel=0&showinfo=0",frameBorder:"0",allow:"autoplay; encrypted-media",allowFullScreen:!0}))))))},R=a(56),_=a.n(R),P=a(57),T=a.n(P),V=a(58),z=a.n(V),F=function(e){return l.a.createElement("section",{id:"kontakt",className:"footer"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12"},l.a.createElement("hr",null),l.a.createElement("br",null),l.a.createElement("div",{className:"row footerRow"},l.a.createElement("div",{className:"footer-links"},l.a.createElement("a",{className:"",target:"noopener noreferrer",href:"https://www.facebook.com/joonasnilpvisuals/"},l.a.createElement("img",{id:"github-logo",src:T.a,alt:"Facebook"}),l.a.createElement("br",null),"Facebook")),l.a.createElement("div",{className:"footer-links"},l.a.createElement("a",{target:"noopener noreferrer",href:"https://www.instagram.com/joonasnilp/"},l.a.createElement("img",{id:"linkedin-logo",src:_.a,alt:"Instagram"}),l.a.createElement("br",null),"Instagram")),l.a.createElement("div",{className:"footer-links"},l.a.createElement("a",{target:"noopener noreferrer",href:"https://www.youtube.com/channel/UCoSC-MekYGls81VoIsEn-JA/"},l.a.createElement("img",{id:"linkedin-logo",src:z.a,alt:"Youtube"}),l.a.createElement("br",null),"Youtube"))),l.a.createElement("div",{className:"row footerRow"},l.a.createElement("h3",null,"V\xf5ta \xfchendust"),l.a.createElement("p",null,"Saada kiri v\xf5i helista"),l.a.createElement("p",null,"Email:",l.a.createElement("strong",null,"info@joonasnilp.ee")),l.a.createElement("p",null,"Telefon:",l.a.createElement("strong",null,"+372 58137312")),l.a.createElement("p",null,"\xa9 2019 JoonasNilp.ee"),l.a.createElement("p",null))))))},H=a(59),J=a(61),A=a.n(J),U=[{src:"https://failid.joonasnilp.ee/esilehepildid_edit/1.jpg",width:4,height:3},{src:"https://failid.joonasnilp.ee/esilehepildid_edit/2.jpg",width:3,height:4},{src:"https://failid.joonasnilp.ee/esilehepildid_edit/3.jpg",width:3,height:4},{src:"https://failid.joonasnilp.ee/esilehepildid_edit/4.jpg",width:4,height:3},{src:"https://failid.joonasnilp.ee/esilehepildid_edit/5.jpg",width:3,height:4},{src:"https://failid.joonasnilp.ee/esilehepildid_edit/6.jpg",width:4,height:3},{src:"https://failid.joonasnilp.ee/esilehepildid_edit/7.jpg",width:3,height:4},{src:"https://failid.joonasnilp.ee/esilehepildid_edit/8.jpg",width:4,height:3},{src:"https://failid.joonasnilp.ee/esilehepildid_edit/9.jpg",width:4,height:3}];function Y(e){return 3}var K=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(r.a)(this,Object(m.a)(t).call(this))).state={currentImage:0},e.closeLightbox=e.closeLightbox.bind(Object(p.a)(e)),e.openLightbox=e.openLightbox.bind(Object(p.a)(e)),e.gotoNext=e.gotoNext.bind(Object(p.a)(e)),e.gotoPrevious=e.gotoPrevious.bind(Object(p.a)(e)),e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"openLightbox",value:function(e,t){this.setState({currentImage:t.index,lightboxIsOpen:!0})}},{key:"closeLightbox",value:function(){this.setState({currentImage:0,lightboxIsOpen:!1})}},{key:"gotoPrevious",value:function(){this.setState({currentImage:this.state.currentImage-1})}},{key:"gotoNext",value:function(){this.setState({currentImage:this.state.currentImage+1})}},{key:"render",value:function(){return l.a.createElement("section",{id:"work"},l.a.createElement("div",null,l.a.createElement(H.a,{photos:U,onClick:this.openLightbox,columns:Y}),l.a.createElement(A.a,{images:U,onClose:this.closeLightbox,onClickPrev:this.gotoPrevious,onClickNext:this.gotoNext,currentImage:this.state.currentImage,isOpen:this.state.lightboxIsOpen,imageCountSeparator:" - ",backdropClosesModal:!0,leftArrowTitle:"Liigu vasakule",rightArrowTitle:"Liigu paremale",closeButtonTitle:"Sulge galerii"})))}}]),t}(n.Component);function G(){return window.innerWidth>991?l.a.createElement(N,null):null}var D=function(e){function t(){return Object(c.a)(this,t),Object(r.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(u.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(v,null),l.a.createElement(h.a,{exact:!0,path:"/",render:function(e){return l.a.createElement("div",null,l.a.createElement(G,null),l.a.createElement(K,null),l.a.createElement(x,null),l.a.createElement(M,null),l.a.createElement(B,null),l.a.createElement(F,null))}})))}}]),t}(n.Component),Q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function $(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(l.a.createElement(D,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");Q?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):$(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):$(e)})}}()},50:function(e,t,a){e.exports=a.p+"static/media/insta_m.c1da163b.mp4"},51:function(e,t,a){e.exports=a.p+"static/media/intro.8c805ead.png"},52:function(e,t,a){e.exports=a.p+"static/media/lisa2.b4649287.jpg"},53:function(e,t,a){e.exports=a.p+"static/media/portree.f68d1a6a.jpg"},54:function(e,t,a){e.exports=a.p+"static/media/droon.e13ea221.jpg"},55:function(e,t,a){e.exports=a.p+"static/media/uritus.0e1e75ab.jpg"},56:function(e,t,a){e.exports=a.p+"static/media/instagram.b1c58ee1.svg"},57:function(e,t,a){e.exports=a.p+"static/media/facebook.c0cd1382.svg"},58:function(e,t,a){e.exports=a.p+"static/media/youtube.a6372485.svg"},64:function(e,t,a){e.exports=a(169)},69:function(e,t,a){},75:function(e,t,a){}},[[64,1,2]]]);
//# sourceMappingURL=main.0b20e835.chunk.js.map