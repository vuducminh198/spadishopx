webpackJsonp([15],{"20BE":function(t,e,a){"use strict";var i=a("mvHQ"),n=a.n(i),o=a("0kY3"),l=a.n(o),s=a("HJMx"),d=a.n(s),r=a("7t+N"),c=a.n(r),m=(a("/5sW"),a("JwKv")),u=a("PJh5"),p=a.n(u);e.a={middleware:"clientIsManager",components:{Input:d.a,InputNumber:l.a,PriBtn:m.a},head:{},name:"deal_create",data:function(){return{content:"",editorOption:{modules:{toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{font:[]}],[{color:[]},{background:[]}],[{align:[]}],["clean"],["link","image","video"]]}},v:{imageReview:[],currentObjectImage:null,isLoading:!1,listCategory:[],listShop:[]},form:{addDeal:{title:"",description:"",content:"",type:"percent",quantity:1,value:10,price:1e3,from:"",to:"",shop:[],serviceItem:[],images:[]}},value3:[Date.now(),Date.now()]}},computed:{listIMG:function(){return this.v.imageReview},listShopGroupByChain:function(){var t=this,e=[],a=[],i=[];this.v.listShop.forEach(function(t){-1===a.indexOf(t.chain._id)&&(a.push(t.chain._id),i.push(t.chain.name))});for(var o=function(o){e.push({name:i[o],_id:a[o],shop:[]}),t.v.listShop.forEach(function(t){t.chain._id===a[o]&&e[o].shop.push(JSON.parse(n()(t)))})},l=0;l<a.length;l++)o(l);return e}},beforeMount:function(){c()(document).ready(function(){c()(".ql-formats button").addClass("btn cusbtn"),c()(".ql-formats .ql-picker ").addClass(" cusbtn"),c()(".ql-formats").addClass("btn-group"),c()(".ql-formats").css("margin-bottom:5px;")}),this.m_getCategory(),this.m_getListShop()},methods:{m_getListShop:function(){var t=this;this.$http.get("https://spadi.com.vn/api/shop/list",this.cf()).then(function(e){t.v.listShop=e.body}).catch(function(t){})},m_getCategory:function(){var t=this;this.$http.get("https://spadi.com.vn/api/category/service/list").then(function(e){t.v.listCategory=e.body}).catch(function(t){})},moment:function(){return p()()},m_InputFileChange:function(t){var e=this;this.v.currentObjectImage=t.target.files||t.dataTransfer.files;for(var a=0;a<this.v.currentObjectImage.length;a++)if(this.v.imageReview.length<6){this.form.addDeal.images.push(this.v.currentObjectImage[a]);var i=new FileReader;i.onload=function(t){e.v.imageReview.push(t.target.result)},i.readAsDataURL(this.v.currentObjectImage[a])}},m_openUploadImage:function(){c()("#inputFileUploadLisDeal").click()},m_removeImageIndex:function(t){var e=[];this.v.imageReview.map(function(a,i){i!==t&&e.push(a)}),this.v.imageReview=e,e=[],this.form.addDeal.images.map(function(a,i){i!==t&&e.push(a)}),this.form.addDeal.images=e},m_formAddDealSubmit:function(t){var e=this;t.preventDefault();var a=new FormData;a.append("title",this.form.addDeal.title),a.append("description",this.form.addDeal.description),a.append("typeCoupon",this.form.addDeal.typeCoupon),a.append("quantity",this.form.addDeal.quantity),this.form.addDeal.shop.forEach(function(t){a.append("shop",t)}),this.form.addDeal.serviceItem.forEach(function(t){a.append("serviceItem",t)}),a.append("content",c()("#mcontent .ql-editor").html()),a.append("from",this.value3[0]),a.append("to",this.value3[1]),this.form.addDeal.images.forEach(function(t){a.append("images",t)}),this.$confirm("Bạn có chắc muốn thêm Coupon: "+this.form.addDeal.title+" không?","Chú ý",{type:"warning",confirmButtonText:"Chắc chắn",cancelButtonText:"Không"}).then(function(){e.v.isLoading=!0,e.$http.post("https://spadi.com.vn/api/coupon/create",a,e.cf()).then(function(t){e.v.isLoading=!1,e.$message({type:"success",message:void 0===t.body.Message?"Thao tác thành công":t.body.Message})}).catch(function(t){e.v.isLoading=!1,e.$message({type:"error",message:void 0!==t.body&&void 0!==t.body.ErrorMessage?t.body.ErrorMessage:"Đã xảy ra sự cố, vui lòng kiểm tra và thử lại sau"})})}).catch(function(){})}}}},"4Lai":function(t,e,a){var i=a("P84k");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("228aa584",i,!1)},D89k:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,'.container-q .quill-editor[data-v-a64e0672]{min-height:200px;max-height:400px;overflow-y:auto}.plusHover[data-v-a64e0672]:hover{filter:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feGaussianBlur stdDeviation="1" /></filter></svg>#filter\');-webkit-filter:blur(1px);filter:blur(1px);-webkit-transition:all .8s ease-in-out;transition:all .8s ease-in-out}.remove-image-class[data-v-a64e0672]{width:25px;height:25px;border:0;border-radius:50vh;background-color:hsla(0,0%,100%,.2);outline:none}.remove-image-class[data-v-a64e0672]:hover{background-color:rgba(45,45,48,.6)}.remove-image-class:hover span[data-v-a64e0672]{color:#fff;outline:none}',""])},FOzE:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8IS0tIENyZWF0b3I6IENvcmVsRFJBVyBYNyAtLT4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTAwcHgiIGhlaWdodD0iNTAwcHgiIHZlcnNpb249IjEuMSIgc3R5bGU9InNoYXBlLXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IHRleHQtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjsgaW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsgZmlsbC1ydWxlOmV2ZW5vZGQ7IGNsaXAtcnVsZTpldmVub2RkIg0Kdmlld0JveD0iMCAwIDUwMCA1MDAiDQogeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KIDxkZWZzPg0KICA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KICAgPCFbQ0RBVEFbDQogICAgLmZpbDAge2ZpbGw6I0ZFRkVGRX0NCiAgICAuZmlsMSB7ZmlsbDojQkRCRkMxfQ0KICAgXV0+DQogIDwvc3R5bGU+DQogPC9kZWZzPg0KIDxnIGlkPSJMYXllcl94MDAyMF8xIj4NCiAgPG1ldGFkYXRhIGlkPSJDb3JlbENvcnBJRF8wQ29yZWwtTGF5ZXIiLz4NCiAgPHJlY3QgY2xhc3M9ImZpbDAiIHg9IjE1IiB5PSIxMyIgd2lkdGg9IjQ1OSIgaGVpZ2h0PSI0NTkiLz4NCiAgPHJlY3QgY2xhc3M9ImZpbDEiIHRyYW5zZm9ybT0ibWF0cml4KDEuNzU3RS0wMTQgMC42NjM0MDcgLTAuNjYzNDA3IDEuNzU3RS0wMTQgMjU3LjM3OSAxNDcuMTk1KSIgd2lkdGg9IjI4OC4wMDEiIGhlaWdodD0iMzcuOTk5NyIvPg0KICA8cmVjdCBjbGFzcz0iZmlsMSIgeD0iMTQ5IiB5PSIyMzAiIHdpZHRoPSIxOTEuMDYyIiBoZWlnaHQ9IjI1LjIwOTMiLz4NCiA8L2c+DQo8L3N2Zz4NCg=="},JwKv:function(t,e,a){"use strict";var i=a("g/wM"),n=a("mKXO"),o=!1;var l=function(t){o||a("4Lai")},s=a("VU/8")(i.a,n.a,!1,l,"data-v-6f7dab1a",null);s.options.__file="components\\button.vue",e.a=s.exports},P84k:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"button[data-v-6f7dab1a]{border:0;color:#fff;font-size:16px;padding:8px 16px;outline:none;background-color:#ff5151;min-width:86px;-webkit-transition:all .6s ease-in-out;transition:all .6s ease-in-out}button[data-v-6f7dab1a]:hover{background-color:#ff6262}.icon-e[data-v-6f7dab1a]{background-color:#fff;border-radius:50vh;width:10px;height:10px;float:left;padding:10px}.e1[data-v-6f7dab1a]{-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.e1[data-v-6f7dab1a],.e2[data-v-6f7dab1a]{-webkit-animation-name:abLoad-data-v-6f7dab1a;animation-name:abLoad-data-v-6f7dab1a;-webkit-animation-duration:2s;animation-duration:2s}.e2[data-v-6f7dab1a]{-webkit-animation-delay:.3s;animation-delay:.3s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.e3[data-v-6f7dab1a]{-webkit-animation-name:abLoad-data-v-6f7dab1a;animation-name:abLoad-data-v-6f7dab1a;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-delay:.6s;animation-delay:.6s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}@-webkit-keyframes abLoad-data-v-6f7dab1a{0%{padding:0}20%{padding:10px}to{padding:0}}@keyframes abLoad-data-v-6f7dab1a{0%{padding:0}20%{padding:10px}to{padding:0}}",""])},"g/wM":function(t,e,a){"use strict";e.a={name:"priBtn",props:{loading:{type:Boolean,default:!1},title:{type:String,default:"Button"},type:{type:String,default:"button"},noRound:{type:Boolean,default:!1}},data:function(){return{}},methods:{m_emitParent:function(){this.$emit("click")}}}},mKXO:function(t,e,a){"use strict";var i=function(){var t=this.$createElement,e=this._self._c||t;return e("button",{style:this.noRound?"":"border-radius: 50vh",attrs:{type:this.type,disabled:this.loading},on:{click:this.m_emitParent}},[e("table",{staticStyle:{"margin-bottom":"0",position:"absolute"},style:this.loading?"":"visibility: hidden"},[this._m(0)]),e("span",{style:this.loading?"visibility: hidden":""},[this._v(this._s(this.title))])])};i._withStripped=!0;var n={render:i,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("tbody",[e("tr",[e("td",{}),e("td",{staticStyle:{height:"22px","text-align":"center","vertical-align":"middle"}},[e("div",{staticClass:"icon-e e1"})]),e("td",{staticStyle:{height:"22px","text-align":"center","vertical-align":"middle"}},[e("div",{staticClass:"icon-e e2"})]),e("td",{staticStyle:{height:"22px","text-align":"center","vertical-align":"middle"}},[e("div",{staticClass:"icon-e e3"})]),e("td",{})])])}]};e.a=n},pyW0:function(t,e,a){var i=a("D89k");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("268271ba",i,!1)},scsN:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticStyle:{"font-family":"'Open Sans'","font-size":"18px","margin-bottom":"10px"}},[t._v("\n        TẠO MỚI COUPON\n    ")]),i("div",{staticStyle:{padding:"10px","background-color":"white"}},[void 0===t.$store.state.adminSelectedChain._id?i("hint"):i("form",{on:{submit:function(e){t.m_formAddDealSubmit(e)}}},[i("div",[i("label",{staticClass:"bold"},[t._v("Tiêu đề")]),i("div",{staticStyle:{"max-width":"600px"}},[i("el-input",{model:{value:t.form.addDeal.title,callback:function(e){t.$set(t.form.addDeal,"title",e)},expression:"form.addDeal.title"}})],1),i("label",{staticClass:"mt-8 bold"},[t._v("Mô tả")]),i("div",{staticStyle:{"max-width":"600px"}},[i("el-input",{attrs:{type:"textarea"},model:{value:t.form.addDeal.description,callback:function(e){t.$set(t.form.addDeal,"description",e)},expression:"form.addDeal.description"}})],1),i("label",{staticClass:"mt-8 bold"},[t._v("Thời gian sử dụng")]),i("div",{staticClass:"block",staticStyle:{"max-width":"600px"}},[i("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"datetimerange","range-separator":"đến","start-placeholder":"Thời gian bắt đầu","end-placeholder":"Thời gian kết thúc"},model:{value:t.value3,callback:function(e){t.value3=e},expression:"value3"}})],1),i("el-row",{staticStyle:{"max-width":"600px","margin-top":"10px","margin-bottom":"10px"},attrs:{gutter:20}},[i("el-col",{attrs:{md:12,sm:12,xs:24,lg:12}},[i("label",{staticClass:"mt-8 bold"},[t._v("Danh mục sản phẩm")]),i("el-select",{staticStyle:{width:"100%"},attrs:{multiple:"",filterable:"","no-data-text":"Không có dữ liệu","no-match-text":"Không có dữ liệu phù hợp",placeholder:"Chọn danh mục sản phẩm"},model:{value:t.form.addDeal.serviceItem,callback:function(e){t.$set(t.form.addDeal,"serviceItem",e)},expression:"form.addDeal.serviceItem"}},t._l(t.v.listCategory,function(e){return i("el-option-group",{key:e.name,attrs:{value:e.name,label:e.name}},t._l(e.item,function(t){return i("el-option",{key:t.name,attrs:{label:t.name,value:t._id}})}))}))],1),i("el-col",{attrs:{md:12,sm:12,xs:24,lg:12}},[i("label",{staticClass:"mt-8 bold"},[t._v("Mặt hàng có tại")]),i("el-select",{staticStyle:{width:"100%"},attrs:{multiple:"",filterable:"","no-data-text":"Không có dữ liệu","no-match-text":"Không có dữ liệu phù hợp",placeholder:"Chọn danh cửa hàng"},model:{value:t.form.addDeal.shop,callback:function(e){t.$set(t.form.addDeal,"shop",e)},expression:"form.addDeal.shop"}},t._l(t.listShopGroupByChain,function(e){return i("el-option-group",{key:e.name,attrs:{value:e.name,label:e.name}},t._l(e.shop,function(t){return i("el-option",{key:t.name,attrs:{label:t.name,value:t._id}})}))}))],1)],1),i("el-row",{staticStyle:{"max-width":"600px","margin-top":"10px","margin-bottom":"10px"},attrs:{gutter:20}},[i("el-col",{attrs:{md:12,sm:12,xs:24,lg:12}},[i("label",{staticClass:"mt-8 bold"},[t._v("Số lượng")]),i("el-input-number",{staticStyle:{width:"100%"},attrs:{"controls-position":"right"},model:{value:t.form.addDeal.quantity,callback:function(e){t.$set(t.form.addDeal,"quantity",e)},expression:"form.addDeal.quantity"}})],1),i("el-col",{attrs:{md:12,sm:12,xs:24,lg:12}},[i("label",{staticClass:"mt-8 bold"},[t._v("Kiểu Coupon")]),i("el-select",{staticStyle:{width:"100%"},attrs:{filterable:"","no-data-text":"Không có dữ liệu","no-match-text":"Không có dữ liệu phù hợp",placeholder:"Chọn danh cửa hàng"},model:{value:t.form.addDeal.typeCoupon,callback:function(e){t.$set(t.form.addDeal,"typeCoupon",e)},expression:"form.addDeal.typeCoupon"}},[i("el-option",{key:"Miễn phí",attrs:{value:"free",label:"Miễn Phí"}}),i("el-option",{key:"Cần tài khoản",attrs:{value:"info",label:"Cần tài khoản"}}),i("el-option",{key:"Cần thanh toán",attrs:{value:"bill",label:"Cần thanh toán"}})],1)],1)],1),i("label",{staticClass:"mt-8 bold"},[t._v("Hình ảnh (Tối đa 6 hình ảnh)")]),i("br"),i("div",[t._l(t.v.imageReview,function(e,a){return[i("div",{style:"background-size:cover; float:left; margin-right:5px; width:100px; height:100px; border:1px solid rgba(45,45,8,.2); background-image:url("+e+")"},[i("button",{staticClass:"pull-right remove-image-class",attrs:{type:"button"},on:{click:function(e){t.m_removeImageIndex(a)}}},[i("span",{staticClass:"el-icon-close"})])])]}),t.v.imageReview.length<6?i("img",{staticClass:"plusHover",staticStyle:{width:"100px",height:"100px",border:"1px solid rgba(45,45,8,.2)",cursor:"pointer"},attrs:{src:a("FOzE")},on:{click:t.m_openUploadImage}}):t._e(),i("img",{staticStyle:{width:"100px",visibility:"hidden",height:"100px",border:"1px solid rgba(45,45,8,.2)",cursor:"pointer"}}),i("input",{staticStyle:{display:"none"},attrs:{type:"file",multiple:"",id:"inputFileUploadLisDeal",accept:"image/jpeg"},on:{change:function(e){t.m_InputFileChange(e)}}})],2),i("label",{staticClass:"mt-8 bold"},[t._v("Nội dung chi tiết")]),i("section",{staticClass:"container-q"},[i("div",{directives:[{name:"quill",rawName:"v-quill:myQuillEditor",value:t.editorOption,expression:"editorOption",arg:"myQuillEditor"}],staticClass:"quill-editor",attrs:{id:"mcontent",content:t.content}})]),i("div",{staticStyle:{"margin-top":"20px"}},[i("grebtn",{staticStyle:{"max-width":"200px"},attrs:{title:"Tạo coupon",loading:t.v.isLoading,type:"submit"}})],1)],1)])],1)])};i._withStripped=!0;var n={render:i,staticRenderFns:[]};e.a=n},y8Gt:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("20BE"),n=a("scsN"),o=!1;var l=function(t){o||a("pyW0")},s=a("VU/8")(i.a,n.a,!1,l,"data-v-a64e0672",null);s.options.__file="pages\\quan-tri\\index\\coupon\\tao-moi.vue",e.default=s.exports}});