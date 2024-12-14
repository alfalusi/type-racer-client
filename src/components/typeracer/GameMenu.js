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
        className='btn btn-primary btn-lg me-3'
      >
        Create Game
      </button>
      <button
        type='button'
        onClick={() => navigate('/game/join')}
        className='btn btn-primary btn-lg ms-3'
      >
        Join Game
      </button>
    </div>
  );
};

export default GameMenu;
