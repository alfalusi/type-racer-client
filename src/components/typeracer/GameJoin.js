import React, { useState } from 'react';
import socket from '../../socketConfig';

const GameJoin = props => {

  const [userInput, setUserInput] = useState({gameID: "", nickname: ""});

  const signedInUsername = localStorage.getItem('loggedInUser');

  if (signedInUsername) {
    setUserInput({...userInput, ['nickname'] : signedInUsername});
  }

  const onChange = e => {
    setUserInput({...userInput,[e.target.name] : 'Guest_' + e.target.value});
  };

  const onSubmit = e => {
    e.preventDefault();

    socket.emit('join-game', userInput);
  }

  return (
    <div className='row my-3'>
      <div className='col-sm'></div>
      <div className='col-sm-8'>
        <h1 className='text-center'>Join Game</h1>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label htmlFor='gameID'>Enter game ID</label>
            <input type='text' name='gameID'
                              value={userInput.gameID}
                              onChange={onChange}
                              placeholder='Enter game ID'
                              className='form-control my-3' 
            />
            { !signedInUsername ? 
            <>
              <label htmlFor='nickname'>Enter nick name</label>
              <input type='text' name='nickname'
                                value={userInput.nickname}
                                onChange={onChange}
                                placeholder='Enter nick name'
                                className='form-control my-3' 
              />
            </> : 
            <>
              <label htmlFor='nickname'>Enter nick name</label>
              <input type='text' name='nickname'
                                value={signedInUsername}
                                placeholder='signedInUsername'
                                className='form-control my-3' 
                                readOnly = {true}
              />
            </>}
          </div>
          <button type='submit' className='btn btn-primary my-3'>Submit</button>
        </form>
      </div>
      <div className='col-sm'></div>
    </div>
  );
};

export default GameJoin;
