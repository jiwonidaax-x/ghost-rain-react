import React from 'react';
import Button from './Button';
function App() {
  return (
    <>
      <h1 className='text-white text-8xl text-center mt-20 mb-10'>Enemy Rain</h1>
      <div className="text-center">
          <Button name="Walk-through"/>
          <Button name="Game start"/>
      </div>
    </>
  );
}

export default App; 