import React, {useState, createContext} from 'react';

import './App.css';

const DroomData = createContext();

function App() {
  return (
    <DroomData.Provider>
      <div className="App">
        <h1>Welcome to Droom</h1>
      </div>
    </DroomData.Provider>
  );
}

export default App;
