import React, { useState, } from 'react';

export default function Text() {
    const [textLog, setTextLog] = useState([]);
    return (
        <div id="text-window">
            <h3>Text Log</h3>

            <div id="text-output"></div>
        </div>
    )
}
// export default function Text() {
//     const [name, setName] = useState("Name");
//     const [race, setRace] = useState("Race");
//     const [job, setJob] = useState("Class");
//     const story = [
//         {
//             storyText: 'Welcome to Coding RPG',
//             answerOptions: [
//                 { answerText: "Next"}
//             ]
//         },
//         {
//             storyText: 'Please create your character.',
//             answerOptions: [
//                 { answerText: "Next", }
//             ]
//         },
//         {
//             storyText: 'What is your name?',
//             answerOptions: [
//                 { answerText: "Hero", choseName: true },
//                 { answerText: "Joe", choseName: true }
//             ]
//         },
//         {
//             storyText: 'Choose your Race',
//             answerOptions: [
//                 { answerText: "Human" },
//                 { answerText: "Dwarf" },
//                 { answerText: "Elf" },
//             ]
//         },
//         {
//             storyText: 'Choose your Class.',
//             answerOptions: [
//                 { answerText: "Fighter" },
//                 { answerText: "Rogue" },
//                 { answerText: "Wizard" },
//             ]
//         },
//         {
//             storyText: 'This is a game.',
//             answerOptions: [
//                 { answerText: "Next" },
//             ]
//         },
//         {
//             storyText: '',
//             answerOptions: [
//                 { answerText: "Next" },
//             ]
//         }
//     ]
//     const [gameOver, setGameOver] = useState(false);
//     const [currentText, setCurrentText] = useState(0);

//     const handleAnswerOptionClick = () => {
//         // if (isCorrect) {
//         //     setScore(score + 1);
//         // }
//         const nextText = currentText + 1;
//         if (nextText < story.length) {
//             setCurrentText(nextText);
//         } else {
//             setGameOver(true);
//         }
//     };
//     return (
//         <div className='game'>
//             {gameOver ? (
//                 <div className='gameOver-section'>
//                     Game Over
//                 </div>
//             ) : (
//                     <>
//                         <div className='story-section'>
//                             <h1>{name}</h1>
//                             <h1>{race}</h1>
//                             <h1>{job}</h1>
//                             <div className='story-text'>{story[currentText].storyText}</div>
//                         </div>
//                         <div className='answer-section'>
//                             {story[currentText].answerOptions.map((answerOption) => (
//                                 <button onClick={() => handleAnswerOptionClick()}>{answerOption.answerText}</button>
//                             ))}
//                         </div>
//                     </>
//                 )}
//         </div>
//     );
// }