(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{104:function(n,e,t){},106:function(n,e,t){"use strict";t.r(e);var i,r,o,c,a,s,d,l,h=t(0),j=t.n(h),b=t(41),u=t.n(b),x=(t(53),t(23)),p=t.n(x),g=t(42),m=t(15),O=t(4),w=t(9),v=t(107),f=t(108),k=t(11),y=t(10),S=t.p+"static/media/nopreview2.94b51897.jpg",z=t(2),F=y.a.button(i||(i=Object(w.a)(["\n    height: 3rem;\n    width: 100%;\n    background: red;\n    border: none;\n    text-align: center;\n    position: relative;\n    top: -1.5rem;\n    color: white;\n    @media (max-width:424px){\n        top:0;   \n    }\n"]))),N=y.a.div(r||(r=Object(w.a)(["\n    width: 100%;\n    border: none;\n    position: relative;\n    top:0rem;\n    z-index:2;\n"]))),E=y.a.div(o||(o=Object(w.a)(["\n    height: 20rem;\n    color: white;\n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n    min-width: 0;\n    word-wrap: break-word;\n    background-color: #fff;\n    background-clip: border-box;\n    border:none;\n    border-radius: 1rem;\n    @media (min-width:425px){\n        &:hover{\n            transition: 0.7s ease;\n            border-radius: 3rem;\n            transform: scale(1.1);\n            z-index: 1;\n            box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;\n        }\n        &:hover ","{\n            transition: 0.7s ease;\n            top: -10rem;\n        }\n    }\n    @media (max-width:424px){\n        height:30rem;\n        ","{\n            top: -1.5rem;\n        }\n    }\n"])),N,N),I=y.a.div(c||(c=Object(w.a)(["\n    font-size: calc(1.275rem + .3vw);\n    font-weight: 500;\n    line-height: 1.2;\n    height: 2rem;\n"]))),L=y.a.h6(a||(a=Object(w.a)(["\n    color:#6c757d;\n    height: 1rem;\n    margin-top: -0.25rem;\n"]))),A=y.a.p(s||(s=Object(w.a)(["\n    height: 2.5rem;\n    font-weight: 400;\n"]))),C=function(n){var e=n.id,t=n.img,i=n.name,r=n.rating,o=n.genres;return Object(z.jsxs)(E,{children:[Object(z.jsx)(v.a,{top:!0,style:{height:"20rem",background:"black"},src:t||S}),Object(z.jsxs)(N,{children:[Object(z.jsxs)(f.a,{style:{background:"#424040"},children:[Object(z.jsx)(I,{children:i}),Object(z.jsx)(L,{children:r}),Object(z.jsx)(A,{children:Array.isArray(o)&&o.length>1?o.join(" . "):o})]}),Object(z.jsx)("div",{style:{background:"#424040"},children:Object(z.jsx)(k.b,{to:"/".concat(e),children:Object(z.jsx)(F,{children:"Know More"})})})]})]})},M=(t(61),function(n){var e=n.shows;return Object(z.jsx)("div",{className:"show-container",children:e.map((function(n){var e,t;return Object(z.jsx)(C,{id:n.show.id,img:null===(e=n.show.image)||void 0===e?void 0:e.original,name:n.show.name,rating:null===(t=n.show.rating)||void 0===t?void 0:t.average,genres:n.show.genres},n.show.id)}))})}),T=t(47),B=t.n(T),D=t(109),J=(t(104),y.a.div(d||(d=Object(w.a)(["\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    padding:1rem;\n    color: white;\n    @media (min-width:768px){\n        width:90%;\n        text-align: left;\n        box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;\n        padding: 1rem;\n        margin: 1rem auto;\n        color: white;\n        background: #424040;\n        flex-direction: row-reverse;\n    }\n"])))),P=function(n){var e,t=n.shows,i=Object(O.g)(),r=Object(O.f)(),o=Object(h.useState)(),c=Object(m.a)(o,2),a=c[0],s=c[1],d=Object(h.useState)(!1),l=Object(m.a)(d,2),b=l[0],u=l[1];return Object(h.useEffect)((function(){!function(){if(console.log(i.id),t.length){console.log("In if"),console.log(t);var n=t.filter((function(n){return n.show.id===parseInt(i.id)}));n?s(n[0]):u(!0)}else r.push("/")}()}),[]),Object(z.jsx)(J,{children:b?Object(z.jsx)("h2",{children:"No page found !!"}):Object(z.jsxs)(j.a.Fragment,{children:[Object(z.jsx)("div",{className:"image",children:Object(z.jsx)("img",{src:(null===a||void 0===a?void 0:a.show.image)?null===a||void 0===a||null===(e=a.show)||void 0===e?void 0:e.image.original:S,alt:null===a||void 0===a?void 0:a.show.name})}),Object(z.jsxs)("div",{className:"show-details",children:[Object(z.jsx)("h2",{children:null===a||void 0===a?void 0:a.show.name}),Object(z.jsxs)("p",{children:["Language: ",null===a||void 0===a?void 0:a.show.language]}),Object(z.jsxs)("p",{children:["Status: ",null===a||void 0===a?void 0:a.show.status]}),Object(z.jsx)("p",{children:"Summary"}),B()(null===a||void 0===a?void 0:a.show.summary),(null===a||void 0===a?void 0:a.show.officialSite)?Object(z.jsx)(k.b,{href:null===a||void 0===a?void 0:a.show.officialSite}):null,Object(z.jsx)(k.b,{to:"/",children:Object(z.jsx)(D.a,{color:"warning",children:"Go back"})})]})]})})},q=y.a.div(l||(l=Object(w.a)(["\n    text-align: center;\n    color: red;\n    z-index: 200;\n    position: sticky;\n    top:0;\n    padding: 0.5rem;  \n    width: 100%;\n    background: white;\n\n"]))),G=function(){return Object(z.jsx)(q,{children:Object(z.jsx)(k.b,{to:"/",style:{textDecoration:"none",color:"red"},children:Object(z.jsx)("h2",{style:{cursor:"pointer"},children:"TV Maze"})})})},K=function(){var n=Object(h.useState)([]),e=Object(m.a)(n,2),t=e[0],i=e[1],r=Object(h.useState)(!1),o=Object(m.a)(r,2),c=o[0],a=o[1],s=function(){var n=Object(g.a)(p.a.mark((function n(){var e,t;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a(!0),n.next=4,fetch("https://api.tvmaze.com/search/shows?q=all");case 4:return e=n.sent,n.next=7,e.json();case 7:t=n.sent,i(t),a(!1),n.next=16;break;case 12:n.prev=12,n.t0=n.catch(0),a(!1),window.alert("Error fetching ",n.t0);case 16:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(){return n.apply(this,arguments)}}();return Object(h.useEffect)((function(){s()}),[]),Object(z.jsxs)("div",{className:"App",children:[Object(z.jsx)(G,{}),c&&!t?Object(z.jsx)("h2",{children:"Loading"}):Object(z.jsxs)(O.c,{children:[Object(z.jsx)(O.a,{path:"/:id",children:Object(z.jsx)(P,{shows:t})}),Object(z.jsx)(O.a,{path:"/",children:Object(z.jsx)(M,{shows:t})})]})]})},V=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,110)).then((function(e){var t=e.getCLS,i=e.getFID,r=e.getFCP,o=e.getLCP,c=e.getTTFB;t(n),i(n),r(n),o(n),c(n)}))};t(105);u.a.render(Object(z.jsx)(j.a.StrictMode,{children:Object(z.jsx)(k.a,{children:Object(z.jsx)(K,{})})}),document.getElementById("root")),V()},53:function(n,e,t){},61:function(n,e,t){},86:function(n,e){}},[[106,1,2]]]);
//# sourceMappingURL=main.870e2d99.chunk.js.map