import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';

class App extends React.Component {
  render() {
    const textHead = 'test';
    return (
      <div>
        <Header />
        <SolarSystem />
        <Title headline={ textHead } />
      </div>);
  }
}

export default App;
