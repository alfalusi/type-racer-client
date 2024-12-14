import React, { useState, useEffect, useRef } from 'react';

const GameArrows = props => {
    
    const wHeld = useRef(false);

    function downHandler({key}) {
        console.log(key);
      if (key === 'w') {
        wHeld.current = true;
        console.log(wHeld);
        console.log('alex');
      }
    }
  
    function upHandler({key}) {
        console.log(key);
      if (key === 'w') {
        wHeld.current = false;
        console.log(wHeld);
        console.log('alex');
      }
    }
  
    useEffect(() => {
      window.addEventListener('keydown', downHandler);
      window.addEventListener('keyup', upHandler);
      return () => {
        window.removeEventListener('keydown', downHandler);
        window.removeEventListener('keyup', upHandler);
      };
    }, []);

    return(
        <>
        </>
    );

}

export default GameArrows;
