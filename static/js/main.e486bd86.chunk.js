(this.webpackJsonpgiphy_app=this.webpackJsonpgiphy_app||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){},148:function(e,t,a){},149:function(e,t,a){},151:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),i=a.n(c),o=(a(96),a(10)),s=a(82),u=a(19),l=a(33),f=a(77);function d(e,t){return e.import_datetime>t.import_datetime?1:t.import_datetime>e.import_datetime?-1:0}var m=function(e){return{type:"LOAD_GIFS_SUCCESS",payload:e}},_=function(e){return{type:"LOAD_GIFS_FAILED",payload:e}},p={items:[],isLoading:!1,errors:[],isTrending:!0,query:"",type:"gifs",gifPerPage:20,rating:"g",offset:0,sortByDate:!1},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_GIFS_PENDING":return Object(u.a)({},e,{isLoading:!0});case"LOAD_GIFS_SUCCESS":return Object(u.a)({},e,{items:t.payload,isLoading:!1});case"LOAD_GIFS_FAILED":return Object(u.a)({},e,{errors:t.payload,isLoading:!1});case"SET_QUERY":return Object(u.a)({},e,{query:t.payload});case"SET_IS_TRENDING":return Object(u.a)({},e,{isTrending:t.payload});case"SET_TYPE":return Object(u.a)({},e,{type:t.payload});case"SORT_BY_DATE":return e.sortByDate?Object(u.a)({},e,{sortByDate:t.payload}):Object(u.a)({},e,{sortByDate:t.payload,items:Object(s.a)(e.items.sort(d))});default:return e}},y=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.c,E=Object(l.d)(g,y(Object(l.a)(f.a))),h=a(83),b="I1d4vejcCtbSj1gZKPq6gTKSbPhPE3KD";function O(e,t,a,n){return function(r){r({type:"LOAD_GIFS_PENDING"});try{fetch("https://api.giphy.com/v1/".concat(e,"/trending?api_key=").concat(b,"&limit=").concat(t,"&rating=").concat(a,"&offset=").concat(n)).then((function(e){200===e.status?e.json().then((function(e){r(m(e.data))})):r(_(e.status))}))}catch(c){r(_(c))}}}var S=a(188),j=a(187),v=(a(101),function(e){var t=e.type,a=e.gifPerPage,c=e.rating,i=e.offset,s=Object(n.useState)(),u=Object(h.a)(s,2),l=u[0],f=u[1],d=Object(o.b)(),p=function(){d(function(e,t,a,n,r){return function(c){c({type:"LOAD_GIFS_PENDING"});try{fetch("https://api.giphy.com/v1/".concat(e,"/search?api_key=").concat(b,"&limit=").concat(t,"&rating=").concat(a,"&offset=").concat(n,"&q=").concat(r)).then((function(e){200===e.status?e.json().then((function(e){c(m(e.data))})):c(_(e.status))}))}catch(i){c(_(i))}}}(t,a,c,i,l)),d({type:"SET_IS_TRENDING",payload:!1}),d({type:"SORT_BY_DATE",payload:!1}),d({type:"SET_QUERY",payload:l})};return r.a.createElement("div",{className:"search__container","data-testid":"search__container"},r.a.createElement(S.a,{id:"outlined-basic",label:"Search gifs of stickers...",className:"search__input",variant:"outlined","data-testid":"search__input",value:l,onChange:function(e){f(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&(e.preventDefault(),p())}}),r.a.createElement(j.a,{variant:"contained",color:"primary",onClick:p,"data-testid":"search__button"},"Search"))}),D=a(189),T=a(190),P=(a(102),function(e){var t=e.type,a=e.gifPerPage,n=e.rating,c=e.offset,i=Object(o.c)((function(e){return e.isTrending})),s=Object(o.c)((function(e){return e.sortByDate})),u=(Object(o.c)((function(e){return e.query})),Object(o.b)()),l=function(e,r){switch(e){case"isTrending":i||u(O(t,a,n,c)),u({type:"SET_IS_TRENDING",payload:r});case"type":u({type:"SET_TYPE",payload:r});break;case"sortByDate":return u({type:"SORT_BY_DATE",payload:r});default:return null}};return r.a.createElement("div",{className:"searchOptions__container"},r.a.createElement(T.a,{control:r.a.createElement(D.a,{checked:i,onChange:function(){return l("isTrending",!i)},color:"primary",name:"trending"}),label:"Trending"}),r.a.createElement(T.a,{control:r.a.createElement(D.a,{checked:"gifs"===t,onChange:function(){l("type","gifs"===t?"stickers":"gifs")},color:"primary",name:"gifs"}),label:"gifs"}),r.a.createElement(T.a,{control:r.a.createElement(D.a,{checked:"stickers"===t,onChange:function(){l("type","gifs"===t?"stickers":"gifs")},color:"primary",name:"stickers"}),label:"stickers"}),r.a.createElement(T.a,{control:r.a.createElement(D.a,{checked:s,onChange:function(){return l("sortByDate",!s)},color:"primary",name:"sortByDate"}),label:"Sort by date"}))}),N=function(){var e=Object(o.c)((function(e){return e.type})),t=Object(o.c)((function(e){return e.gifPerPage})),a=Object(o.c)((function(e){return e.rating})),n=Object(o.c)((function(e){return e.offset}));return r.a.createElement("div",{className:"header__container","data-testid":"header__container"},r.a.createElement(v,{type:e,gifPerPage:t,rating:a,offset:n}),r.a.createElement(P,{type:e,gifPerPage:t,rating:a,offset:n}))},k=a(78),I=a(81),L=a.n(I),C=(a(148),function(e){var t=e.gifs,a=function(e,t){t.preventDefault()};return r.a.createElement("div",{className:"gifsList__container","data-testid":"gifsList__container"},r.a.createElement(L.a,{breakpointCols:{default:4,1100:3,700:2,500:1},className:"my-masonry-grid",columnClassName:"my-masonry-grid_column"},t&&t.map((function(e){return r.a.createElement("div",{key:e.id,"data-testid":"gif__item"},r.a.createElement(k.Gif,{gif:e,width:"100%",onGifClick:a}))}))))}),G=function(){var e=Object(o.c)((function(e){return e.items})),t=Object(o.c)((function(e){return e.type})),a=Object(o.c)((function(e){return e.gifPerPage})),c=Object(o.c)((function(e){return e.rating})),i=Object(o.c)((function(e){return e.offset})),s=Object(o.b)();return Object(n.useEffect)((function(){s(O(t,a,c,i))}),[]),r.a.createElement("div",{className:"home__container","data-testid":"home__container"},r.a.createElement(N,null),r.a.createElement(C,{gifs:e}))};a(149);var w=function(){return r.a.createElement(o.a,{store:E},r.a.createElement("div",{className:"main__container","data-testid":"main__container"},r.a.createElement(G,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},91:function(e,t,a){e.exports=a(151)},96:function(e,t,a){}},[[91,1,2]]]);
//# sourceMappingURL=main.e486bd86.chunk.js.map