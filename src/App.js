import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
import 'react-toastify/ReactToastify.css';
import RefreshHandler from './components/usefull/RefreshHandler';

function App() {
  let navigate = useNavigate();

  const [gameState, setGameState] = useState({_id: '', isOpen: false, players: [], words: []});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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

  const PrivateRoute = ({element}) => {
    return isAuthenticated ? element : <Navigate to='/login' />;
  }

  return (
    <>
      <RefreshHandler setIsAuthenticated={setIsAuthenticated}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path="/game/menu" element={<GameMenu />} />
        <Route path="/game/create" element={<GameCreate />} />
        <Route path="/game/join" element={<GameJoin />} />
        <Route path="/game/:gameID" element={<Typeracer gameState={gameState} /> } />
        <Route path="/game/arrows" element={<PrivateRoute element={<GameArrows />} />} />
      </Routes>
    </>
  );
}

export default App;
