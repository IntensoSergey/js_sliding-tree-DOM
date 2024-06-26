var e=document.querySelector(".tree");document.querySelectorAll("li").forEach(function(n){if(n.children.length){var t=document.createElement("span");n.prepend(t),t.append(t.nextSibling)}e.addEventListener("click",function(e){"SPAN"===e.target.tagName&&(e.target.nextSibling.hidden=!e.target.nextSibling.hidden)})});
//# sourceMappingURL=index.c60ea241.js.map
