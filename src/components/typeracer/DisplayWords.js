import React from 'react';

import './DisplayWords.css';

const typeCurrentStyle = {
    'textDecoration' : 'bold',
    'backgroundColor' : '#34eb77'
};

const currentStyle = {
    'textDecoration' : 'underline'
};

const getTypedWords = (words, player) => {
    let typedWords = words.slice(0, player.currentWordIndex);
    typedWords = typedWords.join(' ');
    return <span style={typeCurrentStyle}>{typedWords} </span>;
};

const getCurrentWord = (words, player) => {
    return <span style={currentStyle}>{words[player.currentWordIndex]}</span>
};

const getWordsToBeTyped = (words, player) => {
    let wordsToBeTyped = words.slice(player.currentWordIndex + 1, words.length);
    wordsToBeTyped = wordsToBeTyped.join(' ');
    return <span> {wordsToBeTyped}</span>;

}

const DisplayWords = ({words, player}) => {

    console.log('displaywords');

    return(
        <div className='dw-container'>

            <div className='dw-title'>
                <h4>Text</h4>
            </div>

            <div className='display-words'>
                {getTypedWords(words, player)}
                {getCurrentWord(words, player)}
                {getWordsToBeTyped(words, player)}
            </div>

        </div>
    );

}

export default DisplayWords;
