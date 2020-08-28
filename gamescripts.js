$("document").ready(function () {
    // your code here
});
//creates hero
let hero = "";
//need to split into modules
function addText(x) {
    var tag = document.createElement("p")
    var text = document.createTextNode(x);
    tag.appendChild(text);
    var element = document.getElementById("gameText");
    element.appendChild(tag);
}
//maybe move this to a quest.