"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Getting data from API
const fetchData = function () {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://jsonplaceholder.typicode.com/posts");
        return response.json();
    });
};
// Creating new nodes and rendering data from API
const createHtmlElement = function (items) {
    const whereToRender = document.getElementById("render");
    const createNewNode = document.createElement("div");
    createNewNode.setAttribute("class", "render__inner");
    whereToRender.appendChild(createNewNode);
    //Inserting data into newly created nodes
    createNewNode.innerHTML = `<span class="span__id">${items.id}</span>
        <span class="span__user">${items.userId}</span>
        <span class="span__title">${items.title}</span>
        <span class="span__body">${items.body}</span>`;
};
// Iterating through the array of values to get data to render
const renderFunction = function () {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield fetchData();
        for (let items of data) {
            createHtmlElement(items);
        }
    });
};
renderFunction();
