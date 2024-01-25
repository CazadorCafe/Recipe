import './App.css';
import React from 'react';
import Header from './components/Header';

function App() {
  return (
    <div className="App bg-gray-400 ml-4 mr-4">
      <Header />
      <div className="container mx-auto mt-8">
        <p>Main content goes here.</p>
      </div>
    </div>
  );
}

export default App;
