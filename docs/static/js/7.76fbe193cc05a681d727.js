webpackJsonp([7],{"32yP":function(t,n,i){n=t.exports=i("FZ+f")(!1),n.push([t.i,"\n#login {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n#login .wrapper {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n#login .defaultImg {\n  text-align: center;\n  width: 100%;\n  margin-bottom: 0.53rem;\n}\n#login .defaultImg img {\n  width: 2.4rem;\n  height: 2.4rem;\n}\n#login .defaultTip {\n  margin: 0 auto;\n  width: 50%;\n  text-align: center;\n}\n#login .defaultTip span {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 0.32rem;\n  color: #a9a9a9;\n  letter-spacing: 5px;\n  height: 0.8rem;\n  line-height: 0.8rem;\n}\n#login .defaultTip span:before {\n  content: '';\n  position: absolute;\n  width: 25%;\n  top: 50%;\n  left: -50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  border-top: 1px solid #a9a9a9;\n}\n#login .defaultTip span:after {\n  content: '';\n  position: absolute;\n  width: 25%;\n  top: 50%;\n  right: -50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  border-top: 1px solid #a9a9a9;\n}\n#login .loginList .list-item {\n  margin-top: 0.4rem;\n  text-align: center;\n}\n#login .loginList .list-item img {\n  width: 5.5rem;\n  height: 1.28rem;\n}\n",""])},"7ck0":function(t,n,i){t.exports=i.p+"static/img/qqlogin.92ba04c.png"},"8e87":function(t,n,i){t.exports=i.p+"static/img/wxlogin.7eb8171.png"},QrVH:function(t,n,i){"use strict";function e(t){i("eV3l")}Object.defineProperty(n,"__esModule",{value:!0});var s=i("Dd8w"),a=i.n(s),o=i("NYxO"),r={name:"login",data:function(){return{GPSLocation:{}}},methods:a()({},Object(o.d)(["set_userid"]),Object(o.d)("login",["set_isLogin"]),Object(o.d)("user",["set_userInfo"]),Object(o.b)("login",["get_userPower_data"]),{login:function(t){this.$toast({message:"测试",duration:2e3})}})},l=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"login"}},[e("my-header",{attrs:{fixed:"",title:"登录"}},[e("a",{staticClass:"back-white",attrs:{slot:"left"},on:{click:function(n){t.$router.go(-1)}},slot:"left"})]),t._v(" "),e("div",{staticClass:"content",class:{isIOS:"ios"==t.$store.state.device}},[e("div",{staticClass:"container"},[e("div",{staticClass:"wrapper"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("ul",{staticClass:"loginList"},[e("li",{staticClass:"list-item",on:{click:function(n){n.stopPropagation(),t.login(0)}}},[e("img",{attrs:{src:i("7ck0")}})]),t._v(" "),e("li",{staticClass:"list-item",on:{click:function(n){n.stopPropagation(),t.login(1)}}},[e("img",{attrs:{src:i("8e87")}})])])])])])],1)},c=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"defaultImg"},[e("img",{attrs:{src:i("gPYd")}})])},function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"defaultTip"},[i("span",[t._v("请选择登录方式")])])}],g={render:l,staticRenderFns:c},d=g,p=i("VU/8"),f=e,m=p(r,d,!1,f,null,null);n.default=m.exports},eV3l:function(t,n,i){var e=i("32yP");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);i("rjj0")("07cfb958",e,!0,{})},gPYd:function(t,n,i){t.exports=i.p+"static/img/members.1002f74.png"}});