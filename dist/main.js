(()=>{"use strict";var e={251:(e,t,n)=>{n.d(t,{Z:()=>d});var i=n(81),r=n.n(i),a=n(645),o=n.n(a)()(r());o.push([e.id,"* {\n  box-sizing: border-box;\n  margin: 0;\n}\n\nhtml {\n  height: 100%;\n}\n\nbody {\n  height: 100%;\n  overflow: hidden;\n}\n\n.container-all {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  min-width: 100vw;\n}\n\n.container-top {\n  position: fixed;\n  z-index: 1;\n  background-color: sienna;\n  border-radius: 50%;\n}\n\n.container-main {\n  display: flex;\n  min-width: 100vw;\n}\n\n.container-info {\n  display: flex;\n  flex-direction: column;\n  background-color: sienna;\n  height: 100vh;\n  width: 0px;\n  overflow-y: scroll;\n  overflow-x: scroll;\n  transition: 0.5s;\n  font-size: clamp(0.75rem, 1.9vw, 1.25rem);\n}\n\n.container-info-header {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 20px;\n  min-height: 10vh;\n  border-bottom: 4px solid black;\n}\n\n.container-info-main {\n  display: flex;\n  flex-direction: column;\n}\n\n.container-ingredients {\n  background-color: rgb(61, 53, 53);\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 150px);\n  grid-template-rows: repeat(auto-fit, 150px);\n  grid-gap: 0.5em;\n  padding: 0.5em;\n  place-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100vh;\n  overflow: scroll;\n}\n\n.ingredients {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: black;\n  /* font-size: 20px; */\n  padding: 5px;\n  padding: 1em;\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 150px;\n  width: 150px;\n  cursor: pointer;\n}\n\n.selected {\n  border: 5px solid red;\n}\n\n.material-icons-outlined {\n  cursor: pointer;\n  padding-left: 5px;\n  /* font-size: 30px; */\n}\n\n.container-info-main > div {\n  cursor: pointer;\n  padding-bottom: 20px;\n  margin-bottom: 20px;\n  border-bottom: 1px solid black;\n}\n\ndiv > ul > li {\n  list-style-type: none;\n  padding-bottom: 10px;\n  padding-top: 10px;\n}\n\n.available {\n  color: rgb(126, 177, 126);\n}\n\n#form-input-add,\n#form-input-edit {\n  font-size: clamp(0.75rem, 1.9vw, 1.25rem);\n  background-color: transparent;\n  border: 0;\n  border-bottom: 1px solid black;\n  outline: 0;\n  margin-bottom: 20px;\n}\n\n#form-input-add-ingredient,\n#form-input-edit-ingredient {\n  background-color: transparent;\n  border: 0;\n  border-bottom: 1px solid black;\n  outline: 0;\n  margin-top: 7px;\n  font-size: clamp(0.75rem, 1.9vw, 1.25rem);\n}\n\n.form-ingredients-container {\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n\n.dish-header {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.icons-container {\n  display: flex;\n  flex-direction: row;\n}\n\n.form-ingredients-list {\n  padding-left: 0;\n}\n\n#see-button {\n  padding-right: 5px;\n}\n\n.container-info-main > div {\n  overflow-x: scroll;\n}\n\n#open-info-button {\n  background-color: transparent;\n  padding: 7px;\n}\n\n.hidden {\n  height: 0;\n  overflow: hidden;\n}\n\n.show {\n  display: block;\n  animation: dropdown 400ms ease-in-out forwards;\n  transform-origin: top center;\n}\n\n@keyframes dropdown {\n  0% {\n    transform: rotateX(-90deg);\n  }\n  70% {\n    transform: rotateX(20deg);\n  }\n  100% {\n    transform: rotateX(0deg);\n  }\n}\n\n@keyframes dropup {\n  100% {\n    transform: rotateX(0deg);\n  }\n  70% {\n    transform: rotateX(20deg);\n  }\n  0% {\n    transform: rotateX(-90deg);\n  }\n}\n",""]);const d=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(i)for(var d=0;d<this.length;d++){var l=this[d][0];null!=l&&(o[l]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);i&&o[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),r&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=r):c[4]="".concat(r)),t.push(c))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var a={},o=[],d=0;d<e.length;d++){var l=e[d],s=i.base?l[0]+i.base:l[0],c=a[s]||0,p="".concat(s," ").concat(c);a[s]=c+1;var m=n(p),u={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==m)t[m].references++,t[m].updater(u);else{var f=r(u,i);i.byIndex=d,t.splice(d,0,{identifier:p,updater:f,references:1})}o.push(p)}return o}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=i(e=e||[],r=r||{});return function(e){e=e||[];for(var o=0;o<a.length;o++){var d=n(a[o]);t[d].references--}for(var l=i(e,r),s=0;s<a.length;s++){var c=n(a[s]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}a=l}}},569:e=>{var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,r&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},391:(e,t,n)=>{e.exports=n.p+"3647c562dbf561d6cb49.jpg"},704:(e,t,n)=>{e.exports=n.p+"718b1de5d5ddf8fda660.jpg"},190:(e,t,n)=>{e.exports=n.p+"e875043a5cf93dacfeff.jpg"},397:(e,t,n)=>{e.exports=n.p+"ebb9cef4310ee7aa67da.jpg"},916:(e,t,n)=>{e.exports=n.p+"4ac83f51b4bdecf7e8b8.jpg"},74:(e,t,n)=>{e.exports=n.p+"b791eef4650392348b59.jpg"},846:(e,t,n)=>{e.exports=n.p+"6ac1b53bebeee4ada60b.jpg"},731:(e,t,n)=>{e.exports=n.p+"599dbeb6b622ebb92f15.jpg"},620:(e,t,n)=>{e.exports=n.p+"5cad21c2728c7e13d999.jpeg"},761:(e,t,n)=>{e.exports=n.p+"bcfde8bacfe1ee6ae452.jpg"},98:(e,t,n)=>{e.exports=n.p+"80422cdffd5dc2d87df9.jpg"},946:(e,t,n)=>{e.exports=n.p+"e24f79c75996cf1b6416.jpg"},22:(e,t,n)=>{e.exports=n.p+"b81e941239d655754ff7.jpg"},733:(e,t,n)=>{e.exports=n.p+"b96e54aff7d665379485.jpg"},718:(e,t,n)=>{e.exports=n.p+"d59152b21e1b3fdca899.jpg"},9:(e,t,n)=>{e.exports=n.p+"a3b94ca6c0a9ca647529.jpg"},507:(e,t,n)=>{e.exports=n.p+"ccf94a94e89da103fb64.jpg"},944:(e,t,n)=>{e.exports=n.p+"442f3890c9e2bf908f23.jpeg"},736:(e,t,n)=>{e.exports=n.p+"ac5f42a81515b090b549.jpg"},652:(e,t,n)=>{e.exports=n.p+"e2e9406c114d2f1453e9.jpg"},697:(e,t,n)=>{e.exports=n.p+"170cd0f38b392002c080.jpg"},285:(e,t,n)=>{e.exports=n.p+"1679bb5af2df5d0df3f1.jpg"},182:(e,t,n)=>{e.exports=n.p+"c8c9296fb551deab1af9.jpg"},425:(e,t,n)=>{e.exports=n.p+"73184cc10dda5194d245.jpeg"},822:(e,t,n)=>{e.exports=n.p+"d6421c6c35710d637448.jpg"},975:(e,t,n)=>{e.exports=n.p+"567ad97983ab9a467243.jpg"},474:(e,t,n)=>{e.exports=n.p+"c215dcc1ede5b40698d6.jpg"},796:(e,t,n)=>{e.exports=n.p+"dc1348e231b8b0aa1b2b.jpg"},380:(e,t,n)=>{e.exports=n.p+"26f6f72db83a0401242b.jpg"}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var a=t[i]={id:i,exports:{}};return e[i](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");i.length&&(e=i[i.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e=n(379),t=n.n(e),i=n(795),r=n.n(i),a=n(569),o=n.n(a),d=n(565),l=n.n(d),s=n(216),c=n.n(s),p=n(589),m=n.n(p),u=n(251),f={};f.styleTagTransform=m(),f.setAttributes=l(),f.insert=o().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=c(),t()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals;let g=[{name:"Arroz con pollo",ingredients:["Chicken","Rice","Mayo"],id:b()},{name:"Fideos con salsa",ingredients:["Noodles","Tomato Sause"],id:b()},{name:"Hamburgesas",ingredients:["Meat","Bread","Onion"],id:b()},{name:"Ensalada de primavera",ingredients:["Noodles","Mayo","Tuna","Corn"],id:b()},{name:"Pure de patatas",ingredients:["Milk","Potato","Tuna","Corn"],id:b()},{name:"Another Dish",ingredients:["Noodles","Mayo","Tuna","Corn"],id:b()}],h=[{name:"Chicken",img:n(718)},{name:"Rice",img:n(474)},{name:"Mayo",img:n(652)},{name:"Noodles",img:n(946)},{name:"Tomato Sause",img:n(796)},{name:"Meat",img:n(916)},{name:"Bread",img:n(285)},{name:"Onion",img:n(846)},{name:"Tuna",img:n(704)},{name:"Corn",img:n(736)},{name:"Milk",img:n(697)},{name:"Eggs",img:n(22)},{name:"Cooking Cream",img:n(761)},{name:"Cheese",img:n(975)},{name:"Cucumber",img:n(182)},{name:"Lettuce",img:n(944)},{name:"Ham",img:n(733)},{name:"Chorizo",img:n(620)},{name:"Feta Cheese",img:n(822)},{name:"Chives",img:n(731)},{name:"Tomato",img:n(380)},{name:"Falafel",img:n(98)},{name:"Broccoli",img:n(397)},{name:"Avocado",img:n(190)},{name:"Lemon",img:n(9)},{name:"Carrot",img:n(74)},{name:"Potato",img:n(425)},{name:"Lentil",img:n(507)},{name:"Garlic",img:n(391)}];function b(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let t="";for(let n=0;n<5;n++)t+=e[Math.floor(Math.random()*e.length)];return t}function v(e,t){return t.map((function(e){return e.id})).indexOf(`${e}`)}class x{constructor(e,t){this.name=e,this.ingredients=t,this.id=b()}}class y{constructor(e,t){this.name=e,this.img=t||n(718)}createDom(e){let t=document.createElement("div");t.textContent=this.name,t.style.backgroundColor="beige",t.classList.add("ingredients"),t.classList.add("selected"),e.appendChild(t)}}function C(e,t){return e.filter((e=>{return n=t,e.ingredients.every((e=>n.includes(e)));var n}))}function E(e){return e.map((e=>e.name))}function w(e){let t=e.trim().toLowerCase(),n=t.slice(0,1).toUpperCase();return t.replace(t[0],n)}function N(e,t,n){for(let i=0;i<t.ingredients.length;i++){let r=document.createElement("li");r.textContent=t.ingredients[i],r.classList.add("ingredientLI"),n.includes(`${r.textContent}`)?r.classList.add("available"):r.classList.remove("available"),e.appendChild(r)}}function j(e,t,n){let i=document.querySelector(".container-info-main");S(i);for(let r=0;r<e.length;r++){let a=document.createElement("div");i.appendChild(a);let o=document.createElement("div");o.className="dish-header",a.appendChild(o);let d=document.createElement("h3");d.classList.add("dishH3"),d.textContent=e[r].name,n.includes(`${d.textContent}`)?d.classList.add("available"):d.classList.remove("available"),o.appendChild(d);let l=document.createElement("div");l.className="icons-container",o.appendChild(l);let s=document.createElement("span");s.id="edit-button",s.className="material-icons-outlined",s.textContent="edit",l.appendChild(s);let c=document.createElement("span");c.id="delete-button",c.className="material-icons-outlined",c.textContent="clear",l.appendChild(c);let p=document.createElement("div");p.className="dish-ingredients-container",p.classList.add("hidden"),a.appendChild(p);let m=document.createElement("ul");p.appendChild(m),N(m,e[r],t)}}function L(e){let t=document.querySelectorAll(`.${e}`),n=[];for(let e=0;e<t.length;e++)n.push(t[e].innerText);return n}function S(e){for(;e.lastElementChild;)e.removeChild(e.lastElementChild)}function k(e,t,n){if(""!==e.value){let i=new y(`${e.value}`);t.push(i),e.value="",i.createDom(n),A(L("selected"))}}function A(e){if(void 0!==document.querySelector(".form-ingredients-list")&&null!==document.querySelector(".form-ingredients-list")){let t=document.querySelector(".form-ingredients-list");S(t);for(let n=0;n<e.length;n++){let i=document.createElement("li");i.textContent=e[n],t.appendChild(i)}}}function T(e){for(let t=0;t<e.length;t++)e[t].classList.remove("selected")}let q,I=document.getElementsByTagName("body")[0],M=document.querySelector(".container-ingredients"),$=document.querySelector(".container-info"),z=(document.querySelector(".container-info-main"),document.getElementById("add-button")),B=document.getElementById("see-button"),P=document.getElementById("open-info-button"),D=!1;window.addEventListener("load",(()=>{!function(e){let t=document.querySelector(".container-ingredients");S(t);for(let n=0;n<e.length;n++){let i=document.createElement("div"),r=document.createElement("p");r.textContent=e[n].name,i.appendChild(r),i.style.backgroundImage=`url(${e[n].img})`,i.classList.add("ingredients"),t.appendChild(i)}}(h),j(g,L("selected"),E(C(g,L("selected"))))})),M.addEventListener("click",(e=>{"ingredients"===e.target.className||"ingredients"===e.target.parentNode.className?function(e){"ingredients"===e.target.className?e.target.classList.add("selected"):"P"===e.target.nodeName&&e.target.parentNode.classList.add("selected")}(e):function(e){"ingredients selected"===e.target.className?e.target.classList.remove("selected"):"P"===e.target.nodeName&&e.target.parentNode.classList.remove("selected")}(e),function(e){let t=document.querySelectorAll(".ingredientLI");for(let n=0;n<t.length;n++)e.includes(`${t[n].textContent}`)?t[n].classList.add("available"):t[n].classList.remove("available")}(L("selected")),function(e){let t=document.querySelectorAll(".dishH3");for(let n=0;n<t.length;n++)e.includes(`${t[n].textContent}`)?t[n].classList.add("available"):t[n].classList.remove("available")}(E(C(g,L("selected")))),A(L("selected"))})),z.addEventListener("click",(()=>{!function(e){let t=document.querySelector(".container-info-main"),n=document.querySelector(".container-ingredients");S(t);let i=document.createElement("form");t.appendChild(i),i.setAttribute("action","javascript:void(0)"),i.setAttribute("method","post");let r=document.createElement("label");r.setAttribute("for","form-input-add");let a=document.createElement("input");a.id="form-input-add",a.setAttribute("placeholder","Enter New Dish Name"),i.appendChild(r),i.appendChild(a);let o=document.createElement("div");o.className="form-ingredients-container",o.textContent="Ingredients:",i.appendChild(o);let d=document.createElement("ul");d.className="form-ingredients-list",o.appendChild(d);let l=document.createElement("input");l.id="form-input-add-ingredient",l.setAttribute("placeholder","Enter New Ingredient"),l.addEventListener("blur",(()=>{k(l,h,n)})),o.appendChild(l),A(e);let s=document.createElement("span");s.className="submit-button",s.classList.add("material-icons-outlined"),s.textContent="check",i.appendChild(s)}(L("selected"))})),B.addEventListener("click",(()=>{j(g,L("selected"),E(C(g,L("selected"))))})),P.addEventListener("click",(()=>{D?($.style.width="0px",$.style.padding="0px",D=!1,P.textContent="menu"):($.style.width="428px",$.style.padding="20px",D=!0,P.textContent="menu_open")})),I.addEventListener("click",(e=>{if("submit-button material-icons-outlined"===e.target.className){e.preventDefault();let n=document.getElementById("form-input-add"),i=document.querySelectorAll(".selected"),r=w(`${n.value}`);if(""!==n.value&&(t=r,void 0===g.find((e=>e.name===t))||(alert("that dish already exists!"),0))&&0!==L("selected").length){let e=new x(`${r}`,L("selected"));g.push(e),n.value="",T(i),A(L("selected"))}}var t;if("edit-button"===e.target.id){let t=e.target.parentNode.previousSibling.textContent,n=document.querySelectorAll(".ingredients");q=g.find((e=>e.name===t)),function(e,t){T(e);for(let n=0;n<e.length;n++)t.ingredients.includes(e[n].textContent)?e[n].classList.add("selected"):e[n].classList.remove("selected")}(n,q),function(e,t){let n=document.querySelector(".container-info-main"),i=document.querySelector(".container-ingredients");S(n);let r=document.createElement("form");n.appendChild(r),r.setAttribute("action","javascript:void(0)"),r.setAttribute("method","post");let a=document.createElement("label");a.setAttribute("for","form-input-edit");let o=document.createElement("input");o.id="form-input-edit",o.value=`${e.name}`,o.setAttribute("placeholder","Enter New Dish Name"),r.appendChild(a),r.appendChild(o);let d=document.createElement("div");d.className="form-ingredients-container",d.textContent="Ingredients:",r.appendChild(d);let l=document.createElement("ul");l.className="form-ingredients-list",d.appendChild(l);let s=document.createElement("input");s.id="form-input-edit-ingredient",s.setAttribute("placeholder","Enter New Ingredient"),s.addEventListener("blur",(()=>{k(s,h,i)})),d.appendChild(s),A(t);let c=document.createElement("span");c.className="submit-button-edit",c.classList.add("material-icons-outlined"),c.textContent="check",r.appendChild(c)}(q,L("selected"))}if("submit-button-edit material-icons-outlined"===e.target.className){e.preventDefault();let t=document.getElementById("form-input-edit"),n=document.querySelectorAll(".selected"),i=w(`${t.value}`);if(""!==t.value&&0!==L("selected").length){let e=L("selected"),t=v(q.id,g);!function(e,t,n,i){e[t].name=n,e[t].ingredients=i}(g,t,i,e),T(n),A(e),j(g,L("selected"),E(C(g,L("selected"))))}}if("delete-button"===e.target.id){let t=document.querySelectorAll(".selected"),n=e.target.parentNode.previousSibling.textContent;q=g.find((e=>e.name===n));let i=v(q.id,g);!function(e,t){e.splice(t,1)}(g,i),T(t),j(g,L("selected"),E(C(g,L("selected"))))}})),$.addEventListener("click",(e=>{if("dishH3"===e.target.className||"dishH3 available"===e.target.className){let t=e.target.parentNode.nextElementSibling;"dish-ingredients-container hidden"===t.className?t.className="dish-ingredients-container show":t.className="dish-ingredients-container hidden"}}))})()})();