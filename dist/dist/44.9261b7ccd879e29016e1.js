webpackJsonp([44],{ISc3:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=i("xUI+"),e=i("ppSH"),r=!1;var s=function(t){r||i("hdUi")},c=i("VU/8")(n.a,e.a,!1,s,null,null);c.options.__file="pages\\index\\cua-hang\\_slug\\tin-tuc\\index.vue",a.default=c.exports},hdUi:function(t,a,i){var n=i("x5lZ");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("04182c2c",n,!1)},ppSH:function(t,a,i){"use strict";var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"container-fuild"},[i("div",[t.mainData.isError?t._e():[i("div",{staticClass:" col-sm-6 col-xs-12",staticStyle:{"padding-left":"0"}},t._l(t.mainData.data,function(a,n){return n%2==1?i("div",{staticStyle:{"margin-bottom":"20px"}},[i("div",{staticStyle:{"background-color":"white"}},[i("div",{style:"width:100%; background-size:cover; height:220px;background-image:url("+(t.img_base+a.mainImg)+")"}),i("div",{staticStyle:{padding:"20px"}},[i("p",{staticStyle:{"font-family":"'Open Sans'","font-size":"24px"}},[t._v(t._s(a.title))]),i("p",{staticStyle:{color:"rgba(45,45,48,.8)"}},[t._v(t._s(a.description))]),i("div",{staticClass:"text-right"},[i("a",{staticClass:"readMoreLink",attrs:{href:"javascript:;"},on:{click:function(i){t.m_toObject(a)}}},[t._v("CHI TIẾT\n                                ")])])])])]):t._e()})),i("div",{staticClass:" col-sm-6 col-xs-12",staticStyle:{"padding-left":"0"}},t._l(t.mainData.data,function(a,n){return n%2==0?i("div",{staticStyle:{"margin-bottom":"20px"}},[i("div",{staticStyle:{"background-color":"white"}},[i("div",{style:"width:100%; background-size:cover; height:220px;background-image:url("+(t.img_base+a.mainImg)+")"}),i("div",{staticStyle:{padding:"20px"}},[i("p",{staticStyle:{"font-family":"'Open Sans'","font-size":"24px"}},[t._v(t._s(a.title))]),i("p",{staticStyle:{color:"rgba(45,45,48,.8)"}},[t._v(t._s(a.description))]),i("div",{staticClass:"text-right"},[i("a",{staticClass:"readMoreLink",attrs:{href:"javascript:;"},on:{click:function(i){t.m_toObject(a)}}},[t._v("CHI TIẾT\n                                ")])])])])]):t._e()}))]],2)])};n._withStripped=!0;var e={render:n,staticRenderFns:[]};a.a=e},x5lZ:function(t,a,i){(t.exports=i("FZ+f")(!1)).push([t.i,".readMoreLink{color:#439a46}.readMoreLink:hover{color:#439a46;opacity:.8}",""])},"xUI+":function(t,a,i){"use strict";var n=i("Xxa5"),e=i.n(n),r=i("exGp"),s=i.n(r),c=i("mtWM"),o=i.n(c);a.a={asyncData:function(){var t=s()(e.a.mark(function t(a){var i,n=a.redirect;return e.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i={},t.next=3,o.a.get("https://spadi.com.vn/api/post/public?chain=").then(function(t){i.data=t.data,i.isError=!1}).catch(function(t){i.isError=!0,n("/404")});case 3:return t.abrupt("return",{mainData:i});case 4:case"end":return t.stop()}},t,this)}));return function(a){return t.apply(this,arguments)}}(),head:function(){return{title:"Tin tức  | Spadi.vn"}},data:function(){return{}},methods:{m_toObject:function(t){this.$router.push("/cua-hang/"+this.$route.params.slug+"/tin-tuc/"+t.slug)}}}}});