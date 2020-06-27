(this["webpackJsonpjs-editor"]=this["webpackJsonpjs-editor"]||[]).push([[0],{14:function(module,__webpack_exports__,__webpack_require__){"use strict";var E_Programming_JS_Sandbox_js_editor_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(24),E_Programming_JS_Sandbox_js_editor_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),_codeview__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(15),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__),_errorconsoleview__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(17),_resultview__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(18),react_split_pane__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(10),_common_consoleextension__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(19),beautify=__webpack_require__(38).js,esprima=__webpack_require__(40),Editor=function Editor(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),_useState2=Object(E_Programming_JS_Sandbox_js_editor_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState,2),result=_useState2[0],setResult=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(void 0),_useState4=Object(E_Programming_JS_Sandbox_js_editor_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState3,2),error=_useState4[0],setError=_useState4[1],_useState5=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),_useState6=Object(E_Programming_JS_Sandbox_js_editor_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState5,2),code=_useState6[0],setCode=_useState6[1],_useState7=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)({line:0,ch:0}),_useState8=Object(E_Programming_JS_Sandbox_js_editor_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState7,2),cursor=_useState8[0],setCursor=_useState8[1],addLogs=function(e){setResult((function(_){return[].concat(Object(E_Programming_JS_Sandbox_js_editor_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(_),[e])}))},onFormatClick=function(e){if(e){var _=beautify(e,{indent_size:2,space_in_empty_paren:!0});setCode(_)}},onCodeChange=function(e,_){if(_){setCursor(e),setCode(_),setResult([]);try{esprima.parseScript(_),setError(void 0)}catch(t){setError(t.message)}}else setError(void 0)},onExecuteClick=function onExecuteClick(code){if(code)try{setResult([]),setCode(code);var _result=eval(code);_result&&"function"!==typeof _result&&"object"!==typeof _result&&addLogs(_result),setError(void 0)}catch(e){setError(e.message)}},onClearClick=function(){setCode(""),setResult([])};return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_common_consoleextension__WEBPACK_IMPORTED_MODULE_7__.a,{addLogs:addLogs}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_split_pane__WEBPACK_IMPORTED_MODULE_6__.a,{className:"root-pane",split:"vertical",defaultSize:"70%",minSize:400,maxSize:1e3},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_codeview__WEBPACK_IMPORTED_MODULE_2__.a,{code:code,cursor:cursor,onCodeChange:onCodeChange,onClearClick:onClearClick,onFormatClick:onFormatClick,onExecuteClick:onExecuteClick}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_split_pane__WEBPACK_IMPORTED_MODULE_6__.a,{split:"horizontal",defaultSize:"60%",minSize:200,maxSize:400},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_resultview__WEBPACK_IMPORTED_MODULE_5__.a,{result:result}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_errorconsoleview__WEBPACK_IMPORTED_MODULE_4__.a,{error:error}))))};__webpack_exports__.a=Editor},15:function(e,_,t){"use strict";var a=t(0),r=t.n(a),n=t(16),o=t(3);t(32),t(33),t(34);_.a=function(e){var _=e.code;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{title:"JavaScript",controls:function(){var t=r.a.createElement("button",{type:"button",className:"codeview-controls",title:"Execute",onClick:function(){e.onExecuteClick(_)}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),r.a.createElement("path",{d:"M8 5v14l11-7z",fill:"#51de51",className:"playbtn"})),"Play"),a=r.a.createElement("button",{type:"button",className:"codeview-controls",title:"Format code",onClick:function(){e.onFormatClick(_)}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"white",width:"16px",height:"16px"},r.a.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),r.a.createElement("path",{d:"M3 19h18v2H3zM3 7h12v2H3zm0-4h18v2H3zm0 12h12v2H3zm0-4h18v2H3z"})),"\xa0Fromat");return[r.a.createElement("button",{type:"button",className:"codeview-controls",title:"Clear code",onClick:function(){e.onClearClick()}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"white",width:"20px",height:"20px"},r.a.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),r.a.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z",fill:"red"})),"Clear"),a,t]}()}),r.a.createElement(n.UnControlled,{value:_,className:"codemirror-wrapper",options:{mode:"javascript",theme:"material",lineNumbers:!0},onChange:function(t,a,r){_=t.getValue();var n=t.getCursor();t.setCursor(e.cursor.line,e.cursor.ch),e.onCodeChange(n,_)}}))}},17:function(e,_,t){"use strict";var a=t(0),r=t.n(a),n=t(3);_.a=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(n.a,{title:"Error console"}),r.a.createElement("div",{className:"view console"},e.error))}},18:function(e,_,t){"use strict";var a=t(0),r=t.n(a),n=t(3);_.a=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"view-wrapper"},r.a.createElement(n.a,{title:"Result"}),r.a.createElement("div",{className:"view result"},e.result&&e.result.length>0?e.result.map((function(e){return r.a.createElement("p",null,e)})):null)))}},19:function(e,_,t){"use strict";var a=t(20),r=t(21),n=t(7),o=t(25),l=t(23),c=t(0),s=function(e){Object(o.a)(t,e);var _=Object(l.a)(t);function t(e,r){var o;Object(a.a)(this,t),o=_.call(this,e,r);var l=Object(n.a)(o);return console.log=function(e){var _="";_="object"===typeof e?JSON.stringify(e):e,l.props.addLogs(_)},o}return Object(r.a)(t,[{key:"render",value:function(){return null}}]),t}(c.Component);_.a=s},22:function(e,_){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACpklEQVRoge2ZS0hUURjHf8d8Zy8kn2lmZWkYJWUIIkGLwKQWgQ/EjaQJEj0QKi3bFC6LgogIF2Zgj8VUPijUiCAYok2mkAYqNKJiKFY2Ezmnxa0OozM1k3rvovODy/3O+c7j+3Mu53VBo9ForET4csg+pJmB/A2R4T3WILMDWWy0AKvRAqxGC7AaLcBqtACr0QKsRguwmiUTIDLE7+f+E0/f2wEoqRHE5wlCMgWJewVlpwW97wPvx/QR6LbD7kJBSzuMTsD3WRgZh+bHkF0o6LYH1p6pAtxuOHJe4HQZ6bBQSE813gAzTqi9LJABnAVNFdAzAIMffnYcBK/uSfpaJf0dko1JcLwMOhslwudBdz7BSxOqd6amlR0aAls2GHZyPPQ8lESEB96mqSOQmqRspwuKTgmGR4z0vwQPJgtIioP9uSpt64KtBwQV9YKB4X9r0/RZqPGiZGe6SjtdcOsBpBcYQr58Daw90wUkxMCLZkltJURFqvzZWUNITolgctp3/blYshIvj4BLJyRDnZKGk5LYaOXr6YcL1/yfhpZEgNv9Z/+veT56NZypgHftkj3bld/W5X9fCxYwPAKHqgVtz1XeoMOzTESYsm8/guwiwecZlbdqBRTnq9Vr7KP//S9oHbjbAeV1ghknPH0pqCqCtBTJnVbPTyAl0XiX1BhbCICD1YKmBsm6OJj6BLYuVScx1iQBc2eTK00w975483rYtsmwc3ZIWtoN/zM7JO8TJMTAxCS4vqk6xfn+x7CgTygtBdpuSFZGefeHhsD1erU1OFYK56qUX0pwjHkGn7cL6o76vxlalOv10QlouCmwdYFjHNaugdwsOFspycqYX97+Bq42C173wpADIsMhMw1KCyTlhyF4mZdAfVyv6/8DVqMFaDQazf/ND8ttt3KFrySDAAAAAElFTkSuQmCC"},26:function(e,_,t){e.exports=t(41)},3:function(e,_,t){"use strict";var a=t(0),r=t.n(a);_.a=function(e){return r.a.createElement("div",{className:"viewHeader"},e.title,e.controls)}},41:function(e,_,t){"use strict";t.r(_);var a=t(13),r=t.n(a),n=t(0),o=t.n(n),l=t(14),c=t(22),s=t.n(c),i=function(){return o.a.createElement("nav",{className:"navbar navbar-light bg-light"},o.a.createElement("a",{className:"navbar-brand",href:"#"},o.a.createElement("img",{src:s.a,width:"30",height:"30",className:"d-inline-block align-top",alt:"JS Editor"}),"Editor"))};var u=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(i,null),o.a.createElement(l.a,null))};r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(u,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.eb903ab9.chunk.js.map