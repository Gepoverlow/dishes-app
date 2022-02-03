(()=>{"use strict";var e={251:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),a=t.n(r),i=t(645),o=t.n(i)()(a());o.push([e.id,"* {\n  box-sizing: border-box;\n  margin: 0;\n}\n\nhtml {\n  height: 100%;\n}\n\nbody {\n  min-height: 100vh;\n  overflow-x: hidden;\n}\n\n.container-all {\n  display: flex;\n  min-height: 100vh;\n  min-width: 100vw;\n}\n\n.container-info {\n  display: flex;\n  flex-direction: column;\n  background-color: sienna;\n  min-height: 100vh;\n  min-width: 25vw;\n  padding: 20px;\n}\n\n.container-info-header {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 20px;\n  min-height: 20vh;\n}\n\n.container-info-main {\n  display: flex;\n  flex-direction: column;\n  min-height: 80vh;\n  min-width: 25vw;\n  /* padding: 20px; */\n}\n\n.container-ingredients {\n  background-color: rgb(61, 53, 53);\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 300px);\n  grid-template-rows: repeat(auto-fit, 300px);\n  grid-gap: 0.5em;\n  padding: 0.5em;\n  place-items: center;\n  justify-content: center;\n  min-width: 75vw;\n  min-height: 100vh;\n}\n\n.ingredients {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: black;\n  font-size: 50px;\n  padding: 5px;\n  padding: 1em;\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 300px;\n  width: 300px;\n  cursor: pointer;\n}\n\n.ul-dishes {\n  list-style-type: none;\n  padding: 0.5em;\n}\n\n.selected {\n  border: 5px solid red;\n}\n\n.material-icons-outlined {\n  cursor: pointer;\n  padding-left: 20px;\n  font-size: 50px;\n}\n",""]);const c=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(o[s]=!0)}for(var d=0;d<e.length;d++){var p=[].concat(e[d]);r&&o[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),a&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=a):p[4]="".concat(a)),n.push(p))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},o=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],p=i[d]||0,l="".concat(d," ").concat(p);i[d]=p+1;var m=t(l),g={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)n[m].references++,n[m].updater(g);else{var u=a(g,r);r.byIndex=c,n.splice(c,0,{identifier:l,updater:u,references:1})}o.push(l)}return o}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var i=r(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var c=t(i[o]);n[c].references--}for(var s=r(e,a),d=0;d<i.length;d++){var p=t(i[d]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}i=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},391:(e,n,t)=>{e.exports=t.p+"3647c562dbf561d6cb49.jpg"},704:(e,n,t)=>{e.exports=t.p+"718b1de5d5ddf8fda660.jpg"},190:(e,n,t)=>{e.exports=t.p+"e875043a5cf93dacfeff.jpg"},397:(e,n,t)=>{e.exports=t.p+"ebb9cef4310ee7aa67da.jpg"},916:(e,n,t)=>{e.exports=t.p+"4ac83f51b4bdecf7e8b8.jpg"},74:(e,n,t)=>{e.exports=t.p+"b791eef4650392348b59.jpg"},846:(e,n,t)=>{e.exports=t.p+"6ac1b53bebeee4ada60b.jpg"},731:(e,n,t)=>{e.exports=t.p+"599dbeb6b622ebb92f15.jpg"},620:(e,n,t)=>{e.exports=t.p+"5cad21c2728c7e13d999.jpeg"},761:(e,n,t)=>{e.exports=t.p+"bcfde8bacfe1ee6ae452.jpg"},98:(e,n,t)=>{e.exports=t.p+"80422cdffd5dc2d87df9.jpg"},946:(e,n,t)=>{e.exports=t.p+"e24f79c75996cf1b6416.jpg"},22:(e,n,t)=>{e.exports=t.p+"b81e941239d655754ff7.jpg"},733:(e,n,t)=>{e.exports=t.p+"b96e54aff7d665379485.jpg"},718:(e,n,t)=>{e.exports=t.p+"d59152b21e1b3fdca899.jpg"},9:(e,n,t)=>{e.exports=t.p+"a3b94ca6c0a9ca647529.jpg"},507:(e,n,t)=>{e.exports=t.p+"ccf94a94e89da103fb64.jpg"},944:(e,n,t)=>{e.exports=t.p+"442f3890c9e2bf908f23.jpeg"},736:(e,n,t)=>{e.exports=t.p+"ac5f42a81515b090b549.jpg"},652:(e,n,t)=>{e.exports=t.p+"e2e9406c114d2f1453e9.jpg"},697:(e,n,t)=>{e.exports=t.p+"170cd0f38b392002c080.jpg"},285:(e,n,t)=>{e.exports=t.p+"1679bb5af2df5d0df3f1.jpg"},182:(e,n,t)=>{e.exports=t.p+"c8c9296fb551deab1af9.jpg"},425:(e,n,t)=>{e.exports=t.p+"73184cc10dda5194d245.jpeg"},822:(e,n,t)=>{e.exports=t.p+"d6421c6c35710d637448.jpg"},975:(e,n,t)=>{e.exports=t.p+"567ad97983ab9a467243.jpg"},474:(e,n,t)=>{e.exports=t.p+"c215dcc1ede5b40698d6.jpg"},796:(e,n,t)=>{e.exports=t.p+"dc1348e231b8b0aa1b2b.jpg"},380:(e,n,t)=>{e.exports=t.p+"26f6f72db83a0401242b.jpg"}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{var e=t(379),n=t.n(e),r=t(795),a=t.n(r),i=t(569),o=t.n(i),c=t(565),s=t.n(c),d=t(216),p=t.n(d),l=t(589),m=t.n(l),g=t(251),u={};u.styleTagTransform=m(),u.setAttributes=s(),u.insert=o().bind(null,"head"),u.domAPI=a(),u.insertStyleElement=p(),n()(g.Z,u),g.Z&&g.Z.locals&&g.Z.locals;let f=[{name:"Arroz con Pollo",ingredients:["Chicken","Rice"]},{name:"Fideos con Salsa",ingredients:["Noodles","Tomato Sause"]},{name:"Hamburgesas",ingredients:["Meat","Bread","Onion"]},{name:"Ensalada de primavera",ingredients:["Noodles","Mayo","Tuna","Corn"]}],h=[{name:"Chicken",img:t(718)},{name:"Rice",img:t(474)},{name:"Mayo",img:t(652)},{name:"Noodles",img:t(946)},{name:"Tomato Sause",img:t(796)},{name:"Meat",img:t(916)},{name:"Bread",img:t(285)},{name:"Onion",img:t(846)},{name:"Tuna",img:t(704)},{name:"Corn",img:t(736)},{name:"Milk",img:t(697)},{name:"Eggs",img:t(22)},{name:"Cooking Cream",img:t(761)},{name:"Cheese",img:t(975)},{name:"Cucumber",img:t(182)},{name:"Lettuce",img:t(944)},{name:"Ham",img:t(733)},{name:"Chorizo",img:t(620)},{name:"Feta Cheese",img:t(822)},{name:"Chives",img:t(731)},{name:"Tomato",img:t(380)},{name:"Falafel",img:t(98)},{name:"Broccoli",img:t(397)},{name:"Avocado",img:t(190)},{name:"Lemon",img:t(9)},{name:"Carrot",img:t(74)},{name:"Potato",img:t(425)},{name:"Lentil",img:t(507)},{name:"Garlic",img:t(391)}];function b(e){for(;e.lastElementChild;)e.removeChild(e.lastElementChild)}document.querySelector(".container-all").addEventListener("click",(e=>{var n,t;"ingredients"===e.target.className||"ingredients"===e.target.parentNode.className?function(e){"ingredients"===e.target.className?e.target.classList.add("selected"):"P"===e.target.nodeName&&e.target.parentNode.classList.add("selected")}(e):function(e){"ingredients selected"===e.target.className?e.target.classList.remove("selected"):"P"===e.target.nodeName&&e.target.parentNode.classList.remove("selected")}(e),function(e){let n=document.querySelector(".ul-dishes");if(b(n),0!==e.length)for(let t=0;t<e.length;t++){let r=document.createElement("li");r.textContent=e[t].name,n.appendChild(r)}else{let e=document.createElement("li");e.textContent="No Available Dishes",n.appendChild(e)}}((n=f,t=function(e){let n=document.querySelectorAll(".selected"),t=[];for(let e=0;e<n.length;e++)t.push(n[e].innerText);return t}(),n.filter((e=>{return n=t,e.ingredients.every((e=>n.includes(e)));var n}))))})),function(e){let n=document.querySelector(".container-ingredients");b(n);for(let t=0;t<e.length;t++){let r=document.createElement("div"),a=document.createElement("p");a.textContent=e[t].name,r.appendChild(a),r.style.backgroundImage=`url(${e[t].img})`,r.classList.add("ingredients"),n.appendChild(r)}}(h)})()})();