import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GameMenu from './components/GameMenu';
import GameCreate from './components/GameCreate'; 
import GameJoin from './components/GameJoin'; 
import GameArrows from './components/GameArrows'; 
import socket from './socketConfig';
import { useNavigate } from 'react-router-dom';
import Typeracer from './components/Typeracer';

function App() {
  let navigate = useNavigate();
  const [gameState, setGameState] = useState({_id: '', isOpen: false, players: [], words: []});

  useEffect(()=>{
    // socket.on('test', message => {
    //   console.log(message);
    // })

    socket.on('updateGame', (game) => {
      console.log('merge');
      console.log(game);
      setGameState(game);
    });

    return ()=> {
      socket.removeAllListeners();
    }
  }, []);

  useEffect(() => {
    if(gameState._id !== '')
      navigate(`/game/${gameState._id}`);
  }, [gameState._id]);

  return (
    // <BrowserRouter>
      <Routes>
        <Route path="/" element={<GameMenu />} />
        <Route path="/game/create" element={<GameCreate />} />
        <Route path="/game/join" element={<GameJoin />} />
        <Route path="/game/:gameID" element={<Typeracer gameState={gameState} /> } />
        <Route path="/game/arrows" element={<GameArrows />} />
      </Routes>
    // </BrowserRouter>
  );
}

export default App;
