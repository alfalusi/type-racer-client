import React from 'react';
import { useNavigate } from 'react-router';
import CountDown from './CountDown';
import StartBtn from './StartBtn.js';
import socket from '../../socketConfig.js';
import DisplayWords from './DisplayWords';
import Form from './Form';
import ProgressBar from './ProgressBar';
import ScoreBoard from './ScoreBoard';
import DisplayGameCode from './DisplayGameCode';
import Divider from '../usefull/Divider.js';

const findPlayer = players => {
    return players.find(player => player.socketID === socket.id);
};

const Typeracer = ({gameState}) => {
    let navigate = useNavigate();

    const {_id, players, words, isOpen, isOver} = gameState;

    const player = findPlayer(players);

    if(_id === '') {
        return navigate('/');
    }

    return (
        <div className='text-center'>
            <Divider />
            <ProgressBar players={players} player={player} wordsLength={words.length} />
            <Divider />
            {!isOpen ? <>
                            <DisplayWords words={words} player={player} />
                            <Divider />
                            <Form isOpen={isOpen} isOver={isOver} gameID={_id}/>
                            <Divider />
                       </> : null }

            <CountDown />
            <Divider />
            {isOpen ? 
                <>
                    <StartBtn player={player} gameID={_id} />
                    <Divider />
                    <DisplayGameCode gameID={_id} />
                    <Divider />
                </>
                    : null 
            }

            {player.finished ? <ScoreBoard players={players} /> : null}
            
        </div>
    );
};

export default Typeracer;
