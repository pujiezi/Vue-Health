webpackJsonp([18],{FAHx:function(n,t,a){t=n.exports=a("FZ+f")(!1),t.push([n.i,"\n#smallTools[data-v-a3d9a73a] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  overflow: hidden;\n  z-index: 1000;\n}\n#smallTools .content[data-v-a3d9a73a] {\n  position: relative;\n  padding-top: 2rem;\n  background: #fff;\n  font-size: 12px;\n}\n#smallTools .content .Thelistof[data-v-a3d9a73a] {\n  width: 100%;\n  background: #fff;\n  border-bottom: 1px solid #ccc;\n  border-right: 0;\n  border-left: 0;\n  margin: 0 auto;\n  padding-left: 0.5rem;\n}\n#smallTools .content .Thelistof .dd_nav01[data-v-a3d9a73a] {\n  width: 100%;\n  height: 1.2rem;\n  border-bottom: 1px solid #dbdbdc;\n  position: relative;\n}\n#smallTools .content .Thelistof .dd_nav01 .myList[data-v-a3d9a73a] {\n  display: table;\n  vertical-align: middle;\n  height: 1.2rem;\n  width: 100%;\n  color: #333;\n}\n#smallTools .content .Thelistof .dd_nav01 .myList i[data-v-a3d9a73a] {\n  display: table-cell;\n  vertical-align: middle;\n  background-size: 0.5rem;\n  position: absolute;\n  right: 0.25rem;\n  top: 0.42rem;\n  height: 0.34rem;\n  width: 0.5rem;\n}\n#smallTools .content .Thelistof .dd_nav01 .myList span[data-v-a3d9a73a] {\n  height: 100%;\n  display: table-cell;\n  vertical-align: middle;\n}\n",""])},giVW:function(n,t,a){"use strict";function e(n){a("mXUo")}Object.defineProperty(t,"__esModule",{value:!0});var i={name:"smallTools",data:function(){return{flashlights:!1}},methods:{turn:function(){console.log(this.flashlights),document.addEventListener("deviceready",function(){window.plugins.flashlight.toggle(function(){},function(){},{intensity:.3})})},sweep:function(){document.addEventListener("deviceready",function(){cordova.plugins.barcodeScanner.scan(function(n){alert("We got a barcode\nResult: "+n.text+"\nFormat: "+n.format+"\nCancelled: "+n.cancelled)},function(n){alert("Scanning failed: "+n)})})}}},l=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("transition",{attrs:{name:"fadeIn"}},[a("div",{attrs:{id:"smallTools"}},[a("div",{staticClass:"myheader"},[a("my-header",{attrs:{fixed:"",title:"小小工具"}},[a("a",{staticClass:"back-white",attrs:{slot:"left"},on:{click:function(t){n.$router.go(-1)}},slot:"left"})])],1),n._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"Thelistof"},[a("div",{staticClass:"dd_nav01 "},[a("div",{staticClass:"myList",on:{click:function(n){}}},[a("span",[n._v("手电筒")]),n._v(" "),a("mt-switch",{on:{change:n.turn},model:{value:n.flashlights,callback:function(t){n.flashlights=t},expression:"flashlights"}})],1)]),n._v(" "),a("div",{staticClass:"dd_nav01 "},[a("div",{staticClass:"myList",on:{click:n.sweep}},[a("span",[n._v("扫码")])])])])])])])},o=[],s={render:l,staticRenderFns:o},d=s,c=a("VU/8"),r=e,f=c(i,d,!1,r,"data-v-a3d9a73a",null);t.default=f.exports},mXUo:function(n,t,a){var e=a("FAHx");"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);a("rjj0")("5152dae2",e,!0,{})}});