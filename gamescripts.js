$("document").ready(function () {
    // your code here
});
function addText(x) {
    var tag = document.createElement("p")
    var text = document.createTextNode(x);
    tag.appendChild(text);
    var element = document.getElementById("gameText");
    element.appendChild(tag);
}
function combatTest()
{
    const goblin1 = new Goblin("Goblin 1")
    enemyArray = [goblin1]
    combat()
}