import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GameMenu from './components/typeracer/GameMenu';
import GameCreate from './components/typeracer/GameCreate'; 
import GameJoin from './components/typeracer/GameJoin'; 
import GameArrows from './components/typeracer/GameArrows'; 
import Home from './components/home/Home';
import socket from './socketConfig';
import { useNavigate } from 'react-router-dom';
import Typeracer from './components/typeracer/Typeracer';
import Login from './components/auth/login/Login';
import SignUp from './components/auth/singup/SignUp';
import './App.css';

function App() {
  let navigate = useNavigate();
  const [gameState, setGameState] = useState({_id: '', isOpen: false, players: [], words: []});

  useEffect(()=>{
    // socket.on('test', message => {
    //   console.log(message);
    // })

    socket.on('updateGame', (game) => {
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
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path="/game/menu" element={<GameMenu />} />
        <Route path="/game/create" element={<GameCreate />} />
        <Route path="/game/join" element={<GameJoin />} />
        <Route path="/game/:gameID" element={<Typeracer gameState={gameState} /> } />
        <Route path="/game/arrows" element={<GameArrows />} />
      </Routes>
    // </BrowserRouter>
  );
}

export default App;
