// ==UserScript==
// @name     Rainbow
// @version  1
// @author clxxiii
// @description Turns your screen into rainbow vomit
// @grant    none
// @include *
// ==/UserScript==

function addGlobalStyle(css) {
	var head, style;
	head = document.getElementsByTagName("head")[0];
	if (!head) {
		return;
	}
	style = document.createElement("style");
	style.innerHTML = css;
	head.appendChild(style);
}

window.addEventListener("load", () => {
	addGlobalStyle(`
        body {
            animation: rainbow 1s infinite;
        }

        @keyframes rainbow {
            0% {
                filter: hue-rotate(0deg);
            }
            100% {
                filter: hue-rotate(360deg);
            }
         }
    `);
});
