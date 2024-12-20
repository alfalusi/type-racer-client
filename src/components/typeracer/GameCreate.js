import React, { useState } from 'react';
import socket from '../../socketConfig';

const GameCreate = props => {

  const [nickname, setNickname] = useState("");

  const signedInUsername = localStorage.getItem('loggedInUser');

  const onChange = e => {
    setNickname(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    if (signedInUsername) {
      setNickname(signedInUsername);
    }

    socket.emit('create-game', nickname);
  }

  return (
    <div className='row my-3'>
      <div className='col-sm'></div>
      <div className='col-sm-8'>
        <h1 className='text-center'>Create Game</h1>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            { !signedInUsername ? 
            <>
              <label htmlFor='nickname'>Enter nick name</label>
              <input type='text' name='nickname'
                                value={nickname}
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

export default GameCreate;
