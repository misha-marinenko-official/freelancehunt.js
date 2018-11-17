// ==UserScript==
// @name         Freelancehuntmod
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Freelancehunt modding...
// @author       You
// @match        https://freelancehunt.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

var link = document.createElement("link");
link.href = "https://raw.githubusercontent.com/misha-marinenko-official/freelancehunt.js/master/freelancehunt.css";
link.type = "text/css";
link.rel = "stylesheet";
document.getElementsByTagName("head")[0].appendChild(link);
})();
