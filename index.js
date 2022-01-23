import jsonObject from "./json/data.json" assert { type: "json" };

import { displayComments } from './js/displayComments.js';
import { eventListeners } from './js/displayComments.js';


if (!localStorage.getItem("data")) {
    localStorage.setItem("data", JSON.stringify(jsonObject));
}

let data = JSON.parse(localStorage.getItem("data"));

displayComments(data.comments);
eventListeners();
export { data };
export { jsonObject };