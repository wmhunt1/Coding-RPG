bugs
journal doesn't update until after leaving shop
hp can be healed over maxhp

to-do content
Wizard tower with dungeon  (monsters, dialogue, dungeon)
    * animated brooms? elemental imps?
    * you talk to the apprentice as they solve the puzzle and they get sucked in.
    * apprentice becomes party member inside dialogue
    * then only puzzle
    * archmage doesn't show up until afterwards
witch hut dialogue
companion dialogue in other places
Convert to Typescript
Checks for locations to update them or trigger events
Use valley as small starting area and have Halfland to south

Convert objects to classes and subclasses
Dialogues (Would have to work around conditional stuff)
Tactics

possible content
swamp (catch newts for eye of newt and frogs maybe papyrus)
put papyrus near rivers
loom/spinning wheel node
Beeswax for burn salve
Honey bees and honey for farming 
Butter
Buttered toast
Salt mine or buy
Salt for stews
Carrots, Cabbage, potato (raw crop but edible)
Spade, trowel (farming tools)watering can
Rapier scimitar spear Halbert sportswear staff 
Darts throwing knifes etc as ammo
Offhand Swords etc
Class locations by putting conditionals in enter location functions 
Medical herbs
Multiple outputs for skills
Rabbit fur and rabbit meat 
Condition for equip restriction
Magic dust or runes for enchanting?
Scribe runes requires paper ink and quill
Wand and staff rune
Hemp for bow string/rope
Hemp smoke
More failure where is fail is null get back input
Metal tiers for needles and knives 
Separate Tools into Smithing etc
Grind bones into bone meal
Make paper from logs into wood pulp with water
Then make paper crafting 
Quill from feather plus ink crafting
Ink from ground charcoal plus water
In locations boolean for if can't move or trigger encounter between move
Forest random encounters etc
Survival increases on movement?
Merge hunting etc into survival?
Better way to class dialogue?
Little animations on attack?
Crossed Swords when combat starts?
Spell to cover each current spell class and subclasses?
Turn Heroism into a buff and remove temp hp spell class
Apron
Pet class no armor
Go from bare to better description 
Gendered underwear 
Alignment 
Inspire all and inspire plus heal tactic
Bard kobold 
Armor sizes?
More generic clothes
Leather shoes 
Fur armor
Make tent and sleep for survival in inventory
Some firemaking into survival?
Draw water from river
Boil river water (sick condition if dont?)
Multi xp skill recipe 
Feats for each skull tier
Property with personal farm 
Seeds. Get soil and put in pot clay
Water, tend, harvest or x hours away 
Clay mining
Make clay pot
Tea for cooking/alchemy
Failure outputs damage object that reads type
Stung etc
Metal weak to bludgeon and strong to peirce and slash
Function to apply protection types equip without log (dummy log) on new character 
Look at kye for protection  stuff
Separate creature traits for weaknesses
More variations of weakness etc or partial weakness etc
Weapon speed bonus?
Scythe 
Recurve bow for str
Scatter shot or multi shot for ranged to attack all
Throwing spear
Sling
Ammo Type for ranged
"Consumale" auto cannon for engineering Metal tiers temp companion
Slayer skill
Put default spell message in each class as property and change if needed
Chicken Noodle soup 
Make noodles from dough plus water 
Slayer/monster hunter skill (put in hunter?)
Knowledge skill (study at tower? Maybe formation making runes?)
Class for skill xp tiers 
Basic task etc
Hemp clothes
Have to spin wool and Hemp into cloth the weave (weave to tailor)?
Gold and silver rings etc
Rings of each Metal
Jewelers tools
Seperate smelter node
Can have more than one node in shop 
Same with conversation 
Herb for flowers to make dye and dye clothes 
Physical characteristics height etc in bio
But job etc in bio?
Job and race/background package
Failure can cause damage
more damage modifers for prot types
Ferra and apprentice know each other?
If Quincy apprentice sent away since wizard knows he seeks knowledge but not necessarily magic
Add image icons?,
enchanting reagent (maybe gems?)
wizard apprentice companion. Arcade the teifling? or a waifu
Quincy companion (combine him with wizard?)
Wyle companion
abraham arkwright companion
kobold companion

fixes/changes
bow strings and unstrung bows
potion bottle and empty potion bottle (fill with water) get an empty one when drinking a potion
move part of combatscripts to combat comp
balancing
write more than generic dialogue
fix tactic selection
clean up scripts

features
Keyboard movements and shortcuts
Item durability?
Repair with Smithing etc depending on item.
Combat positions?
feats/perks
save/load via json
add time delay for log (for combat)
Property (include your own allotments)
random encounter that forces combat (set movement as false)
dungeon exploration and/or puzzles
Map for dungeon with leaving like world map
Or town maps