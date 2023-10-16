import React from 'react';
import Router from './router';
import './App.css'

const App: React.FC = () => {
  return (
    <div className="mockup-phone">
      <div className="camera"></div>
      <div className="display">
        <Router />
      </div>
    </div>
  );
};

export default App;
