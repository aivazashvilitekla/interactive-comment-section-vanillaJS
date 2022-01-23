/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"data\": () => (/* binding */ data),\n/* harmony export */   \"jsonObject\": () => (/* reexport default export from named module */ _json_data_json__WEBPACK_IMPORTED_MODULE_0__)\n/* harmony export */ });\n/* harmony import */ var _json_data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./json/data.json */ \"./json/data.json\");\n/* harmony import */ var _js_displayComments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/displayComments.js */ \"./js/displayComments.js\");\n\n\n\n\n\n// პირველი ჩატვირთვის შემდეგ თუ ეს დაკომენტარებული არაა, ახლიდან აწერს მონაცემებს\n// localStorage.setItem(\"data\", JSON.stringify(jsonObject));\n\nlet data = JSON.parse(localStorage.getItem(\"data\"));\n\n(0,_js_displayComments_js__WEBPACK_IMPORTED_MODULE_1__.displayComments)(data.comments);\n(0,_js_displayComments_js__WEBPACK_IMPORTED_MODULE_1__.eventListeners)();\n\n\n\n//# sourceURL=webpack://comments-section/./index.js?");

/***/ }),

/***/ "./js/createComment.js":
/*!*****************************!*\
  !*** ./js/createComment.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createComment\": () => (/* binding */ createComment),\n/* harmony export */   \"lastID\": () => (/* binding */ lastID),\n/* harmony export */   \"data\": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.data)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./index.js\");\n\n\n\n\nlet lastID = 0;\n\nconst avatar = document.getElementById(\"newCommentAvatar\");\navatar.src = _index_js__WEBPACK_IMPORTED_MODULE_0__.jsonObject.currentUser.image.png;\n\n// ახალი კომენტარის შექმნა\nfunction createComment(item) {\n  // ახალი კომენტარის შექმნისას, id რომ არ განმეორდეს ბოლო აიდის ვინახავთ\n  if (item.id > lastID) lastID = item.id;\n  \n\n    // COMMENT\n    let comment = document.createElement(\"div\");\n    comment.className = `comment comment${item.id}`;\n    // comment.id = 'comment';\n    // CONTAINER\n    let container = document.createElement(\"div\");\n    container.className = \"container\";\n    comment.appendChild(container);\n    // LIKES\n    let likes = document.createElement(\"div\");\n    likes.className = \"likes\";\n    container.appendChild(likes);\n  \n    // Button\n    let btn1 = document.createElement(\"button\");\n    btn1.type = \"button\";\n    btn1.innerHTML = `<i class=\"fa fa-plus\">`;\n    btn1.classList.add(\"plus\");\n    btn1.dataset.id = item.id;\n    likes.appendChild(btn1);\n  \n    let h4 = document.createElement(\"h4\");\n    h4.innerText = item.score;\n    likes.appendChild(h4);\n  \n    let btn2 = document.createElement(\"button\");\n    btn2.type = \"button\";\n    btn2.innerHTML = `<i class=\"fa fa-minus\">`;\n    btn2.classList.add(\"minus\");\n    btn2.dataset.id = item.id;\n    likes.appendChild(btn2);\n    // text-container\n    let textContainer = document.createElement(\"div\");\n    textContainer.className = \"text-container\";\n    container.appendChild(textContainer);\n  \n    // title\n    let title = document.createElement(\"div\");\n    title.className = \"title\";\n    textContainer.appendChild(title);\n    // info\n    let info = document.createElement(\"div\");\n    info.className = \"info\";\n    info.innerHTML = `<div class=\"avatar\">\n      <img src=\"${item.user.image.png}\" alt=\"\">\n      </div>\n      <div class=\"name\">${item.user.username}</div>`;\n  // ახალი კომენტარის დამატებისას თუ current user ამატებს მას, გვერდით გაუჩნდეს YOU დივი\n    if (item.user.username == _index_js__WEBPACK_IMPORTED_MODULE_0__.data.currentUser.username) {\n      info.innerHTML += `<div class=\"you\">You</div>`;\n    }\n    info.innerHTML += `<div class=\"date\">${item.createdAt}</div>`;\n    title.appendChild(info);\n    //\n  \n    // reply\n  // ახალი კომენტარის დამატებისას თუ current user ამატებს მას, გვერდით გაუჩნდეს წაშლის და ედიტის ღილაკები\n  // ახალი ღილაკი როცა იქმნება, ივენთ ლისენერი არ მოქმედებს სანამ გვერდი არ დარეფრეშდება(ღილაკების მასივში ემატება მაგრამ მაინც არ მუშაობს, ვერ გავასწორე ეს)\n    if (item.user.username == _index_js__WEBPACK_IMPORTED_MODULE_0__.data.currentUser.username) {\n      info.innerHTML += `<div class=\"delete\"><button id='deleteBtn' data-searchid=${item.id}><i class=\"fa fa-trash\"></i>Delete</button></div>`;\n      info.innerHTML += `<div class=\"edit\"><button id='editBtn' data-searchid=${item.id}><i class=\"fa fa-edit\"></i>Edit</button></div>`;\n    } else {\n      // თუ current user-ის კომენტარი არაა, reply ღილაკი ჰქონდეს\n      let reply = document.createElement(\"div\");\n      reply.className = \"reply\";\n      reply.innerHTML = `<button type=\"button\" id='replyBtn' data-searchid=${item.id}><i class=\"fa fa-reply\"></i>Reply</button>`;\n      title.appendChild(reply);\n    }\n  \n    //\n  \n    // text\n    let text = document.createElement(\"div\");\n    text.className = \"text\";\n    textContainer.appendChild(text);\n  \n    //\n    let p = document.createElement(\"p\");\n    p.innerText = item.content;\n    p.className = `commentText${item.id}`;\n    text.appendChild(p);\n    if (item.user.username == _index_js__WEBPACK_IMPORTED_MODULE_0__.data.currentUser.username) {\n      let textarea = document.createElement(\"textarea\");\n      textarea.className = `textarea${item.id}`;\n      textarea.style.width = \"100%\";\n      textarea.style.height = \"120px\";\n  \n      let button = document.createElement(\"button\");\n      button.innerText = \"Save\";\n      button.id = \"saveBtn\";\n      button.className = `button${item.id}`;\n      textarea.style.display = \"none\";\n      button.style.display = \"none\";\n  \n      textContainer.appendChild(textarea);\n      textContainer.appendChild(button);\n    }\n    let repliesDiv = document.createElement(\"div\");\n    repliesDiv.className = \"replies\";\n    repliesDiv.dataset.replying = item.user.username;\n    if (item.replies?.length > 0) {\n      \n      \n    }\n    comment.appendChild(repliesDiv);\n    return comment;\n}\n  \n\n\n\n//# sourceURL=webpack://comments-section/./js/createComment.js?");

/***/ }),

/***/ "./js/createReply.js":
/*!***************************!*\
  !*** ./js/createReply.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createReplyItem\": () => (/* binding */ createReplyItem)\n/* harmony export */ });\n/* harmony import */ var _createComment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createComment.js */ \"./js/createComment.js\");\n\n\nfunction createReplyItem(item, parentID, itemID) {\n    const replies = document.querySelector(\n      `[data-replying=\"${item.replyingTo}\"]`\n    );\n    if (replies) {\n      let comment = (0,_createComment_js__WEBPACK_IMPORTED_MODULE_0__.createComment)(item);\n      comment.classList.add(\"replyComment\");\n      comment.dataset.parentid = parentID;\n      comment.dataset.itemid = itemID;\n      replies.appendChild(comment);\n    }\n  }\n\n//# sourceURL=webpack://comments-section/./js/createReply.js?");

/***/ }),

/***/ "./js/displayComments.js":
/*!*******************************!*\
  !*** ./js/displayComments.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayComments\": () => (/* binding */ displayComments),\n/* harmony export */   \"eventListeners\": () => (/* binding */ eventListeners)\n/* harmony export */ });\n/* harmony import */ var _createComment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createComment.js */ \"./js/createComment.js\");\n/* harmony import */ var _createReply_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createReply.js */ \"./js/createReply.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.js */ \"./index.js\");\n\n\n\n\n\n\n\nconst section = document.getElementById(\"comments-section\");\nfunction displayComments(arr) {\n    // მასივიდან გამოაქვს კომენტარები\n    arr.forEach((element, i) => {\n      let comment = (0,_createComment_js__WEBPACK_IMPORTED_MODULE_0__.createComment)(element);\n      section.appendChild(comment);\n        if (element.replies.length > 0) {\n        //   თუ ამ ობიექტს replies მასივიც აქვს, მაშინ ამ reply-ებსაც გამოიტანს\n        element.replies.forEach((el, i2) => {\n          (0,_createReply_js__WEBPACK_IMPORTED_MODULE_1__.createReplyItem)(el, i, i2);\n        });\n      }\n    });\n}\nfunction eventListeners() {\n    const sendBtn = document.getElementById(\"addComment\");\n    const replyBtn = document.querySelectorAll(\"#replyBtn\");\n\n    let deleteBtn = document.querySelectorAll(\"#deleteBtn\");\n    let plusBtns = document.querySelectorAll(\".plus\");\n    let minusBtns = document.querySelectorAll(\".minus\");\n\n    // ახალი კომენტარის დამატების ღილაკი\n    sendBtn.addEventListener(\"click\", () => {\n        const inputValue = document.getElementById(\"newComment\").value;\n        if (inputValue === \"\") {\n            // თუ ინფუთი ცარიელია, შეტყობინება გამოაქვს\n          const req = document.getElementById(\"requiredText\");\n          req.innerHTML = \"Please fill out input field.\";\n          req.style.color = \"red\";\n          setTimeout(() => (req.innerHTML = \"\"), 3000);\n        } else {\n          const d = new Date();\n      \n          let newCom = {\n            id: _createComment_js__WEBPACK_IMPORTED_MODULE_0__.lastID + 1,\n            content: inputValue,\n            createdAt: `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`,\n            score: 0,\n            user: _index_js__WEBPACK_IMPORTED_MODULE_2__.data.currentUser,\n            replies: [],\n          };\n          _index_js__WEBPACK_IMPORTED_MODULE_2__.data.comments.push(newCom);\n          localStorage.setItem(\"data\", JSON.stringify(_index_js__WEBPACK_IMPORTED_MODULE_2__.data));\n          let comment = (0,_createComment_js__WEBPACK_IMPORTED_MODULE_0__.createComment)(newCom);\n          section.appendChild(comment);\n          document.getElementById(\"newComment\").value = \"\";\n          getBtns();\n        }\n    });\n    // reply კომენტარის დამატება\n    replyBtn.forEach((item) => {\n        item.addEventListener(\"click\", () => {\n          let newReply = document.createElement(\"div\");\n          newReply.innerHTML = `<div class=\"container\">\n          <div class=\"avatar\"><img id=\"newCommentAvatar\" src=\"${_index_js__WEBPACK_IMPORTED_MODULE_2__.data.currentUser.image.png}\" alt=\"avatar\"></div>\n          <form action=\"\">\n              <input type=\"text\" name=\"comment\" id=\"newReply\" placeholder=\"Add a comment...\" required>\n              <button type=\"button\" id=\"addReply\">SEND</button>\n          </form>\n      </div>`;\n          newReply.className = `newReply`;\n      \n          const div = document.getElementsByClassName(\n            `comment${item.dataset.searchid}`\n          )[0];\n          div.insertBefore(newReply, div.lastChild);\n      \n          const input = document.getElementById(\"newReply\");\n      \n          const btn = document.getElementById(\"addReply\");\n          btn.addEventListener(\"click\", () => {\n            const inputValue = input.value;\n            if (inputValue === '') {\n              alert('input is empty')\n            } else {\n              let reply = {\n                \"id\": _createComment_js__WEBPACK_IMPORTED_MODULE_0__.lastID+1,\n                \"content\": inputValue,\n                \"createdAt\": \"1 week ago\",\n                \"score\": 0,\n                \"replyingTo\": div.querySelector('.name').innerText,\n                \"user\": _index_js__WEBPACK_IMPORTED_MODULE_2__.data.currentUser\n              }\n              _index_js__WEBPACK_IMPORTED_MODULE_2__.data.comments[item.dataset.searchid-1].replies.push(reply);\n              onDataChange(_index_js__WEBPACK_IMPORTED_MODULE_2__.data);\n              (0,_createReply_js__WEBPACK_IMPORTED_MODULE_1__.createReplyItem)(reply, item.dataset.searchid-1 ,_createComment_js__WEBPACK_IMPORTED_MODULE_0__.lastID+1)\n              newReply.remove();\n            }\n          });\n        });\n        deleteBtn = document.querySelectorAll(\"#deleteBtn\");\n    });\n    // score-ის გაზრდა(უსასრულოდ ;დ)\n    plusBtns.forEach((item) => {\n        item.addEventListener(\"click\", () => {\n          const username =\n            item.parentElement.nextSibling.querySelector(\".name\").innerText;\n      \n          if (_index_js__WEBPACK_IMPORTED_MODULE_2__.data.currentUser.username == username) {\n            alert(\"u cant like or unlike ur comment\");\n          } else {\n            let parentid =\n              item.parentElement.parentElement.parentElement.dataset.parentid;\n            let itemid =\n              item.parentElement.parentElement.parentElement.dataset.itemid;\n      \n            if (_index_js__WEBPACK_IMPORTED_MODULE_2__.data.comments[item.dataset.id - 1]) {\n              _index_js__WEBPACK_IMPORTED_MODULE_2__.data.comments[item.dataset.id - 1].score++;\n              item.nextSibling.innerText = _index_js__WEBPACK_IMPORTED_MODULE_2__.data.comments[item.dataset.id - 1].score;\n            } else {\n              _index_js__WEBPACK_IMPORTED_MODULE_2__.data.comments[parentid].replies[itemid].score++;\n              item.nextSibling.innerText =\n                _index_js__WEBPACK_IMPORTED_MODULE_2__.data.comments[parentid].replies[itemid].score;\n            }\n            onDataChange(_index_js__WEBPACK_IMPORTED_MODULE_2__.data);\n          }\n        });\n    });\n    // score-ის შემცირება\n      minusBtns.forEach((item) => {\n        item.addEventListener(\"click\", () => {\n          const username =\n            item.parentElement.nextSibling.querySelector(\".name\").innerText;\n          if (_index_js__WEBPACK_IMPORTED_MODULE_2__.data.currentUser.username == username) {\n            alert(\"u cant like or unlike ur comment\");\n          } else {\n            let parentid =\n              item.parentElement.parentElement.parentElement.dataset.parentid;\n            let itemid = item.parentElement.parentElement.parentElement.dataset.itemid;\n            if (_index_js__WEBPACK_IMPORTED_MODULE_2__.data.comments[item.dataset.id - 1]) {\n              _index_js__WEBPACK_IMPORTED_MODULE_2__.data.comments[item.dataset.id - 1].score--;\n              item.previousSibling.innerText = _index_js__WEBPACK_IMPORTED_MODULE_2__.data.comments[item.dataset.id - 1].score;\n            } else {\n              _index_js__WEBPACK_IMPORTED_MODULE_2__.data.comments[parentid].replies[itemid].score--;\n              item.previousSibling.innerText =\n                _index_js__WEBPACK_IMPORTED_MODULE_2__.data.comments[parentid].replies[itemid].score;\n            }\n            onDataChange(_index_js__WEBPACK_IMPORTED_MODULE_2__.data);\n          }\n        });\n      });\n    // კომენტარის წაშლის ღილაკი\n    deleteBtn.forEach(item => {\n        item.addEventListener(\"click\", () => {\n            const parent = document.getElementsByClassName(`comment${item.dataset.searchid}`)[0];\n            let { parentid, itemid } = getIds(item);\n            console.log(parentid);\n            const id = item.dataset.searchid;\n            // Object.values(data.comments[parentid]).includes(Number(id))\n            console.log(_index_js__WEBPACK_IMPORTED_MODULE_2__.data.comments[parentid]);\n            if (parentid) {\n                _index_js__WEBPACK_IMPORTED_MODULE_2__.data.comments[parentid].replies = _index_js__WEBPACK_IMPORTED_MODULE_2__.data.comments[parentid].replies.filter(\n                    function (item) {\n                        return item.id != id;\n                    }\n                );\n            }\n            else {\n                _index_js__WEBPACK_IMPORTED_MODULE_2__.data.comments = _index_js__WEBPACK_IMPORTED_MODULE_2__.data.comments.filter(\n                    function (item) {\n                        return item.id != id;\n                    }\n                );\n            }\n        \n            parent.remove();\n            onDataChange(_index_js__WEBPACK_IMPORTED_MODULE_2__.data);\n        });\n    });\n    // კომენტარის ცვლილება\n    const editBtn = document.querySelectorAll(\"#editBtn\");\n    editBtn.forEach(item => {\n        item.addEventListener(\"click\", () => {\n            const p = document.getElementsByClassName(\n              `commentText${item.dataset.searchid}`\n            )[0];\n            let { parentid, itemid } = getIds(item);\n\n            const pText = p.innerText;\n            const saveBtn = document.getElementsByClassName(`button${item.dataset.searchid}`)[0];\n            let textarea = document.getElementsByClassName(`textarea${item.dataset.searchid}`)[0];\n          \n            p.style.display = \"none\";\n            textarea.style.display = \"block\";\n            textarea.innerText = pText;\n            saveBtn.style.display = \"block\";\n          \n            saveBtn.addEventListener(\"click\", () => {\n              p.innerText = textarea.value;\n              textarea.style.display = \"none\";\n              saveBtn.style.display = \"none\";\n          \n              p.style.display = \"block\";\n        \n                if (parentid) {\n                    _index_js__WEBPACK_IMPORTED_MODULE_2__.data.comments[parentid].replies[itemid].content = p.innerText;\n                } else {\n                    _index_js__WEBPACK_IMPORTED_MODULE_2__.data.comments.forEach(item2 => {\n                        if (item2.id == item.dataset.searchid) {\n                            item2.content = p.innerText;\n                        }\n                    });\n                }\n              \n              onDataChange(_index_js__WEBPACK_IMPORTED_MODULE_2__.data);\n            });\n          });\n      })\n    \n    function getIds(item) {\n        const div = document.getElementsByClassName(`comment${item.dataset.searchid}`)[0];\n        const parentid = div.dataset.parentid;\n        const itemid = div.dataset.itemid;\n        return { parentid, itemid };\n      }\n      \n}\n// ცვლილების დროს localstorage მონაცემების განახლება\nfunction onDataChange(data) {\n    localStorage.setItem(\"data\", JSON.stringify(data));\n}\n\nfunction getBtns() {\n  plusBtns = document.querySelectorAll(\".plus\");\n  minusBtns = document.querySelectorAll(\".minus\");\n}\n\n\n\n\n//# sourceURL=webpack://comments-section/./js/displayComments.js?");

/***/ }),

/***/ "./json/data.json":
/*!************************!*\
  !*** ./json/data.json ***!
  \************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"currentUser\":{\"image\":{\"png\":\"./images/avatars/image-juliusomo.png\",\"webp\":\"./images/avatars/image-juliusomo.webp\"},\"username\":\"juliusomo\"},\"comments\":[{\"id\":1,\"content\":\"Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You\\'ve nailed the design and the responsiveness at various breakpoints works really well.\",\"createdAt\":\"1 month ago\",\"score\":12,\"user\":{\"image\":{\"png\":\"./images/avatars/image-amyrobson.png\",\"webp\":\"./images/avatars/image-amyrobson.webp\"},\"username\":\"amyrobson\"},\"replies\":[]},{\"id\":2,\"content\":\"Woah, your project looks awesome! How long have you been coding for? I\\'m still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!\",\"createdAt\":\"2 weeks ago\",\"score\":5,\"user\":{\"image\":{\"png\":\"./images/avatars/image-maxblagun.png\",\"webp\":\"./images/avatars/image-maxblagun.webp\"},\"username\":\"maxblagun\"},\"replies\":[{\"id\":3,\"content\":\"If you\\'re still new, I\\'d recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It\\'s very tempting to jump ahead but lay a solid foundation first.\",\"createdAt\":\"1 week ago\",\"score\":4,\"replyingTo\":\"maxblagun\",\"user\":{\"image\":{\"png\":\"./images/avatars/image-ramsesmiron.png\",\"webp\":\"./images/avatars/image-ramsesmiron.webp\"},\"username\":\"ramsesmiron\"}},{\"id\":4,\"content\":\"I couldn\\'t agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.\",\"createdAt\":\"2 days ago\",\"score\":2,\"replyingTo\":\"maxblagun\",\"user\":{\"image\":{\"png\":\"./images/avatars/image-juliusomo.png\",\"webp\":\"./images/avatars/image-juliusomo.webp\"},\"username\":\"juliusomo\"}}]}]}');\n\n//# sourceURL=webpack://comments-section/./json/data.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;