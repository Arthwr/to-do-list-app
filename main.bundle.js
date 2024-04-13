(()=>{"use strict";var n={455:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(601),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([n.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',""]);const s=a},482:(n,e,t)=>{t.d(e,{A:()=>h});var r=t(601),o=t.n(r),i=t(314),a=t.n(i),s=t(455),c=t(417),d=t.n(c),l=new URL(t(248),t.b),p=new URL(t(621),t.b),u=a()(o());u.i(s.A);var m=d()(l),f=d()(p);u.push([n.id,`:root {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,\n    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;\n}\n\nbody {\n  display: flex;\n}\n\nmain {\n  width: 100%;\n}\n\naside {\n  display: flex;\n  flex-direction: column;\n  align-items: baseline;\n  flex: 0 1 max(350px, 10vw);\n  height: 100vh;\n  border-right: 1px solid grey;\n}\n\nh1 {\n  margin-top: 0;\n  margin-bottom: 2rem;\n  font-weight: 500;\n  font-size: 1.5rem;\n}\n\nh2 {\n  text-transform: capitalize;\n  font-weight: 500;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 4px;\n}\n\nul,\nli {\n  margin: 0;\n  padding: 0;\n}\n\nli {\n  list-style-type: none;\n}\n\naside {\n  margin-left: 1rem;\n}\n\naside > div {\n  width: 100%;\n}\n\n.header {\n  padding: 1rem 0px;\n  width: 100%;\n}\n\n/* Modal Project Form */\n.bg-overlay {\n  position: absolute;\n  height: 100vh;\n  width: 100vw;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\nform {\n  position: fixed;\n  top: 10vw;\n  left: 30vw;\n  padding: 0.5rem 1rem;\n}\n\nlegend {\n  color: white;\n  background-color: #272727;\n  padding: 4px 8px;\n}\n\nfieldset {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 1rem 1rem;\n  background-color: #42daaf;\n  border: 0;\n}\n\nfieldset div {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\nfieldset div:nth-last-child(1) {\n  flex-direction: row;\n}\n\nfieldset div:nth-last-child(1) > button {\n  flex-grow: 1;\n}\n\ninput,\ntextarea {\n  padding: 0.5rem;\n}\n\n/* Projects Tab */\n#p-sidebar-container {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin-top: 1rem;\n  gap: 0.5rem;\n}\n\n#p-sidebar-container button {\n  cursor: pointer;\n  text-transform: capitalize;\n  width: 90%;\n  color: black;\n  background-color: whitesmoke;\n  text-align: start;\n  border: 0;\n  border-radius: 4px;\n  outline: none;\n  box-shadow: none;\n  padding: 0.5rem 1rem;\n  transition: background-color 0.5s ease;\n}\n\n#p-sidebar-container button.active {\n  background-color: #ffe66d;\n}\n\n.p-create-btn {\n  padding: 0.5rem 1rem;\n  font-size: 1rem;\n  cursor: pointer;\n  border: 0;\n  border-radius: 4px;\n  background-color: #42438a;\n  color: #ffffff;\n}\n\n.p-create-btn:active {\n  transform: translateY(4px);\n}\n\n/* Project Page */\n.project-page {\n  padding-left: 3rem;\n}\n\n.project-page > div:nth-child(1) {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-top: 1.5rem;\n  margin-bottom: 1rem;\n  min-height: 40px;\n}\n\n.dropdown-menu {\n  width: 0;\n  overflow: hidden;\n  display: flex;\n  gap: 0.5rem;\n  color: black;\n  transition: width 0.5s;\n  background-color: #d8e2dc;\n  border-radius: 4px;\n}\n\n.dropdown-menu.open {\n  width: auto;\n  padding: 8px;\n}\n\n.dropdown-menu > button {\n  cursor: pointer;\n  background: none;\n  color: #0A0903;\n  border: 0;\n}\n\n.p-edit-btn {\n  cursor: pointer;\n  width: 1.5rem;\n  height: 1.5rem;\n  border: 0;\n  background: no-repeat url(${m});\n}\n\n.project-page > p {\n  color: grey;\n  max-width: 60ch;\n}\n\n/* Task container */\n.task-container {\n  display: flex;\n  flex-direction: column;\n  margin-top: 2rem;\n  width: max(60ch, 50%);\n}\n\n/* Task rows */\n.task-container > ul {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.task-container .task-row {\n  display: flex;\n}\n\n.task-row.complete .task-content {\n  opacity: 0.5;\n  text-decoration: line-through;\n}\n\n.task-row.complete button {\n  color: #777;\n}\n\n.task-content {\n  display: flex;\n  border: 1px solid grey;\n  border-left: 0;\n  border-radius: 0px 4px 4px 0px;\n  flex: 1;\n  justify-content: space-between;\n  padding: 0.5rem;\n}\n\n.task-content div {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.task-container button {\n  cursor: pointer;\n  background: none;\n  border: 0;\n  outline: none;\n  box-shadow: none;\n  padding: 0;\n}\n\n.task-date {\n  color: grey;\n}\n\n.t-create-btn {\n  cursor: pointer;\n  background-color: #09bc8a;\n  color: whitesmoke;\n  padding: 0.5rem 1rem;\n  border: 0;\n  border-radius: 4px;\n}\n\n.t-create-btn:active {\n  transform: translateY(4px);\n}\n\n.task-content .delete-task {\n  cursor: pointer;\n  width: 1.5rem;\n  height: 1.5rem;\n  background-image: url(${f});\n}\n\n.priority-marker {\n  flex-grow: 0;\n  width: 1rem;\n  border-radius: 4px 0px 0px 4px;\n}\n\n.priority-marker.low {\n  background-color: #36558f;\n}\n\n.priority-marker.normal {\n  background-color: #248232;\n}\n\n.priority-marker.high {\n  background-color: #c20114;\n}\n\n/* Task summary */\n.task-info {\n  display: grid;\n  background-color: #f9f9f9;\n  grid-template-rows: 0fr;\n  border-radius: 0 0 4px 4px;\n  transition: grid-template-rows 0.4s ease-out;\n}\n\n.task-info-empty {\n  display: hidden;\n}\n\n.task-info > div {\n  grid-row: 1 / span 2;\n  overflow: hidden;\n  color: #0a100d;\n}\n\n.task-info div > div {\n  padding: 0.5rem;\n}\n\n.task-info.active {\n  grid-template-rows: 1fr;\n}\n`,""]);const h=u},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],d=r.base?c[0]+r.base:c[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var u=t(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=o(m,r);r.byIndex=s,e.splice(s,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var c=r(n,o),d=0;d<i.length;d++){var l=t(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=c}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},621:(n,e,t)=>{n.exports=t.p+"assets/e00de699e55d3aeeb9ac.svg"},248:(n,e,t)=>{n.exports=t.p+"assets/2500f612ad4630b14fbb.svg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(72),e=t.n(n),r=t(825),o=t.n(r),i=t(659),a=t.n(i),s=t(56),c=t.n(s),d=t(540),l=t.n(d),p=t(113),u=t.n(p),m=t(482),f={};f.styleTagTransform=u(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),e()(m.A,f),m.A&&m.A.locals&&m.A.locals;class h{static screenController;static project;static taskManager;static task;static currentProject=null;static init(n,e,t,r){h.screenController=n,h.project=e,h.taskManager=t,h.task=r,document.addEventListener("click",(n=>{switch(!0){case n.target.matches(".p-create-btn"):h.screenController.renderForm("project");break;case n.target.matches(".t-create-btn"):h.screenController.renderForm("task");break;case n.target.matches(".p-form-cancel"):const e=n.target.closest(".form");h.closeModalForm(e);break;case n.target.matches(".task-summary"):h.handleTaskSummary(n);break;case n.target.matches(".delete-task"):h.handleTaskRemoval(n);break;case n.target.matches(".p-edit-btn"):h.screenController.openEditMenu()}})),document.addEventListener("submit",(n=>{h.handleFormSubmission(n)})),document.addEventListener("change",(n=>{"checkbox"===n.target.type&&h.screenController.handleTaskCompletion(n)}))}static loadProjects(){h.project.getAllProjects().forEach((n=>h.screenController.assignProjectTab(n)))}static closeModalForm(n){const e=document.querySelector(".bg-overlay");n.remove(),e.remove()}static handleTaskSummary(n){const e=n.target.closest("li").querySelector(".task-info");e&&e.classList.toggle("active")}static handleTaskRemoval(n){const e=n.target.closest("li");if(!e)return;const t=e.querySelector(".task-row").getAttribute("data-task-id");this.getCurrentProject().removeProjectTask(t),e.remove()}static setCurrentProject(n){this.currentProject&&this.currentProject!==n&&h.screenController.toggleActiveProjectStyle(this.currentProject,!1),this.currentProject=n,h.screenController.toggleActiveProjectStyle(n,!0)}static getCurrentProject(){return this.currentProject}static assignProjectTab(n){h.screenController.renderProjectTitle(n).addEventListener("click",(()=>{h.screenController.renderProjectPage(n),h.setCurrentProject(n)}))}static createNewProject(n){const e=new h.project(n.title,n.description);return h.assignProjectTab(e),e}static createNewTask(n){const{title:e,description:t,dueDate:r,priority:o}=n,i=new h.task(e,t,r,o);h.currentProject.addProjectTask(i),h.screenController.renderTask(i)}static handleFormSubmission(n){const e=n.target.closest("form"),t=[...e.elements].reduce(((n,e)=>(e.name&&"submit"!==e.type&&(n[e.name]=e.value.trim()),n)),{}),r="project-form"===e.id?"project":"task";"project"===r?h.createNewProject(t):"task"===r&&h.createNewTask(t),h.closeModalForm(e)}}function b(){const n=document.querySelector("body"),e=document.createElement("div");e.classList.add("bg-overlay"),n.appendChild(e)}let g=0;function v(){return++g}class y{static#n=[];constructor(n,e,t=v){this.id=t(),this.title=n,this.description=e,this.taskManager=new x,y.#n.push(this)}static getAllProjects(){return y.#n}addProjectTask(n){this.taskManager.pushTask(n)}removeProjectTask(n){this.taskManager.removeTask(n)}}class k{constructor(n,e,t,r,o=v){this.id=o(),this.title=n,this.description=e,this.dueDate=t,this.priority=r}}class x{#e=[];getTaskList(){return this.#e}pushTask(n){this.#e.push(n)}removeTask(n){const e=this.#e.findIndex((e=>e.id==n));if(-1===e)return null;this.#e.splice(e,1)}getTaskById(n){return this.getTaskList().find((e=>e.id==n))}}function w(n,e,t){const r=e.createNewProject(n);n.tasks.forEach((n=>{const e=new t(n.title,n.description,n.dueDate,n.priority);r.addProjectTask(e)}))}h.init(class{static renderForm(n){const e=document.querySelector("body"),t="project"===n?function(){b();const n=document.createElement("form");return n.id="project-form",n.classList.add("form"),n.innerHTML='\n  <fieldset>\n    <legend>Your new project</legend>\n    <div>\n      <label for="title">Title</label>\n      <input type="text" name="title" id="title" minlength="3" maxlength="20" required />\n    </div>\n    <div>\n      <label for="description">Description</label>\n      <textarea\n            name="description"\n            id="description"\n            cols="30"\n            rows="5"\n      ></textarea>\n    </div>\n    <div>\n      <button type="submit" class="submit">Submit</button>\n      <button class="p-form-cancel">Cancel</button>\n    </div>\n  </fieldset>\n  ',n}():function(){b();const n=document.createElement("form");return n.id="task-form",n.classList.add("form"),n.innerHTML='\n    <fieldset>\n      <legend>Your new task</legend>\n      <div>\n        <label for="title">Title</label>\n        <input type="text" name="title" id="title" minlength="3" maxlength="50" required />\n      </div>\n      <div>\n        <label for="description">Notes</label>\n        <textarea\n              name="description"\n              id="description"\n              cols="30"\n              rows="5"\n        ></textarea>\n      </div>\n      <div>\n        <label>Due date</label>\n        <input type="date" name="dueDate" id= "dueDate">\n      </div>\n      <div>\n        <label>Priority</label>\n        <select name="priority" id="priority">\n            <option value="Low">Low</option>\n            <option value="Normal">Normal</option>\n            <option value="High">High</option>\n        </select>\n      </div>\n      <div>\n        <button type="submit" class="submit">Submit</button>\n        <button class="p-form-cancel">Cancel</button>\n      </div>\n    </fieldset>\n    ',n}();e.appendChild(t)}static renderProjectTitle(n){const e=document.querySelector("#p-sidebar-container"),t=document.createElement("button");return t.textContent=n.title,t.setAttribute("data-project-id",n.id),e.appendChild(t),t}static renderProjectPage(n){const e=document.querySelector("main");e.innerHTML="";const t=function(n){const e=document.createElement("section");return e.classList.add("project-page"),e.innerHTML=`\n       <div>\n        <h2>${n.title}</h2>\n        <button class="p-edit-btn"></button>\n        <div class="dropdown-menu">\n          <button>Edit</button>\n          <button>Delete</button>\n        </div>\n       </div>\n       <p>${n.description}</p>\n       <button class="t-create-btn">New task</button>\n       <div class="task-container">\n         <ul></ul>\n       </div>\n    `,e}(n);e.appendChild(t),n.taskManager.getTaskList().forEach((n=>{this.renderTask(n)}))}static openEditMenu(){const n=document.querySelector(".dropdown-menu");n&&n.classList.toggle("open")}static renderTask(n){const e=document.querySelector(".task-container > ul"),t=function(n){const e=document.createElement("li"),t=""===n.description.trim()?"task-info-empty":"task-info";return e.innerHTML=`\n    <div class="task-row" data-task-id="${n.id}">\n      <span class="priority-marker ${n.priority.toLowerCase()}"></span>\n      <div class="task-content">\n        <div>\n          <input type="checkbox">\n          <button class="task-summary" data-task-id="${n.id}">${n.title}</button>\n        </div>\n        <div>\n          <span class="task-date">${n.dueDate}</span>\n          <button class="delete-task"></button>\n        </div>\n      </div>\n    </div>\n    <div class="${t}">\n      <div>\n        <div>${n.description}</div>\n      </div>\n    </div>\n  </div>\n `,e}(n);e.appendChild(t)}static handleTaskCompletion(n){n.target.closest(".task-row").classList.toggle("complete")}static toggleActiveProjectStyle(n,e){const t=document.querySelector(`#p-sidebar-container > button[data-project-id="${n.id}"]`);t&&(e?t.classList.add("active"):t.classList.remove("active"))}},y,x,k),w({title:"Sunday",description:"The mask you wear changes your true self, for better or worse",tasks:[{title:"Meditate",description:"20 minutes of guided meditation",dueDate:"2024-04-18",priority:"Normal"},{title:"Learn Golang",description:'"Check 100 Go Mistakes and How to Avoid Them" book',dueDate:"2024-04-11",priority:"Low"}]},h,k),w({title:"Tuesday",description:"Most tragedies are born from inaction",tasks:[{title:"Attend team meeting",description:"Discuss project progress and next steps",dueDate:"2024-04-12",priority:"High"}]},h,k)})()})();