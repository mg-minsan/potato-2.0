webpackJsonp([1,2],{128:function(e,t,s){s(168);var n=s(2)(s(146),s(180),null,null);e.exports=n.exports},14:function(e,t,s){"use strict";var n=s(152),a=s.n(n),r=s(153),i=s.n(r),o=s(0),l=s.n(o),u=s(4),c=s.n(u),v=function(){function e(){a()(this,e)}return i()(e,[{key:"newMovies",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=this.byMonth(),s=this.discoverBase()+this.apiKey()+"&language=en-US&sort_by=popularity.desc&page="+e+"&region=US&primary_release_date.gte="+t.from+"&primary_release_date.lte="+t.to;return s}},{key:"byMonth",value:function(){var e="YYYY-MM-DD",t=l()(),s=t.format(e);t.subtract(1,"months");var n=t.format(e);return{from:n,to:s}}},{key:"discoverBase",value:function(){return"https://api.themoviedb.org/3/discover/movie?"}},{key:"apiKey",value:function(){return"api_key=dcdb07467047fab5a15bfd545fbc912d"}},{key:"getImage",value:function(e){return console.log(e),"https://image.tmdb.org/t/p/w300"+e}},{key:"getMovieUrl",value:function(e){var t="https://api.themoviedb.org/3/movie/"+ +e+"?"+this.apiKey();return t}},{key:"testRequest",value:function(e,t){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;c.a[e](t,s).then(function(e){return console.log(e.data)}).catch(function(e){return console.log(e)})}}]),e}();t.a=v},146:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(174),a=s.n(n);t.default={name:"app",components:{MainNav:a.a}}},147:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},148:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(4),a=s.n(n),r=s(171),i=s.n(r),o=s(7),l=s(14);t.default={router:o.a,components:{InfiniteLoading:i.a},data:function(){return{page:0,msg:"Latest",movies:[],resources:new l.a}},methods:{onInfinite:function(){var e=this;a.a.get(this.resources.newMovies(this.movies.length/5+1)).then(function(t){t.data.results.length?(e.movies=e.movies.concat(e.chunk(t.data.results,4)),e.$refs.infiniteLoading.$emit("$InfiniteLoading:loaded"),e.movies.length/5===t.data.total_pages&&e.$refs.infiniteLoading.$emit("$InfiniteLoading:complete")):e.$refs.infiniteLoading.$emit("$InfiniteLoading:complete")}).catch(function(e){return console.log(e)})},chunk:function(e,t){var s,n=[];for(s=0;s<e.length;s+=t)n.push(e.slice(s,s+t));return n},fetchImage:function(e){return this.resources.getImage(e)},readMore:function(e){var t=e.split(" "),s=t.slice(1,20).join(" ");return s+" ....."}},created:function(){}}},149:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},150:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(4),a=s.n(n),r=s(14);t.default={data:function(){return{movie:{},resources:new r.a}},created:function(){var e=this;a.a.get(this.resources.getMovieUrl(this.$route.params.id)).then(function(t){e.movie=t.data})}}},165:function(e,t){},166:function(e,t){},167:function(e,t){},168:function(e,t){},169:function(e,t,s){function n(e){return s(a(e))}function a(e){var t=r[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var r={"./af":19,"./af.js":19,"./ar":25,"./ar-dz":20,"./ar-dz.js":20,"./ar-ly":21,"./ar-ly.js":21,"./ar-ma":22,"./ar-ma.js":22,"./ar-sa":23,"./ar-sa.js":23,"./ar-tn":24,"./ar-tn.js":24,"./ar.js":25,"./az":26,"./az.js":26,"./be":27,"./be.js":27,"./bg":28,"./bg.js":28,"./bn":29,"./bn.js":29,"./bo":30,"./bo.js":30,"./br":31,"./br.js":31,"./bs":32,"./bs.js":32,"./ca":33,"./ca.js":33,"./cs":34,"./cs.js":34,"./cv":35,"./cv.js":35,"./cy":36,"./cy.js":36,"./da":37,"./da.js":37,"./de":39,"./de-at":38,"./de-at.js":38,"./de.js":39,"./dv":40,"./dv.js":40,"./el":41,"./el.js":41,"./en-au":42,"./en-au.js":42,"./en-ca":43,"./en-ca.js":43,"./en-gb":44,"./en-gb.js":44,"./en-ie":45,"./en-ie.js":45,"./en-nz":46,"./en-nz.js":46,"./eo":47,"./eo.js":47,"./es":49,"./es-do":48,"./es-do.js":48,"./es.js":49,"./et":50,"./et.js":50,"./eu":51,"./eu.js":51,"./fa":52,"./fa.js":52,"./fi":53,"./fi.js":53,"./fo":54,"./fo.js":54,"./fr":57,"./fr-ca":55,"./fr-ca.js":55,"./fr-ch":56,"./fr-ch.js":56,"./fr.js":57,"./fy":58,"./fy.js":58,"./gd":59,"./gd.js":59,"./gl":60,"./gl.js":60,"./he":61,"./he.js":61,"./hi":62,"./hi.js":62,"./hr":63,"./hr.js":63,"./hu":64,"./hu.js":64,"./hy-am":65,"./hy-am.js":65,"./id":66,"./id.js":66,"./is":67,"./is.js":67,"./it":68,"./it.js":68,"./ja":69,"./ja.js":69,"./jv":70,"./jv.js":70,"./ka":71,"./ka.js":71,"./kk":72,"./kk.js":72,"./km":73,"./km.js":73,"./ko":74,"./ko.js":74,"./ky":75,"./ky.js":75,"./lb":76,"./lb.js":76,"./lo":77,"./lo.js":77,"./lt":78,"./lt.js":78,"./lv":79,"./lv.js":79,"./me":80,"./me.js":80,"./mi":81,"./mi.js":81,"./mk":82,"./mk.js":82,"./ml":83,"./ml.js":83,"./mr":84,"./mr.js":84,"./ms":86,"./ms-my":85,"./ms-my.js":85,"./ms.js":86,"./my":87,"./my.js":87,"./nb":88,"./nb.js":88,"./ne":89,"./ne.js":89,"./nl":91,"./nl-be":90,"./nl-be.js":90,"./nl.js":91,"./nn":92,"./nn.js":92,"./pa-in":93,"./pa-in.js":93,"./pl":94,"./pl.js":94,"./pt":96,"./pt-br":95,"./pt-br.js":95,"./pt.js":96,"./ro":97,"./ro.js":97,"./ru":98,"./ru.js":98,"./se":99,"./se.js":99,"./si":100,"./si.js":100,"./sk":101,"./sk.js":101,"./sl":102,"./sl.js":102,"./sq":103,"./sq.js":103,"./sr":105,"./sr-cyrl":104,"./sr-cyrl.js":104,"./sr.js":105,"./ss":106,"./ss.js":106,"./sv":107,"./sv.js":107,"./sw":108,"./sw.js":108,"./ta":109,"./ta.js":109,"./te":110,"./te.js":110,"./tet":111,"./tet.js":111,"./th":112,"./th.js":112,"./tl-ph":113,"./tl-ph.js":113,"./tlh":114,"./tlh.js":114,"./tr":115,"./tr.js":115,"./tzl":116,"./tzl.js":116,"./tzm":118,"./tzm-latn":117,"./tzm-latn.js":117,"./tzm.js":118,"./uk":119,"./uk.js":119,"./uz":120,"./uz.js":120,"./vi":121,"./vi.js":121,"./x-pseudo":122,"./x-pseudo.js":122,"./yo":123,"./yo.js":123,"./zh-cn":124,"./zh-cn.js":124,"./zh-hk":125,"./zh-hk.js":125,"./zh-tw":126,"./zh-tw.js":126};n.keys=function(){return Object.keys(r)},n.resolve=a,e.exports=n,n.id=169},172:function(e,t,s){s(166);var n=s(2)(s(147),s(177),"data-v-1fd2580e",null);e.exports=n.exports},173:function(e,t,s){s(165);var n=s(2)(s(148),s(176),"data-v-14f6c91e",null);e.exports=n.exports},174:function(e,t,s){s(167);var n=s(2)(s(149),s(179),"data-v-241cdee6",null);e.exports=n.exports},175:function(e,t,s){var n=s(2)(s(150),s(178),null,null);e.exports=n.exports},176:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e._l(e.movies,function(t){return s("div",{staticClass:"columns"},e._l(t,function(t){return s("div",{staticClass:"column is-3"},[s("router-link",{attrs:{to:{name:"movie",params:{id:t.id}}}},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-image"},[s("figure",{staticClass:"image"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.fetchImage(t.poster_path),expression:"fetchImage(movie.poster_path)"}],attrs:{alt:"Image",width:"200"}})])]),e._v(" "),s("div",{staticClass:"card-content"},[s("div",{staticClass:"media"},[s("div",{staticClass:"media-content"},[s("p",{staticClass:"is-medium"},[e._v(e._s(t.original_title))]),e._v(" "),s("p",{staticClass:"subtitle is-6"},[s("small",[e._v(e._s(t.release_date))])])])]),e._v(" "),s("div",{staticClass:"content"},[s("small",{staticClass:"rating"},[e._v("Rating: "+e._s(t.vote_average)+"/10")]),e._v(" "),s("progress",{staticClass:"progress is-danger",attrs:{value:t.vote_average,max:"10"}},[e._v(e._s(t.vote_average)+" %")])])])])])],1)}))}),e._v(" "),s("infinite-loading",{ref:"infiniteLoading",attrs:{"on-infinite":e.onInfinite}})],2)},staticRenderFns:[]}},177:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"hello"},[s("h1",[e._v(e._s(e.msg))]),e._v(" "),s("h2",[e._v("Essential Links")]),e._v(" "),e._m(0),e._v(" "),s("h2",[e._v("Ecosystem")]),e._v(" "),e._m(1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[e._v("Core Docs")])]),e._v(" "),s("li",[s("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[e._v("Forum")])]),e._v(" "),s("li",[s("a",{attrs:{href:"https://gitter.im/vuejs/vue",target:"_blank"}},[e._v("Gitter Chat")])]),e._v(" "),s("li",[s("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[e._v("Twitter")])]),e._v(" "),s("br"),e._v(" "),s("li",[s("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[e._v("Docs for This Template")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[e._v("vue-router")])]),e._v(" "),s("li",[s("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[e._v("vuex")])]),e._v(" "),s("li",[s("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[e._v("vue-loader")])]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[e._v("awesome-vue")])])])}]}},178:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h1",[e._v(" movie ")]),e._v(" "),s("div",{ref:"container"})])},staticRenderFns:[]}},179:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c||t;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("nav",{staticClass:"nav is-primary"},[s("div",{staticClass:"nav-left"},[s("a",{staticClass:"nav-item"},[s("h1",{staticClass:"title logo"},[e._v(" Potato ")])])]),e._v(" "),s("div",{staticClass:"nav-center"}),e._v(" "),s("span",{staticClass:"nav-toggle"},[s("span"),e._v(" "),s("span"),e._v(" "),s("span")]),e._v(" "),s("div",{staticClass:"nav-right nav-menu"})])}]}},180:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("main-nav"),e._v(" "),s("br"),e._v(" "),s("div",{staticClass:"container"},[s("router-view")],1)],1)},staticRenderFns:[]}},185:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(8),a=s.n(n),r=s(128),i=s.n(r),o=s(7),l=s(127),u=s.n(l);a.a.use(u.a,{error:"/static/error.jpg",loading:"/static/ring.gif"}),new a.a({el:"#app",router:o.a,template:"<App/>",components:{App:i.a}})},7:function(e,t,s){"use strict";var n=s(8),a=s.n(n),r=s(181),i=s.n(r),o=s(172),l=(s.n(o),s(173)),u=s.n(l),c=s(175),v=s.n(c);a.a.use(i.a),t.a=new i.a({routes:[{path:"/",name:"home",component:u.a},{path:"/movie/:id",name:"movie",component:v.a}]})}},[185]);
//# sourceMappingURL=app.e88df5def2c32bbdad90.js.map