$("document").ready(function () {
    // your code here
});
        function startGame(){
        //hides buttons until location discovered
        document.getElementById("Intro").style.display = "block";
        document.getElementById("Menu").style.display = "none";
        document.getElementById("valleyDale").style.display = "none";
        document.getElementById("villageDale").style.display = "none";
        document.getElementById("banditCamp").style.display = "none";
        document.getElementById("banditHideout").style.display = "none";
        document.getElementById("bbVillage").style.display = "none";
        document.getElementById("daleKeep").style.display = "none";
        document.getElementById("dMine").style.display = "none";
        document.getElementById("dOutpost").style.display = "none";
        document.getElementById("dMine").style.display = "none";
        document.getElementById("giantCave").style.display = "none";
        document.getElementById("gnollDen").style.display = "none";
        document.getElementById("goblinVillage").style.display = "none";
        document.getElementById("kenkuCamp").style.display = "none";
        document.getElementById("kurekHut").style.display = "none";
        document.getElementById("lakeDale").style.display = "none";
        document.getElementById("logCamp").style.display = "none";
        document.getElementById("ruins").style.display = "none";
        document.getElementById("sheepLair").style.display = "none";
        document.getElementById("sheepPasture").style.display = "none";
        document.getElementById("spiderCave").style.display = "none";
        document.getElementById("tradePost").style.display = "none";
        document.getElementById("villageDaleBtn").style.display = "none";
        document.getElementById("witchCottage").style.display = "none";
        document.getElementById("wizardTower").style.display = "none";
        //dungeons
        //mine dungeon
        document.getElementById("mineDungeon").style.display = "none";
        document.getElementById("mee").style.display = "none";
        document.getElementById("em").style.display = "none";
        document.getElementById("mi1").style.display = "none";
        document.getElementById("fk").style.display = "none";
        document.getElementById("mi2").style.display = "none";
        document.getElementById("fm").style.display = "none";
        document.getElementById("mi3").style.display = "none";
        document.getElementById("gBoss").style.display = "none";
        document.getElementById("puzzleDungeon1").style.display = "none";
        }
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
    const goblin2 = new Goblin("Goblin 2")
    const goblin3 = new Goblin("Goblin 3")
    //enemyArray = [goblin1]
    //enemyArray = [goblin1, goblin2]
    //enemyArray = [goblin1, goblin2, goblin3]
    const spider1 = new Spider ("Spider 1", 5, 1)
    enemyArray = [spider1]
    combat()
}
startGame()

function testFeature(){
    
}