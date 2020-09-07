import React from 'react';
import './App.css';
import "semantic-ui-less/semantic.less";
import AppWithRouterAccess from './routes/Protected/AppWithRouterAccess';


function App() {
  return (
    <div className="App">
      <AppWithRouterAccess />
    </div>
  );
}

export default App;
