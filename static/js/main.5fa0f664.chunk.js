(this.webpackJsonpgiphy_app=this.webpackJsonpgiphy_app||[]).push([[0],{101:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},154:function(e,t,a){},155:function(e,t,a){},157:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),i=a.n(c),o=(a(101),a(10)),s=a(55),l=a(11),u=a(33),f=a(83);function m(e,t){return e.import_datetime>t.import_datetime?1:t.import_datetime>e.import_datetime?-1:0}var d=function(e){return{type:"LOAD_GIFS_FAILED",payload:e}},p=function(e){return{type:"LOAD_MORE_GIFS_FAILED",payload:e}},_={items:[],isLoading:!1,errors:[],isTrending:!0,query:"",type:"gifs",gifPerPage:20,rating:"g",offset:0,sortByDate:!1},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"LOAD_GIFS_PENDING":return Object(l.a)(Object(l.a)({},e),{},{isLoading:!0});case"LOAD_GIFS_SUCCESS":return Object(l.a)(Object(l.a)({},e),{},{items:t.payload,isLoading:!1,offset:0});case"LOAD_GIFS_FAILED":return Object(l.a)(Object(l.a)({},e),{},{errors:t.payload,isLoading:!1});case"LOAD_MORE_GIFS_PENDING":return Object(l.a)(Object(l.a)({},e),{},{isLoading:!0});case"LOAD_MORE_GIFS_SUCCESS":return Object(l.a)(Object(l.a)({},e),{},{items:[].concat(Object(s.a)(e.items),Object(s.a)(t.payload)),isLoading:!1,offset:e.offset+e.gifPerPage});case"LOAD_MORE_GIFS_FAILED":return Object(l.a)(Object(l.a)({},e),{},{errors:t.payload,isLoading:!1});case"SET_QUERY":return Object(l.a)(Object(l.a)({},e),{},{query:t.payload});case"SET_IS_TRENDING":return Object(l.a)(Object(l.a)({},e),{},{isTrending:t.payload});case"SET_TYPE":return Object(l.a)(Object(l.a)({},e),{},{type:t.payload});case"SORT_BY_DATE":return e.sortByDate?Object(l.a)(Object(l.a)({},e),{},{sortByDate:t.payload}):Object(l.a)(Object(l.a)({},e),{},{sortByDate:t.payload,items:Object(s.a)(e.items.sort(m))});default:return e}},E=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.c,y=Object(u.d)(g,E(Object(u.a)(f.a))),O=a(53),h="I1d4vejcCtbSj1gZKPq6gTKSbPhPE3KD";function b(e,t,a,n,r,c){return function(i){i({type:"LOAD_GIFS_PENDING"});try{fetch("https://api.giphy.com/v1/".concat(t,"/").concat(e,"?api_key=").concat(h,"&limit=").concat(a,"&rating=").concat(n,"&offset=").concat(r,"&q=").concat(c)).then((function(e){200===e.status?e.json().then((function(e){i({type:"LOAD_GIFS_SUCCESS",payload:e.data})})):i(d(e.status))}))}catch(o){i(d(o))}}}function j(e,t,a,n,r,c){return function(i){i({type:"LOAD_MORE_GIFS_PENDING"});try{fetch("https://api.giphy.com/v1/".concat(t,"/").concat(e,"?api_key=").concat(h,"&limit=").concat(a,"&rating=").concat(n,"&offset=").concat(r,"&q=").concat(c)).then((function(e){200===e.status?e.json().then((function(e){i({type:"LOAD_MORE_GIFS_SUCCESS",payload:e.data})})):i(p(e.status))}))}catch(o){i(p(o))}}}var S=a(201),v=a(197),D=a(202),N=a(194),L=a(203),P=(a(106),function(e){var t=e.type,a=Object(o.c)((function(e){return e.sortByDate})),n=Object(o.b)(),c=function(e,t){switch(e){case"type":n({type:"SET_TYPE",payload:t});break;case"sortByDate":return n({type:"SORT_BY_DATE",payload:t});default:return null}};return r.a.createElement("div",{className:"searchOptions__container","data-testid":"searchOptions__container"},r.a.createElement(N.a,{"aria-label":"position",row:!0},r.a.createElement(L.a,{"data-testid":"switch__gifs",control:r.a.createElement(D.a,{checked:"gifs"===t,onChange:function(){c("type","gifs"===t?"stickers":"gifs")},color:"primary",name:"gifs"}),label:"gifs"}),r.a.createElement(L.a,{control:r.a.createElement(D.a,{checked:"stickers"===t,onChange:function(){c("type","gifs"===t?"stickers":"gifs")},color:"primary",name:"stickers"}),label:"stickers"}),r.a.createElement(L.a,{control:r.a.createElement(D.a,{checked:a,onChange:function(){return c("sortByDate",!a)},color:"primary",name:"sortByDate"}),label:"Sort by date"})))}),k=(a(107),function(e){var t=e.type,a=e.gifPerPage,c=e.rating,i=e.offset,s=Object(n.useState)(),l=Object(O.a)(s,2),u=l[0],f=l[1],m=Object(o.b)(),d=function(){m(b("search",t,a,c,i,u)),m({type:"SET_IS_TRENDING",payload:!1}),m({type:"SORT_BY_DATE",payload:!1}),m({type:"SET_QUERY",payload:u})};return r.a.createElement("div",{className:"search__container","data-testid":"search__container"},r.a.createElement("div",{className:"search__input_row"},r.a.createElement(S.a,{id:"outlined-basic",label:"Search for gifs...",className:"search__input",variant:"outlined","data-testid":"search__input",value:u,onChange:function(e){f(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&(e.preventDefault(),d())}}),r.a.createElement(v.a,{variant:"contained",color:"primary",onClick:d,"data-testid":"search__button",className:"search__button"},"Search")),r.a.createElement("div",{className:"search__options_row"},r.a.createElement(P,{type:t,gifPerPage:a,rating:c,offset:i}),r.a.createElement(v.a,{variant:"contained",color:"secondary",onClick:function(){m(b("trending",t,a,c,i))},"data-testid":"trending__button",className:"trending__button"},"Trending")))}),I=function(){var e=Object(o.c)((function(e){return e.type})),t=Object(o.c)((function(e){return e.gifPerPage})),a=Object(o.c)((function(e){return e.rating})),n=Object(o.c)((function(e){return e.offset}));return r.a.createElement("div",{className:"header__container","data-testid":"header__container"},r.a.createElement(k,{type:e,gifPerPage:t,rating:a,offset:n}))},w=a(64),C=a(86),T=a.n(C),G=a(87),A=a.n(G),F=(a(154),function(e){var t=e.gifs,a=e.type,c=e.gifPerPage,i=e.rating,s=e.offset,l=Object(n.useState)(),u=Object(O.a)(l,2),f=u[0],m=u[1],d=(Object(o.c)((function(e){return e.isLoading})),Object(o.c)((function(e){return e.isTrending}))),p=Object(o.b)(),_=function(e,t){t.preventDefault(),m(e)};return r.a.createElement("div",{className:"gifsList__container","data-testid":"gifsList__container"},t.length>0?r.a.createElement(A.a,{pageStart:0,loadMore:function(){console.log("MORE!!"),p(j(d?"trending":"search",a,c,i,s))},hasMore:!0,useWindow:!0,initialLoad:!1,loader:r.a.createElement("div",{key:"loading"},r.a.createElement("p",null,"... loading"))},r.a.createElement(T.a,{breakpointCols:{default:4,1100:3,700:2,500:1},className:"my-masonry-grid",columnClassName:"my-masonry-grid_column"},t.map((function(e){return r.a.createElement("div",{key:e.id,"data-testid":"gif__item"},r.a.createElement(w.Gif,{gif:e,width:"100%",height:"auto",onGifClick:_}))})))):r.a.createElement("h2",{className:"noGifs"},"Oops we couldn't find anything with that search term"),f&&r.a.createElement("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,display:"flex",justifyContent:"center",alignItems:"center",background:"rgba(0, 0, 0, .9)"},onClick:function(e){e.preventDefault(),m(void 0)}},r.a.createElement("div",{className:"gifModal__container"},r.a.createElement(w.Gif,{gif:f,width:200}),f.title&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"infoLabel"},"title"),r.a.createElement("p",null,f.title)),f.username&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"infoLabel"},"user"),r.a.createElement("p",null,f.username)),f.rating&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"infoLabel"},"rating"),r.a.createElement("p",null,f.rating)),r.a.createElement("div",{className:"whatsappShare"},r.a.createElement("a",{href:"whatsapp://send?text=LookMum",className:"whatsappLink"},"Share on whatsapp")))))}),R=function(){var e=Object(o.c)((function(e){return e.items})),t=Object(o.c)((function(e){return e.type})),a=Object(o.c)((function(e){return e.gifPerPage})),c=Object(o.c)((function(e){return e.rating})),i=Object(o.c)((function(e){return e.offset})),s=Object(o.b)();return Object(n.useEffect)((function(){s(b("trending",t,a,c,i))}),[]),r.a.createElement("div",{className:"home__container","data-testid":"home__container"},r.a.createElement(I,null),r.a.createElement(F,{gifs:e,type:t,gifPerPage:a,rating:c,offset:i}))},B=a(198),M=a(88),U=a(199),Y=a(200);a(155);var q=function(){var e=Object(B.a)("(prefers-color-scheme: dark)"),t=r.a.useMemo((function(){return Object(M.a)({palette:{type:e?"dark":"light",primary:{main:"#9C27B0"},secondary:{main:"#ECA400"}},typography:{fontFamily:"'Ramabhadra', sans-serif"}})}),[e]);return r.a.createElement(U.a,{theme:t},r.a.createElement(Y.a,null),r.a.createElement(o.a,{store:y},r.a.createElement("div",{className:"main__container","data-testid":"main__container"},r.a.createElement(R,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},96:function(e,t,a){e.exports=a(157)}},[[96,1,2]]]);
//# sourceMappingURL=main.5fa0f664.chunk.js.map