(this.webpackJsonpgiphy_app=this.webpackJsonpgiphy_app||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){},148:function(e,t,a){},149:function(e,t,a){},151:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(8),i=a.n(r),o=(a(96),a(10)),s=a(83),u=a(19),l=a(33),f=a(79);function d(e,t){return e.import_datetime>t.import_datetime?1:t.import_datetime>e.import_datetime?-1:0}var m=function(e){return{type:"LOAD_GIFS_SUCCESS",payload:e}},p=function(e){return{type:"LOAD_GIFS_FAILED",payload:e}},_={items:[],isLoading:!1,errors:[],isTrending:!0,query:"",type:"gifs",gifPerPage:20,rating:"g",offset:0,sortByDate:!1},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_GIFS_PENDING":return Object(u.a)({},e,{isLoading:!0});case"LOAD_GIFS_SUCCESS":return Object(u.a)({},e,{items:t.payload,isLoading:!1});case"LOAD_GIFS_FAILED":return Object(u.a)({},e,{errors:t.payload,isLoading:!1});case"SET_QUERY":return Object(u.a)({},e,{query:t.payload});case"SET_IS_TRENDING":return Object(u.a)({},e,{isTrending:t.payload});case"SET_TYPE":return Object(u.a)({},e,{type:t.payload});case"SORT_BY_DATE":return e.sortByDate?Object(u.a)({},e,{sortByDate:t.payload}):Object(u.a)({},e,{sortByDate:t.payload,items:Object(s.a)(e.items.sort(d))});default:return e}},y=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.c,h=Object(l.d)(g,y(Object(l.a)(f.a))),E=a(50),b="I1d4vejcCtbSj1gZKPq6gTKSbPhPE3KD";function O(e,t,a,n){return function(c){c({type:"LOAD_GIFS_PENDING"});try{fetch("https://api.giphy.com/v1/".concat(e,"/trending?api_key=").concat(b,"&limit=").concat(t,"&rating=").concat(a,"&offset=").concat(n)).then((function(e){200===e.status?e.json().then((function(e){c(m(e.data))})):c(p(e.status))}))}catch(r){c(p(r))}}}var v=a(188),j=a(187),S=(a(101),function(e){var t=e.type,a=e.gifPerPage,r=e.rating,i=e.offset,s=Object(n.useState)(),u=Object(E.a)(s,2),l=u[0],f=u[1],d=Object(o.b)(),_=(Object(o.c)((function(e){return e.isTrending})),function(){d(function(e,t,a,n,c){return function(r){r({type:"LOAD_GIFS_PENDING"});try{fetch("https://api.giphy.com/v1/".concat(e,"/search?api_key=").concat(b,"&limit=").concat(t,"&rating=").concat(a,"&offset=").concat(n,"&q=").concat(c)).then((function(e){200===e.status?e.json().then((function(e){r(m(e.data))})):r(p(e.status))}))}catch(i){r(p(i))}}}(t,a,r,i,l)),d({type:"SET_IS_TRENDING",payload:!1}),d({type:"SORT_BY_DATE",payload:!1}),d({type:"SET_QUERY",payload:l})});return c.a.createElement("div",{className:"search__container","data-testid":"search__container"},c.a.createElement(v.a,{id:"outlined-basic",label:"Search for gifs...",className:"search__input",variant:"outlined","data-testid":"search__input",value:l,onChange:function(e){f(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&(e.preventDefault(),_())}}),c.a.createElement(j.a,{variant:"contained",color:"primary",onClick:_,"data-testid":"search__button",className:"search__button"},"Search"),c.a.createElement(j.a,{variant:"contained",color:"secondary",onClick:function(){d(O(t,a,r,i))},"data-testid":"trending__button",className:"trending__button"},"Trending"))}),D=a(189),k=a(190),N=(a(102),function(e){var t=e.type,a=(e.gifPerPage,e.rating,e.offset,Object(o.c)((function(e){return e.sortByDate}))),n=(Object(o.c)((function(e){return e.query})),Object(o.b)()),r=function(e,t){switch(e){case"type":n({type:"SET_TYPE",payload:t});break;case"sortByDate":return n({type:"SORT_BY_DATE",payload:t});default:return null}};return c.a.createElement("div",{className:"searchOptions__container","data-testid":"searchOptions__container"},c.a.createElement(k.a,{"data-testid":"switch__gifs",control:c.a.createElement(D.a,{checked:"gifs"===t,onChange:function(){r("type","gifs"===t?"stickers":"gifs")},color:"primary",name:"gifs"}),label:"gifs"}),c.a.createElement(k.a,{control:c.a.createElement(D.a,{checked:"stickers"===t,onChange:function(){r("type","gifs"===t?"stickers":"gifs")},color:"primary",name:"stickers"}),label:"stickers"}),c.a.createElement(k.a,{control:c.a.createElement(D.a,{checked:a,onChange:function(){return r("sortByDate",!a)},color:"primary",name:"sortByDate"}),label:"Sort by date"}))}),P=function(){var e=Object(o.c)((function(e){return e.type})),t=Object(o.c)((function(e){return e.gifPerPage})),a=Object(o.c)((function(e){return e.rating})),n=Object(o.c)((function(e){return e.offset}));return c.a.createElement("div",{className:"header__container","data-testid":"header__container"},c.a.createElement(S,{type:e,gifPerPage:t,rating:a,offset:n}),c.a.createElement(N,{type:e,gifPerPage:t,rating:a,offset:n}))},T=a(61),w=a(82),I=a.n(w),L=(a(148),function(e){var t=e.gifs,a=Object(n.useState)(),r=Object(E.a)(a,2),i=r[0],o=r[1],s=function(e,t){t.preventDefault(),o(e)};return c.a.createElement("div",{className:"gifsList__container","data-testid":"gifsList__container"},c.a.createElement(I.a,{breakpointCols:{default:4,1100:3,700:2,500:1},className:"my-masonry-grid",columnClassName:"my-masonry-grid_column"},t&&t.map((function(e){return c.a.createElement("div",{key:e.id,"data-testid":"gif__item"},c.a.createElement(T.Gif,{gif:e,width:"100%",onGifClick:s}))}))),i&&c.a.createElement("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,display:"flex",justifyContent:"center",alignItems:"center",background:"rgba(0, 0, 0, .9)"},onClick:function(e){e.preventDefault(),o(void 0)}},c.a.createElement(T.Gif,{gif:i,width:200}),c.a.createElement("div",{className:"whatsappShare"},c.a.createElement("a",{href:"whatsapp://send?text=Look Mum",className:"whatsappLink"},c.a.createElement("i",{class:"fa fa-whatsapp"}),"whatsapp"))))}),C=function(){var e=Object(o.c)((function(e){return e.items})),t=Object(o.c)((function(e){return e.type})),a=Object(o.c)((function(e){return e.gifPerPage})),r=Object(o.c)((function(e){return e.rating})),i=Object(o.c)((function(e){return e.offset})),s=Object(o.b)();return Object(n.useEffect)((function(){s(O(t,a,r,i))}),[]),c.a.createElement("div",{className:"home__container","data-testid":"home__container"},c.a.createElement(P,null),c.a.createElement(L,{gifs:e}))};a(149);var G=function(){return c.a.createElement(o.a,{store:h},c.a.createElement("div",{className:"main__container","data-testid":"main__container"},c.a.createElement(C,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},91:function(e,t,a){e.exports=a(151)},96:function(e,t,a){}},[[91,1,2]]]);
//# sourceMappingURL=main.baf110f7.chunk.js.map