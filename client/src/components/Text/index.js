import React, { useState, } from 'react';

export default function Text() {
    const story = [
        {
            storyText: 'Welcome to Coding RPG',
            answerOptions: [
                { answerText: "Next", }
            ]
        },
        {
            storyText: 'Please create your character.',
            answerOptions: [
                { answerText: "Next", }
            ]
        },
        {
            storyText: 'Choose your Class.',
            answerOptions: [
                { answerText: "Fighter" },
                { answerText: "Rogue" },
                { answerText: "Wizard" },
            ]
        },
        {
            storyText: 'Choose your Race',
            answerOptions: [
                { answerText: "Human" },
                { answerText: "Dwarf" },
                { answerText: "Elf" },
            ]
        },

    ]
    const [gameOver, setGameOver] = useState(false);
    const [currentText, setCurrentText] = useState(0);

    const handleAnswerOptionClick = () => {
        // if (isCorrect) {
        //     setScore(score + 1);
        // }
        const nextText = currentText + 1;
        if (nextText < story.length) {
            setCurrentText(nextText);
        } else {
            setGameOver(true);
        }
    };
    return (
        <div className='app'>
            {gameOver ? (
                <div className='gameOver-section'>
                    Game Over
                </div>
            ) : (
                    <>
                        <div className='story-section'>
                            <div className='story-text'>{story[currentText].storyText}</div>
                        </div>
                        <div className='answer-section'>
                            {story[currentText].answerOptions.map((answerOption) => (
                                <button onClick={() => handleAnswerOptionClick()}>{answerOption.answerText}</button>
                            ))}
                        </div>
                    </>
                )}
        </div>
    );
}