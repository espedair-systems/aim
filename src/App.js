import React, { Component } from 'react';


import PersistentDrawer from './components/root/PersistentDrawer';
import './App.css';

class App extends Component {
  render() {
    return (      
      <div className="App">
         <PersistentDrawer/>
      </div>
      
    );
  }
}

export default App;
