webpackJsonp([8,17],{"/CXR":function(t,e,n){var i=n("YF6O");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("301c1c48",i,!0,{})},"2CI0":function(t,e,n){var i=n("iN0h");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("25255356",i,!0,{})},VDtX:function(t,e,n){"use strict";function i(t){n("/CXR")}Object.defineProperty(e,"__esModule",{value:!0});var o=n("Dd8w"),a=n.n(o),s=n("mtWM"),l=n.n(s),r=n("NYxO"),c=n("fJsZ"),d={name:"publish",components:{myPreview:c.default},data:function(){return{title:"",content:"",classid:"",labelOptions:[{label:"女性",value:"1"},{label:"育儿",value:"2"},{label:"中医",value:"3"},{label:"本地",value:"4"},{label:"政策",value:"5"},{label:"产业",value:"6"},{label:"旅游",value:"7"},{label:"其他",value:"0"}],contentImages:[],coverImages:[],editorOption:{modules:{toolbar:[{list:"ordered"},{list:"bullet"},"image"],history:{delay:2e3,maxStack:500,userOnly:!0}},placeholder:" ",imageHandler:this.imageHandler},json:null,ajax:!1,edit:!1}},computed:a()({},Object(r.c)("user",["userInfo"]),{editor:function(){return this.$refs.myQuillEditor.quill},isChange:function(){return this.title+this.content+this.classid}}),watch:{isChange:function(t,e){this.edit=!0,this.ajax&&(this.edit=!1,this.ajax=!1)}},methods:a()({},Object(r.b)("health",["get_article_data","post_article_data"]),{init:function(){var t=this,e=this.$route.query.id;e&&this.get_article_data(e).then(function(e){e.data&&(t.json=e.data,t.title=t.json.title,t.content=t.json.newstext,t.classid=t.json.classid),t.ajax=!0}).catch(function(t){console.log(t)})},imageHandler:function(t,e){var n=this,i=document.createElement("input");i.setAttribute("type","file"),i.click(),i.onchange=function(){var t=i.files[0];if(/^image\//.test(t.type)){var e=new FormData;e.append("file",t),n.upLoadToServer(e)}else n.$toast("只能上传图片"),console.warn("上传格图片式错误")}},upLoadToServer:function(t){var e=this;l.a.post("http://api.toutiaojk.com/e/extend/jkh/upload_file.php",t,{headers:{"Content-Type":"multipart/form-data"},responseType:"json"}).then(function(t){var n=t.data.data;if(n){var i=e.editor.getSelection();e.editor.insertEmbed(i.index,"image",n)}}).catch(function(t){console.log(t),e.$toast({message:"操作失败",iconClass:"icon-close"})})},publish:function(t,e,n){var i=this;this.title=this.title.replace(/\s/gi,"");var o={type:t,state:e,title:this.title,newstext:this.content,classid:this.classid};this.coverImages[0]&&(o.titlepic=this.coverImages[0].src),this.coverImages.length>=3&&(o.titlepic2=this.coverImages[1].src,o.titlepic3=this.coverImages[2].src),this.json&&(o.id=this.json.id),this.$indicator.open(),this.post_article_data(o).then(function(t){i.$indicator.close(),t&&t.data?(i.edit=!1,i.$toast({message:"操作成功",iconClass:"icon-dui"}),n&&i.$router.push("/index/user/health")):i.$toast({message:"操作失败",iconClass:"icon-close"})}).catch(function(t){console.log(t),i.$indicator.close(),i.$toast({message:"操作失败",iconClass:"icon-close"})})},verify:function(t,e,n){var i=this;this.coverImages=this.editor.container.querySelectorAll("img"),"3"===e?this.allRule()&&this.$msgBox.confirm("确定执行此操作?").then(function(){i.publish(t,e,n)}):"2"===e&&this.onlyTitleRule()&&this.publish(t,e,n)},allRule:function(){if(this.title)if(this.title.length<5)this.$toast("标题长度不能低于5个字");else if(this.title.length>30)this.$toast("标题长度不能超过30个字");else if(this.content)if(!this.coverImages.length>0)this.$toast("正文不能没有图片");else{if(this.classid)return!0;this.$toast("标签不能为空")}else this.$toast("正文不能为空");else this.$toast("标题不能为空")},onlyTitleRule:function(){if(this.title)return!0;this.$toast("标题不能为空")},openPreview:function(){if(this.onlyTitleRule()){var t=new Date,e=t.getFullYear(),n=t.getMonth()+1,i=t.getDate(),o=e+"-"+n+"-"+i,a={title:this.title,newstext:this.content,classid:this.classid,newstime:o,befrom:this.userInfo.nickname};this.$router.push({name:"preview",params:{json:a}})}}}),created:function(){this.init()},mounted:function(){this.editor.getModule("toolbar").addHandler("image",this.imageHandler)},beforeRouteLeave:function(t,e,n){this.edit?this.$msgBox.confirm("离开将不会保留修改内容，是否确定？").then(function(){n()}).catch(function(t){console.log(t),n(!1)}):n()}},u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fadeIn"}},[n("div",{attrs:{id:"publish"}},[n("my-header",{directives:[{name:"goTop",rawName:"v-goTop:click",value:!0,expression:"true",arg:"click"}],attrs:{fixed:"",title:t.userInfo.nickname}},[n("a",{staticClass:"back-black",attrs:{slot:"left"},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$router.go(-1)}},slot:"left"})]),t._v(" "),n("div",{staticClass:"content",class:{isIOS:"ios"==t.$store.state.device}},[n("div",{staticClass:"container"},[n("div",{staticClass:"title edit-cell"},[n("div",{staticClass:"edit-main"},[n("label",{staticClass:"edit-label",attrs:{for:"title"}},[t._v("标题5-30字")]),t._v(" "),n("div",{staticClass:"edit-input"},[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.title,expression:"title",modifiers:{trim:!0}}],attrs:{id:"title",type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})])])]),t._v(" "),n("div",{staticClass:"text edit-cell"},[n("div",{staticClass:"edit-main"},[n("label",{staticClass:"edit-label",attrs:{for:"title"}},[t._v("正文")]),t._v(" "),n("div",{staticClass:"edit-input"},[n("quill-editor",{ref:"myQuillEditor",attrs:{options:t.editorOption},model:{value:t.content,callback:function(e){t.content="string"==typeof e?e.trim():e},expression:"content"}})],1)])]),t._v(" "),n("div",{staticClass:"label edit-cell"},[n("div",{staticClass:"edit-label"},[t._v("标签")]),t._v(" "),n("div",{staticClass:"edit-input"},[n("mt-radio",{attrs:{options:t.labelOptions},model:{value:t.classid,callback:function(e){t.classid=e},expression:"classid"}})],1)]),t._v(" "),n("div",{staticClass:"control"},[t.$route.query.id?[n("mt-button",{staticClass:"publish_btn",attrs:{type:"danger"},on:{click:function(e){e.stopPropagation(),t.verify("edit","3",!0)}}},[t._v("发表")]),t._v(" "),n("mt-button",{staticClass:"draft_btn",attrs:{type:"danger"},on:{click:function(e){e.stopPropagation(),t.verify("edit",t.json.state)}}},[t._v("保存")])]:[n("mt-button",{staticClass:"publish_btn",attrs:{type:"danger"},on:{click:function(e){e.stopPropagation(),t.verify("new","3",!0)}}},[t._v("发表")]),t._v(" "),n("mt-button",{staticClass:"draft_btn",on:{click:function(e){e.stopPropagation(),t.verify("new","2",!0)}}},[t._v("存草稿")])],t._v(" "),n("mt-button",{staticClass:"cancle_btn",on:{click:function(e){e.stopPropagation(),t.openPreview(e)}}},[t._v("预览")]),t._v(" "),n("mt-button",{staticClass:"cancle_btn",on:{click:function(e){e.stopPropagation(),t.$router.go(-1)}}},[t._v("取消")])],2)])]),t._v(" "),n("router-view")],1)])},p=[],h={render:u,staticRenderFns:p},f=h,b=n("VU/8"),m=i,v=b(d,f,!1,m,null,null);e.default=v.exports},YF6O:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,'\n#publish {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  z-index: 1000;\n  background-color: #fff;\n}\n#publish header {\n  background-color: #fff;\n  color: #222;\n  border-bottom: 1px solid #e0e0e0;\n  -webkit-box-shadow: 0 1px 2px #e8e8e8;\n          box-shadow: 0 1px 2px #e8e8e8;\n}\n#publish .container {\n  padding: 20px 16px 40px;\n}\n#publish .container .edit-cell {\n  margin-bottom: 15px;\n}\n#publish .container .edit-cell .edit-label {\n  display: block;\n  font-size: 14px;\n  color: #999;\n  margin-bottom: 5px;\n}\n#publish .container .title {\n  position: relative;\n}\n#publish .container .title input {\n  display: block;\n  width: 100%;\n  height: 40px;\n  padding: 12px;\n  font-size: 14px;\n  line-height: 1em;\n  color: #666;\n  vertical-align: middle;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #e9e9e9;\n  border-radius: 4px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n#publish .container .text .quill-editor {\n  border: 1px solid #eee;\n  border-radius: 4px;\n  overflow: hidden;\n}\n#publish .container .text .quill-editor .ql-toolbar {\n  border-bottom: 1px solid #e9e9e9 !important;\n}\n#publish .container .text .quill-editor .ql-toolbar.ql-snow {\n  border: none;\n  background: #eee;\n}\n#publish .container .text .quill-editor .ql-container {\n  height: 320px;\n  font-size: 16px;\n  color: #5d5d5d;\n  border: none;\n}\n#publish .container .text .quill-editor .ql-container .ql-editor {\n  padding: 12px 10px;\n}\n#publish .container .text .quill-editor .ql-container .ql-editor h1 {\n  position: relative;\n  font-size: 18px;\n  line-height: 24px;\n  font-weight: 700;\n  padding-left: 12px;\n}\n#publish .container .text .quill-editor .ql-container .ql-editor h1:after {\n  content: "";\n  width: 4px;\n  height: 18px;\n  background: #f85959;\n  top: 3px;\n  position: absolute;\n  left: 0;\n}\n#publish .container .text .quill-editor .ql-container .ql-editor img {\n  display: block;\n  margin: 0 auto;\n  margin-bottom: 1em;\n}\n#publish .container .label .mint-cell {\n  display: inline-block;\n  background: none;\n}\n#publish .container .label .mint-cell .mint-cell-wrapper {\n  font-size: 13px;\n  background: none;\n  padding: 0 0.55rem 0 0;\n  border: none;\n}\n#publish .container .label .mint-cell .mint-radiolist-label {\n  padding: 0;\n}\n#publish .container .label .mint-cell:hover {\n  text-decoration: none;\n}\n#publish .container .control {\n  margin-top: 30px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n#publish .container .control button {\n  width: 20%;\n  padding: 0;\n  height: 26px;\n  font-size: 14px;\n}\n#publish .container .control .draft_btn,\n#publish .container .control .cancle_btn {\n  background-color: #f1f1f1;\n  color: #a4a4a4;\n  border-color: #f1f1f1;\n}\n#publish .container .control .draft_btn:hover,\n#publish .container .control .cancle_btn:hover {\n  background-color: #e4e4e4;\n  color: #989898;\n  border-color: #e4e4e4;\n}\n',""])},fJsZ:function(t,e,n){"use strict";function i(t){n("2CI0")}Object.defineProperty(e,"__esModule",{value:!0});var o=n("Dd8w"),a=n.n(o),s=n("Iwrl"),l=n("NYxO"),r={name:"preview",components:{myArticle:s.a},data:function(){return{id:this.$route.query.id,json:this.$route.params.json}},computed:a()({},Object(l.c)("user",["userInfo"])),methods:a()({},Object(l.b)("health",["get_article_data"]),{get_article:function(){var t=this;this.get_article_data(this.id).then(function(e){e.data&&(t.json=e.data)}).catch(function(t){console.log(t)})}}),created:function(){this.get_article()}},c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fadeIn"}},[n("div",{attrs:{id:"preview"}},[n("my-header",{directives:[{name:"goTop",rawName:"v-goTop:click",value:!0,expression:"true",arg:"click"}],attrs:{fixed:"",title:t.userInfo.nickname}},[n("a",{staticClass:"close-black",attrs:{slot:"left"},on:{click:function(e){e.stopPropagation(),t.$router.go(-1)}},slot:"left"})]),t._v(" "),n("div",{staticClass:"content",class:{isIOS:"ios"==t.$store.state.device}},[n("div",{staticClass:"container"},[n("my-article",{attrs:{json:t.json}})],1)])],1)])},d=[],u={render:c,staticRenderFns:d},p=u,h=n("VU/8"),f=i,b=h(r,p,!1,f,null,null);e.default=b.exports},iN0h:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,"\n#preview {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  z-index: 1001;\n  background: #fff;\n}\n#preview .container {\n  padding: 0;\n}\n",""])}});