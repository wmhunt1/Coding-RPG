export const combat = (char1, char2) => {
    console.log(char1.name + " is in combat with " + char2.name)
    char1.hp -=5;
    console.log(char1.hp)
    char2.hp -=5;
    console.log(char2.hp)
}
export const updateHP = (char) =>{
//
}