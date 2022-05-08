(()=>{"use strict";var e={192:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(81),r=n.n(o),a=n(645),s=n.n(a)()(r());s.push([e.id,".textarea-wrapper{display:block;width:800px;height:350px;margin:20px auto}.keyboard-wrapper{display:flex;width:800px;margin:20px auto;flex-wrap:wrap;justify-content:space-between}.info{display:flex;width:400px;margin:20px auto}.button{margin:2px;box-sizing:border-box;height:45px;border:2px solid #000;text-align:center;justify-content:center;background-color:#0d0d0d;border-radius:6px;color:#d3d3d3;vertical-align:bottom;line-height:30px;transition:background-color 300ms;box-shadow:8px 8px 8px 0px rgba(34,60,80,.8);transition:box-shadow 300ms}.button:hover{border:2px solid #8764e4}.normal{width:45px}.plushalf-size{width:70px}.double-size{width:90px}.triple-size{width:130px}.long-size{width:300px}.active{background-color:#8764e4;box-shadow:1px 1px 8px 0px rgba(34,60,80,.8);border:2px solid #000}",""]);const i=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(o)for(var i=0;i<this.length;i++){var l=this[i][0];null!=l&&(s[l]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);o&&s[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},s=[],i=0;i<e.length;i++){var l=e[i],c=o.base?l[0]+o.base:l[0],u=a[c]||0,d="".concat(c," ").concat(u);a[c]=u+1;var h=n(d),g={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==h)t[h].references++,t[h].updater(g);else{var p=r(g,o);o.byIndex=i,t.splice(i,0,{identifier:d,updater:p,references:1})}s.push(d)}return s}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var s=0;s<a.length;s++){var i=n(a[s]);t[i].references--}for(var l=o(e,r),c=0;c<a.length;c++){var u=n(a[c]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=l}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),a=n(569),s=n.n(a),i=n(565),l=n.n(i),c=n(216),u=n.n(c),d=n(589),h=n.n(d),g=n(192),p={};p.styleTagTransform=h(),p.setAttributes=l(),p.insert=s().bind(null,"head"),p.domAPI=r(),p.insertStyleElement=u(),t()(g.Z,p),g.Z&&g.Z.locals&&g.Z.locals;class y{constructor(e,t){const n=document.createElement(t);e.append(n),this.node=n}destroy(){this.node.remove()}}class m extends y{constructor(e,t,n){super(e,"div"),this.model=t,this.controller=n,this.textArea=new y(this.node,"textarea"),this.model.onChangeTextArea((e=>{this.update(e)})),this.textArea.node.onclick=()=>{this.controller.onClickTextarea(this.textArea.node.selectionStart)},this.textArea.node.classList.add("textarea-wrapper"),this.update()}update(){this.textArea.node.value=this.model.textareaText,this.textArea.node.focus(),this.textArea.node.selectionStart=this.model.cursorPosition,this.textArea.node.selectionEnd=this.model.cursorPosition}}class f{constructor(e,t,n){this.language=window.localStorage.getItem("language")||e,this.content=t,this.currentCase=e=>e.toLowerCase(),this.metaKeys={},this.layout=n,this.currentValue="",this.cursorPosition=0,this.textareaText="",this.changeLanguageCallbacks=[],this.changeMetaKeysCallbacks=[],this.changeCurrentValueCallbacks=[],this.changeButtonStyleOnCallbacks=[],this.changeButtonStyleOffCallbacks=[],this.changeContentCallbacks=[],this.changeTextAreaCallbacks=[],this.changeTextCase=[]}onChangeLanguage(e){this.changeLanguageCallbacks.push(e)}onChangeCase(e){this.changeTextCase.push(e)}onChangeContent(e){this.changeContentCallbacks.push(e)}onChangeMetaKeys(e){this.changeMetaKeysCallbacks.push(e)}onChangeCurrentValue(e){this.changeCurrentValueCallbacks.push(e)}onTurnOnButtonStyle(e){this.changeButtonStyleOnCallbacks.push(e)}onTurnOffButtonStyle(e){this.changeButtonStyleOffCallbacks.push(e)}onChangeTextArea(e){this.changeTextAreaCallbacks.push(e)}getLanguage(){return this.language}getCase(){return this.currentCase}getMetaKeys(){return this.metaKeys}getLayout(){return this.layout}getContent(){return this.content}getCurrentNode(e){return this.layout.find((t=>t.code===e))}getCurrentChar(e){return this.getCurrentNode(e)[this.getContent()][this.getLanguage()]}getTextAreaValue(){return this.textareaText}setTextAreaValue(e){let t,n=this.cursorPosition,o=this.cursorPosition;switch(e){case"Enter":t="\n";break;case"Tab":t="\t";break;case"Backspace":t="",n-=1;break;case"Delete":t="",o+=1;break;default:t=this.currentCase(this.getCurrentChar(e))}this.textareaText=this.textareaText.slice(0,n)+t+this.textareaText.slice(o),this.setCursorPosition(e),this.changeTextAreaCallbacks.map((t=>t(e)))}setLanguage(e){const t=this.language;this.language=e;try{window.localStorage.setItem("language",e)}catch{alert("LocalStorage не работает в режиме инкогнито. Выполните проверку в обычном режиме.")}t!==e&&this.changeLanguageCallbacks.map((n=>n(e,t)))}setCase(e){const t=this.currentCase;this.currentCase=e,t!==e&&this.changeTextCase.map((t=>t(e)))}setContent(e){const t=this.language;this.content=e,t!==e&&this.changeContentCallbacks.map((n=>n(e,t)))}setMetaKeys(e){const t=this.metaKeys;this.metaKeys=e,Object.keys(this.metaKeys).every((t=>e[t]===this.metaKeys[t])),this.changeMetaKeysCallbacks.map((n=>n(e,t)))}setCurrentValue(e){const t=this.currentValue;this.currentValue=e,this.changeCurrentValueCallbacks.map((n=>n(e,t)))}setCursorPosition(e,t=-1){"Backspace"===e?this.cursorPosition-=1:"Delete"!==e&&(this.cursorPosition+=1),t>-1&&(this.cursorPosition=t),this.cursorPosition<0&&(this.cursorPosition=0)}onButtonDown(e){const t=this.currentValue;this.currentValue=e,this.changeButtonStyleOnCallbacks.map((n=>n(e,t)))}onButtonUp(e){const t=this.currentValue;this.currentValue=e,this.changeButtonStyleOffCallbacks.map((n=>n(e,t)))}}class w{constructor(e){this.model=e,this.caseUp=e=>e.toUpperCase(),this.caseDown=e=>e.toLowerCase()}keyDown(e){const t=this.model.getLayout().find((t=>t.code===e));if(t){if("meta"===t.type){if(this.model.setMetaKeys({...this.model.getMetaKeys(),[e]:!this.model.getMetaKeys()[e]}),this.model.getMetaKeys().ShiftLeft&&this.model.getMetaKeys().ControlLeft){const e="ru"===this.model.getLanguage()?"eng":"ru";this.model.setLanguage(e),this.model.setMetaKeys({...this.model.getMetaKeys(),ShiftLeft:!1,ControlLeft:!1}),this.model.setContent("content")}else"ShiftLeft"!==e&&"ShiftRight"!==e||"alt"!==this.model.getContent()&&this.model.setContent("alt");(this.model.getMetaKeys().ShiftLeft||this.model.getMetaKeys().ShiftRight)&&!this.model.getMetaKeys().CapsLock||!this.model.getMetaKeys().ShiftLeft&&!this.model.getMetaKeys().ShiftRight&&this.model.getMetaKeys().CapsLock?this.model.setCase(this.caseUp):this.model.setCase(this.caseDown)}else this.model.setTextAreaValue(e);this.model.onButtonDown(e)}}keyUp(e){const t=this.model.getLayout().find((t=>t.code===e));t&&("CapsLock"!==e&&"meta"===t.type&&this.model.setMetaKeys({...this.model.getMetaKeys(),[e]:!1}),"ShiftLeft"!==e&&"ShiftRight"!==e||(this.model.setContent("content"),this.model.getMetaKeys().CapsLock?this.model.setCase(this.caseUp):this.model.setCase(this.caseDown)),this.model.onButtonUp(e))}onClickTextarea(e){this.model.setCursorPosition("",e)}}class C extends y{constructor(e,t,n){super(e,"div");const{charCode:o,actualChar:r,onKeyDown:a,onKeyUp:s}=t;this.node.textContent=r,this.node.classList.add("button"),this.node.classList.add(n),this.node.onmousedown=()=>{a(o)},this.node.onmouseup=()=>{s(o)},this.node.onchange=e=>{this.node.textContent=e}}}class x extends y{constructor(e,t,n){super(e,"div"),this.node.classList.add("keyboard-wrapper"),this.model=t,this.controller=n,this.buttons={},this.render(),this.model.onChangeLanguage((()=>{this.updateButtonsText()})),this.model.onChangeContent((()=>{this.updateButtonsText()})),this.model.onChangeCase((()=>{this.updateButtonsText()})),this.model.onChangeTextArea((e=>{this.model.getCurrentChar(e)})),this.model.onTurnOnButtonStyle((e=>{this.toggleOnButton(e)})),this.model.onTurnOffButtonStyle((e=>{this.toggleOffButton(e)}))}handleKeyDown(e){this.controller.keyDown(e)}handleKeyUp(e){this.controller.keyUp(e)}handleChangeChar(e){this.controller.keyUp(e)}render(){this.model.getLayout().forEach((e=>{this.buttons[e.code]=new C(this.node,{charCode:e.code,actualChar:e.content[this.model.getLanguage()],onKeyDown:e=>this.handleKeyDown(e),onKeyUp:e=>this.handleKeyUp(e)},e.size)})),document.onkeydown=e=>{e.preventDefault(),void 0!==this.model.getMetaKeys()[e.code]&&e.repeat||this.handleKeyDown(e.code)},document.onkeyup=e=>this.handleKeyUp(e.code)}toggleOnButton(e){this.buttons[e].node.classList.add("active")}toggleOffButton(e){"meta"!==this.model.getCurrentNode(e).type&&this.buttons[e].node.classList.remove("active"),Object.entries(this.model.getMetaKeys()).forEach((([e,t])=>{!0!==t&&this.buttons[e].node.classList.remove("active")}))}updateButtonsText(){Object.entries(this.buttons).forEach((([e,t])=>{let n=this.model.getCurrentChar(e);"letter"===this.model.getCurrentNode(e).type&&(n=this.model.getCase()(n)),t.node.onchange(n)}))}}const z=JSON.parse('[{"content":{"ru":"ё","eng":"`"},"alt":{"ru":"Ё","eng":"~"},"size":"normal","code":"Backquote","type":"letter","row":"zero"},{"content":{"ru":"1","eng":"1"},"alt":{"ru":"!","eng":"!"},"size":"normal","code":"Digit1","type":"digit","row":"zero"},{"content":{"ru":"2","eng":"2"},"alt":{"ru":"\\"","eng":"@"},"size":"normal","code":"Digit2","type":"digit","row":"zero"},{"content":{"ru":"3","eng":"3"},"alt":{"ru":"№","eng":"#"},"size":"normal","code":"Digit3","type":"digit","row":"zero"},{"content":{"ru":"4","eng":"4"},"alt":{"ru":";","eng":"$"},"size":"normal","code":"Digit4","type":"digit","row":"zero"},{"content":{"ru":"5","eng":"5"},"alt":{"ru":"%","eng":"%"},"size":"normal","code":"Digit5","type":"digit","row":"zero"},{"content":{"ru":"6","eng":"6"},"alt":{"ru":":","eng":"^"},"size":"normal","code":"Digit6","type":"digit","row":"zero"},{"content":{"ru":"7","eng":"7"},"alt":{"ru":"?","eng":"&"},"size":"normal","code":"Digit7","type":"digit","row":"zero"},{"content":{"ru":"8","eng":"8"},"alt":{"ru":"*","eng":"*"},"size":"normal","code":"Digit8","type":"digit","row":"zero"},{"content":{"ru":"9","eng":"9"},"alt":{"ru":"(","eng":"("},"size":"normal","code":"Digit9","type":"digit","row":"zero"},{"content":{"ru":"0","eng":"0"},"alt":{"ru":")","eng":")"},"size":"normal","code":"Digit0","type":"digit","row":"zero"},{"content":{"ru":"-","eng":"-"},"alt":{"ru":"_","eng":"_"},"size":"normal","code":"Minus","type":"digit","row":"zero"},{"content":{"ru":"=","eng":"="},"alt":{"ru":"+","eng":"+"},"size":"normal","code":"Equal","type":"digit","row":"zero"},{"content":{"ru":"Backspace","eng":"Backspace"},"alt":{"ru":"Backspace","eng":"Backspace"},"size":"double-size","code":"Backspace","type":"delete","row":"zero"},{"content":{"ru":"Tab","eng":"Tab"},"alt":{"ru":"Tab","eng":"Tab"},"size":"plushalf-size","code":"Tab","type":"special","row":"first"},{"content":{"ru":"й","eng":"q"},"alt":{"ru":"й","eng":"q"},"size":"normal","code":"KeyQ","type":"letter","row":"first"},{"content":{"ru":"ц","eng":"w"},"alt":{"ru":"ц","eng":"w"},"size":"normal","code":"KeyW","type":"letter","row":"first"},{"content":{"ru":"у","eng":"e"},"alt":{"ru":"у","eng":"e"},"size":"normal","code":"KeyE","type":"letter","row":"first"},{"content":{"ru":"к","eng":"r"},"alt":{"ru":"к","eng":"r"},"size":"normal","code":"KeyR","type":"letter","row":"first"},{"content":{"ru":"е","eng":"t"},"alt":{"ru":"е","eng":"t"},"size":"normal","code":"KeyT","type":"letter","row":"first"},{"content":{"ru":"н","eng":"y"},"alt":{"ru":"н","eng":"y"},"size":"normal","code":"KeyY","type":"letter","row":"first"},{"content":{"ru":"г","eng":"u"},"alt":{"ru":"г","eng":"u"},"size":"normal","code":"KeyU","type":"letter","row":"first"},{"content":{"ru":"ш","eng":"i"},"alt":{"ru":"ш","eng":"i"},"size":"normal","code":"KeyI","type":"letter","row":"first"},{"content":{"ru":"щ","eng":"o"},"alt":{"ru":"щ","eng":"o"},"size":"normal","code":"KeyO","type":"letter","row":"first"},{"content":{"ru":"з","eng":"p"},"alt":{"ru":"з","eng":"p"},"size":"normal","code":"KeyP","type":"letter","row":"first"},{"content":{"ru":"х","eng":"["},"alt":{"ru":"х","eng":"["},"size":"normal","code":"BracketLeft","type":"letter","row":"first"},{"content":{"ru":"ъ","eng":"]"},"alt":{"ru":"ъ","eng":"]"},"size":"normal","code":"BracketRight","type":"letter","row":"first"},{"content":{"ru":"\\\\","eng":"\\\\"},"alt":{"ru":"/","eng":"|"},"size":"plushalf-size","code":"Backslash","type":"letter","row":"first"},{"content":{"ru":"Del","eng":"Del"},"alt":{"ru":"Del","eng":"Del"},"size":"normal","code":"Delete","type":"delete","row":"zero"},{"content":{"ru":"CapsLock","eng":"CapsLock"},"alt":{"ru":"CapsLock","eng":"CapsLock"},"size":"double-size","code":"CapsLock","type":"meta","row":"second"},{"content":{"ru":"ф","eng":"a"},"alt":{"ru":"ф","eng":"a"},"size":"normal","code":"KeyA","type":"letter","row":"second"},{"content":{"ru":"ы","eng":"s"},"alt":{"ru":"ы","eng":"s"},"size":"normal","code":"KeyS","type":"letter","row":"second"},{"content":{"ru":"в","eng":"d"},"alt":{"ru":"в","eng":"d"},"size":"normal","code":"KeyD","type":"letter","row":"second"},{"content":{"ru":"а","eng":"f"},"alt":{"ru":"а","eng":"f"},"size":"normal","code":"KeyF","type":"letter","row":"second"},{"content":{"ru":"п","eng":"g"},"alt":{"ru":"п","eng":"g"},"size":"normal","code":"KeyG","type":"letter","row":"second"},{"content":{"ru":"р","eng":"h"},"alt":{"ru":"р","eng":"h"},"size":"normal","code":"KeyH","type":"letter","row":"second"},{"content":{"ru":"о","eng":"j"},"alt":{"ru":"о","eng":"j"},"size":"normal","code":"KeyJ","type":"letter","row":"second"},{"content":{"ru":"л","eng":"k"},"alt":{"ru":"л","eng":"k"},"size":"normal","code":"KeyK","type":"letter","row":"second"},{"content":{"ru":"д","eng":"l"},"alt":{"ru":"д","eng":"l"},"size":"normal","code":"KeyL","type":"letter","row":"second"},{"content":{"ru":"ж","eng":";"},"alt":{"ru":"ж","eng":":"},"size":"normal","code":"Semicolon","type":"letter","row":"second"},{"content":{"ru":"э","eng":"\'"},"alt":{"ru":"э","eng":"\\""},"size":"normal","code":"Quote","type":"letter","row":"second"},{"content":{"ru":"Enter","eng":"Enter"},"alt":{"ru":"Enter","eng":"Enter"},"size":"double-size","code":"Enter","type":"special","row":"second"},{"content":{"ru":"Shift","eng":"Shift"},"alt":{"ru":"Shift","eng":"Shift"},"size":"triple-size","code":"ShiftLeft","type":"meta","row":"third"},{"content":{"ru":"я","eng":"z"},"alt":{"ru":"я","eng":"Z"},"size":"normal","code":"KeyZ","type":"letter","row":"third"},{"content":{"ru":"ч","eng":"x"},"alt":{"ru":"ч","eng":"X"},"size":"normal","code":"KeyX","type":"letter","row":"third"},{"content":{"ru":"с","eng":"c"},"alt":{"ru":"с","eng":"C"},"size":"normal","code":"KeyC","type":"letter","row":"third"},{"content":{"ru":"м","eng":"v"},"alt":{"ru":"м","eng":"V"},"size":"normal","code":"KeyV","type":"letter","row":"third"},{"content":{"ru":"и","eng":"b"},"alt":{"ru":"и","eng":"B"},"size":"normal","code":"KeyB","type":"letter","row":"third"},{"content":{"ru":"т","eng":"n"},"alt":{"ru":"т","eng":"N"},"size":"normal","code":"KeyN","type":"letter","row":"third"},{"content":{"ru":"ь","eng":"m"},"alt":{"ru":"ь","eng":"M"},"size":"normal","code":"KeyM","type":"letter","row":"third"},{"content":{"ru":"б","eng":","},"alt":{"ru":"б","eng":"<"},"size":"normal","code":"Comma","type":"letter","row":"third"},{"content":{"ru":"ю","eng":"."},"alt":{"ru":"ю","eng":">"},"size":"normal","code":"Period","type":"letter","row":"third"},{"content":{"ru":".","eng":"/"},"alt":{"ru":",","eng":"?"},"size":"normal","code":"Slash","type":"letter","row":"third"},{"content":{"ru":"Shift","eng":"Shift"},"alt":{"ru":"Shift","eng":"Shift"},"size":"triple-size","code":"ShiftRight","type":"meta","row":"third"},{"content":{"ru":"Ctrl","eng":"Ctrl"},"alt":{"ru":"Ctrl","eng":"Ctrl"},"size":"double-size","code":"ControlLeft","type":"meta","row":"forth"},{"content":{"ru":"Alt","eng":"Alt"},"alt":{"ru":"Alt","eng":"Alt"},"size":"double-size","code":"AltLeft","type":"meta","row":"forth"},{"content":{"ru":" ","eng":" "},"alt":{"ru":" ","eng":" "},"size":"long-size","code":"Space","type":"special","row":"forth"},{"content":{"ru":"Alt","eng":"Alt"},"alt":{"ru":"Alt","eng":"Alt"},"size":"double-size","code":"AltRight","type":"meta","row":"forth"},{"content":{"ru":"⇦","eng":"⇦"},"alt":{"ru":"⇦","eng":"⇦"},"size":"normal","code":"ArrowLeft","type":"arrow","row":"forth"},{"content":{"ru":"⇧","eng":"⇧"},"alt":{"ru":"⇧","eng":"⇧"},"size":"normal","code":"ArrowUp","type":"arrow","row":"forth"},{"content":{"ru":"⇩","eng":"⇩"},"alt":{"ru":"⇩","eng":"⇩"},"size":"normal","code":"ArrowDown","type":"arrow","row":"forth"},{"content":{"ru":"⇨","eng":"⇨"},"alt":{"ru":"⇨","eng":"⇨"},"size":"normal","code":"ArrowRight","type":"arrow","row":"forth"}]');!function(){const e=new f("ru","content",z),t=new w(e),n=(new m(document.body,e,t),new x(document.body,e,t),new y(document.body,"div"));n.node.classList.add("info"),n.node.textContent="Клавиатура создана в операционной системе Windows\n  Для переключения языка комбинация: left (ctrl + shift) "}()})()})();