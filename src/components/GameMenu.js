import React from 'react';
import { useNavigate } from 'react-router-dom';

const GameMenu = () => {
  let navigate = useNavigate();

  return (
    <div className='text-center'>
      <h1> Welcome to Type Racer</h1>
      <button
        type='button'
        onClick={() => navigate('/game/create')}
        className='btm btm-primary btn-lg mr-3'
      >
        Create Game
      </button>
      <button
        type='button'
        onClick={() => navigate('/game/join')}
        className='btm btm-primary btn-lg'
      >
        Join Game
      </button>
    </div>
  );
};

export default GameMenu;
