webpackJsonp([59],{DE0e:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("rkHe"),a=n("FfBe"),s=n("VU/8")(i.a,a.a,!1,null,null,null);s.options.__file="pages\\index\\tai-khoan\\index\\index.vue",e.default=s.exports},FfBe:function(t,e,n){"use strict";var i=function(){var t=this.$createElement;this._self._c;return this._m(0)};i._withStripped=!0;var a={render:i,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box",staticStyle:{padding:"10px","min-height":"300px","padding-bottom":"20px"}},[e("span",{staticClass:"el-icon-success",staticStyle:{"font-size":"90px","padding-top":"50px","padding-bottom":"30px",color:"rgba(45,45,48,.2)",width:"100%","text-align":"center"}}),e("br"),e("p",{staticStyle:{"text-align":"center",width:"100%","font-size":"32px","font-weight":"bold",color:"rgba(45,45,48,.6)"}},[this._v("SPADI.VN")]),e("p",{staticStyle:{"text-align":"center",width:"100%"}},[this._v("Chào mừng đến với Spadi.vn")])])}]};e.a=a},rkHe:function(t,e,n){"use strict";e.a={name:"cos",asyncData:function(){return{yourAddress:"Hà Nội - Việt Nam"}},head:function(){return{title:this.yourAddress,meta:[{hid:"description",name:"description",content:"My custom description"}]}},data:function(){return{a:"aaaaaaaaaaaaaaa",markers:[{position:{lat:20.9636603,lng:105.7492092}},{position:{lat:20.9634,lng:105.7492097}}]}},beforeMount:function(){var t=this;this.EB.$on("updateCurrentLocation",function(e){var n=e.coords.latitude,i=e.coords.longitude;t.$http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+n+","+i+"&sensor=false&key=AIzaSyBhZ4W7j3Xlo-UOlY7yTQjUc0GPJwr9d0k").then(function(e){void 0!==e.body.results&&7===e.body.results.length&&(t.yourAddress=e.body.results[0].formatted_address)}).catch(function(t){})})},mounted:function(){},methods:{m_TestClick:function(){}}}}});